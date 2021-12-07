import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RangeSlider from '../SideBar/RangeSlider';
import Genres from '../SideBar/Genres';
import Sorting from '../SideBar/Sorting';
import { setFilms, setFiltersAC, resetFilters } from '../../store/actions/filmsActions';
import { filtersSelector } from './selector';
import { MIN_USER_SCORE, MAX_USER_SCORE } from '../../ constants/constants';

import { Box, Button } from '@mui/material';

import { styles } from './sideBarStyles';

const SideBar = () => {
    const dispatch = useDispatch();

    const { genres, userScore, sort } = useSelector(filtersSelector);

    const [selectedGenres, setSelectedGenres] = useState(genres);
    const toggleGenre = (genre) => {
        const genres = !selectedGenres.includes(genre) ?
            [...selectedGenres, genre] : selectedGenres.filter(item => item !== genre);
        setSelectedGenres(genres);
    };

    const [score, setScore] = useState(userScore.length ? userScore : [MIN_USER_SCORE, MAX_USER_SCORE]);
    const setUserScore = (_, value) => {
        setScore(value);
    };

    const [selectedSort, setSelectedSort] = useState(sort);
    const selectSort = (e) => {
        setSelectedSort(e.target.value);
    };

    const apply = () => {
        dispatch(setFiltersAC(selectedGenres, score, selectedSort));
        dispatch(setFilms(1, selectedSort, selectedGenres, score));
    }
    const reset = () => {
        setSelectedGenres([]);
        setScore([MIN_USER_SCORE, MAX_USER_SCORE]);
        setSelectedSort('');
        dispatch(resetFilters());
        dispatch(setFilms(1, '', [], []))
    }
    return (
        <Box sx={styles.container}>
            <Sorting sort={selectedSort} selectSort={selectSort} />
            <RangeSlider score={score} setScore={setUserScore} />
            <Genres toggleGenre={toggleGenre} selectedGenres={selectedGenres} />
            <Box sx={styles.buttonBox}>
                <Button sx={styles.button} size='small' variant='contained' onClick={apply}>
                    Apply
                </Button>
                <Button sx={styles.button} size='small' variant='contained' onClick={reset}>
                    Reset
                </Button>
            </Box>
        </Box>
    )
}

export default SideBar;