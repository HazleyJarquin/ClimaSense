import { Box, Skeleton } from "@mui/material";
import { IWeatherResponse } from "../../../../interfaces";
import {
  ThermometerSunIcon,
  ThermometerSnowflakeIcon,
  DropletIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { TempTextAndIcon } from "./components/TempTextAndIcon";
import { useDarkMode } from "../../../../store";
import { memo } from "react";

interface Props {
  weatherData: IWeatherResponse | null;
  isLoading: boolean;
}

export const CityTemperature = memo(({ weatherData, isLoading }: Props) => {
  const { isDarkTheme } = useDarkMode();

  const temps = [
    {
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThermometerSunIcon color="red" />
        </motion.div>
      ),
      temp: `${weatherData?.main?.temp_max ?? ""}°`,
      title: "Temperatura Maxima",
    },
    {
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThermometerSnowflakeIcon color="blue" />
        </motion.div>
      ),
      temp: `${weatherData?.main?.temp_min ?? ""}°`,
      title: "Temperatura Minima",
    },
    {
      icon: (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <DropletIcon color="blue" />
        </motion.div>
      ),
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
});
