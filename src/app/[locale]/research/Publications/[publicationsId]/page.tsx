"use client";
import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Header from "@/components/research/Publications/Header";
import ArticleSection from "@/components/research/Publications/ArticleSection";
import RelatedProjects from "@/components/research/Publications/RelatedProjects";
import RelatedTopics from "@/components/research/Publications/RelatedTopics";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import { makeStyles } from "@mui/styles";

import Navbar from "@/components/Navbar";
const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: "24px !important", // تعيين تباعد داخلي للمحتوى
    paddingLeft: "130px",
    paddingRight: "130px",

    marginTop: "50px",
  },
  bigContainer: {
    maxWidth: "100%", // تعيين عرض الحاوية ليأخذ المساحة القصوى المحتملة
  },
}));
const Home: React.FC = () => {
  const classes = useStyles();
  const t = useTranslations("share");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const articleContent = `
    <p>One way of analyzing whether to engage in FDI is by using the OLI framework...</p>
    <h2>1- Ownership advantage</h2>
    <p>Ownership advantage refers to certain firm-specific advantages...</p>
    <h2>2- Location advantage</h2>
    <p>Location advantage refers to advantages that can be gained from combining...</p>
    <h2>3- Internalisation advantages</h2>
    <p>Internalisation advantages occur when it is more beneficial for a firm to...</p>
  `;

  const relatedProjects = [
    t("Business"),
    t("Ecommerce"),
    t("Marketing"),
    t("Outdoor Sales"),
  ];

  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: "#ffffff" }}>
      <Navbar />

      <Box className={classes.content} >
        <Header />
        <Grid
          container
          spacing={3}
          sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}
        >
          <Grid item xs={12} md={9} sx={{ paddingRight: "100px" }}>
            <ArticleSection title="Article" content={articleContent} />
            <RelatedTopics />
          </Grid>
          <Grid item xs={12} md={3}>
            <RelatedProjects projects={relatedProjects} />
          </Grid>
        </Grid>
      </Box>
      <NewsletterSubscription />
      <Footer />
    </Box>
  );
};

export default Home;
