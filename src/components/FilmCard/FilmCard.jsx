import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import CircularProgress from '../FilmsPage/CircularProgress';
import { IMAGE_URL_PREFIX } from '../../ constants/constants';
import { addToFavouritesAC, removeFromFavouritesAC } from '../../store/actions/favouritesActions';

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

    const clickOnImg = id => {
        navigate(`/films/${id}`);
    };

    return (
        <Card sx={{ width: 210, m: 1, mb: 2 }}>
            <CardMedia
                sx={{ cursor: 'pointer' }}
                component="img"
                height="300"
                image={`${IMAGE_URL_PREFIX}${props.film.posterPath}`}
                alt="Film"
                onClick={() => clickOnImg(props.film.id)}
            />
            <CircularProgress average={props.film.voteAverage} />
            <CardContent>
                <Typography sx={{ fontWeight: 600 }} variant="subtitle2" color="text.primary">
                    {props.film.originalTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.film.releaseDate}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to fav">
                    <FavoriteIcon
                        sx={{ color: isFavourite ? blue[700] : blue[100] }}
                        onClick={() => isFavourite ?
                            removeFromFavourites(props.film) : addToFavourites(props.film)}
                    />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default FilmCard;