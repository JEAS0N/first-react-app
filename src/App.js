import React, { useState } from "react";
import Counter from "./componets/Counter";
import ClassCounter from "./componets/ClassCounter";
import './styles/App.css'
import PostItem from "./componets/PostItem";
import PostList from "./componets/PostList";

function App() {

const [posts, setPosts] = useState([
  {id:1, title:`JavaScript`, body: `Description`},
  {id:2, title:`JavaScript 1`, body: `Description`},
  {id:3, title:`JavaScript 2`, body: `Description`}
])




  return (
    <div className="App">

    <form>
      <input type="text" placeholder = "Название поста"/>
      <input type="text" placeholder = "Описание поста"/>
      <button>Создать пост</button>
    </form>

    <PostList posts={posts} title = {"Js posts"}/>

    </div>
  );
}

export default App;
