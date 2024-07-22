"use client";
import React from "react";
import ImageContainer from "@/components/training/ImageContainer";
import Content from "@/components/training/Content";
import HowItWorks from "@/components/training/HowItWorks";

import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import imageSrc from "../../../../public/assets/images/Rectangle.png";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";

const useStyles = makeStyles((theme) => ({
  content: {},
  bigContainer: {
    maxWidth: "100%",
    backgroundColor: "#ffffff",
  },
  title: {
    margin: 24,
    backgroundColor: "#ffffff",
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bigContainer}>
      <Navbar />
      <Box className={classes.title}>
        <Typography variant="h5" fontWeight="bold">
          Training Features
        </Typography>
      </Box>

      <Grid
        container
        spacing={0}
        sx={{ flexDirection: { xs: "column", md: "row" }, mt: 5 }}
      >
        <Grid item xs={12} md={6} className={classes.content}>
          <Content
            title="Innovative Methods"
            des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
          />
          <Content
            title="Innovative Methods"
            des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
          />
          <Content
            title="Innovative Methods"
            des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
          />
          <Content
            title="Innovative Methods"
            des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
          />
          <Content
            title="Innovative Methods"
            des="IFPMC uses the latest techniques and methods to ensure cutting-edge learning."
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "block" }}>
          {/* Replace with your image component */}
          <div>
            <ImageContainer imageSrc={imageSrc} />
          </div>
        </Grid>
      </Grid>

      <HowItWorks />
      <NewsletterSubscription />
      <Footer />
    </Box>
  );
};

export default Page;
