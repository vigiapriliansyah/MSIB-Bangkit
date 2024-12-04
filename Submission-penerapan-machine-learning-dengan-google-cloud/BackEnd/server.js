const Hapi = require('@hapi/hapi');
const tf = require('@tensorflow/tfjs-node');
const { Firestore } = require('@google-cloud/firestore');
const multer = require('multer');
const uuid = require('uuid');
const moment = require('moment');

const upload = multer({
    limits: {
        fileSize: 1000000,
    },
}).single('image');

const firestore = new Firestore();

const modelPath = 'link bucket storage';

let model;

async function loadModel() {
    model = await tf.loadGraphModel(modelPath);
    console.log('Model loaded successfully!');
}

async function predictClassification(model, image) {
    try {
        const tensor = tf.node
            .decodeJpeg(image)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat();

        const prediction = model.predict(tensor);
        const score = await prediction.data();

        const confidenceScore = Math.max(...score) * 100;

        const label = confidenceScore >= 50 ? 'Cancer' : 'Non-cancer';
        let suggestion;

        if (label === 'Cancer') {
            suggestion = "Segera periksa ke dokter!";
        } else {
            suggestion = "Penyakit kanker tidak terdeteksi.";
        }

        return { label, suggestion, confidenceScore };
    } catch (error) {
        throw new Error('Terjadi kesalahan dalam melakukan prediksi');
    }
}

const init = async () => {
    const port = process.env.PORT || 8080;
    const server = Hapi.server({
        port,
        host: '0.0.0.0',
        routes: {
            cors: { origin: ['*'] },
            payload: { maxBytes: 1000000 },
        },
    });

    server.ext('onPreResponse', (request, h) => {
        const response = request.response;

        if (response.isBoom && response.output.statusCode === 413) {
            return h.response({
                status: 'fail',
                message: 'Payload content length greater than maximum allowed: 1000000',
            }).code(413);
        }

        return h.continue;
    });

    server.route({
        method: 'POST',
        path: '/predict',
        options: {
            payload: { output: 'stream', parse: false, maxBytes: 1000000 },
        },
        handler: async (request, h) => {
            try {
                let imageBuffer;

                await new Promise((resolve, reject) => {
                    upload(request.raw.req, {}, (err) => {
                        if (err) {
                            if (err.code === 'LIMIT_FILE_SIZE') {
                                return resolve(h.response({
                                    status: 'fail',
                                    message: 'Payload content length greater than maximum allowed: 1000000',
                                }).code(413));
                            } else {
                                return reject(err);
                            }
                        }

                        if (!request.raw.req.file) {
                            return resolve(h.response({
                                status: 'fail',
                                message: 'Terjadi kesalahan dalam melakukan prediksi',
                            }).code(400));
                        }

                        imageBuffer = request.raw.req.file.buffer;
                        resolve();
                    });
                });

                const { label, suggestion, confidenceScore } = await predictClassification(model, imageBuffer);

                const data = {
                    id: uuid.v4(),
                    result: label,
                    suggestion: suggestion,
                    createdAt: moment.utc().toISOString(),
                    rawPrediction: confidenceScore,
                };

                await firestore.collection('predictions').doc(data.id).set(data);

                return h.response({
                    status: 'success',
                    message: 'Model is predicted successfully',
                    data,
                }).code(201);
            } catch (error) {
                console.error('Prediction error:', error);

                return h.response({
                    status: 'fail',
                    message: 'Terjadi kesalahan dalam melakukan prediksi',
                }).code(400);
            }
        },
    });

    server.route({
        method: 'GET',
        path: '/predict/histories',
        handler: async (request, h) => {
            try {
                const predictionsRef = firestore.collection('predictions');
                const snapshot = await predictionsRef.get();
                const histories = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                return h.response({
                    status: 'success',
                    data: histories,
                }).code(200);
            } catch (error) {
                console.error('Fetching histories error:', error);

                return h.response({
                    status: 'fail',
                    message: 'Failed to fetch prediction histories',
                }).code(500);
            }
        },
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

loadModel().then(() => init());
