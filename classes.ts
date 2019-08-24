class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("Beep Beep!");
  }
}

const myVehicle = new Vehicle("Orange");
console.log(myVehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("Vroom Vroom!");
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const myCar: Car = new Car(4, "Red");
myCar.startDrivingProcess();
console.log(myCar.color);
console.log(myCar.wheels);
