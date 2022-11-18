import React, { useRef, useState } from 'react'
import styles from './textContainer.module.css'
import { v4 as uuid } from 'uuid';

const TextContainer = ({ children, refProp }) => {
  const [selected, setSelected] = useState({})
  const { container, container_selected } = styles

  const handleClick = (e) => {
    console.log("target_key", e.target.name);
    if (refProp.key == e.target.key) {
      setSelected()
    }
  }

  return (
    <div className={container}>
      {children.map(({ text, className, key }) => (
        <div onClick={handleClick} ref={refProp} key={key} name="asdasd" className={className}>{text}</div>
      ))}
    </div>
  )
}

export default TextContainer