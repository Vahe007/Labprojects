import React, { useRef, useState } from 'react'
import styles from './textContainer.module.css'
import { v4 as uuid } from 'uuid';
import Draggable from 'react-draggable';

const TextContainer = ({ children, refProp }) => {
  const [selected, setSelected] = useState({})
  const { container, container_selected, text_container } = styles

  const handleClick = (e) => {
    if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(refProp.current);
      range.select();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(refProp.current);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      console.warn("Could not select text in node: Unsupported browser.");
    }
  }
  const handleKeyPress = (e) => {
    console.log(e.key);
  }

  return (
    <div className={container}>
      {children.map(({ text, className, key }) => (
        <Draggable key={key} bounds='parent'>
          <div onKeyDown={handleKeyPress} ref={refProp} id={key} onClick={handleClick} className={className}>
            <div className={text_container}>{text}</div>
          </div>
        </Draggable>
      ))}
    </div>
  )
}

export default TextContainer