import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { projects, trainings, publications } from "../data/homeData";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";

const Section = dynamic(() => import("./custom/Section"), { ssr: false });
const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontFamily: "Almarai",
  },
}));

const HomeContent: FC = () => {
  const classes = useStyles();

  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const gridDirection = pathAfterSlash === "ar" ? "rtl" : "ltr";
  const t = useTranslations("HomePage");

  return (
    <Box style={{ marginTop: "80px", marginLeft: "24px", marginRight: "24px" }}>
      <Grid container spacing={4} dir={gridDirection}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              borderBottom: "1px solid #CCCBCB",
              paddingBottom: 1,
              marginBottom: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: 600, color: "#262626" }}
              variant="h5"
              gutterBottom
              className={classes.title}
            >
              {t("LatestPublications")}
            </Typography>
          </Box>
          <Section
            title="Latest Publications"
            items={publications}
            top={true}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              borderBottom: "1px solid #CCCBCB",
              paddingBottom: 1,
              marginBottom: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: 600, color: "#262626" }}
              variant="h5"
              gutterBottom
              className={classes.title}
            >
              {t("UpcomingTrainings")}
            </Typography>
          </Box>
          <Section title="Upcoming Trainings" items={trainings} />
        </Grid>
      </Grid>

      <Grid>
        <Box
          sx={{
            borderBottom: "1px solid #CCCBCB",
            paddingBottom: 1,
            marginBottom: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "#262626",
              display: "flex",
              justifyContent:
                pathAfterSlash === "ar" ? "flex-end" : "flex-start",
            }}
            variant="h5"
            gutterBottom
            className={classes.title}
          >
            {t("LatestProjects")}
          </Typography>
        </Box>
        <Section
          title="Latest Projects"
          items={projects}
          withImage
          top={true}
        />
      </Grid>
    </Box>
  );
};

export default HomeContent;
