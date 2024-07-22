"use client";
import React from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import CustomButton from "./custom/CustomButton";
import { colors } from "@/utils/colors";

const useStyles = makeStyles((theme: Theme) => ({
  subscribeContainer: {
    backgroundColor: "#4d6b82",
    paddingLeft: "24px",
    paddingRight: "24px",
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
      "& fieldset": {
        borderColor: "#fff",
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
    },
    marginBottom: "15px",
  },
}));

const NewsletterSubscription: React.FC = () => {
  const classes = useStyles();
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <Box className={classes.subscribeContainer}>
      <Box width="40%">
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ color: "white", marginBottom: "15px" }}
        >
          Subscribe to our Newsletter
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "white" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s.
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
          placeholder="Enter Your Email"
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
          Subscribe Now
        </CustomButton>
      </Box>
    </Box>
  );
};

export default NewsletterSubscription;
