import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, YouTube, LinkedIn } from "@mui/icons-material";
import MyAppLogo from "../assets/images/logoWhite.png"; // Adjust the path accordingly
import Image from "next/image";
import { colors } from "../utils/colors";
import XIcon from "@mui/icons-material/X";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: 4,
  },
  gridContainer: {
    borderBottom: "1px solid #CCCBCB",
    paddingBottom: 1,
    marginBottom: 1,
    marginLeft: '0.75%',
    marginRight: '1%',
  },
  logo: {
    marginBottom:4,
  },
  socialMediaIconContainer: {
    display: "flex",
    gap: 1,
    marginBottom: 1,
  },
  socialMediaIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: "10%",
    backgroundColor: colors.active,
    color: "black",
    "&:hover": {
      backgroundColor: "gray",
    },
  },
}));

interface SocialMediaIconProps {
  icon: React.ElementType;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  icon: IconComponent,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.socialMediaIcon}>
      <IconComponent sx={{ color: "white", fontSize: 13 }} />
    </Box>
  );
};

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Box>
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item xs={12} md={4}>
            <Box className={classes.logo}>
              <Image
                src={MyAppLogo}
                alt="Picture of the author"
                width={243}
                height={52}
              />
            </Box>
            <Typography variant="body2">
              Welcome to IFPMC, a website that shares events and research around
              the world, centered in Iraq and London.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Categories
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "10px" }}>
              <Link href="#" color="inherit" underline="none">
                Publications
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "10px" }}>
              <Link href="#" color="inherit" underline="none">
                Projects
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "10px" }}>
              <Link href="#" color="inherit" underline="none">
                Trainings
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "40px" }}>
              <Link href="#" color="inherit" underline="none">
                Events
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "10px" }}>
              <Link href="#" color="inherit" underline="none">
                Home
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "10px" }}>
              <Link href="#" color="inherit" underline="none">
                Who are we
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "10px" }}>
              <Link href="#" color="inherit" underline="none">
                Contact Us
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
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
          </Grid>
        </Grid>
        <Box textAlign="center">
          <Typography variant="body2">
            © IFPMC 2024. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
