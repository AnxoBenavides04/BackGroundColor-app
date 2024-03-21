import React, {useState } from 'react'
import ChangeButton from './ChangeButton'
import CopyButton from './CopyButton'

export default function Change() {
  const [color, setColor] = useState("white")
  function changeBackGroundColor (){
      setColor("#" + Math.floor(Math.random() * 256).toString(16) + ""
      + Math.floor(Math.random() * 256).toString(16) + ""
      + Math.floor(Math.random() * 256).toString(16))
  }
  function copyColor() {
    navigator.clipboard.writeText(color)
  }
  return (
    <div className='Components' style={{backgroundColor: `${color}`}}>
        <h1>Change The Background Color By Clicking The Following Button</h1>
        <div id='CopyLine'><input id='color' type="text" value={color} />  
         <button id='Copy' style={{backgroundColor: `${color}`}} onClick={copyColor}>Copy</button></div>
        <div id='ChangeButton'>        
        <ChangeButton onClick={changeBackGroundColor} />
        </div>
    </div>
    
  )
}
