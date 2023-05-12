import "./App.css";
import { Navbar } from "./components/Navbar";
import { TextBox } from "./components/TextBox";
import { Button } from "./components/Button";

import { useState } from "react";
import { Summary } from "./components/Summary";



function App() {
  const [text, setText] = useState("");
  const [WordCnt, setWordCnt] = useState(0);
  const [LineCnt, setLineCnt] = useState(0);
  const [CharCnt, setCharCnt] = useState(0);

  function handleUpClick(e) {
    // console.log(e.target.innerText);
    let transformTo = e.target.innerText.toLowerCase();
    // console.log(typeof(text) != "number");
    if(typeof(text) != "number"){
        if (transformTo === "uppercase") {
        setText(text.toUpperCase())
      }

      else if (transformTo === "lowercase") {
        setText(text.toLowerCase())
      }

      // TODO: this function should only be called first time the button is clicked.  

     
  }

  }


  const countWords = () => {
    if(text.length === 0) return 0;

    return text.trim().split(/\s+/).length; //using redux
  };
  
  
  


  
  let TextArr=[];
  function handleChange(event){
  // let pressedChar = event.nativeEvent.data;
  setText(event.target.value);

  // TextArr.push(pressedChar)
  // console.log(TextArr);

// Word Count
// let count = 0
//   if(pressedChar == " " || null){
//     count++;
//   }
  // setWordCnt(TextArr.length)
  

      
      



    // Char Count
    // if (text != "") {
      // TextArr = text.split("");
      // setCharCnt(TextArr.length);
    // }



     // Line Count 
    // TextArr = text.split("\n");
    // let newText = text;
    
    // while(newText.at(-1)==="\n") {
    //   newText = newText.slice(0,-1);
    //   TextArr.length--;
    // }

    // setLineCnt(TextArr.length);   
    // console.log(text.split(""));
    
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
        <Summary 
          WordCnt = {countWords()}
          LineCnt = {LineCnt}
          CharCnt = {CharCnt}
        />
      </div>
    </>
  );
}

export default App;



