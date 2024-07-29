import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, YouTube, LinkedIn } from "@mui/icons-material";
import MyAppLogo from "../assets/images/logoWhite.png"; // Adjust the path accordingly
import Image from "next/image";
import { colors } from "../utils/colors";
import XIcon from "@mui/icons-material/X";
import { makeStyles } from "@mui/styles";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    color: "white",
    paddingLeft: "130px",
    paddingRight: "130px",
    // padding: 4,
  },
  gridContainer: {
    // borderBottom: "1px solid #CCCBCB",
    paddingBottom: 1,
    marginBottom: 1,
    // marginLeft: "130px !important",
    // marginRight: "130px !important",

    // marginRight: "1%",
  },
  divir: {
    borderBottom: "1px solid #CCCBCB",
    paddingBottom: 1,
    marginBottom: 1,
    marginLeft: "0px !important",

    // marginRight: "1%",
  },
  logo: {
    marginBottom: 4,
  },
  Box: {
    // paddingLeft: "24px !important",
  },
  BoxAr: {
    display: "flex",
    paddingRight: "50px",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingLeft: "0px !important",
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
  title: {
    fontFamily: "Almarai",
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
  const t = useTranslations("footer");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  return (
    <Box sx={{ backgroundColor: "red" }}>
      <Box
        component="footer"
        style={{
          paddingLeft: {
            xs: "24px",
            md: "130px",
          },
        }}
        className={classes.footer}
      >
        <Box>
          <Grid
            container
            className={classes.gridContainer}
            sx={{
              flexDirection: pathAfterSlash === "ar" ? "row-reverse" : "row",
              marginLeft: "0px !important",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              style={{ paddingLeft: "0px !important", width: "30% !important" }}
              className={pathAfterSlash === "ar" ? classes.BoxAr : classes.Box}
            >
              <Box
                className={classes.logo}
                sx={{
                  paddingRight: pathAfterSlash === "ar" ? "24px" : "0px",
                }}
              >
                <Image
                  src={MyAppLogo}
                  alt="Picture of the author"
                  width={243}
                  height={52}
                />
              </Box>
              <Typography
                variant="body2"
                className={classes.title}
                sx={{
                  width: "75%",
                  paddingRight: pathAfterSlash === "ar" ? "24px" : "0px",
                  textAlign: pathAfterSlash === "ar" ? "right" : "left",
                }}
              >
                {t("Welcome to IFPMC")}
              </Typography>
            </Grid>
            <Grid
              item
              className={pathAfterSlash === "ar" ? classes.BoxAr : classes.Box}
            >
              <Typography variant="h6" gutterBottom className={classes.title}>
                {t("Categories")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "10px" }}
                className={classes.title}
              >
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  className={classes.title}
                >
                  {t("Publications")}
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "10px" }}
                className={classes.title}
              >
                <Link href="#" color="inherit" underline="none">
                  {t("Projects")}
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "10px" }}
                className={classes.title}
              >
                <Link href="#" color="inherit" underline="none">
                  {t("Trainings")}
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "40px" }}
                className={classes.title}
              >
                <Link href="#" color="inherit" underline="none">
                  {t("Events")}
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              className={pathAfterSlash === "ar" ? classes.BoxAr : classes.Box}
            >
              <Typography variant="h6" gutterBottom className={classes.title}>
                {t("Quick Links")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "10px" }}
                className={classes.title}
              >
                <Link href="#" color="inherit" underline="none">
                  {t("Home")}
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "10px" }}
                className={classes.title}
              >
                <Link href="#" color="inherit" underline="none">
                  {t("Who are we")}
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "10px" }}
                className={classes.title}
              >
                <Link href="#" color="inherit" underline="none">
                  {t("Contact Us")}
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              className={pathAfterSlash === "ar" ? classes.BoxAr : classes.Box}
            >
              <Typography variant="h6" gutterBottom className={classes.title}>
                {t("Social Media")}
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
        </Box>
      </Box>
      <Box textAlign="center">
        <Box className={classes.divir}></Box>

        <Typography
          className={classes.title}
          sx={{ width: "100%" }}
          variant="body2"
        >
          {t("IFPMC 2024")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
