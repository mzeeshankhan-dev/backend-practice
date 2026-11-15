import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      }
      catch (error) {
        console.error("Error fetching data:", error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchUsers();
  })

  if (loading) return <h2>Loading...</h2>
  return (
    <>
      <h1>Users Data</h1>
      <p>users : {users.length}</p>
      <div>
        {
          users.map((user) => (
            <div key={user.id}>
              <p>{user.id}</p>
              <h2>{user.name}</h2>
              <h4>{user.age}</h4>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
