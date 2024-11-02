class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  ariDrop() {
    console.log("iOS have a behavior AirDrop");
  }
}
class Android extends SmartPhones {
  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const ios = new iOS("black", "A", "13 Pro Max");
const android = new Android("Blue", "B", "Galaxy S21");

ios.charging();
ios.ariDrop();

android.charging();
android.splitScreen();
console.log(ios instanceof SmartPhones);
