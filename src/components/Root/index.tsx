import { CssBaseline, ThemeProvider } from "@mui/material";

import { useTheme } from "../../hooks";
import App from "../../App";

export const Root = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
