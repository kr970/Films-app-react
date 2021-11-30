import React from 'react';

import CircularProgress from '../FilmsPage/CircularProgress';
import { IMAGE_URL_PREFIX } from '../../ constants/constants';
import { addToFavoritesAC } from '../../store/actions/favouritesActions';

import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';


const FilmCard = (props) => {
    const dispatch = useDispatch();

    const addToFavorites = (film) => {
        dispatch(addToFavoritesAC(film));
    }

    const color = props.favourites.some(item => item.id == props.id) ? blue[700] : blue[100];

    return (
        <Card sx={{ width: 210, m: 1, mb: 2 }}>
            <CardMedia
                component="img"
                height="300"
                image={`${IMAGE_URL_PREFIX}${props.path}`}
                alt="Film"
            />
            <CircularProgress average={props.average} />
            <CardContent>
                <Typography sx={{ fontWeight: 600 }} variant="subtitle2" color="text.primary">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.release}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to fav">
                    <FavoriteIcon
                        sx={{ color: color }}
                        onClick={() => addToFavorites(props.film)}
                    />
                </IconButton>
            </CardActions>
        </Card>
    )
}


export default FilmCard;