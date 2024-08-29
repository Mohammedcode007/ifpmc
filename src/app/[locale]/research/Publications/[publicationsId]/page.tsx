"use client";
import React, { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import Header from "@/components/research/Publications/Header";
import ArticleSection from "@/components/research/Publications/ArticleSection";
import RelatedProjects from "@/components/research/Publications/RelatedProjects";
import RelatedTopics from "@/components/research/Publications/RelatedTopics";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/lib/hooks";
import { makeStyles } from "@mui/styles";
import { useParams } from "next/navigation";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Navbar from "@/components/Navbar";
import LoadingIndicator from "@/components/custom/LoadingIndicator";
import ErrorComponent from "@/components/custom/ErrorComponent";
import { fetchPublicationById } from "@/services/api";

const useStyles = makeStyles((theme) => ({
  content: {
    paddingBottom: "24px !important", // تعيين تباعد داخلي للمحتوى
    marginTop: "50px",
  },
  bigContainer: {
    maxWidth: "100%", // تعيين عرض الحاوية ليأخذ المساحة القصوى المحتملة
  },
}));

const Home: React.FC = () => {
  const pathAfterSlash = useAppSelector((state) => state.path.pathAfterSlash);

  const { data, status, error } = useAppSelector((state) => state.home);
  const params = useParams<{
    tag: string;
    item: string;
    publicationsId?: string;
  }>();
  const [onePublication, setOnePublication] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const lng = pathAfterSlash;

  useEffect(() => {
    const getPublication = async () => {
      try {
        if (params?.publicationsId) {
          const data = await fetchPublicationById(params.publicationsId, lng);
          setOnePublication(data);
        } else {
          throw new Error("Publication ID is not available");
        }
      } catch (error: any) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPublication();
  }, [params?.publicationsId]);
  const classes = useStyles();
  const t = useTranslations("share");

  const articleContent = `
    <p>One way of analyzing whether to engage in FDI is by using the OLI framework...</p>
    <h2>1- Ownership advantage</h2>
    <p>Ownership advantage refers to certain firm-specific advantages...</p>
    <h2>2- Location advantage</h2>
    <p>Location advantage refers to advantages that can be gained from combining...</p>
    <h2>3- Internalisation advantages</h2>
    <p>Internalisation advantages occur when it is more beneficial for a firm to...</p>
  `;

  const relatedProjects = [
    t("Business"),
    t("Ecommerce"),
    t("Marketing"),
    t("Outdoor Sales"),
  ];
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Title of the PDF", 10, 10);
    doc.text(articleContent, 10, 20);

    // Example of adding an image to the PDF
    // const imageData = "data:image/png;base64,..."; // Base64 image data
    // doc.addImage(imageData, "PNG", 10, 30, 180, 160);

    // Save the PDF
    doc.save("downloaded-file.pdf");
  };
  if (loading) return <LoadingIndicator />;
  if (fetchError) return <ErrorComponent message={fetchError} />;
  return (
    <Box className={classes.bigContainer} sx={{ backgroundColor: "#ffffff" }}>
      <Navbar />

      <Box
        className={classes.content}
        sx={{
          paddingRight: {
            xs: "24px",
            md: "130px",
          },
          paddingLeft: {
            xs: "24px",
            md: "130px",
          },
        }}
      >
        <Header
          handleDownloadPDF={handleDownloadPDF}
          onePublication={onePublication}
        />
        <Grid
          container
          spacing={3}
          sx={{ direction: pathAfterSlash === "ar" ? "rtl" : "ltr" }}
        >
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              paddingRight: {
                xs: "0px",
                md: "100px",
              },
            }}
          >
            <ArticleSection
              title={t("Article")}
              content={onePublication?.content}
            />
            <RelatedTopics />
          </Grid>
          <Grid item xs={12} md={3}>
            <RelatedProjects projects={relatedProjects} />
          </Grid>
        </Grid>
      </Box>
      <NewsletterSubscription HomeData={data} />
      <Footer HomeData={data} />
    </Box>
  );
};

export default Home;
