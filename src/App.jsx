import { useState } from 'react'
import Header from './Header.jsx'
import Box from './components/Box.jsx'

function App() {
  const [mode, setMode] = useState("encode");

  return (
    <>
      <Header setMode={setMode}/>
      <Box mode={mode}/>
    </>
  )
}

export default App
