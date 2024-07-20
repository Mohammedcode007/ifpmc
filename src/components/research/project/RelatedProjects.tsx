import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

const RelatedProjects: React.FC<{ projects: string[] }> = ({ projects }) => {
  const classes = useStyles();

  return (
    <aside>
      <Typography variant="h6" className={classes.typography}>
        Related Projects
      </Typography>
      <Box>
        {projects.map((project) => (
          <Chip
            label={project}
            key={project}
            className={classes.chip}
          />
        ))}
      </Box>
    </aside>
  );
};

export default RelatedProjects;
