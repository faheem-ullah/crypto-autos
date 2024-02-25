import React from 'react'

const Button = ({width,height,text,onClick,color}) => {
  return (
    <div className='text-white'>
      <button onClick={onClick} style={{width:width,height:height,background:color}}>{text}</button>
    </div>
  )
}

export default Button