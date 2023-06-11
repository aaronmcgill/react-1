import React from "react";
import { useState } from "react";
import colors from "./colors";

function Color() {
  // const [color, setColor] = useState({color})
  const [color, setColor] = useState("red");

  for (const color of colors) {
    console.log(color);
  }

  return (
    <>
      <div id="app">
        <h1> Colour world! </h1>
        <h2 id="current-color">current {color}</h2>
        <div className="colors">colours filler </div>
      </div>
    </>
  );
}

export default Color;
