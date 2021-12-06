import { FAVOURITES_TYPES } from './types';

export const addToFavouritesAC = (film) => {
    return {
        type: FAVOURITES_TYPES.ADD_TO_FAVOURITES,
        payload: film
    }
}
export const removeFromFavouritesAC = (film) => {
    return {
        type: FAVOURITES_TYPES.REMOVE_FROM_FAVOURITES,
        payload: film
    }
}