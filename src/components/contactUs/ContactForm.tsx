"use client"
import React from 'react';
import { TextField, Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomButton from '../custom/CustomButton';
import { colors } from '@/utils/colors';
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root': {
      height: '42px',
      fontFamily: "Almarai",
    },
    '& .MuiInputLabel-root': {
      fontFamily: "Almarai",
    },
    '& .MuiInputBase-input': {
      fontFamily: "Almarai",
    },
    '& .MuiOutlinedInput-multiline': {
      fontFamily: "Almarai",
    },
  },
  title: {
    fontWeight: 600,
    marginBottom: '15px',
    fontFamily: "Almarai",
  },
  multiline:{
    fontFamily: "Almarai",

  }
});

const ContactForm = () => {
  const classes = useStyles();
  const t = useTranslations("contactUs");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const handleClick = () => {
    console.log('Button clicked!');
};
  return (
    <Box sx={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px' }}>
          <Typography className={classes.title} variant="h6" gutterBottom>
          {t(`contactUs`)}
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField className={classes.textField} fullWidth label=  {t(`firstName`)}
 variant="outlined"
  />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField className={classes.textField} fullWidth label= {t(`lastName`)} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} fullWidth label={t(`phoneNumber`)} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textField} fullWidth label={t(`emailAddress`)} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
          <TextField className={classes.multiline} fullWidth label={t('writeMessage')} multiline rows={4} variant="outlined" />
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
                  {t(`contactUs`)}
                         </CustomButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
