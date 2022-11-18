import React, { useRef, useState } from 'react'

const Input = ({ setWords, currentOption }) => {
    const inputRef = useRef()
    const [inputVal, setInputVal] = useState('')

    const onBtnClick = () => {
        const newWord = inputRef.current.value
        setWords((prevWords) => ([
            ...prevWords, { text: newWord, classname: currentOption }
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