import { useState } from 'react'
import Intro from './components/Intro'
import Game from './components/Game'
import './App.css'

function App() {

  const [isGameOn, setIsGameOn] = useState(true)

  return (
    <>
      {isGameOn ? <Game /> : <Intro />}
    </>
  )
}

export default App
