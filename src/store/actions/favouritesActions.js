
export const addToFavoritesAC = (film) => {
    return {
        type: 'ADD_TO_FAVOURITES',
        payload: film
    }
}