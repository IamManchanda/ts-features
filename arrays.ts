const carMakers: string[] = ["ford", "toyata", "chevy"];

const dates: Date[] = [new Date(), new Date()];
const carsByMake: string[][] = [["f150"], ["coralla"], ["camaro"]];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push("hyundai");
carMakers.map(function iterateCarMakers(car: string): string {
  return car.toUpperCase();
});

const importantDates: (string | Date)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
