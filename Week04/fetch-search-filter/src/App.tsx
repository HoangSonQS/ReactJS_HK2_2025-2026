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
  const [filterData, setFilterData] = useState<Post[]>([])
  const [filter, setFilter] = useState<string>('')

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

  useEffect(() => {

    if (!filter) return
    
    const fetchDataFilter = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${filter}`)
      const data = await res.json()
      console.log(data);
      setFilterData(data)
    }
    fetchDataFilter()
  },[filter])

  const filteredPosts = posts.filter((post) => {
    return post.title.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase())
  })

  const displayPost = filter !== '' ? filterData
  : debouncedSearch !== '' ? filteredPosts : posts

  return (
    <>
      <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
      <h4>The filter below is query api that title containt the keywork in the option</h4>
      <select name="" id="" onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="sunt">sunt</option>
        <option value="aut">aut</option>
      </select>
      <ul>
        {displayPost.map((post) => {
          return (
            <li key={post.id}>{post.title}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App
