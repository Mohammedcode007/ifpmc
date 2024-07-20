import { FC } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image, { StaticImageData } from "next/image";
import { colors } from "@/utils/colors";
import styled from "styled-components";
import Link from "next/link";

export  interface Item {
  date: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  top?: boolean;

}
const ResponsiveImageWrapper = styled.div`
  width: 150px;
  height: 100px; // نسبة الطول تتناسب مع العرض
  position: relative;

  @media (min-width: 768px) {
    width: 300px;
    height: 200px; // نسبة الطول تتناسب مع العرض
  }
`;

interface SectionProps {
  title: string;
  items: Item[];
  withImage?: boolean;
  top?: boolean;
}

const Section: FC<SectionProps> = ({ title, items, withImage, top }) => {
  //   const theme = useTheme();
  //   const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  const sectionStyle = {
    // display:'block',
    alignItems: "flex-start",
    padding: 16,
    marginBottom: 16,
    borderBottom: "1px solid #CCCBCB",
    paddingBottom: 1,
    border: top ? undefined : "1px solid #CCCBCB",
  };

  return (
    <Box>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            style={sectionStyle}
            sx={{
              display: {
                xs: "block", 
                sm: "block", 
                md: "flex", 
                lg: "flex", 
                xl: "flex", 
              },
            }}
          >
            <ListItemText
              primary={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: top ? "column" : "column-reverse",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <AccessTimeIcon sx={{ color: colors.active }} />
                    </ListItemIcon>
                    <Typography sx={{ color: "#606060" }} component="span">
                      {`${item.date}`}
                    </Typography>
                  </Box>
                  <Link href={`/en/research/Projects/${index}`} passHref>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      sx={{ fontWeight: 600, color: "#476B87", fontSize: "18px", cursor: 'pointer' }}
                      component="div"
                    >
                      {item.title}
                    </Typography>
                  </Link>
                </Box>
              }
              secondary={
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  {item.description}
                </Typography>
              }
            />
            {withImage && item.image && (
              <Box>
                <ResponsiveImageWrapper>
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </ResponsiveImageWrapper>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Section;
