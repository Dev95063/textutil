import React, {useState} from 'react'

export default function Darkmode() {

      const [myStyle, setMyStyle]=useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btnText, setBtnText]=useState("Dark Mode")

  const darkMode = ()=>{
    if (myStyle.color === 'black'){
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Dark Mode")
    }
    else{
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("light Mode")
      
    }

  }
 
  return (
    <>
     <div >
        <textarea className="form-control" style={myStyle} placeholder="Enter text here"  rows="8"  id="myBox"></textarea>
     </div>
    <div>
       <button className="btn btn-primary mx-1 "  onClick={darkMode}>{btnText}</button>
    </div>
    </>
  )
}
