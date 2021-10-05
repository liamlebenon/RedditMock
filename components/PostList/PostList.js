import './PostList.css'
import { Post } from '../Post/Post';
import { useEffect, useState } from 'react';

export const PostList = () => {
    
    useEffect(() => {
        fetchPosts();
      }, []);
      
      const [posts, setPosts] = useState([]);
      const fetchPosts = async () => {
        const data = await fetch(
          'https://www.reddit.com/r/funny.json'
        );
        const response = await data.json();
        let posts = await response.data.children;
        console.log(posts);
        setPosts(posts);
      }

    return(
        <div className='postlist'>
            {posts.map(post => (
                <div className='post'>
                    <Post title={post.data.title}
                          author={post.data.author}
                          src={post.data.url}
                          userText={post.data.selftext}/>
                </div>
            ))}
        </div>
    )
}