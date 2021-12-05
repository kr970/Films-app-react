
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';


const Error = () => {
    const error = useSelector(state => state.filmsData.error);

    return (
        <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={error}
            autoHideDuration={6000}
            message={error}
        >
            <Alert severity="error">{error}</Alert>
        </Snackbar>
    )
}

export default Error;