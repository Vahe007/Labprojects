import { Button } from '@mui/material'
import React from 'react'
import styles from './Header.module.css'

const Header = ({}) => {
  const { header_container, header_left, header_right } = styles
  const sx = {
    color: 'black', background: '#FDC125', margin: '5px'
  }
  return (
    <div className={header_container}>
      <div className={header_left}>
        <h1>Word Art</h1>
      </div>
      <div className={header_right}>
        <Button sx={sx} type='contained'>Option 1</Button>
        <Button sx={sx} type='contained'>Option 2</Button>
      </div>

    </div>
  )
}

export default Header