import Xicon from "../../icons/Xicon"
import Oicon from "../../icons/Oicon"
import { useContext } from "react"
import GameContext from "../../context/gameContext"
import { isDisabled } from "@testing-library/user-event/dist/utils"


const BoardCard = ({user='nouser',active,index}) => {
  const {handleSquareClick,winner} =useContext(GameContext)
  return (
    <div className={`relative card ${active&&user==='x'&&'shadow_blue'} ${active&& user==='o'&&'shadow_yellow'} ${!active ?'shadow_gray':'active'} ${winner&&isDisabled}`}
    
    onClick={()=>handleSquareClick(index)}
    >
      <div className={`absolute rounded-md z-[99] inset-1   bg-gradient-to-tr from-tictactoe-x_light to-tictactoe-o_light duration-200 opacity-0 hover:opacity-10`}></div>
        {user==='x'&&<Xicon size={100} color={active&&'dark'}/>}
        {user==='o'&&<Oicon size={100} color={active&&'dark'}/>}
    </div>
  )
}

export default BoardCard