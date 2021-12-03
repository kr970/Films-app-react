import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

import { loadFilmAC } from '../../store/actions/filmsActions';
import { filmsSelector } from './selector';
import { IMAGE_URL_PREFIX } from '../../ constants/constants';
import CircularProgress from '../FilmsPage/CircularProgress';

import { Box, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const FilmDetails = () => {

    const { selectedFilm } = useSelector(filmsSelector);
    const { id } = useParams();
    const dispatch = useDispatch();

    const styles = {
        paperContainer: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            backgroundImage: `url(${IMAGE_URL_PREFIX}${selectedFilm.backdropImage})`,
            height: `calc(100% - 64px)`,
            backgroundSize: 'cover',
        }
    };

    useEffect(() => {
        dispatch(loadFilmAC(id))
    }, []);

    console.log(selectedFilm);

    return (
        <Paper style={styles.paperContainer}>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
                <Box>
                    <img
                        src={`${IMAGE_URL_PREFIX}${selectedFilm.image}`}
                        alt={selectedFilm.title}
                        loading="lazy"
                        height="500"
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', color: grey[50], pl: 2, maxWidth: '600px' }}>
                    <Typography variant="h5" sx={{ mb: 4 }}>
                        {selectedFilm.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        {selectedFilm.language}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        {selectedFilm.releaseDate}
                    </Typography>
                    <Box>
                        <CircularProgress average={selectedFilm.average} />
                    </Box>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        {selectedFilm.overview}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default FilmDetails;
