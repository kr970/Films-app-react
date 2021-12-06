import React from 'react';

import { CircularProgress, Typography, Box } from '@mui/material';

import { styles } from './filmsPageStyle';

const CircularProgressWithLabel = (props) => {
    const roundedAverage = Math.round(props.average * 10);

    return (
        <Box sx={styles.progressBar}>
            <CircularProgress variant="determinate" value={roundedAverage} />
            <Box sx={{ ...styles.progressContainer, ...styles.flexContainer }}>
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${roundedAverage}%`}
                </Typography>
            </Box>
        </Box>
    );
}
export default CircularProgressWithLabel;