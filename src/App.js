import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import './App.css'

function App() {

  const [posts, setPosts] = useState([{name: 'Kendall', post: 'Hello'}])

  function addNewPost(post){
    
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box'>
            <CreatePost addNewPostProperty={addNewPost} />
          </div>
        </div>
        <div className='border-box'>
          <DisplayPosts parentPosts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
