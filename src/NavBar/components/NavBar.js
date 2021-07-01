import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//components
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { useUserApp } from '../../hooks/Auth/useUserApp';

// elements
import ThemeSwitch from '../../components/ThemeSwitch';

const useStyles = makeStyles((theme) => ({
    text: {
        color: theme.palette.text.primary
    }
}));

function Navbar() {
    const {isLogged, logOut} = useUserApp();    
    const classes = useStyles();

    const handleClick = () => logOut();

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" >
                    <Link href="/" className={classes.text}>Home</Link>
                </Typography>

                <div className="d-flex justify-content-end align-items-center" style={{ width: '100%' }}>

                    <ThemeSwitch />

                    {
                        isLogged ? (
                            <Link href="#" onClick={handleClick} className={classes.text}>Log out</Link>
                        ) : (
                            <Link href="/register" className={classes.text}>Log in</Link>
                        )
                    }
                    
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;