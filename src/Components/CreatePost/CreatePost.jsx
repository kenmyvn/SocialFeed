import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='name' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='post' value={post} onChange={(event) => setPost(event.target.value)} />
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatePost;