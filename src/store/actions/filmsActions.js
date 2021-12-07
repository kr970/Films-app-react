import {
    BASE_URL,
    DISCOVER_URL,
    API_KEY,
    SEARCH_URL,
    GENRES_URL,
    MOVIE_URL
} from '../../ constants/constants';
import { FILMS_TYPES } from './types';


const toggleErrorAC = (errorMessage = '') => {
    return {
        type: FILMS_TYPES.TOGGLE_ERROR,
        payload: errorMessage
    }
}

export const toggleLoadingAC = (value) => {
    return {
        type: FILMS_TYPES.TOGGLE_LOADING,
        payload: value
    }
}

const loadFilms = async (endpoint, page, params, dispatch) => {
    try {
        dispatch(toggleLoadingAC(true));
        const response = await fetch(`${BASE_URL}${endpoint}api_key=${API_KEY}&page=${page}${params}`)
        const data = await response.json()
        dispatch({ type: FILMS_TYPES.SET_FILMS, payload: data })
        dispatch(toggleErrorAC())
    }   catch(e) {
        dispatch(toggleErrorAC(e.message))
    }   finally {
        dispatch(toggleLoadingAC(false))
    }
}

export const loadFilmAC = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${BASE_URL}${MOVIE_URL}${id}?api_key=${API_KEY}`)
        const data = await response.json()
        dispatch({ type: FILMS_TYPES.SET_SELECTED_FILM, payload: data })
        dispatch(toggleErrorAC())
    } catch(e) {
        dispatch(toggleErrorAC(e.message))
    }
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

export const resetFilters = () => {
    return {
        type: FILMS_TYPES.RESET_FILTERS
    }
}

export const setGenres = () => async (dispatch) => {
    try {
        const response = await fetch(`${BASE_URL}${GENRES_URL}api_key=${API_KEY}`)
        const data = await response.json()
        dispatch({ type: FILMS_TYPES.SET_GENRES, payload: data.genres })
        dispatch(toggleErrorAC())
    } catch(e) {
        dispatch(toggleErrorAC(e.message))
    }
}

export const setFiltersAC = (genres, userScore, sort) => {
    return {
        type: FILMS_TYPES.SET_FILTERS,
        payload: {
            genres,
            userScore,
            sort
        }
    }
}

export const changePageAC = (page) => {
    return {
        type: FILMS_TYPES.CHANGE_PAGE,
        payload: page
    }
}

export const setSearchAC = (value) => {
    return {
        type: FILMS_TYPES.SET_SEARCH,
        payload: value
    }
}


