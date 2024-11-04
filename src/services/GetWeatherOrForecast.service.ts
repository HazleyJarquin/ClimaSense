import axios from "axios";
import { IWeatherEndpoint } from "../interfaces";

export const getWeatherOrForecast = async ({
  endpointType,
  city,
}: IWeatherEndpoint) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }/${endpointType}?q=${city}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`,

    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data;
};
