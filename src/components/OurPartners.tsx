import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import logoipsum from "../assets/images/logoipsum.png";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import { makeStyles } from "@mui/styles";
import { fetchOurPartners } from "@/services/api";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontWeight: 600,
    color: "#262626",
    marginBottom: "15px",
    // fontFamily: "Almarai",
  },
}));
interface Partner {
  id: number;
  image: string;
  name: string;
  name_en: string;
  name_ar: string;
}

interface PartnersResponse {
  results: Partner[];
}
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
  const [partners, setPartners] = useState<PartnersResponse | null>(null);

  useEffect(() => {
    const getOurPartners = async () => {
      const data = await fetchOurPartners();
      setPartners(data); // Make sure the returned data matches the interface
    };

    getOurPartners();
  }, []);
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
        sx={{
          textAlign: pathAfterSlash === "ar" ? "right" : "left",
          fontFamily: pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
        }}
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
        {partners?.results.map((partner, index) => (
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
              src={partner.image}
              alt={partner.name}
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
