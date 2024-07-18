import React from "react";
import { Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import logoipsum from "../assets/images/logoipsum.png";
const OurPartners: React.FC = () => {
  // Sample array of image URLs (replace with your own data)
  const images: StaticImageData[] = [
    logoipsum,
    logoipsum,
    logoipsum,
    logoipsum,
    // Add more images as needed
  ];

  return (
    <div
      style={{
        padding: "16px",
        paddingLeft: "25px",
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
            xs: "0px", // للشاشات الصغيرة
            md: "33px", // للشاشات المتوسطة والكبيرة
          },

          display: {
            xs: "block", // للشاشات الصغيرة
            md: "flex", // للشاشات المتوسطة والكبيرة
          },
          flexDirection: {
            md: "row", // ترتيب العناصر في صف للشاشات المتوسطة والكبيرة
          },
          alignItems: {
            xs: "center", // محاذاة العناصر في المنتصف للشاشات الصغيرة
            md: "center", // محاذاة العناصر في المنتصف للشاشات المتوسطة والكبيرة
          },
        }}
      >
        {" "}
        {images.map((image, index) => (
          <Grid
            key={index}
            item
            xs={3}
            sx={{
              paddingLeft: "25px",
              display: "flex",
              alignItems: "center",

              marginLeft: {
                xs: "43px", // للشاشات الصغيرة
                md: "0px", // للشاشات المتوسطة والكبيرة
              },
              justifyContent: {
                xs: "center", // محاذاة العناصر في المنتصف للشاشات الصغيرة
                md: "flex-start", // محاذاة العناصر في بداية الصف للشاشات المتوسطة والكبيرة
              },
            }}
          >
            <Image
              src={image}
              alt={`Partner ${index + 1}`}
              width={100}
              height={40}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurPartners;
