import { Box, Skeleton } from "@mui/material";
import { IWeatherResponse } from "../../../../interfaces";
import {
  ThermometerSunIcon,
  ThermometerSnowflakeIcon,
  DropletIcon,
} from "lucide-react";
import { TempTextAndIcon } from "./components/TempTextAndIcon";
import { useDarkMode } from "../../../../store";

interface Props {
  weatherData: IWeatherResponse | null;
  isLoading: boolean;
}

export const CityTemperature = ({ weatherData, isLoading }: Props) => {
  const { isDarkTheme } = useDarkMode();
  const temps = [
    {
      icon: <ThermometerSunIcon color="red" />,
      temp: weatherData?.main?.temp_max ?? "",
      title: "Temperatura Maxima",
    },
    {
      icon: <ThermometerSnowflakeIcon color="blue" />,
      temp: weatherData?.main?.temp_min ?? "",
      title: "Temperatura Minima",
    },
    {
      icon: <DropletIcon color="blue" />,
      temp: `${weatherData?.main?.humidity ?? ""}%`,
      title: "Humedad",
    },
  ];

  if (isLoading) {
    return <Skeleton variant="rounded" width={"100%"} height={"100%"} />;
  }

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "50%",
        },
        padding: "1rem",
        color: !isDarkTheme ? "white" : "#333",
      }}
    >
      {temps.map((t, index) => {
        return (
          <TempTextAndIcon
            key={index}
            icon={t.icon}
            temp={t.temp.toString()}
            tempTitle={t.title}
          />
        );
      })}
    </Box>
  );
};
