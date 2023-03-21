import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameBoard from './GameBoard'
function App() {
 

  return (
    <div className="App">
      <p className='title'>Tic-Tac-Toe</p>
<GameBoard/>
    </div>
  )
}

export default App
