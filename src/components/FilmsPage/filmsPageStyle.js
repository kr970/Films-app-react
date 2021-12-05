import { grey } from '@mui/material/colors';

export const styles = {
    progressBar: {
        position: 'relative', 
        display: 'inline-flex', 
        top: '-18px', 
        left: 10, 
        backgroundColor: grey[100], 
        borderRadius: '50%',
        boxShadow: 2
    },
    progressContainer: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        alignItems: 'center',
    },
    contentContainer: {
        display: 'flex', 
        justifyContent: 'start',
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        mt: 1, 
        mb: 2,
        flexGrow: 1
    },
    flexContainer: {
        display: 'flex', 
        justifyContent: 'center'
    },
    cardContainer: {
        flexWrap: 'wrap', 
        mt: 2,
    },
    search: {
        width: '90%'
    },
    searchInput: {
        width: '100%'
    },
};