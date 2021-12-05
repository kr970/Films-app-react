export const filmsSelector = ({
    filmsData: {
        films,
        pagination,
        search,
        filters: {
            genres,
            userScore,
            sort
        }
    }
}) => ({
    films,
    pagination,
    searchValue: search,
    genres,
    userScore,
    sort
});

export const favouritesSelector = ({
    favouritesData: {
        favourites
    }
}) => ({
    favourites
});

