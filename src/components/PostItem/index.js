import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageLazy from '../ImageLazy';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
        maxWidth: 345,
        height: 450,
        maxHeight: 450,
        backgroundColor: theme.palette.primary.main
    },
    avatar: {
        backgroundColor: '#a1a1a1a1',
    },
}));

const PostItem = ({ data }) => {
    const classes = useStyles();

    return (
        <Card className={`${classes.root} post-container`}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <Link to={`/user/${data.owner.id}`} className="profile">
                            <ImageLazy
                                alt={`image-${data.owner.id}`}
                                src={data.owner.picture}
                                height={30}
                                width={30}
                                rounded={true}
                            />
                        </Link>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={`${data.owner.firstName} ${data.owner.lastName}`}
                subheader="September 14, 2016"
            />
            <ImageLazy
                alt={`image-${data.id}`}
                src={data.image}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.text}
                </Typography>
            </CardContent>
        </Card>
    );
}

PostItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostItem;