import { IconButton } from "@mui/material";

import { useDarkMode } from "../../store";

import { memo } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

export const ModeToggle = memo(() => {
  const { isDarkTheme, setIsDarkTheme } = useDarkMode();

  const toggleMode = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleIcon = !isDarkTheme ? (
    <SunIcon size={20} />
  ) : (
    <MoonIcon size={20} />
  );

  return (
    <IconButton sx={{ padding: "1rem" }} onClick={toggleMode}>
      {toggleIcon}
    </IconButton>
  );
});
