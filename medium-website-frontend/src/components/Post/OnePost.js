import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../redux/Post/PostSlice';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const OnePost = ({ postId }) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post.post); 

    useEffect(() => {
        dispatch(getPost(postId)); 
    }, [dispatch, postId]);

    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', marginRight:'20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                                        <Typography variant="h6" component="div" style={{ marginLeft: '10px' }}>
                                            {post.userName}
                                        </Typography>
                                    </div>
                                    <Typography style={{ display: 'flex', justifyContent: 'start', marginTop: '20px', marginLeft:'20px' }} variant="h5" component="div">
                                        {post.title}
                                    </Typography>
                                </div>
                                <Typography style={{ display: 'flex', justifyContent: 'start', marginTop: '10px', marginLeft:'20px' }} variant="body2">
                                    {post.text}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            </CardActions>
                        </Card>
        </div>
    );
};

export default OnePost;
