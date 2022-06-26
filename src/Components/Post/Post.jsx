import './Post.css'
import CustomButton from './CustomButton';

const Post = (props) => {
    return ( 
        <div className='post'>
            <div className='name'>
                <p>{props.name}</p>
            </div>
            <div className='body'>
                <p>{props.body}</p>
            <div className='button'>
            </div>
            </div>
            <CustomButton />
        </div>
     );
}
 
export default Post;