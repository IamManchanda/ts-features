const logNumber: (myNum: number) => void = myNum => {
  console.log(myNum);
};
logNumber(2);

const add = (a: number, b: number): number => a + b;

function divide(a: number, b: number): number {
  return a / b;
}

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
  console.log(message);
};

interface Forecast {
  date: Date;
  weather: string;
}
const todaysForecast: Forecast = {
  date: new Date(),
  weather: "Sunny",
};
const logWeather = ({ date, weather }: Forecast): void => {
  console.log({ date, weather });
};
logWeather(todaysForecast);
