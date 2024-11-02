// class CoffeMachine {
//   constructor(waterAmount) {
//     this.waterAmount = waterAmount;
//     this._temperature = 90;
//   }
//   set temperature(temperature) {
//     console.log("You are not allowed to change the temperature");
//   }
//   get temperature() {
//     return this._temperature;
//   }
// }
//
// const coffe = new CoffeMachine(10);
// console.log("before: ", coffe.temperature);
// coffe.temperature = 20;
// console.log("after: ", coffe.temperature);

//cara lain
class CoffeMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log("anda tidak diizinkan mengubah temperature");
  }
  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}

const coffe = new CoffeMachine(10);
console.log("before: ", coffe.temperature);
coffe.temperature = 20;
console.log("after: ", coffe.temperature);
