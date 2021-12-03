import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';


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
    return (
        <Search
            onKeyUp={props.onKeyUp}
            sx={{ width: '90%' }}
        >
            <SearchIconWrapper >
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onFocus={props.onFocus}
                onMouseOut={props.onMouseOut}
                sx={{ width: '100%' }}
            />
        </Search>
    )
}
export default SearchWrapper;

