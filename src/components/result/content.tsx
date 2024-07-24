import React from "react";
import BasicTabs from "../custom/BasicTabs";
import MostRecentContentProjects from "./MostRecentContentProjects";
import { projects } from "../../data/homeData";
import { publications } from "../../data/homeData";
import { useAppSelector } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  title: {
    fontFamily: "Almarai",
  },
}));
const Content = () => {
  const t = useTranslations("UpcomingTrainings");
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "white" }}>
      <BasicTabs
        tabone={<MostRecentContentProjects projects={projects} />}
        tabonetitle="All"
        tabtwo={<MostRecentContentProjects projects={projects} />}
        tabtwotitle="Publications"
        tabthreetitle="Projects"
        tabthree={<MostRecentContentProjects projects={projects} />}
      />
    </div>
  );
};

export default Content;
