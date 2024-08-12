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
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  content: {
    fontWeight: 400,
  },
  bigContainer: {
    maxWidth: "100%",
    backgroundColor: "#ffffff",
  },
  title: {
    margin: 24,
    marginLeft: "0px !important",
    backgroundColor: "#ffffff",
    fontFamily: "Almarai",
  },
}));

const Page = () => {
  const classes = useStyles();
  const t = useTranslations("Publications");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  return (
    <Box className={classes.bigContainer}>
      <Navbar />

      <Grid
        container
        spacing={0}
        style={{
          marginInline: "auto",
          marginTop: "80px",
          width: "auto",
          marginLeft: "130px",
          marginRight: "130px",
        }}
        sx={{ flexDirection: { xs: "column", md: "row" }, mt: 5 }}
      >
        <Grid item xs={12} md={12} className={classes.content}>
          <Box className={classes.title}>
            <Typography
              variant="h5"
              style={{ color: "#262626", fontWeight: 600 }}
            >
              Training Features
            </Typography>
          </Box>
        </Grid>
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {/* Replace with your image component */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "80%",
              height: "80%",
            }}
          >
            <Image
              layout="responsive"
              width={100} // النسبة المئوية لا تهم هنا، قيمة العرض يمكن أن تكون صغيرة
              height={100} // النسبة المئوية لا تهم هنا، قيمة الارتفاع يمكن أن تكون صغيرة
              src={imageSrc}
              alt="ImageContainer"
            />
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
