import { Box, Typography } from "@mui/material";

interface Props {
  icon: JSX.Element;
  tempTitle: string;
  temp: string;
}

export const TempTextAndIcon = ({ icon, temp, tempTitle }: Props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {icon}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}
        >
          {tempTitle}
        </Typography>
        <Typography variant="subtitle1">{temp}</Typography>
      </Box>
    </Box>
  );
};
