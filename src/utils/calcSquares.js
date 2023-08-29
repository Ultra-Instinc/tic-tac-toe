const WinPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  export function calcWinner(squares) {
    for (let i = 0; i < WinPatterns.length; i++) {
      const [a, b, c] = WinPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[b], winPattern: WinPatterns[i] };
      }
    }
    return null;
  }

  export default function calcBestMove(squares,player){
    const getArrayDuplicatedCount=(arr=>{
      let count=0
      arr.forEach(i=>{
        if(squares[i]===player){
          count +=1
        }
      })
      return count
    })
    const sortedWinPatterns = WinPatterns.sort((a,b)=>{
      const acount = getArrayDuplicatedCount(a)
      const bcount = getArrayDuplicatedCount(b)
      return bcount - acount
    })
    for (let i=0;i<sortedWinPatterns.length;i++){
      let val = sortedWinPatterns[i].find((el)=>{
        if(squares[el]===""){
          return el + ""
        }
        return null
      })
      if(!val){
        continue
      }else {
        return +val
      }
    }
    return null
    
  }