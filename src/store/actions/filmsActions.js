import {
    BASE_URL,
    DISCOVER_URL,
    API_KEY,
    SEARCH_URL,
    GENRES_URL,
    MOVIE_URL
} from '../../ constants/constants';


const toggleErrorAC = (errorMessage = '') => {
    return {
        type: 'TOGGLE_ERROR',
        payload: errorMessage
    }  
}

export const toggleLoadingAC = (value) => {
    return {
        type: 'TOGGLE_LOADING',
        payload: value
    }
}

const loadFilms = (endpoint, page, params, dispatch) => {
    dispatch(toggleLoadingAC(true));
    fetch(`${BASE_URL}${endpoint}api_key=${API_KEY}&page=${page}${params}`)
        .then(response => response.json())
        .then(data => dispatch({ type: 'SET_FILMS', payload: data }))
        .then(() => {
            dispatch(toggleErrorAC())
        })
        .catch(e => {
            dispatch(toggleErrorAC(e.message))
        })
        .finally(() => dispatch(toggleLoadingAC(false)))
}
export const loadFilmAC = (id) => (dispatch) => {
    dispatch(toggleErrorAC());
    fetch(`${BASE_URL}${MOVIE_URL}${id}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => dispatch({ type: 'SET_SELECTED_FILM', payload: data }))
        .then(() => {
            dispatch(toggleErrorAC())
        })
        .catch(e => {
            dispatch(toggleErrorAC(e.message))
        })
}

export const setFilmsByName = (name, page) => (dispatch) => {
    loadFilms(SEARCH_URL, page, `&query=${name}`, dispatch);
}

const filtersToQueryParams = (sort, genreIds, score) => {
    return `&sort_by=${sort}.desc` +
        `&with_genres=${genreIds.toString()}` +
        `&vote_average.gte=${score[0]}` +
        `&vote_average.lte=${score[1]}`
}

export const setFilms = (page, sort, genreIds, score) => (dispatch) => {
    const target = sort || genreIds.toString() || score.toString();
    const params = target ? filtersToQueryParams(sort, genreIds, score) : '';
    loadFilms(
        DISCOVER_URL,
        page,
        params,
        dispatch
    );
}

export const setGenres = () => (dispatch) => {
    fetch(`${BASE_URL}${GENRES_URL}api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => dispatch({ type: 'SET_GENRES', payload: data.genres }))
        .catch(e => {
            console.log(e)
        })
}

export const setFiltersAC = (genres, userScore, sort)  => {
    return {
        type: 'SET_FILTERS',
        payload: {
            genres, 
            userScore,
            sort
        }
    }
}

export const changePageAC = (page) => {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    }
}

export const setSearchAC = (value) => {
    return {
        type: 'SET_SEARCH',
        payload: value
    }
}


