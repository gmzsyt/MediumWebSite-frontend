import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getComment } from '../../redux/Comment/CommentSlice';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import CardActions from '@mui/material/CardActions';


const CommentOnePost = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.comment); 

    useEffect(() => {
        dispatch(getComment(postId)); 
    }, [dispatch, postId]);

    return (
        <div>
            <Typography gutterBottom variant="h5" component="div" style={{marginBottom: '40px'}}>
                                    Comments
                                 </Typography>
                {comments.map(comment => (
                    <div key={comment.id} style={{ marginBottom: '20px' }}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', marginRight:'20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                                        <Typography variant="h6" component="div" style={{ marginLeft: '10px' }}>
                                            {comment.userName}
                                        </Typography>
                                    </div>
                                </div>
                                <Typography style={{ display: 'flex', justifyContent: 'start', marginTop: '10px', marginLeft:'20px' }} variant="body2">
                                    {comment.text}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>       
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
    );

    // return (
    //     <div > 
    //     <Typography gutterBottom variant="h5" component="div" style={{marginBottom: '40px'}}>
    //                                 Comments
    //                             </Typography>
    //         {comments.map(comment => (
    //             <div key={comment.id} style={{ marginBottom: '40px' }}>
    //                 <Card sx={{ maxWidth: 600 ,marginRight: 10}}>
    //                     <CardActionArea>
    //                         <CardContent>
    //                             <Typography variant="body2" color="text.secondary">
    //                                 {comment.text}
    //                             </Typography>
    //                         </CardContent>
    //                     </CardActionArea>
    //                 </Card>
    //             </div>
    //         ))}
    //     </div>
    // );
};

export default CommentOnePost;
