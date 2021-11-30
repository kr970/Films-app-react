import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilms, setFilmsByName } from '../../store/actions/filmsActions';
import { filmsSelector } from './selector';
import FilmCard from '../FilmCard/FilmCard';
import Search from './Search';
import SideBar from '../SideBar/SideBar';

import { Box, Pagination } from '@mui/material';


const Films = () => {

    const { films, pagination } = useSelector(filmsSelector);
    const favourites = useSelector(state => state.favouritesData.favourites);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setFilms(pagination.page))
    }, []);

    const [searchQuery, setSearchQuery] = useState('');

    const handleOnKeyUp = (e) => {
        if (e.keyCode === 13) {
            dispatch(setFilmsByName(searchQuery, pagination.page))
            return;
        }
        setSearchQuery(e.target.value);
    }

    const handleOnClick = (e) => {

    }

    const spawnFilmsCard = () => {
        return (
            films.map(item => <FilmCard
                key={item.id}
                path={item.posterPath}
                title={item.originalTitle}
                release={item.releaseDate}
                average={item.voteAverage}
                film={item}
                id={item.id}
                favourites={favourites}
            />)
        )
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', mt: 1, mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Search onKeyUp={handleOnKeyUp} />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 2, }}>
                    {spawnFilmsCard()}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination
                        onClick={handleOnClick}
                        count={pagination.totalPages}
                        color="primary"
                        size="large" />
                </Box>
            </Box>
        </Box>
    )
}


export default Films;