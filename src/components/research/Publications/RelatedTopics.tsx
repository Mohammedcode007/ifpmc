import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import { projects } from '../../../data/homeData';
import Section from './Section';

export  interface Item {
    date: string;
    title: string;
    description: string;
    image?: string | StaticImageData;
    top?: boolean;

}


const useStyles = makeStyles({
    typography: {
      fontWeight: 600,
      fontFamily: "Almarai",

    },
    chip: {
      margin: "5px",
      backgroundColor: "#476B8733",
      color: "#476B87",
      fontWeight: 400,
    },
  });
  
const RelatedTopics = () => {
    const classes = useStyles();
    const t = useTranslations("share");

    const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  return (
    <div>
      <Typography variant="h6" className={classes.typography}>
      {t('Related Projects')}
      </Typography>
      <Section title="Latest Projects" items={projects}  top={true} />

    </div>
  )
}

export default RelatedTopics
