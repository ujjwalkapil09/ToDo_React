import React from "react";

const ToDo = (props) => {
 
  return (
    <>
      
      <div className="exit">
        <button onClick={()=>{
          props.onSelect(props.id);
        }}>x</button>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDo;