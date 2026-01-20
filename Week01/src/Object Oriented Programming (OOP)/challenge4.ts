class CarCl {
  public make: string;
  public speed: number;

  constructor(make: string, speed: number) {
    this.make = make;
    this.speed = speed;
  }

  accelerate(): this {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake(): this {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge: number;

  constructor(make: string, speed: number, charge: number) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo: number): EVCl {
    this.#charge = chargeTo;
    return this;
  }

  accelerate(): this {
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50) 
  .accelerate();
