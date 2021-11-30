import signUpReducer from './reducers/formReducer.js';
import filmsReducer from './reducers/filmsReducer.js';
import addToFavoritesReducer from './reducers/favouriteReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    formData: signUpReducer,
    filmsData: filmsReducer,
    favouritesData: addToFavoritesReducer
})