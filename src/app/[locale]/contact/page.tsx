"use client";
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contactUs/ContactForm';
import ContactInformation from '@/components/contactUs/ContactInformation';
import FAQSection from '@/components/contactUs/FAQSection';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
  },
  title: {
    fontFamily: "Almarai",
  },
  container: {
    // width: '100%',
    padding: '2rem 0',
  },
}));

const Page = () => {
  const classes = useStyles();
  const t = useTranslations("Publications");

  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  return (
    <Box className={classes.root} >
      <Navbar />
      <Box className={classes.container} sx={{
        marginLeft: {
          xs: '24px',
          md: '98px'
        },
        marginRight: {
          xs: '24px',
          md: '98px'
        },
      }}>
        <Grid container spacing={4} sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}
        >
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactInformation />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.container}>
        <FAQSection />
      </Box>
      <NewsletterSubscription />
      <Footer />
    </Box>
  );
};

export default Page;
