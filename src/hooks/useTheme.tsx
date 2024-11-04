import { createTheme } from "@mui/material";

import { useDarkMode } from "../store";

export const useTheme = () => {
  const { isDarkTheme } = useDarkMode();

  const darkMode = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
      background: {
        default: isDarkTheme ? "#3B1C32" : "#FFFFFF",
        paper: !isDarkTheme ? "#3B1C32" : "#ffffff",
      },
    },
  });

  return darkMode;
};
