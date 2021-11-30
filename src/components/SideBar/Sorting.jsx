import React from 'react';


import { Box, Typography, MenuItem, FormControl, Select } from '@mui/material';

const Sorting = ({ sort, selectSort }) => {
    return (
        <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 2 }} variant="subtitle1">
                Sort Results By
            </Typography>
            <FormControl sx={{ width: 280 }} size='small'>
                <Select
                    value={sort}
                    onChange={selectSort}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value='popularity'>Popularity</MenuItem>
                    <MenuItem value='release_date'>Release date</MenuItem>
                    <MenuItem value='vote_average'>Vote average</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}


export default Sorting;