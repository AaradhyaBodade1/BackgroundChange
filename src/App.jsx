import React, { useState } from "react";
import Buttons from "./Components/Buttons";
function App() {
  const [Colour, setColour] = useState("");
  const changeColour = (newColour) => {
    setColour(newColour);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: Colour }}
    >
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Buttons Colour="olive" onClick={changeColour}></Buttons>
          <br />
          <Buttons Colour="brown" onClick={changeColour}></Buttons>
          <br />
          <Buttons Colour="yellow" onClick={changeColour}></Buttons>
          <br />
          <Buttons Colour="black" onClick={changeColour}></Buttons>
          <br />
          <Buttons Colour="maroon" onClick={changeColour}></Buttons>
          <br />
          <Buttons Colour="teal" onClick={changeColour}></Buttons>
          <br />
          <Buttons Colour="pink" onClick={changeColour}></Buttons>
          <br />
          <Buttons Colour="gray" onClick={changeColour}></Buttons>
          <br />
          <Buttons Colour="purple" onClick={changeColour}></Buttons>
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
