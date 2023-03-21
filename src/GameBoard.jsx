import React, { useContext, useState } from "react";
import "./GameBoard.css";
import Square from './Square'

const squares = Array(9).fill(null);
const GameBoard = () => {
const [value,setValue] = useState(true)

function handleClick(index){
    squares[index] = value?" X":'O'
    setValue(!value)
}
function drawSquare(index){
    return (
        <Square value = {squares[index]} 
         onClick={()=>{handleClick(index)}}
        />
    )
}
  return (

    <div className="gameBoard">
        {
         squares.map((item,index)=>{
            return(
            drawSquare(index)
            )
         })
        }
    </div>
  );
};

export default GameBoard;
