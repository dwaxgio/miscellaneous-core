import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// custom components
import TodoList from './assets/components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList/>
      <hr/>
    </>
  )
}

export default App
