import { useQuery, UseQueryResult } from "react-query";

import { getWeatherOrForecast } from "../services";

export const useGetWeather = <TData = unknown,>(
  city: string
): UseQueryResult<TData> => {
  return useQuery<TData>(
    ["weatherOrForecast", city],
    async () => {
      if (city.trim() === "") {
        return {} as TData;
      }

      return getWeatherOrForecast({ endpointType: "weather", city }) as TData;
    },
    {
      staleTime: Infinity,
      cacheTime: 0,
    }
  );
};
