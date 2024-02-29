import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Data from './Components/Data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Data/>
      </div>
    </>
  )
}

export default App
