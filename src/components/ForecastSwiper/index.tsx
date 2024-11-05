import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css/navigation";

import { useGetForecast } from "../../hooks";
import { IForecastResponse } from "../../interfaces";
import { useCityStore, useDarkMode } from "../../store";
import { Box, Skeleton, Typography } from "@mui/material";
import { memo } from "react";
import { weatherIcons } from "../../shared";

export const ForecastSwiper = memo(() => {
  const { isDarkTheme } = useDarkMode();
  const { city } = useCityStore();
  const { data: forecastData, isLoading } =
    useGetForecast<IForecastResponse>(city);

  if (isLoading) {
    return <Skeleton variant="rounded" width={"100%"} height={200} />;
  }

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
      spaceBetween={30}
      style={{
        padding: "20px",
      }}
    >
      {forecastData?.list?.map((f, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              backgroundColor: isDarkTheme ? "#FFFFFF" : "#3B1C32",
              borderRadius: "12px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: isDarkTheme ? "#333" : "white",
                marginBottom: "8px",
              }}
            >
              {new Date(f.dt * 1000).toLocaleDateString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </Typography>
            {f.weather?.map((w, weatherIndex) => (
              <Box
                key={weatherIndex}
                sx={{
                  color: isDarkTheme ? "#333" : "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img
                  src={weatherIcons[w?.main as keyof typeof weatherIcons]}
                  style={{ width: "80px", height: "80px" }}
                  alt="weather icon"
                />
                <Typography variant="body2" sx={{ fontSize: "14px" }}>
                  {w.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});
