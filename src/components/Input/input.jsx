import React, { useContext, useRef, useState } from 'react'
import { WordConext } from '../../context/WordContext'
import { v4 as uuid } from 'uuid'

const Input = () => {
    const { setWords, currentOption } = useContext(WordConext)
    const inputRef = useRef()
    const [inputVal, setInputVal] = useState('')

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
            <input onChange={onInputChange} value={inputVal} onKeyDown={onKeyDown} ref={inputRef}></input>
            <button onClick={onBtnClick}>Enter</button>
        </div>
    )
}

export default Input