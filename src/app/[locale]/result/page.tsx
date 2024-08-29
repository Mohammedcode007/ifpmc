"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/result/sidebar";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Navbar from "@/components/Navbar";
import Content from "@/components/result/content";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import SearchResult from "@/components/result/SearchResult";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchSearch } from "@/services/api";
import { setResultsSearch } from "@/lib/features/searchSlice";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "12px",
  },
  bigContainer: {
    maxWidth: "100%",
  },
  title: {
    fontFamily: "Almarai",
  },
}));
interface Project {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  content: string;
  content_en: string;
  content_ar: string;
  image: string;
  popularity_count: number;
  category: number;
  author: number[];
  tags: number[];
}

interface Publication {
  id: number;
  created: string;
  modified: string;
  name: string;
  name_en: string;
  name_ar: string;
  content: string;
  content_en: string;
  content_ar: string;
  popularity_count: number;
  category: number;
  author: number[];
  tags: number[];
}
interface ResultsType {
  projects: Project[];
  publications: Publication[];
}
const Page = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [Results, setResults] = useState<ResultsType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations("Publications");
  const { data, status, error } = useAppSelector((state) => state.home);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("searchQuery") ?? ""; // Provide a default empty string if null
  const [query, setQuery] = useState(t(`Dohuk`));
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const lng = pathAfterSlash;

  const handleClear = () => {
    setQuery("");
  };
  const [inputValue, setInputValue] = useState<string>(searchQuery); // Specify type here

  // Handle input change
  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    if (Results?.projects || Results?.publications) {
      const fetchedData = {
        projects: Results.projects,
        publications: Results.publications,
      };
      dispatch(setResultsSearch(fetchedData));

      // Construct the URL with query parameters as a string
      const queryParam = encodeURIComponent(inputValue.trim());
      router.push(`/${pathAfterSlash}/result?searchQuery=${queryParam}`);
    }
    if (
      (Results?.projects && Results.projects.length > 0) ||
      (Results?.publications && Results.publications.length > 0)
    ) {
      console.log("Dispatching results:", Results);
      const fetchedData = {
        projects: Results.projects,
        publications: Results.publications,
      };
      dispatch(setResultsSearch(fetchedData));

      // Construct the URL with query parameters as a string
      const queryParam = encodeURIComponent(inputValue.trim());
      router.push(`/${pathAfterSlash}/result?searchQuery=${queryParam}`);
    } else {
      if (
        (Results?.projects && Results.projects.length === 0) ||
        (Results?.publications && Results.publications.length === 0)
      ) {
        setSearchResult(
          `We don't have results for your search. Try using different keywords, check out our latest articles, or reach out to support@IFPMC.com`
        );
      }
    }
  }, [Results, dispatch, pathAfterSlash, router, searchQuery]);
  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const data = await fetchSearch(inputValue, lng);
      setResults(data?.results);
    }
  };
  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "100px",
          background: "linear-gradient(to bottom, #f0f0f0, #ffffff)",
          fontWeight: 600,
          fontSize: "25px",
          lineHeight: "40.22px",
          color: "#262626",
          p: 5,
          display: "flex",
          alignItems: "center",
          paddingBottom: "40px",
          paddingTop: "40px",
          paddingLeft: {
            sm: "24px",
            md: "130px",
          },
          paddingRight: {
            sm: "24px",
            md: "130px",
          },
          justifyContent: "flex-start",
        }}
      >
        <SearchResult
          query={query}
          onClear={handleClear}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
        />
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          direction: pathAfterSlash === "ar" ? "rtl" : "ltr",

          paddingLeft: {
            sm: "24px",
            md: "130px",
          },
          paddingRight: {
            sm: "24px",
            md: "130px",
          },
        }}
      >
        {/* Sidebar and Content will stack vertically in small screens */}
        <Grid
          item
          xs={12} // Full width in small screens
          md={2} // 1/3 width in medium and large screens
          sx={{
            display: {
              xs: "block",
              md: "block",
            },
            order: {
              xs: 1, // Sidebar appears first in small screens
              md: 1,
            },
          }}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={12} // Full width in small screens
          md={10} // 2/3 width in medium and large screens
          className={classes.content}
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            order: {
              xs: 2, // Content appears second in small screens
              md: 2,
            },
          }}
        >
          <Content />
        </Grid>
      </Grid>
      <NewsletterSubscription HomeData={data} />
      <Footer HomeData={data} />
    </Box>
  );
};

export default Page;
