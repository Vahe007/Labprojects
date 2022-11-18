import React, { useState } from 'react'

const Select = ({currentOption, setCurrentOption}) => {
  const changeOption = (e) => {
    console.log(e.target.value)
    setCurrentOption(e.target.value)
  }
  
  return (
    <div>
      <select onChange={changeOption} value={currentOption}>
        <option value='style1'>WordArt Style 1</option>
        <option value='style2'>WordArt Style 2</option>
        <option value='style3'>WordArt Style 3</option>
        <option>WordArt Style 4</option>
        <option>WordArt Style 5</option>
        <option>WordArt Style 6</option>
        <option>WordArt Style 7</option>
      </select>
    </div>
  )
}

export default Select