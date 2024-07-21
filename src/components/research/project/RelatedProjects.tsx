"use client";
import React from "react";
import { Box, Chip, Typography } from "@mui/material";

const RelatedProjects: React.FC<{ projects: string[] }> = ({ projects }) => (
  <aside>
    <Typography variant="h6">Related Projects</Typography>
    <Box>
      {projects.map((project) => (
        <Chip label={project} key={project} style={{ margin: "5px" }} />
      ))}
    </Box>
  </aside>
);

export default RelatedProjects;
