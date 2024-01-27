import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Add } from './pages/Add'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/router" exact element={<Home/>} />
        <Route path="/posts/new" element={<Add/>} />
        <Route path="/posts/:id" element={<Post/>} />
      </Routes>
    </div>
  )
}

export default App
