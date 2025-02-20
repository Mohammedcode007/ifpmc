"use client";
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '2rem 0',
    paddingLeft: '24px',
    paddingRight: '24px',
    width: '75%',
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  section: {
    marginBottom: '2rem',
  },
  title: {
    fontWeight: 600,
  },
  list: {
    padding: 0,
    listStyleType: 'disc', 
    marginLeft: '20px'
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 0,
    paddingRight: 0,
    '&:before': {
      content: 'counter(list-counter) "."',
      counterIncrement: 'list-counter',
      marginRight: '8px',
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  primary: {
    flex: '0 0 auto',
    marginRight: '8px',
    fontWeight: 600,
    fontSize: '14px'
  },
  secondary: {
    flex: '1 1 auto',
    textAlign: 'left',
  },
});

const WhoAreWe: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>
        <Typography variant="h4" gutterBottom>
          Who Are We
        </Typography>
      </Box>
      <Box className={classes.section}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Our Vision
        </Typography>
        <Typography paragraph>
          We believe in research and data-driven change and development. Why? 
          We value change and development that is based on evidence and providing a cost-effective approach for our clients and partners. 
          Through research and impact analysis we can tailor the best solutions for the most challenging problems.
        </Typography>
      </Box>
      <Box className={classes.section}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Our Mission
        </Typography>
        <Typography paragraph>
          IFMPC strives to build a network bringing together experts, researchers, politicians, entrepreneurs working on political and economic development in Iraq.
        </Typography>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Box className={classes.listItemText}>
              <Typography className={classes.primary}>Private Sector : </Typography>
              <Typography className={classes.secondary}>We help our clients to find the edge to stay ahead of competition.</Typography>
            </Box>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Box className={classes.listItemText}>
              <Typography className={classes.primary}>Public Sector : </Typography>
              <Typography className={classes.secondary}>We help the public sector to develop strategies for better results.</Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Box className={classes.section}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Our Approach
        </Typography>
        <Typography paragraph>
          How do we plan to achieve our goals and deliver on our promises to clients and partners?
        </Typography>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Box className={classes.listItemText}>
              <Typography className={classes.primary}>Research : </Typography>
              <Typography className={classes.secondary}>Through research, we strive to understand the drivers and causes of problems, inform on learning and measure impact.</Typography>
            </Box>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Box className={classes.listItemText}>
              <Typography className={classes.primary}>Training : </Typography>
              <Typography className={classes.secondary}>We build capacities and prepare our clients for success and prosperity through tailored training.</Typography>
            </Box>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Box className={classes.listItemText}>
              <Typography className={classes.primary}>Experts : </Typography>
              <Typography className={classes.secondary}>We work closely with local experts to build grassroots resilience and develop realistic solutions.</Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default WhoAreWe;
