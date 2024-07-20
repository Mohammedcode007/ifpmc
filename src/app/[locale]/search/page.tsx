


"use client"
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contactUs/ContactForm';
import ContactInformation from '@/components/contactUs/ContactInformation';
import FAQSection from '@/components/contactUs/FAQSection';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import SearchComponent from '../../../components/serach/SearchComponent';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    padding: '2rem 0',
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Box sx={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />
      <SearchComponent />

      <NewsletterSubscription />
      <Footer />
    </Box>
  );
};

export default Page;

