import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import CircularProgress from '../FilmsPage/CircularProgress';
import { IMAGE_URL_PREFIX } from '../../ constants/constants';
import { addToFavouritesAC, removeFromFavouritesAC } from '../../store/actions/favouritesActions';
import imgNotFound from '../../image/notFound.png';

import { styles } from './filmCardStyles'

import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { blue } from '@mui/material/colors';

const FilmCard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToFavourites = film => dispatch(addToFavouritesAC(film));
    const removeFromFavourites = film => dispatch(removeFromFavouritesAC(film));

    const isFavourite = props.favourites.some(item => item.id === props.film.id);
    const filmImg = props.film.poster_path ? `${IMAGE_URL_PREFIX}${props.film.poster_path}` : imgNotFound;

    const clickOnImg = id => {
        navigate(`/films/${id}`);
    };

    return (
        <Card sx={styles.card}>
            <CardMedia
                sx={styles.cardMedia}
                component="img"
                height="300"
                image={filmImg}
                alt="Film"
                onClick={() => clickOnImg(props.film.id)}
            />
            <CircularProgress average={props.film.vote_average} />
            <CardContent sx={styles.cardContent}>
                <Typography sx={styles.title} variant="subtitle2" color="text.primary">
                    {props.film.original_title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.film.release_date}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to fav"
                    sx={{ color: isFavourite ? blue[700] : blue[100] }}
                    onClick={() => isFavourite ? 
                        removeFromFavourites(props.film) : addToFavourites(props.film)}
                >
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default FilmCard;