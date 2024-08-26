import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fetchSearch } from "@/services/api";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { setResultsSearch } from "@/lib/features/searchSlice";

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

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    marginTop: "100px",
    marginBottom: "110px",
  },
  title: {
    fontWeight: 600,
    marginBottom: "16px",
    transition: "opacity 0.3s ease",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
  },
  textField: {
    flexGrow: 1,
    marginRight: "8px",
    borderRadius: "40px",
    backgroundColor: "#f0f0f0",
    "& .MuiOutlinedInput-root": {
      borderRadius: "40px",
      height: "48px",
      "& input": {
        padding: "0 20px",
      },
    },
    "& .MuiInputLabel-outlined": {
      top: "14px",
      transform: "translate(14px, 20px) scale(1)",
    },
  },
  resultText: {
    marginTop: "16px",
    textAlign: "center",
    color: "#333",
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
  loader: {
    marginTop: "16px",
  },
});

const SearchComponent: React.FC = () => {
  const router = useRouter();

  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);
  const dispatch = useAppDispatch();
  const ResultsSearch = useAppSelector((state) => state.search.data);
  console.log(ResultsSearch);

  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [Results, setResults] = useState<ResultsType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const getMostRecent = async (searchQuery: string) => {
    setLoading(true);
    const data = await fetchSearch(searchQuery);
    setLoading(false);
    setResults(data?.results);
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setSearchResult(null);
      return;
    }

    const hasResults = true; // Change this logic based on your actual search
    if (hasResults) {
      await getMostRecent(searchQuery);
      setSearchResult(`Search Results for "${searchQuery}"`);
    } else {
      setSearchResult(
        `We don't have results for your search. Try using different keywords, check out our latest articles, or reach out to support@IFPMC.com`
      );
    }
  };

  useEffect(() => {
    if (
      (Results?.projects && Results.projects.length > 0) ||
      (Results?.publications && Results.publications.length > 0)
    ) {
      console.log("Dispatching results:", Results); // تحقق من البيانات قبل التوزيع
      const fetchedData = {
        projects: Results.projects,
        publications: Results.publications,
      };
      dispatch(setResultsSearch(fetchedData));
      router.push(`/${pathAfterSlash}/result`);
    }
  }, [Results, dispatch, pathAfterSlash, router]);

  return (
    <Box className={classes.container}>
      {!searchQuery ? (
        <Typography
          variant="h6"
          className={classes.title}
          style={{ opacity: searchQuery ? 0 : 1 }}
        >
          Explore all Topics
        </Typography>
      ) : (
        <Typography
          variant="h6"
          className={classes.title}
          style={{
            opacity: searchQuery ? 1 : 0,
            marginRight: searchQuery && "50px",
          }}
        >
          Search Results for “ {searchQuery} ”
        </Typography>
      )}
      <Box className={classes.searchBox}>
        <TextField
          variant="outlined"
          placeholder="Explore all Topics"
          fullWidth
          value={searchQuery}
          onChange={handleChange}
          className={classes.textField}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </Box>
      {loading ? (
        <CircularProgress className={classes.loader} />
      ) : (
        searchResult && (
          <Typography className={classes.resultText}>
            {searchResult.includes("support@IFPMC.com") ? (
              <>
                We do not have results for your search. Try using different
                keywords, check out our latest articles, or reach out to{" "}
                <Link href="mailto:support@IFPMC.com" className={classes.link}>
                  support@IFPMC.com
                </Link>
                .
              </>
            ) : (
              searchResult
            )}
          </Typography>
        )
      )}
    </Box>
  );
};

export default SearchComponent;
