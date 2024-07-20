import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import logoipsum from "../assets/images/logoipsum.png";

const OurPartners: React.FC = () => {
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
        sx={{
          fontWeight: 600,
          color: "#262626",
          marginLeft: "2%",
          marginBottom: "15px",
        }}
        variant="h6"
        gutterBottom
      >
        Our Partners
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          paddingLeft: {
            xs: "0px",
            md: "33px",
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
                md: "25px",
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
              width={230}
              height={40}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurPartners;
