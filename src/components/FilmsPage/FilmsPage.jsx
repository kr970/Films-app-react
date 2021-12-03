import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilms, setFilmsByName, changePageAC, setSearchAC } from '../../store/actions/filmsActions';
import { filmsSelector, favouritesSelector } from './selector';
import FilmCard from '../FilmCard/FilmCard';
import Search from './Search';
import SideBar from '../SideBar/SideBar';

import { Box, Pagination } from '@mui/material';
import Fade from '@mui/material/Fade';

const Films = () => {
    const { films, pagination, searchValue } = useSelector(filmsSelector);
    const { favourites } = useSelector(favouritesSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchValue) {
            dispatch(setFilmsByName(searchValue, pagination.page))
        } else {
            dispatch(setFilms(pagination.page))
        }
    }, [pagination.page, searchValue]);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleOnKeyUp = (e) => {
        if (e.keyCode === 13) {
            dispatch(changePageAC(1));
            dispatch(setSearchAC(searchQuery));
            return;
        }
        setSearchQuery(e.target.value);
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
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', mt: 1, mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Search onKeyUp={handleOnKeyUp} onFocus={focusOnSearch} onMouseOut={onMouseOut} />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 2, }}>
                    {spawnFilmsCard()}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination
                        onChange={changePage}
                        page={pagination.page}
                        count={pagination.totalPages}
                        color="primary"
                        size="large" />
                </Box>
            </Box>
        </Box>
    )
}


export default Films;