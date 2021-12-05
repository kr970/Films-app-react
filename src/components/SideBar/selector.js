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
        filters
    }
}) => ({
    ...filters
});

export const filmsSelector = ({
    filmsData: {
        pagination
    }
}) => ({
    pagination
});
