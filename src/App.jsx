import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'

function Posts() {
  console.log("Posts")
  return (
  <div>
      <h2>posts</h2>
  </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>stranger things</h1>
    <Posts />
     <Routes>
      <Route path='/' element={<Posts/>}></Route>
      <Route path='/posts' element={<Posts/>}></Route>
     </Routes>
    </>
  )
}

export default App
