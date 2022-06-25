import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';


function App() {

  const [posts, setPosts] = useState()

  return (
    <div>
      <CreatePost />
    </div>
  );
}

export default App;
