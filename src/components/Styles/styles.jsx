import { Button } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { v4 as uuid } from 'uuid'
import { WordConext } from '../../context/WordContext'
import Style from '../Style/style'
import styles from './styles.module.css'

const Styles = () => {
  const options = ['style1', 'style2', 'style3', 'style4', 'style5', 'style6', 'style7', 'style9', 'style10']
  const { setCurrentOption, isShown, setWords, currentOption, setShown, words } = useContext(WordConext)

  const inputRef = useRef()
  const [inputVal, setInputVal] = useState('')
  const { styles_container, styles_header, gallery, desc, inp } = styles

  const onBtnClick = () => {
    const newWord = inputRef.current.value
    let temp;
    if (words.length === 0) {
      temp = 'Word Art'
    } else {
      temp = words[words.length - 1].text
    }

    setWords((prevWords) => ([
      ...prevWords, { text: newWord && temp, className: currentOption, key: uuid() }
    ]))

    setShown((prevState) => ({...prevState, input: false}))
    setInputVal('')
  }
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onBtnClick()
    }
  }
  const onInputChange = ({ target: { value } }) => {
    setInputVal(value)
  }


  return (
    <Draggable>
      {isShown.input ? <div className={inp}>
        <input placeholder='Enter the Text' onChange={onInputChange} value={inputVal} onKeyDown={onKeyDown} ref={inputRef}></input>
        <Button sx={{margin: '10px', height: '100%'}} variant='contained' onClick={onBtnClick}>Enter</Button>
      </div> :
        <div className={gallery}>
          <div className={styles_header}>
            Draggable Gallery
          </div>
          <p className={desc}>Select a WordArt Style</p>
          <div className={styles_container}>
            {options.map((el) => (
              <Style setCurrentOption={setCurrentOption} value={el} key={uuid()} />
            ))}
          </div>
        </div>}
    </Draggable>
  )
}

export default Styles