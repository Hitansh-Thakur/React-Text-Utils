import "./App.css";
import { useState } from "react";
import { Summary } from "./components/Summary";

// Comonents
import { Navbar } from "./components/Navbar";
import { TextBox } from "./components/TextBox";
import { Button } from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [text, setText] = useState("");
  const [Clicked, setClicked] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      Msg: message,
      Type: type,
      close: function close() {
        setClicked(false);
      },
    });
  };




  const handleUpClick = (e) => {
    setClicked(true);
    // console.log(e.target.innerText);
    let util = e.target.innerText.toLowerCase();
    // console.log(typeof(text) != "number");
    if (typeof text != "number") {
      if (util === "uppercase") {
        setText(text.toUpperCase());
        showAlert("Converted to Uppercase", "success");
      } else if (util === "lowercase") {
        setText(text.toLowerCase());
        showAlert("Converted to lowercase", "success");
      }
      else if (util === "capitalize") {
        setText(text.toLowerCase());
        let TextArr = text.split(" ")
        let newArr=[];
        let newword;
        TextArr.forEach(word => {
          // console.log(word);
          newword = word.charAt(0).toUpperCase() + word.slice(1,);
          newArr.push(newword);
        });
        console.log(newArr);

        setText(newArr.join(" "))
        showAlert("Capitalized the text", "success");
      }
    }
    if (util === "remove extra spaces") {
      setText(text.trim().replace(/\s+/g, " "));
      showAlert("Extra Spaces Removed", "success");
    } else if (util === "clear text") {
      setText("");
      showAlert("Text Cleared", "success");
    } else if (util === "copy to clipboard") {
      navigator.clipboard.writeText(text);
      showAlert("Copied to Clipboard", "success");
    }
    // setClicked(false);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };



  // Summary fucntions
  const wordCount = () => {
    if (text.length === 0 || text === "//") return 0;
    return text.trim().split(/\s+/).length; //using redux
  };

  const lineCount = () => {
    if (text.length === 0) return 0;

    return text.trim().split(/\n/).length;
  };

  const charCount = () => {
    if (text.length === 0) return 0;
    return text.trim().length;
  };






  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSearch(e) {
    console.log(e);
  }

  const buttons = [
    "UPPERCASE",
    "lowercase",
    "Remove Extra Spaces",
    "Copy To ClipBoard",
    "Clear Text",
    "Capitalize",
  ];

  function handleClose() {
    setClicked(false);
  }

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      {Clicked && (
        <Alert alert={alert} Dismissible={true} OnClose={handleClose} />
      )}
      <div className="container w-60 mt-5">
        <h1 className="text-primary-emphasis my-3">Convert your text</h1>
        <div className="row">
          <div className="col-9 me-5">
            <TextBox
              value={text}
              onChange={handleChange}
              title="Enter Your text Below"
            />
          </div>
          <div className="col my-4">
            {buttons.map((button) => (
              <div className="w-100 my-2">
                <Button onClick={handleUpClick} content={button} />
              </div>
            ))}
          </div>
        </div>
        <Summary
          WordCnt={wordCount()}
          LineCnt={lineCount()}
          CharCnt={charCount()}
        />
      </div>
    </>
  );
}

export default App;
