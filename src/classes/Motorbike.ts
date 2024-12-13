// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';


// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: (Wheel[]);
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(make: string, model: string, vin: string, color: string, year: number, weight: number, topSpeed: number, wheels: (Wheel[])) {
    super();
    
    this.make = make;
    this.model = model;
    this.vin = vin;
    this.color = color;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  }
  // TODO: Implement the wheelie method
wheelie(vehicle: Motorbike): void {
  console.log("Motorbike ${this.make} ${this.model} is doing a wheelie!");
}
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    console.log(`Motorbike Make: ${this.make}, Model: ${this.model}, Vin: ${this.vin}, Color: ${this.color}, Year: ${this.year}, Weight: ${this.weight}, Top Speed ${this.topSpeed}, Wheels: ${this.wheels}`);)
  }
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}

// Export the Motorbike class as the default export
export default Motorbike;