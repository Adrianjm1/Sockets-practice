import { useState } from 'react'
import './App.css'
import io from 'socket.io-client'


const socket = io('http://localhost:5000')

function App() {

  return (
    <>
      Hola
    </>
  )
}

export default App
