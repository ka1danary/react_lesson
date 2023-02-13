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
import MySelect from "./components/UI/select/MySelect";


function App() {

    const [posts, setPosts] = useState ([
            {id : 1, title : 'aa', body : 'gg'},
            {id : 2, title : 'bb', body : 'dd'},
            {id : 3, title : 'hh', body : 'cc'},

    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts () {
        console.log('ОТРАБОАТЛА ФУНКЦИЯ СОРТЕД ПОСТС')
        if (selectedSort) {
            return ([...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))) // не возвращает сразу отсортированный массив, а мутирует переданный в нее
        }
        return posts

    }

    const sortedPost =  getSortedPosts()

    const createPost = (newPost) => {
        setPosts([...posts, newPost ])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
    }

  return (
    <div className="App">
        <Counter/>
        <Input/>
        <PostForm create = {createPost}/>
        <hr style={{margin : '15px 0'}}/>
        {/*поиск*/}
        <MyInput
            placeholder = "Поиск"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />
        <MySelect
            value={selectedSort}
            onChange={sort => setSelectedSort(sort)} // сразу передаем выбранную пользователем опцию
            defaultValue="Сортировка по"
            options={[
                {value : 'title', name : 'По названиям'},
                {value : 'body', name : 'По описанию'}
            ]}
        />

        {posts.length != 0
            ?
            <PostsList remove={removePost} posts={sortedPost} title="Список постов 1"/>
            :
            <h1 style={{textAlign : 'center'}}>
                Постов нет
            </h1>

        }

    </div>
  );
}

export default App;
