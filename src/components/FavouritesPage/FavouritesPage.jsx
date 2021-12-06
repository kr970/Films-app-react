import React from 'react';
import { useSelector } from 'react-redux';

import FilmCard from '../FilmCard/FilmCard';
import NotFound from '../NotFoundPage/NotFoundPage';

import { styles } from './favouriteStyles';

import { Box } from '@mui/material';


const FavouritePage = () => {
    const favourites = useSelector(state => state.favouritesData.favourites);

    const spawnFilmsCard = () => {
        return (
            favourites.map(item => <FilmCard
                key={item.id}
                film={item}
                favourites={favourites}
            />)
        )
    }

    return (
        !favourites.toString() ? <NotFound /> :
            <Box sx={styles.favourites}>
                {spawnFilmsCard()}
            </Box>
    )
}


export default FavouritePage;