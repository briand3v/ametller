import React, { useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';

const useStyles = makeStyles((theme) => ({
    background: {
        background: theme.palette.primary.main,
        height: '100vh'
    }
}));

const LoaderPage = ({ animationData }) => {
    const classes = useStyles();
    const [state] = useState({
        isStopped: false,
        isPaused: false
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className={classes.background}>
            <Lottie options={defaultOptions}
                height={400}
                width={400}
                isStopped={state.isStopped}
                isPaused={state.isPaused} />
        </div>
    );
}

LoaderPage.propTypes = {
    animationData: PropTypes.object.isRequired
};

export default LoaderPage;