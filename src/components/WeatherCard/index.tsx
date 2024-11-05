import { memo } from "react";
import { useCityStore, useDarkMode } from "../../store";
import { useGetWeather } from "../../hooks";
import { IWeatherResponse } from "../../interfaces";
import { Box } from "@mui/material";
import { CityTemperature } from "./components/CityTemperature";
import { CityDateAndDescription } from "./components/CityDateAndDescription";

export const WeatherCard = memo(() => {
  const { city } = useCityStore();
  const isDarkTheme = useDarkMode((state) => state.isDarkTheme);
  const { data: weatherData, isLoading } =
    useGetWeather<IWeatherResponse>(city);

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "40%" },
        borderRadius: 4,
        backgroundColor: !isDarkTheme ? "#3B1C32" : "#FFFFFF",
        padding: "1rem",
        color: "black",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
      }}
    >
      <CityDateAndDescription
        weatherData={weatherData ?? null}
        isLoading={isLoading}
      />
      <CityTemperature
        weatherData={weatherData ?? null}
        isLoading={isLoading}
      />
    </Box>
  );
});
