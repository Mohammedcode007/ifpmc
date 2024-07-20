"use client"
import React from 'react';
import Sidebar from '@/components/research/sidebar';
import { Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '@/components/Navbar';
import Content from '@/components/research/content';
import Footer from '@/components/Footer';
import NewsletterSubscription from '@/components/NewsletterSubscription';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: '12px', // تعيين تباعد داخلي للمحتوى
  },
  bigContainer: {
    maxWidth: '100%', // تعيين عرض الحاوية ليأخذ المساحة القصوى المحتملة
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: '#ffffff' }}>
      <Navbar />
      <Box
        sx={{
          width: '100%', // Width
          height: '100px', // Height
          background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)', // Background gradient
          fontWeight: 600, // Font weight
          fontSize: '25px', // Font size
          lineHeight: '40.22px', // Line height
          color: '#262626', // Text color
          p: 2, // Padding
          display: 'flex', // Ensure text aligns properly
          alignItems: 'center', // Vertically center text
          justifyContent: 'flex-start', // Horizontally center text
        }}
      >
        All Projects
      </Box>
      <Grid container spacing={0}>
        {/* Sidebar يأخذ 1/3 من العرض في الشاشات الكبيرة */}
        <Grid item xs={3} sx={{ display: { xs: 'none', sm: 'block', md: 'none', lg: 'block', xl: 'block' } }}>
          <Sidebar />
        </Grid>
        {/* المحتوى الرئيسي يأخذ 2/3 من العرض في الشاشات الكبيرة ويأخذ العرض الكامل في الشاشات الصغيرة */}
        <Grid
          item
          xs={12} // العرض الكامل في الشاشات الصغيرة
          sm={9} // 2/3 من العرض في الشاشات الصغيرة
          className={classes.content}
          sx={{ display: 'flex', flexDirection: 'column', flex: 1 }} // تعيين flex لتحقيق التوزيع المطلوب
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
