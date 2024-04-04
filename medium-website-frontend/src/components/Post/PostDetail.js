import { useParams } from 'react-router-dom';
import OnePost from './OnePost';
import CommentOnePost from '../Comments/CommentOnePost';

function PostDetail() {
    let { postId } = useParams();

    return (
        <div style={{ marginTop: 50, display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '100px' }}>
         <OnePost postId = {postId}/>
          <CommentOnePost postId = {postId}/>
        </div>
      );
    }
    

export default PostDetail;
