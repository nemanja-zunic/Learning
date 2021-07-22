import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './Home.css';

function Home() {

  const [posts, setPosts] = useState();

  useEffect(() => { getPosts() }, []);

  const getPosts = async () => {
    const responce = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log('Posts:', responce)

    setPosts(responce);
  };

  return (
    <div className='title'>

      {posts && posts.data.map((post, index) => (

        <div
          className='post'
          key={index}
        >

          <h1>{post.title}</h1>

          <p>{post.body}</p>

        </div>

      ))}

    </div>
  );
}

export default Home;