import React, { useContext } from 'react'
import Xicon from '../../icons/Xicon'
import Oicon from '../../icons/Oicon'
import RestartIcon from '../../icons/RestartIcon'
import BoardCard from './BoardCard'
import GameContext from '../../context/gameContext'
import ModalContext from '../../context/ModalContext'

const Board = () => {
  const {squares,xNext,ties,winner,winnerPattern ,playMode,activeUser}=useContext(GameContext)
  const {showModal,setModalMode}= useContext(ModalContext)

  const resetGame=()=>{
    showModal()
    setModalMode('restart')
  }
  const checkUser =(user)=>{
    if(playMode==='cpu'){
      if(user===activeUser){
        return "(you)"
      }else{
        return "(cpu)"
      }
    }
  }
  
  return (
    <div className='board'>
      <div className="board_header flex">
        <div>
          <Xicon/>
          <Oicon/>
        </div>
        <div className='board_turn flex items-center'>
          {!xNext?
            <Xicon size={27} color=''/>:
             <Oicon size={27} color=''/> }
          turn
        </div>
        <div>
          <button className='btn board_restart group' onClick={resetGame}>
            <div className=' group-active:rotate-180 duration-200'>
            <RestartIcon size={20} />
            </div>
          </button>
        </div>
      </div>
      <div className="board_body">
        {squares.map((square,index)=>(
          <BoardCard 
            key={index} 
            index={index} 
            user={square} 
            active={winner &&winnerPattern &&winnerPattern.includes(index)}/>
        ))}
      </div>
      <div className="board_footer">
        <div className='card bg_blue'>
          <p className=' font-bold '>  {checkUser('x')}</p>
          <strong className='text-[1.75rem]'>{ties.x}</strong>
        </div>
        <div className='card bg_light'>
          <p className=' font-bold text-tictactoe-bg_dark '> Round</p>
          <strong className='text-[1.75rem]'>{ties.x+ties.o +1}</strong>
        </div>
        <div className=' bg-tictactoe-o_light card bg_yellow '>
          <p className=' font-bold '>  {checkUser('o')}</p>
          <strong className='text-[1.75rem]'>{ties.o}</strong>
        </div>
      </div>
    </div>
  )
}

export default Board