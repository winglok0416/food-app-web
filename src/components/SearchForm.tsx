import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';
import Paper from "@mui/material/Paper";

import { useState } from "react";
import { Typography } from "@mui/material";

export interface SearchFormProps {
  onSearch: (ingredient: string) => void;
  loading?: boolean;
}

const SearchForm = ({ onSearch, loading }: SearchFormProps) => {
  const [ingredient, setIngredient] = useState("");

  const handleTextInputChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setIngredient(evt.target.value);
  };

  return (
    <Grid item xs={12} marginTop={"90px"}>
      <Paper elevation={3}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="standard-search"
              label="Name of Ingredient"
              type="search"
              variant="standard"
              onChange={handleTextInputChange}
              disabled={loading}
            />
          </div>
          <Box sx={{ alignSelf: "center" }}>
            <LoadingButton
              variant="contained"
              style={{
                // color: "white",
                // backgroundColor: "orange",
              }}
              onClick={() => onSearch(ingredient)}
              loading={loading}
              loadingIndicator="Loading…"
            >
              <SearchIcon />
              Search
            </LoadingButton>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SearchForm;
