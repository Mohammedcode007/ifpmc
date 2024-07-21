import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { StaticImageData } from 'next/image';

import { projects } from '../../../data/homeData';
import Section from '../../custom/Section';

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

  return (
    <div>
      <Typography variant="h6" className={classes.typography}>
        Related Projects
      </Typography>
      <Section title="Latest Projects" items={projects}  top={true} />

    </div>
  )
}

export default RelatedTopics
