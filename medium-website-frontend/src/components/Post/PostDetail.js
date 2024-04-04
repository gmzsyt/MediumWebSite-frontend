import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function PostDetail() {
    let { postId } = useParams();
    const [post,setPost] = useState({})
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8080/posts/${postId}`)
        .then(res => res.json())
        .then(
            (result) => {
            setPost(result)
            setIsLoaded(true)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    return (
        <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '100px' }}>
          <div> // POST
            <Card sx={{maxWidth: 800, marginLeft:10 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Post ID: {postId}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div> // COMMENTS
            <Card sx={{ maxWidth: 600 ,marginRight: 10}}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      );
    }
    

export default PostDetail;
