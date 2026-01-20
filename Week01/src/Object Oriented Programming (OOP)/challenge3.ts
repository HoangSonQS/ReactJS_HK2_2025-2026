const Car = function (this: any, make: string, speed: number) {
  this.make = make;
  this.speed = speed;
} as any;

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (this: any, make: string, speed: number, charge: number) {
  Car.call(this, make, speed);
  this.charge = charge;
} as any;

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo: number) {
  this.charge = chargeTo;
};


EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

console.log("\n--- OOP CHALLENGE #3 ---");
const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log("Sau khi sạc:", tesla);

tesla.brake();
tesla.accelerate();