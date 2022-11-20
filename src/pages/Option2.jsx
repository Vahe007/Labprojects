import { TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CustomDialog from '../components/CustomDialog'
import CustomSelect from '../components/CustomSelect'
import CustomSlider from '../components/CustomSlider'
import Header from '../components/Header/Header'
import { fonts } from '../constants'

const Option2 = () => {
  const [val, setVal] = useState('')
  const sizeRef = useRef(null)
  const [sizeVal, setSizeVal] = useState(25)
  const [height, setHeight] = useState(100)
  const [spacing, setSpacing] = useState(0)
  const [font, setFont] = useState('')
  const [open, setOpen] = useState(false)
  


  const handleInputChange = ({ target: { value } }) => {
    setVal(value)
  }

  const sx = {
    width: '60%',
    margin: '10px'
  }

  const fontSliderProps = {
    min: 10,
    max: 70,
    defaultValue: 25,
    label: 'Font Size',
    refProp: sizeRef,
    onChange: (e) => {
      setSizeVal(e.target.value)
    }
  }

  const lineHeightProps = {
    min: 30,
    max: 300,
    defaultValue: 60,
    label: 'Line Height',
    onChange: (e) => {
      setHeight(e.target.value)
    }
  }

  const letterSpacing = {
    min: -3,
    max: 20,
    defaultValue: 0,
    label: 'Letter Spacing',
    onChange: (e) => {
      setSpacing(e.target.value)
    }
  }


  const style = {
    fontSize: `${sizeVal}px`,
    height: height,
    letterSpacing: `${spacing}px`,
    fontFamily: font
  }


  return (
    <div className='page2_container'>
      {open && <CustomDialog text='Select Font' setOpen={setOpen} open={open} />}
      <Header />
      <div className='page2_content'>
        <div className='page2_display' style={style}>{val}</div>
        <hr style={{ width: '100%', margin: '10px' }}></hr>
        <TextField sx={sx} value={val} onChange={handleInputChange} variant='outlined' label='Text' />
        <CustomSelect option={font} setOption={setFont} sx={sx} options={fonts} label='Font' />
        <CustomSlider {...fontSliderProps} />
        <CustomSlider {...lineHeightProps} />
        <CustomSlider {...letterSpacing} />
      </div>
    </div>
  )
}

export default Option2