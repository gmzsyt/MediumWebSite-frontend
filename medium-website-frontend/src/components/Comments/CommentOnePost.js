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
        <div > 
        <Typography gutterBottom variant="h5" component="div" style={{marginBottom: '40px'}}>
                                    Comments
                                </Typography>
            {comments.map(comment => (
                <div key={comment.id} style={{ marginBottom: '40px' }}>
                    <Card sx={{ maxWidth: 600 ,marginRight: 10}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {comment.text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default CommentOnePost;
