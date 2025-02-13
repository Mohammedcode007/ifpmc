import React from 'react';
import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';

// Define your styles
const useStyles = makeStyles((theme) => ({
  faqContainer: {
    backgroundColor: '#f5f5f5',
    padding: '2rem 44px',
  },
  faqItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const FAQSection = () => {
  const classes = useStyles();
  const faqs = Array.from({ length: 10 }, (_, i) => `Frequently Asked Question ${i + 1}`);

  return (
    <Box className={classes.faqContainer}>
      <Box >
        <Typography variant="h6" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={2}>
          {faqs.map((faq, index) => (
            <Grid item xs={12} md={6} key={index} className={classes.faqItem}>
              <Typography>{faq}</Typography>
              <IconButton>
                <AddIcon />
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FAQSection;
