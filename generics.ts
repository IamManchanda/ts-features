class ArrayAny<T> {
  constructor(public collection: T[]) {}

  public getNumber(index: number): T {
    return this.collection[index];
  }
}

const numbers = new ArrayAny(["BC", "Ben Stokes"]);
const strings = new ArrayAny([1, 2]);

const printAny = <T>(arr: T[]): void => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
};

const printNumbers = printAny(["BC", "Ben Stokes"]);
const printStrings = printAny([1, 2]);

class CarCiaz {
  print() {
    console.log("I am a Car");
  }
}

class House182 {
  print() {
    console.log("I am a Car");
  }
}

interface PrintableHousesOrCars {
  print(): void;
}

function printHousesOrCars<T extends PrintableHousesOrCars>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    element.print();
  }
}

printHousesOrCars<House182>([new House182(), new House182()]);
printHousesOrCars<CarCiaz>([new CarCiaz(), new CarCiaz()]);
