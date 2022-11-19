import React, { useContext, useRef, useState } from 'react'
import { WordConext } from '../../context/WordContext'
import { v4 as uuid } from 'uuid'
import { Button } from '@mui/material'
import styles from './Input.module.css'

const Input = () => {
    const { setWords, currentOption } = useContext(WordConext)
    const inputRef = useRef()
    const [inputVal, setInputVal] = useState('')
    const { inp, inp_header } = styles

    const onBtnClick = () => {
        const newWord = inputRef.current.value
        setWords((prevWords) => ([
            ...prevWords, { text: newWord, className: currentOption, key: uuid() }
        ]))
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
        <div>
            <input className={inp} onChange={onInputChange} value={inputVal} onKeyDown={onKeyDown} ref={inputRef}></input>
            <Button onClick={onBtnClick}>Enter</Button>
        </div>
    )
}

export default Input