import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, YouTube, LinkedIn } from '@mui/icons-material';
import MyAppLogo from '../assets/images/logoWhite.png'; // Adjust the path accordingly
import Image from 'next/image'
import { colors } from '../utils/colors'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
interface SocialMediaIconProps {
  icon: React.ElementType ;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icon: IconComponent }) => (
  <Box 
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: '10%',
      backgroundColor: colors.active,
      color: 'black',
      '&:hover': {
        backgroundColor: 'gray',
      },
    }}
  >
    <IconComponent sx={{ color: 'white', fontSize: 13 }}  />
  </Box>
);

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'black', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{
          borderBottom: '1px solid #CCCBCB',
          paddingBottom: 1,
          marginBottom: 2,
        }}>
          <Grid item xs={12} md={4}>
            <Box sx={{marginBottom:'30px'}}>
              <Image
                src={MyAppLogo}
                alt="Picture of the author"
                width={243}
                height={52}
              />
            </Box>
            <Typography variant="body2">
              Welcome to IFPMC, a website that shares events and research around the world, centered in Iraq and London.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Categories
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <Link href="#" color="inherit" underline="none">Publications</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <Link href="#" color="inherit" underline="none">Projects</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <Link href="#" color="inherit" underline="none">Trainings</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '40px' }}>
              <Link href="#" color="inherit" underline="none">Events</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <Link href="#" color="inherit" underline="none">Home</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <Link href="#" color="inherit" underline="none">Who are we</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              <Link href="#" color="inherit" underline="none">Contact Us</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
           
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
          </Grid>
        </Grid>
        <Box textAlign="center">
          <Typography variant="body2">
            © IFPMC 2024. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
