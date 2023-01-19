import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title}) =>{
  return(
    <div>

    <h1 style={{textAlign:'center'}}>
      {title}
    </h1>

    {posts.map(posts=>
      <PostItem post={posts} key= {posts.id}/>
    )}
    </div>
  )
}

export default PostList