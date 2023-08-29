import React, { useContext } from 'react'
import ModalContext from '../../context/ModalContext'
import GameContext from '../../context/gameContext'

const Restart = () => {
  const {handleReset}=useContext(GameContext)
  const {hideModal} =useContext(ModalContext)
  return (
    <div className='restart'>
        <h3 className="restart_title">Restart Game</h3>
        <div className="restart_btn">
            <button className='btn btn_sm' onClick={hideModal}>no, cancel</button>
            <button className='btn btn_sm btn_yellow' onClick={handleReset}>yes, restart</button>
            <button></button>
        </div>
    </div>
  )
}

export default Restart