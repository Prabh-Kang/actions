import { useState, useEffect } from "react"

function App() {

  useEffect(() => {
    fetchPosts();
  }, [])

  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => setPosts(data))
  }
  
  return (
    <div className="App">
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export default App
