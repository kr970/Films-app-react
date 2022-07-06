import React from 'react';

import { Typography, Box } from '@mui/material';

import { styles } from './page404Styles';

const Page404 = () => {
    return (
        <Box sx={styles.container}>
            <Typography variant="h1" component="div">
                404
            </Typography>
            <Typography variant="h3" component="div">
                Page not found
            </Typography>
        </Box>
    )
}

export default Page404;