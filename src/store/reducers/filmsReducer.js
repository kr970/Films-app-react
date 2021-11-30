const initialState = {
    films: [],
    pagination: {
        page: 1,
        totalPages: 0,
        totalResults: 0
    },
    filterOption: {
        genres: []
    },
    filters: {
        genres: [],
        userScore: [0, 100]
    }
}

export default function filmsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FILMS':
            return {
                ...state,
                films: action.payload.results,
                pagination: {
                    page: action.payload.page,
                    totalPages: action.payload.totalPages,
                    totalResults: action.payload.totalResults
                }
            };
        case 'SET_GENRES':
            return {
                ...state,
                filterOption: {
                    genres: action.payload
                }
            }
        default:
            return state;
    }
}