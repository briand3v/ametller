import React, { useState } from 'react';
import animationData from '../../loading-circles.json';
import PropTypes from 'prop-types';

// components
import LoaderPage from '../../components/Loader';
import PostItem from '../../components/PostItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// hooks
import { useUserPosts } from '../../hooks/User/useUserPosts';

const UserPostList = ({ userId }) => {
    const sum = 10;
    const [count, setCount] = useState(10);
    const { loading, posts } = useUserPosts(userId, count);

    if (loading) {
        return <LoaderPage animationData={animationData} />
    }

    const onLoadMore = () => setCount(prevState => prevState + sum);

    return (
        <>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    {
                        posts.map((post, index) => (
                            <Grid key={index} item>
                                <PostItem
                                    key={index}
                                    data={post}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            <div className="d-flex justify-content-center" style={{ height: 100, paddingTop: 20, paddingBlock: 20 }}>
                <Button variant="contained" color="primary" style={{ width: 120 }} onClick={onLoadMore}>
                    Load more
                </Button>
            </div>
        </>
    );
}

UserPostList.propTypes = {
    userId: PropTypes.string.isRequired
}

export default UserPostList;
