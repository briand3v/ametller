import React from 'react';
import LoaderPage from '../../components/Loader';
import animationData from '../../loading.json';
import { makeStyles } from '@material-ui/core/styles';

import { useUserProfile } from '../../hooks/User/useUserProfile';
import { useParams } from "react-router-dom";
import UserPostList from '../components/UserPostList';
import UserData from '../components/UserData';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.main
    },

}));


const ProfilePage = () => {
    const classes = useStyles();

    const { id } = useParams();
    const { loading, user } = useUserProfile(id);

    if (loading) {
        return <LoaderPage animationData={animationData} />
    }

    return (
        <div className={classes.container}>
            <UserData data={user} />

            <div className="posts-container">
                <br />
                <UserPostList userId={id} />
            </div>
        </div>
    );
}

export default ProfilePage;
