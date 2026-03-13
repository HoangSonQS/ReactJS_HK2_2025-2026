import { useEffect, useState } from 'react'
import './App.css'

type Post = {
  id: number
  title: string

}


function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [search, setSearch] = useState<string>('')
  const [debouncedSearch, setDebouncedSearch] = useState<string>('')

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)

    return () => clearTimeout(timer)
  }, [search])

  const filteredPosts = posts.filter((post) => {
    return post.title.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase())
  })

  return (
    <>
      <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {search === '' ? (posts.map((post) => {
          return (
            <li key={post.id}>{post.title}</li>
          )
        })) : (filteredPosts.map((post) => {
          return (
            <li key={post.id}>{post.title}</li>
          )
        }))}
      </ul>
    </>
  )
}

export default App
