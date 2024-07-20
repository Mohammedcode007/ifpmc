import React, { useState } from 'react';
import { Item } from '../../data/homeData';
import Section from '../custom/Section';
import { Box, Typography, Pagination, PaginationItem } from '@mui/material';

interface MostRecentContentProps {
    projects: Item[];
}

const itemsPerPage = 6;

const MostRecentContent: React.FC<MostRecentContentProps> = ({ projects }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };

    // Logic to slice items based on currentPage
    const startIndex = (currentPage - 1) * itemsPerPage;
    const slicedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div style={{ backgroundColor: 'white' }}>

            <Section title="" items={slicedProjects} top={true} withImage />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                <Typography
                    onClick={handlePreviousPage}
                    sx={{ cursor: 'pointer', marginRight: '16px', color: currentPage === 1 ? 'gray' : 'blue' }}
                    component="span"
                >
                    Previous
                </Typography>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handleChangePage}
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: 'transparent',
                                    color: '#C99700',
                                    fontWeight: 'bold',
                                },
                                '& .MuiTouchRipple-root': {
                                    display: 'none',
                                },
                            }}
                        />
                    )}
                />
                <Typography
                    onClick={handleNextPage}
                    sx={{ cursor: 'pointer', marginLeft: '16px', color: currentPage === totalPages ? 'gray' : 'blue' }}
                    component="span"
                >
                    Next
                </Typography>
            </Box>
        </div>
    );
};

export default MostRecentContent;
