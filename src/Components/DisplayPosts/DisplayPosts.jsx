import Post from "../Post/Post";

const DisplayPosts = (props) => {


    return ( 
        <table>
            <tbody>
            {props.parentPosts.map((post) => {
                return (
                    <Post name={post.name} body={post.post}/>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;