import { createContext, useContext, useEffect, useState } from "react";
import  calcBestMove,{ calcWinner } from "../utils/calcSquares";
import ModalContext from "./ModalContext";

const GameContext=createContext()

function Provider2({children}){
  const [screen,setScreen]=useState('start') //start || game
  const [activeUser,setActiveUser]=useState('x')// x || o
  const [playMode,setPlayMode]=useState('') //user || cpu
  const [squares,setSquares]=useState(new Array(9).fill(''))
  const [xNext,setXNext] =useState(false)
  const [winner,setWinner]=useState(null)
  const [winnerPattern,setWinnerPattern]=useState(null)
  const [ties,setTies]=useState({x:0,o:0,draw:0})
  
  const {showModal,setModalMode,hideModal} = useContext(ModalContext)
    useEffect(() => {
        //check if cpu turn
        let currentUser = xNext ? "o" : "x";
        if (playMode === "cpu" && currentUser !== activeUser && !winner) {
          cpuNextMove(squares);
        }
        checkNoWinner();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xNext, winner, screen]);

    const changePlayMode=mode=>{
        setPlayMode(mode)
        setScreen('game')
    }
    const handleSquareClick = (ix) => {
      if(squares[ix]||winner){
        return
      }      
        let currentUser = xNext ? "o" : "x";
        if (playMode === "cpu" && currentUser !== activeUser) {
          return;
        }
        let ns = [...squares];
        ns[ix] = !xNext ? "x" : "o";
        setSquares(ns);
        setXNext(!xNext);
        checkWinner(ns);
    };
    const checkWinner = (ns) => {
        const isWinner = calcWinner(ns);
        if (isWinner) {
          setWinner(isWinner.winner);
          setWinnerPattern(isWinner.winPattern);
          const nties = { ...ties };
          nties[isWinner.winner] += 1;
          setTies(nties);
          showModal();
          setModalMode("winner");
        }
    };

    const checkNoWinner = () => {
        const moves = squares.filter((sq) => sq === "");
        if (moves.length === 0) {
          setWinner("no");
          let uTies={...ties}
          uTies.draw +=.5
          setTies(uTies)
          
          showModal();
          setModalMode("winner");
        }
    };
    const handleNextRound = () => {
        setSquares(new Array(9).fill(""));
        setXNext(winner === "x");
        setWinner(null);
        setWinnerPattern(null);
        hideModal();
      };
    const handleReset = () => {
        setSquares(new Array(9).fill(""));
        setXNext(false);
        setWinner(null);
        setWinnerPattern(null);
        setActiveUser("x");
        setTies({ x: 0, o: 0 });
        hideModal();
        setScreen("start");
      };
    
    const cpuNextMove = (sqrs) => {
        let bestmove = calcBestMove(sqrs, activeUser === "x" ? "o" : "x");
        let ns = [...squares];
        ns[bestmove] = !xNext ? "x" : "o";
        setSquares(ns);
        setXNext(!xNext);
        checkWinner(ns);
      };
      const valueToShare={
        screen,
        activeUser,
        squares,
        xNext,
        ties,
        winner,
        playMode,
        winnerPattern,
        setActiveUser,
        handleNextRound,
        handleReset,
        changePlayMode,
        handleSquareClick
    }
    return (
        <GameContext.Provider value={valueToShare}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext
export {Provider2}