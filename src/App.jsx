const COHORT_NAME = '2306-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`

import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Posts from './components/Posts'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'


function App() {
  const [posts, setPosts] = useState('')
  

  useEffect(() => {
    async function fetchdata() {

        try {
            const response = await fetch(`${BASE_URL}/posts`)
            const post = await response.json()

            setPosts(data.results)
        } catch ( err) {
            console.log('an error occurred while fetching posts')
        }
    }

    fetchdata()
})

  return (
    <>
     <h1>stranger things</h1>
     <div id="container">
     <div id= "navbar">

     </div>
     <Routes>
      <Route path='/' element={<Posts/>}></Route>
      <Route path='/posts' element={<Posts/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
     </Routes>
    </div>
    </>
  )
}

export default App
