import React, { useContext } from 'react'
import { WordConext } from '../../context/WordContext'
import styles from './style.module.css'

const Style = ({ value, setCurrentOption }) => {
  const { isShown, setShown, currentOption } = useContext(WordConext)
  const handleClick = () => {
    setCurrentOption(value)
    setShown((prevState) => ({ ...prevState, input: true, style: false, btn: false }))
  }
  const { style_container, style_containe_selected } = styles
  return (
    <div onClick={handleClick} className={(value === currentOption) ? style_containe_selected : style_container}>
      <div className={value}>Word Art</div>
    </div>
  )
}

export default Style