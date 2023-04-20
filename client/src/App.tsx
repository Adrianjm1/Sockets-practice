import './App.css'
import io from 'socket.io-client'
import { useState, useEffect } from 'react'

const socket = io('http://localhost:5000')

function App() {
  const [state, setState] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(state)

    socket.emit('message', state)
    // Agregar aquí la lógica de presentación del formulario
  };


  useEffect(() => {
    socket.on('message', (message) => console.log(message))


    return () => {
      socket.off('message', message => console.log(message))
    }
  }, [])




  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange} />
        <button type='submit' >Send</button>
      </form>

    </>
  )
}

export default App
