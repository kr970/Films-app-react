import React from 'react';

import { Typography, Box } from '@mui/material';

import { styles } from './notFoundPageStyles';

const NotFound = () => {
    return (
        <Box sx={styles.container}>
            <Typography variant="h1">
                Not found
            </Typography>
        </Box>
    )
}

export default NotFound;