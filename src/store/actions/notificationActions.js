import { NOTIFICATION } from './types';

export const setNotification = (message = '') => ({
    type: NOTIFICATION.SET_NOTIFICATION,
    payload: message
});