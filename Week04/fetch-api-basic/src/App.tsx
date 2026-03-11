import { useEffect, useState } from 'react'
import './App.css'
import type { User } from './service/User'

function App() {
  const [data, setData] = useState<User[]>([])

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const dataFetch = await res.json()      
    //   setData(dataFetch)
    // }
    // fetchData() FETCH DATA WITH ASYNC / AWAIT

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setData(data)) //FETCH DATA WITH FETCH -> THEN

  }, [])

  return (
    <>
      {data.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.email}</li>
          </ul>
        )
      })}
    </>
  )
}

export default App
