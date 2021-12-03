import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { logoutAC } from '../../store/actions/formActions';
import { userSelector } from './selector';

import { AppBar, IconButton, Toolbar, Box, Tabs, Tab, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';


const Header = () => {
    const dispatch = useDispatch();
    const { userName } = useSelector(userSelector);
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutAC());
        navigate("/login");
    }

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Tabs value={0} aria-label="basic tabs example" textColor="secondary" indicatorColor="secondary">
                        <Tab label="Films" onClick={() => navigate("/films")} />
                        <Tab label="Favourites" onClick={() => navigate("/favourites")} />
                    </Tabs>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant="body1" sx={{ pt:1.5 }}>{userName}</Typography>
                    <IconButton color='inherit' onClick={logout}>
                        <AccountCircle sx={{ fontSize: 40 }} />
                    </IconButton>

                </Box>
            </Toolbar>
        </AppBar>
    )
}


export default Header;