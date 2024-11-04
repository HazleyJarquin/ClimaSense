import { useQuery, UseQueryResult } from "react-query";

import { getWeatherOrForecast } from "../services";

export const useGetForecast = <TData = unknown,>(
  city: string
): UseQueryResult<TData> => {
  return useQuery<TData>(
    ["forecastData", city],
    async () => {
      if (city.trim() === "") {
        return {} as TData;
      }

      return getWeatherOrForecast({ endpointType: "forecast", city }) as TData;
    },
    {
      staleTime: Infinity,
      cacheTime: 0,
    }
  );
};
