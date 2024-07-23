"use client";
import React from "react";
import Sidebar from "@/components/research/sidebar";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import Content from "@/components/research/content";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  bigContainer: {
    maxWidth: "100%",
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "100px",
          background: "linear-gradient(to bottom, #f0f0f0, #ffffff)",
          fontWeight: 600,
          fontSize: "25px",
          lineHeight: "40.22px",
          color: "#262626",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        All Projects
      </Box>
      <Grid container spacing={0}>
        {/* Sidebar and Content will stack vertically in small screens */}
        <Grid
          item
          xs={12} // Full width in small screens
          md={3} // 1/3 width in medium and large screens
          sx={{
            display: {
              xs: "block",
              md: "block",
            },
            order: {
              xs: 1, // Sidebar appears first in small screens
              md: 1,
            },
          }}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={12} // Full width in small screens
          md={9} // 2/3 width in medium and large screens
          className={classes.content}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            order: {
              xs: 2, // Content appears second in small screens
              md: 2,
            },
          }}
        >
          <Content />
        </Grid>
      </Grid>
      <NewsletterSubscription />
      <Footer />
    </Box>
  );
};

export default Page;
