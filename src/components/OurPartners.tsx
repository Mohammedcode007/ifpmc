import React from 'react';
import { Grid ,Typography} from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import logoipsum from '../assets/images/logoipsum.png'
const OurPartners: React.FC = () => {
  // Sample array of image URLs (replace with your own data)
  const images: StaticImageData[] = [
    logoipsum,
    logoipsum,
    logoipsum,
    logoipsum,
    // Add more images as needed
  ];

  return (
    <div style={{  padding: '16px',backgroundColor:'#F0F0F0'  }}>
          <Typography sx={{ fontWeight: 600, color: '#262626',marginLeft:'7%',marginBottom:'15px' }} variant="h6" gutterBottom>
          Our Partners
            </Typography>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid key={index} item xs={3} style={{ padding: '8px',alignItems:'center',justifyContent:'center',display:'flex' }}>
            <Image src={image} alt={`Partner ${index + 1}`} width={100} height={40} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurPartners;
