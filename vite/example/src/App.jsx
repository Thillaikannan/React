import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Data';
import Traffic from './Traffic';
import Pro from "./components/common/Pro"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pro />
      <Data />
      <Traffic />
    </>
  )
}

export default App
