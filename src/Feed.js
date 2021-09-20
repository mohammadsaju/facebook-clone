import React, { useState, useEffect } from 'react';
import './Feed.css';
import db from './Firebase';
import MasseageSender from './MasseageSender';
import Post from './Post';
import StoryReel from './StoryReel';

const Feed = () => {
    const [ posts, setposts ] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => setposts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()}))))
    }, []);
    return (
        <div className='feed'>
            <StoryReel/>
            <MasseageSender />
            {
                posts.map(post => (
                    <Post
                    key={post.id}
                    profileSrc={post.data.profileSrc}
                    username={post.data.username}
                    image={post.data.image}
                    massege={post.data.massege}
                    timestamps={post.data.timestamps}
                    />
                ))
            }
        </div>
    )
}

export default Feed;
