import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import OnePost from './OnePost';

function PostDetail() {
    let { postId } = useParams();

    return (
        <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '100px' }}>
         <OnePost postId = {postId}/>
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
