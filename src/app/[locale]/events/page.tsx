"use client"
import React from 'react';
import Sidebar from '@/components/events/Sidebar';
import ContentPage from '@/components/events/ContentPage';

import { Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';
import NewsletterSubscription from '@/components/NewsletterSubscription';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: '12px',
  },
  bigContainer: {
    maxWidth: '100%',
     backgroundColor: '#ffffff'
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bigContainer} >
      <Navbar />
      <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'row' } ,mt:5}}>
        <Grid item xs={12} md={9} className={classes.content}>
          <ContentPage />
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: 'block' }}>
          <Sidebar />
        </Grid>
      </Grid>
      <NewsletterSubscription />
      <Footer />
    </Box>
  );
};

export default Page;
