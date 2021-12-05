import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        secondary: {
            main: '#fff',
        }
    }
});

export const styles = {
    tabsContainer: {
        flexGrow: 1
    },
    iconContainer: {
        display: 'flex', 
        flexDirection: 'row'
    },
    typography : {
        pt: 1.5
    },
    icon: {
        fontSize: 40
    }
}