// class CarCl {
//   public make: string;
//   public speed: number;

//   constructor(make: string, speed: number) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate(): void {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake(): void {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS(): number {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed: number) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);

// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();

// ford.speedUS = 50;
// console.log(ford);