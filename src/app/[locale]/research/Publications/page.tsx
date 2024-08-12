"use client";
import React from "react";
import Sidebar from "@/components/research/sidebar";
import { Grid, Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import ContentPub from "@/components/research/contentPub";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px", // تعيين تباعد داخلي للمحتوى
  },
  container: {},

  bigContainer: {
    maxWidth: "100%", // تعيين عرض الحاوية ليأخذ المساحة القصوى المحتملة
  },
  title: {
    fontFamily: "Almarai",
  },
  root: {
    height: "85px",

    width: "100%", // Width
    background: "linear-gradient(to bottom, #f0f0f0, #ffffff)", // Background gradient
    fontWeight: 600, // Font weight
    fontSize: "25px", // Font size
    lineHeight: "40.22px", // Line height
    color: "#262626", // Text color
    p: 2, // Padding
    display: "flex", // Ensure text aligns properly
    alignItems: "center", // Vertically center text
    // paddingLeft: "130px",
    // paddingRight: "130px",
  },
}));

const Page = () => {
  const classes = useStyles();
  const t = useTranslations("Publications");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <Box
        className={classes.root}
        sx={{
          paddingRight: {
            xs: "0px",
            md: "130px",
          },
          paddingLeft: {
            xs: "0px",
            md: "130px",
          },
          fontFamily: pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",

          justifyContent: pathAfterSlash === "ar" ? "flex-end" : "flex-start", // Horizontally center text
        }}
      >
        <p
          style={{
            paddingLeft: "27px",
            paddingTop: "60px",

            fontFamily: pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
          }}
        >
          {t("All Publications")}
        </p>
      </Box>
      <Grid
        item
        xs={3}
        sx={{
          display: {
            xs: "block",
            sm: "none",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        container
        className={classes.container}
        spacing={0}
        sx={{
          flexDirection: pathAfterSlash === "ar" ? "row-reverse" : "row",
          paddingRight: {
            xs: "0px",
            md: "130px",
          },
          paddingLeft: {
            xs: "0px",
            md: "130px",
          },

          width: "auto", // This cancels the automatic 100% width
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Sidebar />
        </Grid>
        {/* المحتوى الرئيسي يأخذ 2/3 من العرض */}
        <Grid item xs={12} md={9} className={classes.content}>
          <ContentPub />
        </Grid>
      </Grid>
      <NewsletterSubscription />
      <Footer />
    </Box>
  );
};

export default Page;
