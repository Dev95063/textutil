import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = (text.toUpperCase());
    setText(newText)
    props.showAlert("Converted to Upper Case!", "success")
  } 

  const handleLoClick = ()=>{
    let newText = (text.toLowerCase());
    setText(newText)
     props.showAlert("Converted to Lower Case!", "success")
  } 

  const handleExtraSpaceClick = ()=>{
    let newText = (text.split(/[ ]+/));
    setText(newText.join(" "))
     props.showAlert("Extra spaces are removed!", "success")
  } 

    const handleClearClick = ()=>{
    let newText = ("");
    setText(newText)
    props.showAlert("Clear all Text!", "success")
  } 

  const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  let words = text.trim().split(/\s+/).filter((element) => element.length !== 0).length;
  return (
    <>
     <h1 className='my-3' >{props.heading}</h1>
     <div >
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#426a90ff':'white' }} placeholder="Enter text here"  value={text} rows="8"  id="myBox"></textarea>
     </div>
     <div className='my-2' >
     <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
     <button className="btn btn-primary mx-1 " onClick={handleLoClick}>Convert to lowercase</button>
     <button className="btn btn-primary mx-1 " onClick={handleClearClick}>Clear All</button>
     <button className="btn btn-primary mx-1 " onClick={handleExtraSpaceClick}>Remove extra space</button>
         

     </div>

     <div className='container my-3' >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words & {text.length} characters</p>
      <p>{(0.008 * words).toFixed(3) } Minutes read</p>
      <h2>Preview</h2>
      <p >{text}</p>
     </div>
    </>
  )
}
