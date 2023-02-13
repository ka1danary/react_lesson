import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import './styles/App.css'
import './styles/Post.css'
import './styles/Input.css'
import './styles/Counter.css'
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";


function App() {

    const [posts, setPosts] = useState ([
            {id : 1, title : 'JS', body : 'Description'},
            {id : 2, title : 'JS', body : 'Description'},
            {id : 3, title : 'JS', body : 'Description'},

    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost ])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }


    // Управление данными из управляемого инпута

    const bodyInputRef = useRef()

  return (
    <div className="App">
        <Counter/>
        <Input/>
        <PostForm create = {createPost}/>


        {posts.length != 0
            ?
            <PostsList remove={removePost} posts={posts} title="Список постов 1"/>
            :
            <h1 style={{textAlign : 'center'}}>
                Постов нет
            </h1>

        }

    </div>
  );
}

export default App;
