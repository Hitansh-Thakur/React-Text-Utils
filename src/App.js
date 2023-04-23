import "./App.css";
import { Navbar } from "./components/Navbar";
import { TextBox } from "./components/TextBox";
import { Button } from "./components/Button";

import { useState } from "react";



function App() {
  const [text, setText] = useState("Enter your text here");
  
  let Returned = false; 
  function handleUpClick(e) {
    // console.log(e.target.innerText);
    let transformTo = e.target.innerText.toLowerCase();
    console.log(typeof(text) != "number");
    if(typeof(text) != "number"){
        if (transformTo === "uppercase") {
        setText(text.toUpperCase())
      }

      else if (transformTo === "lowercase") {
        setText(text.toLowerCase())
      }

      // TODO: this function should only be called first time the button is clicked.  

      else if(transformTo === "word count" && Returned === false){
        console.log("hasdhl");
        let arrLength = text.split(" ").length;
        // console.log(arrLength);
        setText(arrLength);
        Returned = true;
      }

      else if (transformTo === "character count") {
        let arrLength = text.split("").length;
        console.log(arrLength);
        setText(arrLength);
      }
    

    else if (transformTo === "line count") {
      // debugger;
      let arrLength = text.split("\n").length;
      let newText = text;
      
      while(newText.at(-1)==="\n") {
        console.log(newText.at(-1)==="\n");
        newText = newText.slice(0,-1);
        arrLength--;
      }
      console.log(newText.slice(0,-1));
      setText(arrLength);
    }
  }

  }
  
  function handleChange(event){
    console.log("Changed");
    // console.log(event.target);
    setText(event.target.value);
  }

  const buttons = [
    "UPPERCASE",
    "lowercase",
    "Word Count",
    "Character Count",
    "Line Count",
    "lowercase"
  ]

  return (
    <>
      <Navbar />
      <div className="container w-60 mt-5">
        <h1 className="text-primary-emphasis my-3">Convert your text</h1>
        <div className="row">
          <div className="col-9 me-5">
            <TextBox value={text} onChange={handleChange} title="Enter Your text Below" />
          </div>
          <div className="col my-4">
            {buttons.map(button => 
              <div className="w-100 my-2">
                <Button onClick={handleUpClick} content={button} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



