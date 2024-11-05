import { Box, Skeleton, Typography } from "@mui/material";
import { IWeatherResponse } from "../../../../interfaces";
import { capitalizeText } from "../../../../utils";
import { useDarkMode } from "../../../../store";
import { memo } from "react";
import { weatherIcons } from "../../../../shared";

interface Props {
  weatherData: IWeatherResponse | null;
  isLoading: boolean;
}

export const CityDateAndDescription = memo(
  ({ weatherData, isLoading }: Props) => {
    const { isDarkTheme } = useDarkMode();

    if (isLoading) {
      return <Skeleton variant="rounded" width={"100%"} height={200} />;
    }

    const weatherDescription = weatherData?.weather?.[0]?.main ?? "Default";
    const weatherIcon =
      weatherIcons[weatherDescription as keyof typeof weatherIcons];

    return (
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "50%",
          },
          borderRight: { xs: "none", md: "1px solid #000000" },
          borderBottom: { xs: "1px solid #000000", md: "none" },
          padding: "1rem",
          color: !isDarkTheme ? "white" : "#333",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {weatherData?.name}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {weatherData?.dt
            ? new Date(weatherData.dt * 1000).toLocaleString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
            : "N/A"}
        </Typography>

        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {capitalizeText(weatherData?.weather?.[0]?.description ?? "")}
          </Typography>

          <img src={weatherIcon} width={50} height={50} alt="weather icon" />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "yellowgreen",
          }}
        >
          {weatherData?.main?.temp}°
        </Typography>
      </Box>
    );
  }
);
