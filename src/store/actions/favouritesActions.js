
export const addToFavouritesAC = (film) => {
    return {
        type: 'ADD_TO_FAVOURITES',
        payload: film
    }
}
export const removeFromFavouritesAC = (film) => {
    return {
        type: 'REMOVE_FROM_FAVOURITES',
        payload: film
    }
}