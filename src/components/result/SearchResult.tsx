import * as React from "react";
import { Box, Typography, InputBase, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SearchResultProps {
  query: string;
  onClear: () => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ query, onClear }) => {
  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Search Results for “ {query} ”
      </Typography>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: 5,
          backgroundColor: "#f5f5f5",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          value={query}
          inputProps={{ "aria-label": "search results" }}
        />
        <IconButton sx={{ p: "10px" }} aria-label="clear" onClick={onClear}>
          <CloseIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchResult;
