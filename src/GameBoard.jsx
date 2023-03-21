import React, { useContext, useState } from "react";
import "./GameBoard.css";
import Square from "./Square";

const squares = Array(9).fill(null);

const GameBoard = () => {
  const [value, setValue] = useState(true);
  const winnersArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  function handleClick(index, e) {
    squares[index] = value ? " X" : "O";
    setValue(!value);
    limitClick(e);
  }
  function handleWinner(squares) {
    for (let i = 0; i < winnersArray.length; i++) {
      const [a, b, c] = winnersArray[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        location.reload();
      }
    }
  }
  function drawSquare(index) {
    return (
      <Square
        key={index}
        value={squares[index]}
        onClick={(e) => {
          handleClick(index, e);
          handleWinner(squares);
        }}
      />
    );
  }
  function limitClick(e) {
    e.target.disabled = true;
  }
  return (
    <>
      <div className="gameBoard">
        {squares.map((item, index) => {
          return drawSquare(index);
        })}
      </div>
    </>
  );
};

export default GameBoard;
