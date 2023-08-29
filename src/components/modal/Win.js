import React, { useContext } from 'react'
import Xicon from '../../icons/Xicon'
import GameContext from '../../context/gameContext'
import Oicon from '../../icons/Oicon'

const Win = () => {
  const{winner,handleNextRound,handleReset}=useContext(GameContext)
  return (
    <div className='score'>
      {winner&&winner !=='no'?(
        <>
        
        <p>you win! </p>
        <h3 className={`score_title ${winner ==='o'?'text-tictactoe-x_light':'text-tictactoe-o_light'}`}>
          {" "} 
          {winner==='x'? <Xicon/> : <Oicon/>}
          Won This Round
        </h3>
        </>
          ):(
            <h3 className='score_title text-tictactoe-text_light'>No Winner</h3>
          )}
        <div className="score_btn">
            <button className='btn btn_sm' onClick={handleReset}>Quit</button>
            <button className='btn btn_sm btn_yellow' onClick={handleNextRound}>next round</button>
        </div>
    
    </div>
  )
}

export default Win