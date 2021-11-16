import signUpReducer from './reducers/formDataReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
    formData: signUpReducer,
})