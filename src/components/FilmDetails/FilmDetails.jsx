import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

import { loadFilmAC } from '../../store/actions/filmsActions';
import { filmsSelector } from './selector';
import { IMAGE_URL_PREFIX } from '../../ constants/constants';

import { Box, Paper, Typography } from '@mui/material';
import { styles } from './filmDetailsStyles';




const FilmDetails = () => {
    const { selectedFilm } = useSelector(filmsSelector);
    const { id } = useParams();
    const dispatch = useDispatch();

    const image = `${IMAGE_URL_PREFIX}${selectedFilm.backdrop_path}`;

    useEffect(() => {
        dispatch(loadFilmAC(id))
    }, []);

    
    return (
        <Paper sx={{...styles.paperContainer, backgroundImage: `url(${image})`}}>
                <Box sx={styles.flexContainer}>
                    <Typography variant="h3" sx={styles.title}>
                        {selectedFilm.original_title}
                    </Typography>
                    <Typography variant="h6" sx={styles.subtitle}>
                        {selectedFilm.original_language}
                    </Typography>
                    <Typography variant="h6" sx={styles.typography}>
                        {selectedFilm.release_date}
                    </Typography>
                    <Typography variant="h6" sx={styles.typography}>
                        {selectedFilm.overview}
                    </Typography>
            </Box>
        </Paper>
    )
}

export default FilmDetails;
