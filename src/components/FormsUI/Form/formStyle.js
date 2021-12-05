import { lightBlue } from '@mui/material/colors';

export const styles = {
    box: {
        p: 2,
        border: '2px solid',
        borderColor: lightBlue[800],
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    link: {
        color: lightBlue[800],
    },
    title: {
        color: lightBlue[800],
        textTransform: 'uppercase',
        mb: 3
    },
    icon: {
        fontSize: 50,
        color: lightBlue[900]
    },
    button: {
        background: lightBlue[800],
        m: 2,
        p: 1
    },
    container: {
        mt: 10
    }
};