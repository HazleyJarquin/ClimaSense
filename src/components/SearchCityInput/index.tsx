import { Box, IconButton, TextField } from "@mui/material";
import { useCityStore } from "../../store";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { SearchIcon } from "lucide-react";

interface Props {
  width?: {
    xs?: string;
    sm?: string;
  };
}

export const SearchCityInput = ({
  width = {
    sm: "100%",
    xs: "100%",
  },
}: Props) => {
  const [cityToSearch, setCityToSearch] = useState("");

  const { setCity } = useCityStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCityToSearch(e.target.value);
  };

  const handleClick = () => {
    if (cityToSearch.trim() !== "") {
      setCity(cityToSearch);
      setCityToSearch("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Box
      sx={{
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <TextField
        label="Ciudad"
        placeholder="Ingresa el nombre de la ciudad"
        value={cityToSearch}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sx={{ width }}
        variant="outlined"
      />
      <IconButton onClick={handleClick} data-testid="search-button">
        <SearchIcon size={20} />
      </IconButton>
      <ModeToggle />
    </Box>
  );
};
