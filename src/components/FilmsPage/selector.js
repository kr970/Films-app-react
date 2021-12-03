export const filmsSelector = ({
    filmsData: {
        films,
        pagination,
        search
    }
}) => ({
    films,
    pagination,
    search
});

export const favouritesSelector = ({
    favouritesData: {
        favourites
    }
}) => ({
    favourites
});

