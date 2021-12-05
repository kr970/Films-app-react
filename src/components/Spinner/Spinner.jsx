import React from 'react';
import { useSelector } from 'react-redux';

import { filmsSelector } from './selector';

import { Backdrop, CircularProgress } from '@mui/material';

import { styles } from './spinnerStyles';

const Spinner = () => {
    const { isLoading } = useSelector(filmsSelector);

    return (
        <div>
            <Backdrop sx={styles.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
export default Spinner;