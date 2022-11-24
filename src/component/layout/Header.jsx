import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
    return(
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Digital Book Journal
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;