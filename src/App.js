import React, { useRef, useState } from "react";
import Counter from "./componets/Counter";
import ClassCounter from "./componets/ClassCounter";
import './styles/App.css'
import PostItem from "./componets/PostItem";
import PostList from "./componets/PostList";
import MyButton from "./componets/UI/button/MyButton";
import MyInput from "./componets/UI/input/MyInput";
import PostForm from "./componets/PostForm";
import MySelect from "./componets/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: `ааа`, body: `бб` },
    { id: 2, title: `гг2`, body: `аа` },
    { id: 3, title: `вв3`, body: `яя` }
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const getSortedPosts = () => {
    console.log('Функция вызвалась')
    if(selectedSort){
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }

  const sortedPosts = getSortedPosts()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">

      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MyInput
      value={searchQuery}
      onChange = { e => setSearchQuery(e.target.value)}
      placeholder='Поиск...'
      
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }

        ]}
      />

      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title={"Js posts"} />
        :
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      }


    </div>
  );
}

export default App;
