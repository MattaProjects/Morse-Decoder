import { useState } from 'react'
import Header from './Header.jsx'
import Box from './components/Box.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Box/>
    </>
  )
}

export default App
