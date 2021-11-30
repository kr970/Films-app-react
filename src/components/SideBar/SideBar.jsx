import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RangeSlider from '../SideBar/RangeSlider';
import Genres from '../SideBar/Genres';
import Sorting from '../SideBar/Sorting';
import { setFilms, setFilmsByFilters } from '../../store/actions/filmsActions';
import { filmsSelector } from './selector';

import { Box, Button } from '@mui/material';


const SideBar = () => {
    const dispatch = useDispatch();
    const { pagination } = useSelector(filmsSelector);

    const [selectedGenres, setSelectedGenres] = useState([]);
    const toggleGenre = (genre) => {
        const genres = !selectedGenres.includes(genre) ?
            [...selectedGenres, genre] : selectedGenres.filter(item => item !== genre);
        setSelectedGenres(genres);
    };

    const [score, setScore] = useState([0, 10]);
    const setUserScore = (_, value) => {
        setScore(value);
    };

    const [sort, setSort] = useState('');
    const selectSort = (e) => {
        setSort(e.target.value);
    };

    const apply = () => {
        dispatch(setFilmsByFilters(sort, selectedGenres, score, pagination.page))
    }
    const reset = () => {
        setSelectedGenres([]);
        setScore([0, 10]);
        setSort('');
        dispatch(setFilms(1))
    }
    return (
        <Box sx={{ maxWidth: '300px', ml: 2, mt: 2 }}>
            <Sorting sort={sort} selectSort={selectSort} />
            <RangeSlider score={score} setScore={setUserScore} />
            <Genres toggleGenre={toggleGenre} selectedGenres={selectedGenres} />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button
                    sx={{ mr: 1, pl: 3, pr: 3 }}
                    size='small'
                    variant='contained'
                    onClick={apply}
                >
                    Apply
                </Button>
                <Button
                    sx={{ ml: 1, pl: 3, pr: 3 }}
                    size='small'
                    variant='contained'
                    onClick={reset}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    )
}

export default SideBar;