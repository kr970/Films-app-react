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
    search: '',
    selectedFilm: {}
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
        case 'SET_SELECTED_FILM': 
            return {
                ...state,
                selectedFilm: action.payload
            }
        case 'SET_GENRES':
            return {
                ...state,
                filterOption: {
                    genres: action.payload
                }
            }
        case 'CHANGE_PAGE':
            return {
                ...state, 
                pagination: {
                    ...state.pagination,
                    page: action.payload
                }
            }
        case 'SET_SEARCH': 
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}