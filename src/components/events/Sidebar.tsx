// components/Sidebar.tsx
import React from "react";
import { Box } from "@mui/material";
import SidebarItem from "./SidebarItem";
import imageSrc1 from "../../../public/assets/images/vedioItem.png";
const sidebarItems = [
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },
  {
    imageSrc: imageSrc1,
    title: "A self fulfilling prophecy, Interview with Dr. Katherine Harvey",
    views: "15K",
    daysAgo: "3",
  },

  // قم بإضافة المزيد من العناصر حسب الحاجة
];

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        paddingLeft: {
          xs: "24px",
          md: "0px",
        },
      }}
    >
      {sidebarItems.map((item, index) => (
        <SidebarItem
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          views={item.views}
          daysAgo={item.daysAgo}
        />
      ))}
    </Box>
  );
};

export default Sidebar;
