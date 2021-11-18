import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text removed", "danger");
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };

  const handleExtraSpcClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <h1> {props.heading} </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mt-3 mx-1"
            onClick={handleLowClick}
          >
            Convert to Lowecase
          </button>
          <button
            className="btn btn-primary mt-3 mx-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mt-3 mx-1"
            id="myBox"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mt-3 mx-1"
            onClick={handleExtraSpcClick}
          >
            Remv Extra Spc
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters,{" "}
          {0.008 * text.split(" ").length} minutes read{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter some text to Preview"}</p>
      </div>
    </div>
  );
}

export default TextForm;
