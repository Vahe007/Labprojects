import { Button } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import styles from './Header.module.css'
import FileSaver from 'file-saver'
import { WordConext } from '../../context/WordContext'
import DomToImage from 'dom-to-image'
import { Navigate, useHistory, useNavigate } from 'react-router-dom'
import CustomDialog from '../CustomDialog'

const Header = ({ imgRef }) => {
  const [image, setImage] = useState('')
  const [open, setOpen] = useState(false)
  const { words } = useContext(WordConext)
  const titleRef = useRef(null)
  const navigate = useNavigate()

  const { header_container, header_left, header_right } = styles

  const dialogProps = {
    text: 'Download this image?',
    handleConfirm: () => { FileSaver.saveAs(image, "image.png"); setOpen(false) },
    setOpen: setOpen,
    open: open,
    content: <img src={image} />
  }

  const sx = {
    color: 'black', background: '#FDC125', margin: '5px'
  }

  const handleClick = () => {
    // crossorigin="anonymous"
    setOpen(true)

    imgRef.current.style.removeProperty('border')

    DomToImage.toPng(imgRef.current).then((src) => {
      const img = new Image()
      img.src = src
      setImage(src)
    }).catch((err) => {
      console.log('err', err)
    })

    // FileSaver.saveAs(src, "image.png")



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
        <Button onClick={() => { navigate('/option1') }} sx={sx} type='contained'>Option 1</Button>
        <Button onClick={() => { navigate('/option2') }} sx={sx} type='contained'>Option 2</Button>
        <Button onClick={handleClick} sx={sx} type='contained'>Download</Button>
        {open && <CustomDialog {...dialogProps} />}
      </div>

    </div>
  )
}

export default Header