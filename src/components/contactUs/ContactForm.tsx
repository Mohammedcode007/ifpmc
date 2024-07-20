"use client"
import React from 'react';
import { TextField, Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomButton from '../custom/CustomButton';
import { colors } from '@/utils/colors';

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root': {
      height: '42px',
    },
  },
  title: {
    fontWeight: 600,
    marginBottom:'15px'

  },
});

const ContactForm = () => {
  const classes = useStyles();
  const handleClick = () => {
    console.log('Button clicked!');
};
  return (
    <Box sx={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <Typography className={classes.title} variant="h6" gutterBottom>
        Contact Us
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField className={classes.textField} fullWidth label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField className={classes.textField} fullWidth label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} fullWidth label="Phone Number" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} fullWidth label="Email Address" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Write your message here" multiline rows={4} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
          <CustomButton
                    onClick={handleClick}
                    customColor="white"
                    width="100%"
                    height="48px"
                    backgroundColor={colors.active}
                    borderRadius="4px"
                >
                    Contact Us           
                         </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
