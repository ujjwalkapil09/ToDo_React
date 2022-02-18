import React, { Component, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const FFirsttodo = () => {
  const [items, setitems] = useState("");
  const [arr, inserting] = useState([]);
  const first = (event) => {
    setitems(event.target.value);
  };
  const disp = () => {
    inserting((pre) => {
      return [...pre, items];
    });
    setitems("");
  };
  const delet=(index)=>{
// console.log(value)
inserting((arr) => {
  return arr.filter((arrele, index) => {
    return index !== index;
  });
});
  }
  return (
    <>
      <div className="main_div">
        <div className="inner_div">
          <div className="title"> 
            <h1>ToDo</h1>
          </div>
          <br></br>
          <div className="input_feild">
            <input
              placeholder="Add items"
              type="text"
              value={items}
              onChange={first}
            ></input>
            <Button
              style={{ backgroundColor: "#7CFC00", borderRadius: "50px" }}
              onClick={disp}
            >
              <AddIcon />
            </Button>
          </div>
          <ol>
            {arr.map((val, index) => {
              return (
                <div className="output">
                  <Button onClick={delet}>
                  <HighlightOffIcon /></Button><li 
                  id={index} key={index}>{val}</li>
                </div>
              );
            })}
            <Button><AddIcon></AddIcon></Button>
          </ol>
        </div>
      </div>
    </>
  );
};
export default FFirsttodo;
