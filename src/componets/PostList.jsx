import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Посты не найдены!
      </h1>
    )
  }

  return (
    <div>

      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((posts, index) =>
        <CSSTransition
        key={posts.id} 
        timeout = {500}
        clasname = "post"
        >
          <PostItem remove={remove} number={index + 1} post={posts} />
        </CSSTransition>
          
        )}
      </TransitionGroup>
    </div>
  )
}

export default PostList