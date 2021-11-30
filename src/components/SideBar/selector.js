export const allGenresSelector = ({
    filmsData: {
        filterOption: {
            genres
        }
    }
}) => ({
    genres
});

export const filtersSelector = ({
    filmsData: {
        filters: {
            userScore
        }
    }
}) => ({
    userScore
});

export const filmsSelector = ({
    filmsData: {
        pagination
    }
}) => ({
    pagination
});
