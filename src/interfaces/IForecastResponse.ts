import { Main, Weather } from "./IWeatherResponse";

export interface IForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
}

interface List {
  dt: number;
  weather: Weather[];
  main: Main;
}
