import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setGenres } from '../../store/actions/filmsActions';
import { allGenresSelector } from './selector';

import { Button, Typography } from '@mui/material';

import { styles } from './sideBarStyles';

const Genres = ({ selectedGenres, toggleGenre }) => {

    const { genres } = useSelector(allGenresSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setGenres())
    }, []);

    const spawnGenres = () => {
        return (
            genres.map(item =>
                <Button
                    sx={styles.genresButton}
                    size='small'
                    key={item.id}
                    variant={selectedGenres.includes(item.id) ? 'contained' : 'outlined'}
                    onClick={() => toggleGenre(item.id)}
                >
                    {item.name}
                </Button>
            )
        )
    }

    return (
        <>
            <Typography variant="subtitle1">Genres</Typography>
            {spawnGenres()}
        </>
    )
}


export default Genres;