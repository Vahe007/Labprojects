import React, { useContext, useRef } from 'react'
import { v4 as uuid } from 'uuid'
import { WordConext } from '../../context/WordContext'
import Style from '../Style/style'
import styles from './styles.module.css'

const Styles = () => {
  const options = ['style1', 'style2', 'style3', 'style4', 'style5', 'style6', 'style7', 'style9', 'style10']
  const { setCurrentOption } = useContext(WordConext)
  const { styles_container, styles_header, gallery, desc } = styles
  return (
    <div className={gallery}>
      <div className={styles_header}>
        WordArt Gallery
      </div>
      <p className={desc}>Select a WordArt Style</p>
      <div className={styles_container}>
        {options.map((el) => (
          <Style setCurrentOption={setCurrentOption} value={el} key={uuid()} />
        ))}
      </div>
    </div>

  )
}

export default Styles