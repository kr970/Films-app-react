import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilms, setFilmsByName, changePageAC, setSearchAC, toggleLoadingAC, setFiltersAC } from '../../store/actions/filmsActions';
import { filmsSelector, favouritesSelector } from './selector';
import FilmCard from '../FilmCard/FilmCard';
import Search from './Search';
import SideBar from '../SideBar/SideBar';
import NotFound from '../NotFoundPage/NotFoundPage';
import { FILMSPERPAGE } from '../../ constants/constants';

import { Box, Pagination } from '@mui/material';
import Fade from '@mui/material/Fade';

import { styles } from './filmsPageStyle';

const FilmsPage = () => {
    const { films, pagination, searchValue, genres, userScore, sort } = useSelector(filmsSelector);
    const { favourites } = useSelector(favouritesSelector);
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const hidePagination = films.length < FILMSPERPAGE;

    useEffect(() => {
        if (searchValue) {
            dispatch(setFilmsByName(searchValue, pagination.page))
        } else {
            dispatch(setFilms(pagination.page, sort, genres, userScore))
        }
    }, [pagination.page, searchValue]);

    const handleOnKeyUp = (e) => {
        if (e.keyCode === 13) {
            dispatch(changePageAC(1));
            dispatch(setSearchAC(searchQuery));
            return;
        }
        setSearchQuery(e.target.value);
        if (!e.target.value) {
            dispatch(setFilms(pagination.page, sort, genres, userScore))
        }
    }

    const focusOnSearch = () => {
        setIsSearching(true)
    }

    const onMouseOut = () => {
        setIsSearching(false)
    }

    const changePage = (_, page) => {
        dispatch(changePageAC(page));
    }

    const spawnFilmsCard = () => {
        return (
            films.map(item => <FilmCard
                key={item.id}
                film={item}
                favourites={favourites}
            />)
        )
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Fade in={!isSearching}>
                <Box sx={{ display: isSearching || searchQuery ? 'none' : 'flex' }}><SideBar /></Box>
            </Fade>
                <Box sx={styles.contentContainer}>
                    <Box sx={styles.flexContainer}>
                        <Search onKeyUp={handleOnKeyUp} onFocus={focusOnSearch} onMouseOut={onMouseOut} />
                    </Box>
                    {!films.length ? <NotFound /> :
                    <Box sx={{ ...styles.cardContainer, ...styles.flexContainer }}>
                        {spawnFilmsCard()}
                    </Box>}
                    {hidePagination ? null : 
                    <Box sx={styles.flexContainer}>
                        <Pagination
                            onChange={changePage}
                            page={pagination.page}
                            count={pagination.total_pages}
                            color="primary"
                            size="large" />
                    </Box> }
                </Box>
        </Box>
    )
}


export default FilmsPage;