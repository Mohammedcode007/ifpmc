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
    fontFamily: "Almarai",
  },
}));
const Sidebar: React.FC = () => {
  const t = useTranslations("Result");
  const classes = useStyles();

  const publications = [
    t("Investment"),
    t("Private sectors"),
    t("Government"),
    t("Infrastructure"),
    t("Development"),
    t("Corruption"),
    t("Transparency"),
    t("Regional Policies"),
    t("Policies"),
    t("Statistics"),
    t("Projects"),
  ];

  const projects = [
    t("Business (20)"),
    t("Ecommerce (15)"),
    t("Marketing (12)"),
    t("Outdoor Sales (10)"),
  ];

  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" className={classes.title}>
          {" "}
          {t(`Filter Results :`)}
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer" }}
          className={classes.title}
        >
          {t(`Clear`)}
        </Typography>
      </Box>

      <Typography
        variant="subtitle1"
        sx={{ marginTop: 2 }}
        className={classes.title}
      >
        {t(`Publications`)}
      </Typography>
      <FormGroup>
        {publications.map((pub, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            label={pub}
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

      <Typography
        variant="subtitle1"
        sx={{ marginTop: 2 }}
        className={classes.title}
      >
        {t(`Projects`)}
      </Typography>
      <FormGroup>
        {projects.map((proj, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            label={proj}
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
