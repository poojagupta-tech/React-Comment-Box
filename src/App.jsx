import React from 'react'
import Header from './Components/Header'
import Post from './Components/Post'
import CommentBox from './Components/CommentBox'
function App() {
  return (
    <div className='w-full h-screen flex flex-col bg-gray-200'>
      <Header />
      <Post />
      
    </div>
  )
}

export default App