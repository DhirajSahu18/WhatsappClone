import React, { useContext } from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton, Button } from '@mui/material';

// components
import LoginDialog from './account/LoginDialog';
import ChatDialog from './chat/ChatDialog';

import { AccountContext } from './context/AccountProvider';

const Messenger = () => {

    const { account } = useContext(AccountContext);

    const NavBar = {
        height: "20vh",
        backgroundColor: "#00bfa5",
        boxShadow: "none"
    }

    return (
        <>
            {
                // if login done
                account ? <ChatDialog />
                    :
                    // if login not done
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static" sx={NavBar}>
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    News
                                </Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>                            
                            <LoginDialog />  {/* This is the login dialog */}
                        </AppBar>
                    </Box>
            }
        </>
    )
}

export default Messenger