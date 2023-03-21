import React,{useState} from "react";

const Square = (props) => {
  return (
    <div>
       <button  className="squareButton" onClick={props.onClick} >
          {props.value}
    </button>
    </div>
  );
};

export default Square;
