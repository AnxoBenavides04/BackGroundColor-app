import React from 'react'

export default function CopyButton(onClick) {

  return (
    <button id='Copy' onClick={onClick}>Copy</button>
  )
}
// const Copybutton = styled.button`
// background-color: pink;
// border: 2px solid pink;
// border-radius: 5px;
// color: black;
// padding: 5px;
// margin-left: 5px;
// box-shadow: 1px 3px 4px 2px black;
// `;
// const Button = () => {
//   return <Copybutton id='copy'>Copy</Copybutton>;
// };
// export default Button;
