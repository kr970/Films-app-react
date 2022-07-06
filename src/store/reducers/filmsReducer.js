const initialState = {
    films: null,
    pagination: {
        page: 1,
        total_pages: 0,
        total_results: 0
    },
    filterOption: {
        genres: []
    },
    filters: {
        genres: [],
        userScore: [],
        sort: '',
    },
    search: '',
    selectedFilm: {},
    isLoading: false,
    error: ''
}

export default function filmsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FILMS':
            return {
                ...state,
                films: action.payload.results,
                pagination: {
                    page: action.payload.page,
                    total_pages: action.payload.total_pages,
                    total_results: action.payload.total_results
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
        case 'SET_FILTERS':
            return {
                ...state,
                filters: {
                    genres: action.payload.genres,
                    userScore: action.payload.userScore,
                    sort: action.payload.sort
                },
                pagination: {
                    ...initialState.pagination
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
        case 'TOGGLE_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'TOGGLE_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'LOGOUT':
            return initialState;
        case 'RESET_FILTERS':
            return {
                ...state,
                filters: {
                    ...initialState.filters
                },
                pagination: {
                    ...state.pagination,
                    page: action.payload
                }
            }
        default:
            return state;
    }
}