import React, { useState } from 'react';

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type='name' class='form-control' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='post' textarea class='form-control' rows="3" value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type='submit' class='btn btn-primary' style={{'margin-top': '1em', 'align-self': 'right'}}>Create</button>
        </form>
     );
}
 
export default CreatePost;