// components/SidebarItem.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Typography } from '@mui/material';

interface SidebarItemProps {
  imageSrc: StaticImageData;
  title: string;
  views: string;
  daysAgo: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ imageSrc, title, views, daysAgo }) => {
  return (
    <Box display="flex" mb={2}>
      <Box mr={2}>
        <Image src={imageSrc} alt={title} width={100} height={100} objectFit="cover" />
      </Box>
      <Box>
        <Typography variant="body1" component="p" fontWeight="bold">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{views} views · {daysAgo} days ago</Typography>
      </Box>
    </Box>
  );
};

export default SidebarItem;
