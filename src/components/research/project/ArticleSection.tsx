import React from "react";
import { Typography } from "@mui/material";
import ArticleContent from "./ArticleContent";

const ArticleSection: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <section>
    <Typography variant="h6">{title}</Typography>
    <ArticleContent />
    {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
  </section>
);

export default ArticleSection;
