import { grey } from '@mui/material/colors';

export const styles = {
    paperContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: `calc(100% - 64px)`,
        backgroundSize: 'cover',
    },
    flexContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        color: grey[50], 
        pl: 20, 
        pt: 5, 
        maxWidth: '1000px'
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