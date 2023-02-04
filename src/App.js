import React, { useMemo, useRef, useState, useEffect } from "react";
import Counter from "./componets/Counter";
import ClassCounter from "./componets/ClassCounter";
import './styles/App.css'
import PostItem from "./componets/PostItem";
import PostList from "./componets/PostList";
import MyButton from "./componets/UI/button/MyButton";
import MyInput from "./componets/UI/input/MyInput";
import PostForm from "./componets/PostForm";
import MySelect from "./componets/UI/select/MySelect";
import PostFilter from "./componets/PostFilter";
import MyModal from "./componets/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  return (
    <div className="App">
      
      <MyButton style = {{marginTop: 30}} onClick ={() => setModal(true)}>
        Создать запись
      </MyButton>
      
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Js posts"} />

    </div>
  );
}

export default App;
