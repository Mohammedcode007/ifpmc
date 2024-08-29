import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontWeight: 500,
    fontFamily: "Almarai",
  },
}));

const Sidebar: React.FC = () => {
  const t = useTranslations("Result");
  const classes = useStyles();

  // Get categories data from the Redux store
  const categoriesData = useAppSelector((state) => state.categories.data);

  // Filter categories for publications and projects
  const publications = categoriesData?.results;
  const projects =
    categoriesData?.results;

  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" className={classes.title}>
          {t(`Filter Results :`)}
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer", marginTop: "7px", marginLeft: "4px" }}
          className={classes.title}
        >
          {t(`Clear`)}
        </Typography>
      </Box>

      {/* Publications Section */}
      <Typography
        variant="subtitle1"
        sx={{ marginTop: 2, fontWeight: 500 }}
        className={classes.title}
      >
        {t(`Publications`)}
      </Typography>
      <FormGroup>
        {publications.map((pub: any) => (
          <FormControlLabel
            key={pub.id}
            control={
              <Checkbox
                sx={{
                  color: "#476B87", // unchecked color
                  "&.Mui-checked": {
                    color: "#476B87", // checked color
                  },
                }}
              />
            }
            label={pub.name} // Display category name based on the current language
            className={classes.title}
            sx={{
              "& .MuiFormControlLabel-label": {
                color: "#476B87",
                fontFamily: "Almarai",
              },
            }}
          />
        ))}
      </FormGroup>

      {/* Projects Section */}
      <Typography
        variant="subtitle1"
        sx={{ marginTop: 2, fontWeight: 500 }}
        className={classes.title}
      >
        {t(`Projects`)}
      </Typography>
      <FormGroup>
        {projects.map((proj: any) => (
          <FormControlLabel
            key={proj.id}
            control={<Checkbox />}
            label={proj.name} // Display category name based on the current language
            sx={{
              "& .MuiFormControlLabel-label": {
                color: "#476B87",
                fontFamily: "Almarai",
              },
            }}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default Sidebar;
