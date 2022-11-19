import { Button } from '@mui/material'
import React, { useContext, useRef } from 'react'
import styles from './Header.module.css'
import FileSaver from 'file-saver'
import { WordConext } from '../../context/WordContext'
import DomToImage from 'dom-to-image'

const Header = ({ imgRef }) => {
  const { header_container, header_left, header_right } = styles
  const { words } = useContext(WordConext)
  const titleRef = useRef(null)
  const sx = {
    color: 'black', background: '#FDC125', margin: '5px'
  }

  const handleClick = () => {
    DomToImage.toJpeg(imgRef.current).then((src) => {
      console.log('src', src)
      const img = new Image()
      img.src = src
      FileSaver.saveAs(src, "image.jpeg")
      console.log('image', img)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  return (
    <div className={header_container}>
      <div className={header_left}>
        <h1 ref={titleRef}>Word Art</h1>
      </div>
      <div className={header_right}>
        <Button sx={sx} type='contained'>Option 1</Button>
        <Button sx={sx} type='contained'>Option 2</Button>
        <Button onClick={handleClick} sx={sx} type='contained'>Download</Button>
      </div>

    </div>
  )
}

export default Header