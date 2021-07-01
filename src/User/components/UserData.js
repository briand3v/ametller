import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { styles } from '../User.styles';

const UserData = ({ data }) => {
    return (
        <div style={styles.profileContainer}>
            <Grid container spacing={3} style={styles.box}>
                <div style={styles.overlay}></div>
                <Grid item xs={12} sm={2}>
                    <div className="d-flex justify-content-center align-items-center" style={styles.infoImage}>
                        <img alt={`profile-${data.id}`} src={data.picture} width="100" height="100" className="rounded-50" style={{ zIndex: 1 }} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={3} style={{ zIndex: 2 }}>
                    <h1> {`${data.firstName} ${data.lastName}`} </h1>
                    <p> {data.title} </p>
                    <p> {data.gender} </p>
                    <p> {data.phone} </p>
                    <p> {data.email} </p>
                </Grid>
                <Grid item xs={12} sm={7} className="d-flex justify-content-center align-items-end" style={{ zIndex: 3 }}>
                    <h2>Posts</h2>
                </Grid>
            </Grid>
        </div>
    );
}

UserData.propTypes = {
    data: PropTypes.object.isRequired
};

export default UserData;
