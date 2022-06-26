import './Post.css'

const Post = (props) => {
    return ( 
        <div className='post'>
            <div className='name'>
                <p>{props.name}</p>
            </div>
            <div className='body'>
                <p>{props.body}</p>
            </div>
        </div>
     );
}
 
export default Post;