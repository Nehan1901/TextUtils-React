import React, { useState } from "react";
// import event from "event-module";

// console.log(useState)

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Upeercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","Success");
  };
  const handleLowClick = () => {
    // console.log("Upeercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","Success");
  };
  const handleSpaces = () => {
    let newText = text.trim();
    setText(newText);
    props.showAlert("Extra Spaces were cleared!","Success");
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared!","Success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    
  };
  const handleCopy = (event) => {
    let newText = text.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to Clipboard!","Success");
    // setText(newText);
  };

  const [text, setText] = useState(""); //react hooks
  //   setText("abcdefghijkl"); correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode === 'dark' ? '#042743' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn-primary mx-1" onClick={handleUpClick}>
          Convert Text to Uppercase
        </button>
        <button className="btn-secondary mx-1" onClick={handleLowClick}>
          Convert Text to Lowercase
        </button>
        <button className="btn-success mx-1" onClick={handleSpaces}>
          Remove White Spaces
        </button>
        <button className="btn-danger mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn-warning mx-1" onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above text to preview your text"}</p>
      </div>
    </>
  );
}
