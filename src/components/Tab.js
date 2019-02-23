import React from 'react'
import { isatty } from 'tty';

const Tab = ({label, isActive, handleClick}) => {
//deconstructing in the function parameters

  return (
        <li className={isActive ? "is-active" : ""} 
            onClick={() => handleClick()}>
            <a>{label}</a>
        </li>
  )
}

export default Tab
