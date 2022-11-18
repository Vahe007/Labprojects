import { useRef, useState } from 'react'
import './App.css'
import Input from './components/Input/input'
import Select from './components/Select/select'
import Styles from './components/Styles/styles'
import { Button } from '@mui/material'
import TextContainer from './components/TextContainer/textContainer'
import { useWordContext, WordConext } from './context/WordContext'
import Draggable from 'react-draggable'

function App() {
  const ref = useRef(null)
  const [selected, setSelected] = useState({})
  const { isShown, setShown, words, setWords, currentOption, setCurrentOption } = useWordContext()

  const onKeyDown = (e) => {
    console.log("event key" + e.key)
    if (e.key === 'Delete') {
      console.log('entered')
      const removedKey = ref.current.key
      const newWords = words.filter((word) => word.key != removedKey)
      setWords(newWords)
    }
  }

  return (
    <WordConext.Provider value={{ words, setWords, currentOption, setCurrentOption, isShown, setShown }}>
      <div className="App">
        <div className='app-content'>
          <div className='top'>
            {(isShown.style && !isShown.btn) ? <Styles />
              : <Button onClick={() => { setShown((prevState => ({ ...prevState, style: true, btn: false }))) }} variant="contained">Choose a word style</Button>}
            {(isShown.input && !isShown.btn) ? <Input /> : null}
          </div>
          <div className='bottom' onKeyDown={onKeyDown}>
            <Draggable
              axis="x"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              scale={1}
              >
              <TextContainer refProp={ref}>
                {words}
              </TextContainer>
            </Draggable>
          </div>
        </div>
      </div>
    </WordConext.Provider>
  )
}

export default App;



{/* <Input currentOption={currentOption} setWords={setWords} />
<Select currentOption={currentOption} setCurrentOption={setCurrentOption} /> */}