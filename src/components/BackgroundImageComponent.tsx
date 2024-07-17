
"use client";

import React from 'react';
import styles from './component.module.css';
import { Typography } from '@mui/material';
import CustomButton from './custom/CustomButton';
import { colors } from '@/utils/colors';

const BackgroundImageComponent: React.FC = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <Typography variant="h4" gutterBottom sx={{ width: '50%' }}>
                    We are redefining research and development standards
                </Typography>
                <CustomButton
                    onClick={handleClick}
                    customColor="white"
                    width="175px"
                    height="48px"
                    backgroundColor={colors.active}
                    borderRadius="4px"
                >
                    Contact Us           
                         </CustomButton>
            </div>
        </div>
    );
};

export default BackgroundImageComponent;

