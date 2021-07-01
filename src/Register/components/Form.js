import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(1),
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        color: theme.palette.text.primary
    }
}));

const Form = ({ inputs, isLogin, onChange, onSubmit }) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <form className="d-flex flex-column" style={{ width: '60%' }} onSubmit={onSubmit}>
                <FormControl>
                    <InputLabel htmlFor="component-simple">Username</InputLabel>
                    <Input className={classes.input} id="component-simple" name="username" value={inputs.username} onChange={onChange} />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="component-simple">Password</InputLabel>
                    <Input className={classes.input} type="password" id="component-simple" name="password" value={inputs.password} onChange={onChange} />
                </FormControl>
                <input className="m-3" type="submit" value={isLogin ? 'Login' : 'Register'} />
            </form>
        </div>
    )
}

Form.propTypes = {
    inputs: PropTypes.object.isRequired,
    isLogin: PropTypes.bool.isRequired,
    onchange: PropTypes.func.isRequired,
    onsubmit: PropTypes.func.isRequired
};

export default Form;