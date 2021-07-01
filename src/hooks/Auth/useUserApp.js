import { useCallback, useContext } from "react"
import { signIn, signUp } from '../../services/authentication';
import Context from '../../context/userContext'

export const useUserApp = () => {
    const {jwt, setJwt} = useContext(Context);

    const login = useCallback((data) => {
        signIn(data)
            .then(token => {
                window.sessionStorage.setItem('jwt', token);
                setJwt(token);
            })
            .catch(err => {
                console.error(err);
            })
    }, [setJwt]);

    const register = useCallback((data) => {
        return signUp(data)
            .then(res => {
                return res;
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const logOut = useCallback(() => {
        window.sessionStorage.removeItem('jwt');
        setJwt(null);
    }, [setJwt]);

    return { 
        isLogged: Boolean(jwt), 
        register,
        login, 
        logOut
    };
}

