import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import animationData from '../../loading.json';

// components
import PostItem from '../../components/PostItem';
import LoaderPage from '../../components/Loader';
import Button from '@material-ui/core/Button';

// hooks
import { usePosts } from '../../hooks/Post/usePosts';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: 50
    },
    text: {
        color: theme.palette.text.primary
    },
    button: {
        width: 100
    }
}));

const PostsListPage = () => {
    const classes = useStyles();
    const sum = 10;
    const [count, setCount] = useState(10);
    const { loading, posts } = usePosts(count);

    if (loading) {
        return <LoaderPage animationData={animationData} />
    } 

    const onLoadMore = () => setCount(prevState => prevState + sum);

    return (
        <div className={classes.container}>
            <h1 className={`p-3 ${classes.text}`}> Ametller blog </h1>

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
                <Button variant="contained" color="primary" className={classes.Button} onClick={onLoadMore}>
                    Load more
                </Button>
            </div>
        </div>
    );
}

export default PostsListPage;
