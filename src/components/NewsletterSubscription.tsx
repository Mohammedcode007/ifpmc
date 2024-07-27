"use client";
import React from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import CustomButton from "./custom/CustomButton";
import { colors } from "@/utils/colors";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";

const useStyles = makeStyles((theme: Theme) => ({
  subscribeContainer: {
    backgroundColor: "#4d6b82",

    paddingTop: "50px",
    paddingBottom: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  textFieldRoot: {
    "& .MuiOutlinedInput-root": {
      height: "14px",
      color: "#fff",
      fontFamily: "Almarai",

      "& fieldset": {
        borderColor: "#fff",
        fontFamily: "Almarai",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
      fontFamily: "Almarai",
    },
    marginBottom: "15px",
  },
  title: {
    // fontFamily: "Almarai",
  },
}));

const NewsletterSubscription: React.FC = () => {
  const classes = useStyles();
  const t = useTranslations("Subscribe");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <Box
      className={classes.subscribeContainer}
      sx={{
        flexDirection: pathAfterSlash === "ar" ? "row-reverse" : "row",
        paddingLeft: {
          xs: "24px",
          md: "130px",
        },
        paddingRight: {
          xs: "24px",
          md: "130px",
        },
      }}
    >
      <Box width="40%">
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          className={classes.title}
          sx={{
            color: "white",
            marginBottom: "15px",
            textAlign: pathAfterSlash === "ar" ? "right" : "left",
            fontFamily:
            pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
          }}
        >
          {t("Subscribe to our Newsletter")}
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            color: "white",
            textAlign: pathAfterSlash === "ar" ? "right" : "left",
            fontFamily:
            pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
          }}
          className={classes.title}
        >
          {t("lorem")}
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="40%"
      >
        <TextField
          variant="outlined"
          placeholder={t("enteryouremail")}
          fullWidth
          className={classes.textFieldRoot}
          InputProps={{
            style: { height: "48px", color: "#fff" },
          }}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
        />{" "}
        <CustomButton
          onClick={handleClick}
          customColor="white"
          width="100%"
          height="48px"
          backgroundColor={colors.active}
          borderRadius="4px"
        >
          {t("Subscribe Now")}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default NewsletterSubscription;