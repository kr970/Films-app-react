const initialState = {
    favourites: []
}

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            };
        case 'REMOVE_FROM_FAVOURITES':
            const filteredFavourites = state.favourites.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                favourites: filteredFavourites
            };
        default:
            return state;
    }
}