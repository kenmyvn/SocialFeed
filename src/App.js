import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';


function App() {

  const [posts, setPosts] = useState([{name: 'Kendall', post: 'Hello'}])

  function addNewPost(post){
    
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }

  return (
    <div>
      <CreatePost addNewPostProperty={addNewPost} />
      <DisplayPosts parentPosts={posts} />

    </div>
  );
}

export default App;
