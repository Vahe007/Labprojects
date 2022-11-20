import { Button } from '@mui/material'
import React, { useContext, useRef } from 'react'
import styles from './Header.module.css'
import FileSaver from 'file-saver'
import { WordConext } from '../../context/WordContext'
import DomToImage from 'dom-to-image'
import { Navigate, useHistory, useNavigate } from 'react-router-dom'

const Header = ({ imgRef }) => {
  const { words } = useContext(WordConext)
  const titleRef = useRef(null)
  const navigate = useNavigate()

  const { header_container, header_left, header_right } = styles

  const sx = {
    color: 'black', background: '#FDC125', margin: '5px'
  }

  const handleClick = () => {
    // crossorigin="anonymous"

    console.log(imgRef.current)
    DomToImage.toBlob(imgRef.current).then((src) => {
      console.log('src', src)
      const img = new Image()
      img.src = src
      FileSaver.saveAs(src, "image")
      console.log('image', img)
    }).catch((err) => {
      console.log('err', err)
    })


    // DomToImage.toJpeg(imgRef.current, { quality: 0.95 })
    // .then(function (dataUrl) {
    //     const link = document.createElement('a');
    //     link.download = 'my-image-name.jpeg';
    //     link.href = dataUrl;
    //     link.click();
    // });
  }
  return (
    <div className={header_container}>
      <div className={header_left}>
        <h1 ref={titleRef}>Word Art</h1>
      </div>
      <div className={header_right}>
        <Button onClick={() => {navigate('/option1')}} sx={sx} type='contained'>Option 1</Button>
        <Button onClick={() => {navigate('/option2')}} sx={sx} type='contained'>Option 2</Button>
        <Button onClick={handleClick} sx={sx} type='contained'>Download</Button>
      </div>

    </div>
  )
}

export default Header