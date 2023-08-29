import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };

  const textRemoveClick=()=>{
   let newText= text.replace(text,'');
   setText(newText);
   props.showAlert("All text are removed!","success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#5c5a78':'white'}}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={textRemoveClick}>
          Click to remove all texts
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p> 
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      </div>
    </>
  );
}
