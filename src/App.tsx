import { Box } from "@mui/material";

import { useEffect, useState } from "react";
import {
  ForecastSwiper,
  SearchCityInput,
  SplashScreen,
  WeatherCard,
} from "./components";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, [showSplashScreen]);

  if (showSplashScreen) {
    return <SplashScreen />;
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <SearchCityInput width={{ xs: "100%", sm: "50%" }} />
      <WeatherCard />

      <Box sx={{ width: { xs: "100%", sm: "40%" } }}>
        <ForecastSwiper />
      </Box>
    </Box>
  );
}

export default App;
