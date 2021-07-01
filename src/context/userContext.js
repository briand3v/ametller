import React, { useState } from 'react';

const Context = React.createContext({});

export function UseContextProvider({ children }) {
    const [jwt, setJwt] = useState(
        () => window.sessionStorage.getItem('jwt')
    );
    const [theme, setTheme] = useState(
        () => window.sessionStorage.getItem('theme')
    );
    
    return <Context.Provider value={{ jwt, setJwt, theme, setTheme}}>
        { children }
    </Context.Provider>
}

export default Context;