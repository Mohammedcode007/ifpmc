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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
  },
  container: {
    width: '100%',
    padding: '2rem 0',
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Navbar />
      <Box className={classes.container}>
        <Grid container spacing={4}>
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
