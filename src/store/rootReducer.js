import signUpReducer from './reducers/formReducer.js';
import filmsReducer from './reducers/filmsReducer.js';
import favoritesReducer from './reducers/favouriteReducer';
import { combineReducers } from 'redux';
import notificationReducer from './reducers/notificationReducer.js';

export default combineReducers({
    formData: signUpReducer,
    filmsData: filmsReducer,
    favouritesData: favoritesReducer,
    notificationData: notificationReducer
})