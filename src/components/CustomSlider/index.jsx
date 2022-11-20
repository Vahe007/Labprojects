import { Box, Slider } from '@mui/material'
import React, { useState } from 'react'
import styles from './CustomSlider.module.css'

const CustomSlider = (props) => {
    const { label, max = 10, min = 100, defaultValue = 70, refProp, onChange, valye } = props



    return (
        <Box sx={{ display: 'flex', alignItems: 'center', margin: '30px' }} width='55%'>
            <div>{label}</div>
            <Slider
                valueLabelDisplay="auto"
                defaultValue={defaultValue}
                max={max}
                min={min}
                onChange={onChange}
                ref={refProp}
            />
        </Box>
    )
}

export default CustomSlider