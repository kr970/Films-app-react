import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

const CircularProgressWithLabel = (props) => {
  const roundedAverage = Math.round(props.average * 10);
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={roundedAverage} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${roundedAverage}%`}
        </Typography>
      </Box>
    </Box>
  );
}
export default CircularProgressWithLabel;