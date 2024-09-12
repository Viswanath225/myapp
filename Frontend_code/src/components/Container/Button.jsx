import React from 'react'

const Button = ({children, onSelect, className=''}) => {
  return (
    <div>
        {/* <button className={`${className}`} onClick={onSelect}>{children}</button> */}
        <button  onClick={onSelect}>{children}</button>
    </div>
  )
}

export default Button