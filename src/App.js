import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import './App.css'
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPosts] = useState([{name: 'Kendall', post: 'Hello'}])

  function addNewPost(post){
    
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h4 style={{margin: '1em'}}><NavBar /></h4>
        <div className='background-color'>
          <div className='border-box'>
            <CreatePost addNewPostProperty={addNewPost} />
          </div>
        <div className='border-box-2'>
          <DisplayPosts parentPosts={posts} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
