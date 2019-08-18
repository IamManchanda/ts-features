const apples: number = 5;
const nothing: null = null;
const nothing2: undefined = undefined;

const now = new Date();

const colors: (string | number | boolean)[] = ["red", "green", "blue", 4, true];

class Car {}
const myCar = new Car();

interface Point {
  x: number;
  y: number;
}
const point: Point = {
  x: 10,
  y: 20,
};

interface Coords {
  x: number;
  y: number;
}
const json = `{"x": 10, "y": 20}`;
const myCoords: Coords = JSON.parse(json);
console.log(myCoords);

const numbers = 1;
