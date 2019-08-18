interface Drink {
  color: string;
  carbonated: boolean;
  sugar: number;
}

const drink: Drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type DrinkTuple = [string, boolean, number];
const pepsi: DrinkTuple = ["brown", true, 40];
const sprite: DrinkTuple = ["clear", true, 40];
const tea: DrinkTuple = ["brown", false, 40];
