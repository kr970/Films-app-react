import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { logoutAC } from '../../store/actions/formActions';
import { userSelector } from './selector';

import { AppBar, IconButton, Toolbar, Box, Tabs, Tab, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ThemeProvider } from '@mui/material/styles';

import { theme, styles } from './headerStyles';

const Header = () => {
    const dispatch = useDispatch();
    const { userName } = useSelector(userSelector);
    const navigate = useNavigate();
    const [tab, setTab] = useState(0);

    const changeTab = (_, value) => {
        setTab(value);
    };

    const logout = () => {
        dispatch(logoutAC());
        navigate("/login");
    }

    return (
        <AppBar position="static" color={"primary"}>
            <Toolbar>
                <Box sx={styles.tabsContainer}>
                    <ThemeProvider theme={theme}>
                        <Tabs
                            value={tab}
                            onChange={changeTab}
                            aria-label="tabs"
                            textColor="secondary"
                            indicatorColor="secondary"
                        >
                            <Tab label="Films" onClick={() => navigate("/films")} />
                            <Tab label="Favourites" onClick={() => navigate("/favourites")} />
                        </Tabs>
                    </ThemeProvider>
                </Box>
                <Box sx={styles.iconContainer}>
                    <Typography variant="body1" sx={styles.typography}>{userName}</Typography>
                    <IconButton color='inherit' onClick={logout}>
                        <AccountCircle sx={styles.icon} />
                    </IconButton>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;