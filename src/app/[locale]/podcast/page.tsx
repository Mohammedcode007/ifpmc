"use client";
import React from "react";
import PodcastList from "@/components/podcast/PodcastList";

import { Grid, Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
// import imageSrc from '../../../../public/assets/images/Rectangle.png'
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 24,
    marginLeft: "130px",
    marginRight: "130PX",
    marginBottom: "75px",
  },
  bigContainer: {
    maxWidth: "100%",
    backgroundColor: "#ffffff",
  },
  title: {
    margin: 30,
    backgroundColor: "#ffffff",
  },
}));

const Page = () => {
  // Change component name to start with uppercase
  const classes = useStyles();

  return (
    <Box className={classes.bigContainer}>
      <Navbar />
      <Box className={classes.content}>
        <Typography variant="h4" component="h1" gutterBottom>
          IFPMC Podcasts
        </Typography>
        <PodcastList />
      </Box>
      <Footer />
    </Box>
  );
};

export default Page;
