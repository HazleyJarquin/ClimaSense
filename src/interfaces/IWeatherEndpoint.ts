export interface IWeatherEndpoint {
  endpointType: "weather" | "forecast";
  city: string;
}
