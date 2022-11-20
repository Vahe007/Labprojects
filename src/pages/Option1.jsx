import React, { useContext, useRef } from 'react'
import Header from '../components/Header/Header'
import Styles from '../components/Styles/styles'
import TextContainer from '../components/TextContainer/textContainer'
import { WordConext } from '../context/WordContext'

const Option1 = () => {
    const ref = useRef(null)
    const imgRef = useRef(null)
    const { words } = useContext(WordConext)

    return (
        <div className="App">
            <Header imgRef={imgRef} />
            <div className='app-content'>
                <Styles />
                <TextContainer imgRef={imgRef} refProp={ref}>
                    {words}
                </TextContainer>
            </div>
        </div>
    )
}

export default Option1