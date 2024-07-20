import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { projects, trainings, publications } from '../data/homeData';
import dynamic from 'next/dynamic';

const Section = dynamic(() => import('./custom/Section'), { ssr: false });

const HomeContent: FC = () => {
  return (
    <Box style={{ marginTop: '80px', marginLeft: '24px', marginRight: '24px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              borderBottom: '1px solid #CCCBCB',
              paddingBottom: 1,
              marginBottom: 2,
            }}
          >
            <Typography sx={{ fontWeight: 600, color: '#262626' }} variant="h5" gutterBottom>
              Latest Publications
            </Typography>
          </Box>
          <Section title="Latest Publications" items={publications} top={true} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              borderBottom: '1px solid #CCCBCB',
              paddingBottom: 1,
              marginBottom: 2,
            }}
          >
            <Typography sx={{ fontWeight: 600, color: '#262626' }} variant="h5" gutterBottom>
              Upcoming Trainings
            </Typography>
          </Box>
          <Section title="Upcoming Trainings" items={trainings} />
        </Grid>
      </Grid>

      <Grid>
        <Box
          sx={{
            borderBottom: '1px solid #CCCBCB',
            paddingBottom: 1,
            marginBottom: 2,
          }}
        >
          <Typography sx={{ fontWeight: 600, color: '#262626' }} variant="h5" gutterBottom>
            Latest Projects
          </Typography>
        </Box>
        <Section title="Latest Projects" items={projects} withImage top={true} />
      </Grid>
    </Box>
  );
};

export default HomeContent;
