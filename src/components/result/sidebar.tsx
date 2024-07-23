import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const Sidebar: React.FC = () => {
  const publications = [
    "Investment",
    "Private sectors",
    "Government",
    "Infrastructure",
    "Development",
    "Corruption",
    "Transparency",
    "Regional Policies",
    "Policies",
    "Statistics",
    "Investment",
    "Private sectors",
  ];

  const projects = [
    "Business (20)",
    "Ecommerce (15)",
    "Marketing (12)",
    "Outdoor Sales (10)",
  ];

  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Filter Results :</Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
          Clear
        </Typography>
      </Box>

      <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
        Publications
      </Typography>
      <FormGroup>
        {publications.map((pub, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            label={pub}
            sx={{ "& .MuiFormControlLabel-label": { color: "#476B87" } }}
          />
        ))}
      </FormGroup>

      <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
        Projects
      </Typography>
      <FormGroup>
        {projects.map((proj, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox />}
            label={proj}
            sx={{ "& .MuiFormControlLabel-label": { color: "#476B87" } }}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default Sidebar;
