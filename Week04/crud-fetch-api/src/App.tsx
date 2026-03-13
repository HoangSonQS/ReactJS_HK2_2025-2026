import { useEffect, useState } from 'react'
import './App.css'


type Todo = {
  id: string
  title: string
}

const API_URL = 'http://localhost:3001/todos'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTile] = useState<string>('')
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(API_URL)
      // console.log(res);
      // console.log(await res.json());
      setTodos(await res.json())
    }
    fetchTodos()
  }, [])

  const addTodo = async (newTodos: string) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        title: newTodos
      })
    })
    const data = await res.json()
    setTodos([...todos, data])
    setTile('')
  }

  const deleteTodo = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = async (id: string, title: string) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        title: title
      })
    })

    const updatedTodo = await res.json()
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo))
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <h1 style={{
        color: '#e94560',
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '30px',
        letterSpacing: '1px',
        textShadow: '0 0 20px rgba(233,69,96,0.4)',
      }}>
        📝 Todo List
      </h1>

      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '30px',
        width: '100%',
        maxWidth: '500px',
      }}>
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={e => setTile(e.target.value)}
          style={{
            flex: 1,
            padding: '10px 16px',
            borderRadius: '8px',
            border: '1px solid #e94560',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            fontSize: '15px',
            outline: 'none',
          }}
        />
        <button
          onClick={() => {
            if (editingId) {
              updateTodo(editingId, title)
              setEditingId(null)
            } else {
              addTodo(title)
            }
          }}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: '#e94560',
            color: '#fff',
            fontWeight: 600,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseOut={e => (e.currentTarget.style.opacity = '1')}
        >
          Thêm
        </button>
      </div>

      <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {todos.map((item) => {
          return (
            <ul
              key={item.id}
              style={{
                listStyle: 'none',
                margin: 0,
                padding: '14px 18px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '10px',
                border: '1px solid rgba(233,69,96,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backdropFilter: 'blur(6px)',
              }}
            >
              <li style={{ color: '#888', fontSize: '12px', minWidth: '24px' }}>{item.id}</li>
              <li style={{ color: '#f0f0f0', fontSize: '15px', flex: 1 }}>{item.title}</li>
              <button
                onClick={() => deleteTodo(item.id)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: '#c0392b',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseOut={e => (e.currentTarget.style.opacity = '1')}
              >
                Xoa
              </button>
              <button
                onClick={() => {
                  setTile(item.title)
                  setEditingId(item.id)
                }}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: '#2980b9',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseOut={e => (e.currentTarget.style.opacity = '1')}
              >
                Cap nhat
              </button>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default App
