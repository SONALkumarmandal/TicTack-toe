import React from "react";
import Squares from "./Squares.jsx";
import { useState } from "react";
function Board() {
  const [xClicked, setxClicked] = useState(null);
  const [clicked, setClicked] = useState(Array(9).fill(null));
  const winner = (clicked)=>{
    const winningWays=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i=0;i<winningWays.length;i++){
      const [a,b,c] = winningWays[i];
      if(clicked[a] && clicked[a]==clicked[b] && clicked[a]==clicked[c]){
        return clicked[a]
      }
    }
    return null;
  }

  function handleSquareClick(ind) {
   
    if(clicked[ind] || winner(clicked)){
      return;
    }


    if (!xClicked) {
      const arr = clicked.slice();
      arr[ind] = "X";
      setClicked(arr);
      setxClicked(!xClicked);
    } else {
      const arr = clicked.slice();
      arr[ind] = "O";
      setClicked(arr);
      setxClicked(!xClicked);
    }
  }
   
  const greet = winner(clicked);
  let status;
  if (greet) {
    status = 'Winner: ' + greet;
  } else {
    status = 'Next player: ' + (xClicked ? 'O' : 'X');
  }

  return (
    <div className=" bg-zinc-800 w-full h-full flex gap-5 justify-center ">
      
      <div className="h-1/2 w-1/3 text-center content-center text-white text-3xl bg-zinc-900 rounded-2xl">
          {status}
      </div>

      <div className="bg-zinc-800 w-1/3 h-1/2 grid grid-cols-3 grid-rows-3 rounded-md  gap-2">
      <Squares
        onSquareClick={() => handleSquareClick(0)}
        val={clicked[0]}
      />
      <Squares
        onSquareClick={() => handleSquareClick(1)}
        val={clicked[1]}
      />
      <Squares
        onSquareClick={() => handleSquareClick(2)}
        val={clicked[2]}
      />
      <Squares
        onSquareClick={() => handleSquareClick(3)}
        val={clicked[3]}
      />
      <Squares
        onSquareClick={() => handleSquareClick(4)}
        val={clicked[4]}
      />
      <Squares
        onSquareClick={() => handleSquareClick(5)}
        val={clicked[5]}
      />
      <Squares
        onSquareClick={() => handleSquareClick(6)}
        val={clicked[6]}
      />
      <Squares
        onSquareClick={() => handleSquareClick(7)}
        val={clicked[7]}
      />
      <Squares
        onSquareClick={() => handleSquareClick(8)}
        val={clicked[8]}
      />
      </div>
       
    </div>
  );
}

export default Board;
