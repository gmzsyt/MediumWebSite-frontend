import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../redux/Post/PostSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const OnePost = ({ postId }) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post.post); 

    useEffect(() => {
        dispatch(getPost(postId)); 
    }, [dispatch, postId]);

    return (
        <div>
            <Card sx={{ maxWidth: 800, marginLeft: 10 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { post.text} 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default OnePost;
