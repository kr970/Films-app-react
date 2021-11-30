import React from 'react';
import { AppBar, IconButton, Toolbar, InputBase, Box, Tabs, Tab } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router';



function Header() {
    const navigate = useNavigate();
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Tabs value={0} aria-label="basic tabs example" textColor="secondary" indicatorColor="secondary">
                        <Tab label="Films" onClick={() => navigate("/")} />
                        <Tab label="Favourites" onClick={() => navigate("/favourites")} />
                    </Tabs>
                </Box>
                <Box>
                    <IconButton color='inherit' onClick={() => navigate("/login")}>
                        <AccountCircle sx={{ fontSize: 40 }} />
                    </IconButton>

                </Box>
            </Toolbar>
        </AppBar>
    )
}


export default Header;