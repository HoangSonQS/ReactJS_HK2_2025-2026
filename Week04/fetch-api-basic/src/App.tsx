import { useEffect, useState } from 'react'
import './App.css'
import type { User } from './service/User'

function App() {
  const [data, setData] = useState<User[]>([])

  //Bai 3
  const [userId, setUserId] = useState<string>('')
  const [user, setUser] = useState<User>()

  //Bai 2
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const dataFetch = await res.json()      
    //   setData(dataFetch)
    // }
    // fetchData() FETCH DATA WITH ASYNC / AWAIT

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(data => setData(data)) //FETCH DATA WITH FETCH -> THEN

    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) 
          setError('Error when fetching API')
          console.log('Loi khi duong dan sai');
        const dataFetch = await res.json()      
        setData(dataFetch)
      } catch (err){
        setError(`Error: ${err}`)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }
    fetchData()
  }, [])

  const fetchUserById = (id: string):void  => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => setUser(data))
  }

  if (loading) return <p>Loading...</p>

  if (error) return <p style={{color:'red'}}>{error}</p>

  return (
    <>
      {data.map((item) => {
        return (
          <>
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.email}</li>
            </ul>
          </>
        )
      })}
      <input type="text" value={userId} onChange={e => setUserId(e.target.value)}/>
      <button onClick={() => fetchUserById(userId)}>Find</button>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </>
  )
}

export default App
