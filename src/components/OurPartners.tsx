import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import logoipsum from "../assets/images/logoipsum.png";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontWeight: 600,
    color: "#262626",
    marginBottom: "15px",
    fontFamily: "Almarai",
  },
}));

const OurPartners: React.FC = () => {
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("Partners");
  const classes = useStyles();

  const images = [
    logoipsum.src,
    logoipsum.src,
    logoipsum.src,
    logoipsum.src,
    logoipsum.src,
  ];

  return (
    <Box
      sx={{
        padding: 2,
        paddingLeft: {
          // xs: "88px",
          md: "130px",
        },
        paddingRight: {
          // xs: "88px",
          md: "130px",
        },
        backgroundColor: "#F0F0F0",
      }}
    >
      <Typography
        className={classes.title}
        sx={{ textAlign: pathAfterSlash === "ar" ? "right" : "left" }}
        variant="h6"
        gutterBottom
      >
        {t("OurPartners")}
      </Typography>
      <Grid
        container
        sx={{
          paddingLeft: {
            // xs: "16px",
            // md: "0px !important",
          },
          display: {
            xs: "block",
            md: "flex",
          },
          flexDirection: {
            md: "row",
          },
          alignItems: {
            xs: "center",
            md: "center",
          },
          justifyContent: {
            xs: "center",
            md: "space-between",
          },
        }}
      >
        {images.map((image, index) => (
          <Grid
            key={index}
            item
            sx={{
              paddingTop: {
                xs: "10px",
                md: "0px !important",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                md: "center",
              },
            }}
          >
            <img
              src={image}
              alt={`Partner ${index + 1}`}
              width="100%"
              height={40}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurPartners;
