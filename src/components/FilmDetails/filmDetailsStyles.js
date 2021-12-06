import { grey } from '@mui/material/colors';

export const styles = {
    paperContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: `calc(100% - 64px)`,
        backgroundSize: 'cover',
        pt: 5
    },
    flexContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        color: grey[50], 
        ml: 20, 
        maxWidth: '1000px',
        backgroundColor: 'rgba(27, 31, 34, 0.1)'
    },
    typography : {
        mb: 1
    },
    title: {
        mb: 5
    },
    subtitle: {
        mb: 1, 
        textTransform: 'uppercase'
    }
};