"use client";
import React from "react";
import Sidebar from "@/components/events/Sidebar";
import ContentPage from "@/components/events/ContentPage";

import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";

import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";

const useStyles = makeStyles((theme) => ({
  content: {
    // padding: '12px',
  },
  bigContainer: {
    // maxWidth: "100%",
    backgroundColor: "#ffffff",
  },
}));

const Page = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.home);
  return (
    <Box className={classes.bigContainer}>
      <Navbar />
      <Grid
        container
        spacing={0}
        style={{
          marginTop: "80px",
          width: "auto", // This cancels the automatic 100% width
        }}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          mt: 5,
          marginLeft: {
            xs: "0px",
            md: "130px",
          },
          marginRight: {
            xs: "0px",
            md: "130px",
          },
        }}
      >
        <Grid item xs={12} md={8} className={classes.content}>
          <ContentPage />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "block" }}>
          <Sidebar />
        </Grid>
      </Grid>
      <NewsletterSubscription HomeData={data} />
      <Footer HomeData={data} />
    </Box>
  );
};

export default Page;
