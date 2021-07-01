import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useUserApp } from '../../hooks/Auth/useUserApp';
import LoginImage from '../../login.jpg';
import { useHistory } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Form from '../components/Form';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        paddingTop: 20,
        height: '100%'
    },
    text: {
        color: theme.palette.text.primary
    },
    card: {
        borderColor: theme.palette.text.primary,
        borderWidth: 0.1,
        borderStyle: 'solid',
        borderRadius: 15
    },
}));

const initState = {
    username: '',
    password: ''
};

const RegisterPage = () => {
    const history = useHistory();
    const classes = useStyles();
    const [inputs, setInputs] = useState(initState);
    const [isLogin, setIsLogin] = useState(true);
    const { login, register, isLogged } = useUserApp();

    useEffect(() => {
        if (isLogged) {
            history.push('/');
        }
    }, [isLogged, history]);

    const handleChange = ({ target }) => {
        const targetInput = {
            username: 'username',
            password: 'password'
        };
        
        setInputs((old) => ({
            ...old,
            [targetInput[target.name]]: target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isLogin) {
            login(inputs);
        } else {
            register(inputs)
                .then(user => {
                    // register success
                    setIsLogin(true);
                    setInputs({
                        username: user.username,
                        password: ''
                    })
                })
        }
    }

    const switchForm = () => setIsLogin(prevState => !prevState);

    return (
        <div className={`d-flex flex-column justify-content-center ${classes.container}`}>

            <div className="container">
                <div className={`row ${classes.card}`}>

                    <div className="col-md-6 col-sm-12 p-3">
                        <h1>Atmeller</h1>

                        <Form
                            inputs={inputs}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            isLogin={isLogin}
                        />

                        <div className="d-flex justify-content-center">
                            {
                                isLogin ? (
                                    <>
                                        <div className="d-flex align-items-center p-2">Does not have any account yet?&nbsp;</div>
                                    </>
                                ) : (
                                    <>
                                        <div className="d-flex align-items-center p-2">Already have an account?&nbsp;</div>
                                    </>
                                )
                            }
                            <Button variant="contained" color="primary" onClick={switchForm}>
                                { isLogin ? 'create' : 'login'}
                            </Button>
                        </div>
                    </div>
                        
                    <div className="col-md-6 col-sm-12 p-0">
                        <div style={{ backgroundColor: '#fff', padding: 10, borderRadius: 15 }}>
                            <img className="mx-3" src={LoginImage} alt="login" style={{ height: 300 }} />
                            <Typography style={{ color: '#827979', fontWeight: 200 }}>
                                Sign in or create a new account and enjoy this blog
                            </Typography>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RegisterPage;
