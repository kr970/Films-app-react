import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';

import { styles } from './filmsPageStyle';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '-1px 1px 8px 0px rgba(34, 60, 80, 0.2)',
    marginTop: theme.spacing(2),
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));


const SearchWrapper = (props) => {

    const [search, setSearch] = useState(props.value);

    const onChange = e => {
        setSearch(e.target.value);
        props.onChange(e.target.value);
    }

    return (
        <Search
            onKeyUp={props.onKeyUp}
            sx={styles.search}
        >
            <SearchIconWrapper >
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onFocus={props.onFocus}
                onMouseOut={props.onMouseOut}
                onChange={onChange}
                sx={styles.searchInput}
                value={search}
            />
        </Search>
    )
}
export default SearchWrapper;

