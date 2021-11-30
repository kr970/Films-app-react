import React from 'react';

import { Box, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';

const RangeSlider = ({ score, setScore }) => {
    const calculateValue = (value) => {
        return 10 * value;
    }
    return (
        <Box sx={{ width: 280 }}>
            <Typography variant="subtitle1">
                User Score
            </Typography>
            <Slider
                value={score}
                min={0}
                step={0.1}
                max={10}
                onChange={setScore}
                valueLabelDisplay="auto"
                scale={calculateValue}
            />
        </Box>
    );
}


export default RangeSlider;