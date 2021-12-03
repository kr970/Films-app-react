import React from 'react';
import { useSelector } from 'react-redux';
import FilmCard from '../FilmCard/FilmCard';
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
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 2, }}>
                {spawnFilmsCard()}
            </Box>
        </Box>
    )
}


export default FavouritePage;