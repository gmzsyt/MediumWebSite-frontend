import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';


function Post() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, [])

    if (error) {
        return <div> Error </div>;
    } else if (!isLoaded) {
        return <div> Loading </div>;
    } else {
        return (
            <div>
                {postList.map(post => (
                    <div key={post.id} style={{ marginBottom: '20px' }}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>

                                {/* Avatar, User name, and Post title */}
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', marginRight:'20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                                        <Typography variant="h6" component="div" style={{ marginLeft: '10px' }}>
                                            User name
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
                            <CardActions style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                <Button size="small" onClick={() => navigate(`postDetail/${post.id}`)}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
        );
    }
}

export default Post;
