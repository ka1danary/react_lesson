import React from 'react';
import Post from "./Post";

const PostsList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map( (post, index = 1) =>
                <Post remove={remove} number={index+1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostsList;