import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Post() {
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
                    <Card key={post.id} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                User name: {post.userName}
                                {console.log(post.userName)}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {post.title}
                            </Typography>
                            <Typography variant="body2">
                                {post.text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        );
    }
}

export default Post;
