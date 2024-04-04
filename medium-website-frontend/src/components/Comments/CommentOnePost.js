import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getComment } from '../../redux/Comment/CommentSlice';

const CommentOnePost = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.comment); 

    useEffect(() => {
        dispatch(getComment(postId)); 
    }, [dispatch, postId]);

    return (
        <div>
            <Card sx={{ maxWidth: 600 ,marginRight: 10}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Comments
                        </Typography>
                        {comments.map(comment => (
                            <div key={comment.id}>
                                <Typography variant="body2" color="text.secondary">
                                    {comment.text}
                                </Typography>
                            </div>
                        ))}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default CommentOnePost;
