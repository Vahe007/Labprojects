import React, {useState} from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { v4 as uuid } from 'uuid'

function CustomSelect({label, sx, options, option, setOption}) {

  const handleChange = (event) => {
    console.log(event.target.value)
    setOption(event.target.value)
  }

  return (
    <Box sx={{ ...sx, minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label={label}
          onChange={handleChange}
        >
          {options.map(({name, className}) => {
            return <MenuItem key={uuid()} value={className}>
              <div className={className}>{name}</div>
            </MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  )
}

export default CustomSelect