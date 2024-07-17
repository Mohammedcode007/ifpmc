import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface ContentProps {
  title: string;
  des: string;
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft:50,
    color: '#262626',
    marginBottom: "5px",
    fontWeight: 'bold', // Applying fontWeight directly
  },
  des: {
    marginLeft:50,

    color: '#262626',
  },
}));

const Content: React.FC<ContentProps> = ({ des, title }) => {
  const classes = useStyles();

  return (
    <Box display="flex" mb={2}>
      <Box>
        <Typography variant="body1" component="p" className={classes.title}>{title}</Typography>
        <Typography variant="body2" className={classes.des}>{des}</Typography>
      </Box>
    </Box>
  );
};

export default Content;
