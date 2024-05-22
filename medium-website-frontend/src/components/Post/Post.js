import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Post = ({ postList }) => {
    const navigate = useNavigate();
    const [usernames, setUsernames] = useState({});

    useEffect(() => {
        const fetchUsernames = async () => {
            try {
                const fetchedUsernames = {};
                for (const post of postList) {
                    console.log(post)
                    const response = await fetch(`http://localhost:8080/users/1`);
                    console.log(response)
                    const username = await response.json();
                    fetchedUsernames[post.user_id] = username;
                }
                setUsernames(fetchedUsernames);
            } catch (error) {
                console.error('Error fetching usernames:', error);
            }
        };

        fetchUsernames();
    }, [postList]);

    const handleFavorite = (postId) => {
        // Favori işlemleri burada gerçekleştirilebilir
    };

    return (
        <div>
            {postList.map(post => (
                <div key={post.id} style={{ marginBottom: '20px' }}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', marginRight: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                    <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                                    <Typography variant="h6" component="div" style={{ marginLeft: '10px' }}>
    Kullanıcı Adı: {usernames[post.user_id]?.name}
</Typography>

                                </div>
                                <Typography style={{ display: 'flex', justifyContent: 'start', marginTop: '20px', marginLeft: '20px' }} variant="h5" component="div">
                                    {post.title}
                                </Typography>
                            </div>
                            <Typography style={{ display: 'flex', justifyContent: 'start', marginTop: '10px', marginLeft: '20px' }} variant="body2">
                                {post.text}
                            </Typography>
                        </CardContent>
                        <CardActions style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <Button size="small" startIcon={<TextsmsIcon style={{ color: '#61677A' }} />} onClick={() => navigate(`postDetail/${post.id}`)}></Button>
                                <Button size="small" startIcon={<FavoriteBorderIcon style={{ color: '#61677A' }} />} onClick={() => handleFavorite(post.id)}></Button>
                            </div>
                            <Button size="small" onClick={() => navigate(`postDetail/${post.id}`)}>Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Post;
