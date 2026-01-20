// const Car = function (this: any, make: string, speed: number) {
//   this.make = make;
//   this.speed = speed;
// } as any; 

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };


// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };


// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// console.log("--- BMW ---");
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// console.log("\n--- Mercedes ---");
// mercedes.brake();
// mercedes.brake();
// mercedes.accelerate();