import { Box } from "@mui/material";
import RainDay from "../../../public/icons/rain.svg";
import ClearDay from "../../../public/icons/clear-day.svg";
import SnowDay from "../../../public/icons/snow.svg";

const icons = [RainDay, ClearDay, SnowDay];
export const SplashScreen = () => {
  const randomNumber = Math.floor(Math.random() * icons.length);
  const IconImage = icons[randomNumber];
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={IconImage}
        alt="Weather Icon"
        style={{ width: "200px", height: "200px" }}
      />
    </Box>
  );
};
