import * as React from "react";
import { Box, Typography, InputBase, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "@/lib/hooks";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontFamily: "Almarai",
  },
}));
interface SearchResultProps {
  query: string;
  onClear: () => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ query, onClear }) => {
  const t = useTranslations("Result");
  const classes = useStyles();
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  return (
    <Box sx={{ width: "100%" }} dir={pathAfterSlash === "ar" ? "rtl" : "ltr"}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        {t(`Search Results for`)} “ {query} ”
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
          className={classes.title}
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
