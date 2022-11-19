import { useRef, useState } from 'react'
import './App.css'
import Input from './components/Input/input'
import Select from './components/Select/select'
import Styles from './components/Styles/styles'
import { Button } from '@mui/material'
import TextContainer from './components/TextContainer/textContainer'
import { useWordContext, WordConext } from './context/WordContext'
import Draggable from 'react-draggable'
import Header from './components/Header/Header'

function App() {
  const ref = useRef(null)
  const [selected, setSelected] = useState({})
  const { isShown, setShown, words, setWords, currentOption, setCurrentOption } = useWordContext()

  const onKeyDown = (e) => {
    if (e.key === 'Delete') {
      const removedKey = ref.current.key
      const newWords = words.filter((word) => word.key != removedKey)
      setWords(newWords)
    }
  }

  return (
    <WordConext.Provider value={{ words, setWords, currentOption, setCurrentOption, isShown, setShown }}>
      <div className="App">
        <Header />
        <div className='app-content'>
          <Styles />
          <div className='bottom' onKeyDown={onKeyDown}>
            <TextContainer refProp={ref}>
              {words}
            </TextContainer>
          </div>
        </div>
      </div>
    </WordConext.Provider>
  )
}

export default App;






// {(isShown.input && !isShown.btn) ? <Input /> : null}

// {(isShown.style && !isShown.btn) ? <Styles />
//               : <Button onClick={() => { setShown((prevState => ({ ...prevState, style: true, btn: false }))) }} variant="contained">Choose a word style</Button>}

{/* <Input currentOption={currentOption} setWords={setWords} />
<Select currentOption={currentOption} setCurrentOption={setCurrentOption} /> */}