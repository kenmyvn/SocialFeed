import React, { useState } from 'react';
// import * as React from 'react';
// import Button from '@mui/material/Button';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    // function Button() {
    //     return <Button variant="contained">Create</Button>
    // }

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
                <input type='post' class='form-control' value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type='submit'>Create</button>
            {/* <div>Button()</div>> */}
        </form>
     );
}
 
export default CreatePost;