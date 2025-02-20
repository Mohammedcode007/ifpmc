import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
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
    fontFamily: "Almarai",

  },
});

const RelatedProjects: React.FC<{ projects: string[] }> = ({ projects }) => {
  const classes = useStyles();
  const t = useTranslations("share");

  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  return (
    <aside>
      <Typography variant="h6" className={classes.typography}>
      {t('Related Projects')}

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
