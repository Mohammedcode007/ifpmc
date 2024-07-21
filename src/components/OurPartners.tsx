import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import logoipsum from "../assets/images/logoipsum.png";
import { useTranslations } from "next-intl";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontWeight: 600,
          color: "#262626",
          // marginLeft: "2%",
          marginBottom: "15px",
    fontFamily: "Almarai",
  },
}));
const OurPartners: React.FC = () => {
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("Partners");
  const classes = useStyles();

  const images: StaticImageData[] = [
    logoipsum,
    logoipsum,
    logoipsum,
    logoipsum,
    logoipsum,
  ];

  return (
    <Box
      sx={{
        padding: 2,
        paddingLeft: {
          xs: "88px",
          md: "25px",
        },
        backgroundColor: "#F0F0F0",
      }}
    >
      <Typography
                 className={classes.title}
sx={{textAlign:pathAfterSlash === "ar" ? "right" : 'left'}}
        variant="h6"
        gutterBottom
      >
                  {t("OurPartners")}

      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          paddingLeft: {
            xs: "16px",
            md: "16px",
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
            xs={2}
            sx={{
              paddingLeft: {
                xs: "0px",
                md: "0px !important",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Image
              src={image}
              alt={`Partner ${index + 1}`}
              width={200}
              height={40}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurPartners;
