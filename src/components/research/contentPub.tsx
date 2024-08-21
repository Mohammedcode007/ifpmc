import React, { useEffect, useState } from "react";
import BasicTabs from "../custom/BasicTabs";
import MostRecentContentPublications from "./MostRecentContentPublications";
import { projects } from "../../data/homeData";
import { publications } from "../../data/homeData";
import { fetchMostRecentPublications } from "@/services/api";

const ContentPub = () => {
  const [MostRecent, setMostRecent] = useState([]);
  useEffect(() => {
    const getMostRecent = async () => {
      const data = await fetchMostRecentPublications();
      setMostRecent(data?.results);
    };

    getMostRecent();
  }, []);
  console.log(MostRecent);
  return (
    <div style={{ backgroundColor: "white" }}>
      <BasicTabs
        tabone={<MostRecentContentPublications projects={MostRecent} />}
        tabonetitle="Most Recent"
        tabtwo={<MostRecentContentPublications projects={projects} />}
        tabtwotitle="Most Popular"
      />
    </div>
  );
};

export default ContentPub;
