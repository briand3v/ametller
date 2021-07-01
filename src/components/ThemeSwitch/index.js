import React, { useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { makeStyles } from '@material-ui/core/styles';
import { useThemeApp } from "../../hooks/ThemeApp/useThemeApp";

const useStyles = makeStyles((theme) => ({
    background: {
        background: theme.palette.primary.main
    }
}));

const ThemeSwitch = () => {
    const { isDark, goDark, goLight} = useThemeApp();
    const [isDarkMode, setDarkMode] = useState(isDark);
    const classes = useStyles();

    const handleClick = (checked) => {
        if (isDark) {
            goLight();
        } else { goDark(); }
        // animation
        setDarkMode(checked)
    }

    return (
        <div className={`d-flex align-items-center ${classes.background}`}>
            <DarkModeSwitch
                style={{ marginRight: '1.5rem'}}
                checked={isDarkMode}
                onChange={handleClick}
                size={30}
            />
        </div>
    );
}

export default ThemeSwitch;