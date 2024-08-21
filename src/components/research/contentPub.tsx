import React, { useEffect, useState } from "react";
import BasicTabs from "../custom/BasicTabs";
import MostRecentContentPublications from "./MostRecentContentPublications";
import MostPobularContentPublications from "./MostPopularContentPublications";


import { projects } from "../../data/homeData";
import { publications } from "../../data/homeData";
import { fetchMostRecentPublications } from "@/services/api";
import { fetchMostPobulartPublications } from "@/services/api";


const ContentPub = () => {
  const [MostRecent, setMostRecent] = useState([]);
  const [MostPobular, setMostPobular] = useState([]);

  useEffect(() => {
    const getMostRecent = async () => {
      const data = await fetchMostRecentPublications();
      setMostRecent(data?.results);
    };

    getMostRecent();
  }, []);
    useEffect(() => {
    const getMostPobular = async () => {
      const data = await fetchMostPobulartPublications();
      setMostPobular(data?.results);
    };

      getMostPobular();
  }, []);
  console.log(MostPobular,'2321');
  return (
    <div style={{ backgroundColor: "white" }}>
      <BasicTabs
        tabone={<MostRecentContentPublications projects={MostRecent} />}
        tabonetitle="Most Recent"
        tabtwo={<MostPobularContentPublications projects={MostPobular} />}
        tabtwotitle="Most Popular"
      />
    </div>
  );
};

export default ContentPub;
