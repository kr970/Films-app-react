const initialState = {
    favourites: []
}

export default function addToFavoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            };
        default:
            return state;
    }
}