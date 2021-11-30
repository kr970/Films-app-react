import { BASE_URL, DISCOVER_URL, API_KEY, SEARCH_URL, GENRES_URL } from '../../ constants/constants';

function fieldsToCamelCase(obj) {
    const mapped = {};

    Object.keys(obj).forEach(key => {
        const mapKey = (item, index) => index ? item[0].toUpperCase() + item.slice(1) : item;
        const mappedKey = key.split('_').map(mapKey).join('');

        mapped[mappedKey] = obj[key];
    });

    return mapped;
}

function loadFilms(endpoint, page, params, dispatch) {
    fetch(`${BASE_URL}${endpoint}api_key=${API_KEY}&page=${page}${params}`)
        .then(response => response.json())
        .then(data => ({
            page: data.page,
            results: data.results.map(fieldsToCamelCase),
            totalPages: data.total_pages,
            totalResults: data.total_results,
        }))
        .then(data => dispatch({ type: 'SET_FILMS', payload: data }))
        .catch(e => {
            console.log(e)
        })
}

export const setFilms = (page) => (dispatch, getState) => {
    loadFilms(DISCOVER_URL, page, ``, dispatch);
}

export const setFilmsByName = (name, page) => (dispatch, getState) => {
    loadFilms(SEARCH_URL, page, `&query=${name}`, dispatch);
}

const filtersToQueryParams = (sort, genreIds, score) => {
    return `&sort_by=${sort}.desc` +
        `&with_genres=${genreIds.toString()}` +
        `&vote_average.gte=${score[0]}` +
        `&vote_average.lte=${score[1]}`
}

export const setFilmsByFilters = (sort, genreIds, score, page) => (dispatch) => {
    loadFilms(
        DISCOVER_URL,
        page,
        filtersToQueryParams(sort, genreIds, score),
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



