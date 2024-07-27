"use client";

import React from "react";
import styles from "./component.module.css";
import { Typography } from "@mui/material";
import CustomButton from "./custom/CustomButton";
import { colors } from "@/utils/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  // title: {
  //   fontFamily: "Almarai",
  // },
}));
const BackgroundImageComponent: React.FC = () => {
  const classes = useStyles();

  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const t = useTranslations("BackgroundImageComponent");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily:pathAfterSlash === 'ar' ? 'Almarai' : 'Source Sans Pro',

            width: isSmallScreen ? "100%" : "34%",
          }}
        >
          {t("Weareredefiningresearchanddevelopmentstandards")}
        </Typography>
        <CustomButton
          onClick={handleClick}
          customColor="white"
          width="175px"
          height="48px"
          backgroundColor={colors.active}
          borderRadius="4px"
        >
          {t("contactus")}
        </CustomButton>
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
