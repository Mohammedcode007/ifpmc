"use client";
import React, { useState } from "react";
import Sidebar from "@/components/result/sidebar";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import Content from "@/components/result/content";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import SearchResult from "@/components/result/SearchResult";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  bigContainer: {
    maxWidth: "100%",
  },
  title: {
    fontFamily: "Almarai",
  },
}));

const Page = () => {
  const classes = useStyles();
  const t = useTranslations("Publications");
  const { data, status, error } = useAppSelector((state) => state.home);

  const [query, setQuery] = useState(t(`Dohuk`));
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const handleClear = () => {
    setQuery("");
  };

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
          p: 5,
          display: "flex",
          alignItems: "center",
          paddingBottom: "40px",
          paddingTop: "40px",
          paddingLeft: {
            sm: "24px",
            md: "130px",
          },
          paddingRight: {
            sm: "24px",
            md: "130px",
          },
          justifyContent: "flex-start",
        }}
      >
        <SearchResult query={query} onClear={handleClear} />
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          direction: pathAfterSlash === "ar" ? "rtl" : "ltr",

          paddingLeft: {
            sm: "24px",
            md: "130px",
          },
          paddingRight: {
            sm: "24px",
            md: "130px",
          },
        }}
      >
        {/* Sidebar and Content will stack vertically in small screens */}
        <Grid
          item
          xs={12} // Full width in small screens
          md={2} // 1/3 width in medium and large screens
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
          md={10} // 2/3 width in medium and large screens
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
      <NewsletterSubscription HomeData={data} />
      <Footer HomeData={data} />
    </Box>
  );
};

export default Page;
