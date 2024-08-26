"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/research/sidebar";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import ContentPub from "@/components/research/contentPub";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import {
  fetchCategories,
  fetchMostRecentPublications,
  fetchMostPobulartPublications,
} from "@/services/api";

// Define the Publication interface
interface Publication {
  id: number;
  title: string;
  content: string;
  category: {
    id: number;
    name: string;
  };
}

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px", // تعيين تباعد داخلي للمحتوى
  },
  container: {},
  bigContainer: {
    maxWidth: "100%", // تعيين عرض الحاوية ليأخذ المساحة القصوى المحتملة
  },
  title: {
    fontFamily: "Almarai",
  },
  root: {
    height: "85px",
    width: "100%", // Width
    background: "linear-gradient(to bottom, #f0f0f0, #ffffff)", // Background gradient
    fontWeight: 600, // Font weight
    fontSize: "25px", // Font size
    lineHeight: "40.22px", // Line height
    color: "#262626", // Text color
    p: 2, // Padding
    display: "flex", // Ensure text aligns properly
    alignItems: "center", // Vertically center text
  },
}));

interface Category {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  publication_count: number;
  project_count: number;
}

interface CategoryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
}

const Page = () => {
  const classes = useStyles();
  const t = useTranslations("Publications");
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const [categories, setCategories] = useState<Category[]>([]);
  const { data, status, error } = useAppSelector((state) => state.home);

  // Specify types for state variables
  const [MostRecent, setMostRecent] = useState<Publication[]>([]);
  const [MostPobular, setMostPobular] = useState<Publication[]>([]);
  const [filteredMostRecent, setFilteredMostRecent] = useState<Publication[]>(
    []
  );
  const [filteredMostPobular, setFilteredMostPobular] = useState<Publication[]>(
    []
  );

  useEffect(() => {
    const getMostRecent = async () => {
      const data = await fetchMostRecentPublications();
      setMostRecent(data?.results || []);
    };

    getMostRecent();
  }, []);

  useEffect(() => {
    const getMostPobular = async () => {
      const data = await fetchMostPobulartPublications();
      setMostPobular(data?.results || []);
    };

    getMostPobular();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const data: CategoryResponse = await fetchCategories();
      setCategories(data.results);
    };

    getCategories();
  }, []);

  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const items = categories?.map((category) => ({
    id: category.id,
    label: category.name,
    projectCount: category.project_count,
  }));

  const handleToggle = (item: { id: number; label: string }) => () => {
    const newCheckedItems = {
      ...checkedItems,
      [item.id]: !checkedItems[item.id],
    };
    setCheckedItems(newCheckedItems);

    const checkedValues = items
      .filter((it) => newCheckedItems[it.id])
      .map((it) => `${it.label} (${it.projectCount})`);
    setTextFieldValue(checkedValues.join(", "));
  };

  useEffect(() => {
    const checkedCategoryIds = Object.keys(checkedItems)
      .filter((id) => checkedItems[parseInt(id, 10)])
      .map((id) => parseInt(id, 10));

    const filterPublications = (publications: Publication[]) => {
      return publications.filter((pub) =>
        checkedCategoryIds.includes(pub.category.id)
      );
    };

    setFilteredMostRecent(filterPublications(MostRecent));
    setFilteredMostPobular(filterPublications(MostPobular));
  }, [checkedItems, MostRecent, MostPobular]);

  const handleClear = () => {
    setCheckedItems({});
    setTextFieldValue("");
  };

  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <Box
        className={classes.root}
        sx={{
          paddingRight: {
            xs: "0px",
            md: "130px",
          },
          paddingLeft: {
            xs: "0px",
            md: "130px",
          },
          fontFamily: pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
          justifyContent: pathAfterSlash === "ar" ? "flex-end" : "flex-start",
        }}
      >
        <p
          style={{
            paddingLeft: "27px",
            paddingTop: "60px",
            fontFamily: pathAfterSlash === "ar" ? "Almarai" : "Source Sans Pro",
          }}
        >
          {t("All Publications")}
        </p>
      </Box>
      <Grid
        item
        xs={3}
        sx={{
          display: {
            xs: "block",
            sm: "none",
            md: "block",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Sidebar
          categories={categories}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          textFieldValue={textFieldValue}
          handleToggle={handleToggle}
          setTextFieldValue={setTextFieldValue}
          handleClear={handleClear}
          items={items}
        />
      </Grid>
      <Grid
        container
        className={classes.container}
        spacing={0}
        sx={{
          flexDirection: pathAfterSlash === "ar" ? "row-reverse" : "row",
          paddingRight: {
            xs: "0px",
            md: "130px",
          },
          paddingLeft: {
            xs: "0px",
            md: "130px",
          },
          width: "auto",
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Sidebar
            categories={categories}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            textFieldValue={textFieldValue}
            handleToggle={handleToggle}
            setTextFieldValue={setTextFieldValue}
            handleClear={handleClear}
            items={items}
          />
        </Grid>
        <Grid item xs={12} md={9} className={classes.content}>
          <ContentPub
            MostPobular={
              filteredMostPobular.length > 0 ? filteredMostPobular : MostRecent
            }
            MostRecent={
              filteredMostRecent.length > 0 ? filteredMostRecent : MostRecent
            }
          />
        </Grid>
      </Grid>
      <NewsletterSubscription HomeData={data} />
      <Footer HomeData={data} />
    </Box>
  );
};

export default Page;
