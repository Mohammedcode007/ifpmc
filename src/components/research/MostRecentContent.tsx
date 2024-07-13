import React, { useState } from 'react';
import { projects } from '../../data/homeData';
import Section from '../custom/Section';
import { Box, Typography, Pagination } from '@mui/material';

const itemsPerPage = 6; // Number of items per page

const MostRecentContent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    // Logic to slice items based on currentPage
    const startIndex = (currentPage - 1) * itemsPerPage;
    const slicedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Section title="" items={slicedProjects} top={true} />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <Pagination
                    count={Math.ceil(projects.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handleChangePage}
                    color="primary"
                />
                
            </Box>
        </div>
    );
};

export default MostRecentContent;
