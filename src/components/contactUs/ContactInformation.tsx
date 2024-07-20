import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { makeStyles } from '@mui/styles';
import XIcon from '@mui/icons-material/X';
import { YouTube, LinkedIn } from '@mui/icons-material';
import { colors } from '@/utils/colors';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Image from 'next/image';
import mapImage from '../../../public/assets/images/Map.png';

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: '0px',
    paddingTop: '0px',
  },
  logo: {
    marginBottom: 4,
  },
  listIcon: {
    minWidth: '30px',
  },
  socialMediaIconContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '8px',
  },
  socialMediaIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '10%',
    backgroundColor: colors.active,
    color: 'black',
    '&:hover': {
      backgroundColor: 'gray',
    },
  },
  container: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
  },
  title: {
    fontWeight: 600,
    marginBottom: '15px',
  },
  imageContainer: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%', // Ensure container takes full width
    height: '170px', // Set a fixed height
    position: 'relative', // Required for next/image to work with height
    '& img': {
      objectFit: 'cover', // Ensure the image covers the container
    },
  },
}));

interface SocialMediaIconProps {
  icon: React.ElementType;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icon: IconComponent }) => {
  const classes = useStyles();
  return (
    <Box className={classes.socialMediaIcon}>
      <IconComponent sx={{ color: 'white', fontSize: '13px' }} />
    </Box>
  );
};

const ContactInformation = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <LocationOnOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Here is the location of IFPMC" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <PhoneOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Here is the Phone Number of IFPMC" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listIcon}>
            <EmailOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Here is the Email of IFPMC" />
        </ListItem>
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1rem' }}>
        <Box className={classes.socialMediaIconContainer}>
          <Link href="#" color="inherit">
            <SocialMediaIcon icon={XIcon} />
          </Link>
          <Link href="#" color="inherit">
            <SocialMediaIcon icon={YouTube} />
          </Link>
          <Link href="#" color="inherit">
            <SocialMediaIcon icon={LinkedIn} />
          </Link>
        </Box>
      </Box>
      
      <Box className={classes.imageContainer}>
        <Image src={mapImage} alt="Map" layout="fill" objectFit="cover" />
      </Box>
    </Box>
  );
};

export default ContactInformation;
