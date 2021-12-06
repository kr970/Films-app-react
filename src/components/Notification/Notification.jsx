import { useDispatch, useSelector } from 'react-redux';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { setNotification } from '../../store/actions/notificationActions';


const Notification = () => {

    const dispatch = useDispatch();

    const notification = useSelector(state => state.notificationData.notification);

    const onClose = () => dispatch(setNotification());

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={!!notification}
            autoHideDuration={3000}
            message={notification}
            onClose={onClose}
        >
            <Alert>{notification}</Alert>
        </Snackbar>
    )
}

export default Notification;