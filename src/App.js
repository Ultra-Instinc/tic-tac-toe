import React, { useContext } from 'react'
import Board from './components/board/Board'
import Start from './components/start/Start'
import './index.css'
import Modal from './components/modal/Modal'
import GameContext from './context/gameContext'

const App = () => {
  const {screen} = useContext(GameContext)
  return (
    <div className='app'>

    <div className='container'>
      {screen==='start'  ?  <Start/>  :  <Board/>}
      
      

    
    </div>
    <Modal/>
    </div>
  )
}

export default App