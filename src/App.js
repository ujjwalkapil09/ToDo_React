import { type } from "@testing-library/user-event/dist/type";
import React, { Component, useState } from "react";
import ToDo from "./ToDo";

const App = () => {
  const [newt, change] = useState("");
  const [newItems, chaarr] = useState([]);
  const deleteitems = (id) => {
    chaarr((newItems) => {
      return newItems.filter((arrele, index) => {
        return index !== id;
      });
    });
  };
  const changeinp = (event) => {
    change(event.target.value);
  };
  const showLsit = () => {
    chaarr((pre) => {
      return [...pre, newt];
    });
    change("");
  };

  return (
    <div className="main_div">
      <div className="inner_div">
        <div className="title">
          <h1>ToDo list</h1>
        </div>
        <hr />

        <div className="input_feild">
          <input
            type="text"
            value={newt}
            onChange={changeinp}
            placeholder="Add a item"
          />

          <button onClick={showLsit}> + </button>
        </div>
        <div className="output">
          <ol>
            {newItems.map((newIt, index) => {
              return (
                <ToDo
                  text={newIt}
                  key={index}
                  id={index}
                  onSelect={deleteitems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default App;
