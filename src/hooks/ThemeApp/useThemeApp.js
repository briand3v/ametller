import { useCallback, useContext } from "react"
import Context from '../../context/userContext'

export const useThemeApp = () => {
    const { theme, setTheme } = useContext(Context);
 
    const goDark = useCallback(() => {
        window.sessionStorage.setItem('theme', 'dark');
        setTheme('dark');
    }, [setTheme]);

    const goLight = useCallback(() => {
        window.sessionStorage.setItem('theme', 'light');
        setTheme('light');
    }, [setTheme]);

    return {
        isDark: Boolean(theme === 'dark'),
        themeColor: theme,
        goDark,
        goLight
    };
}

