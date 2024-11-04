export interface IWeatherResponse {
  dt: number;
  name: string;
  main: Main;
  weather: Weather[];
}

export interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Weather {
  description: string;
  id: number;
  main: string;
  icon: string;
}
