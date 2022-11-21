import React from 'react'
import './App.css'
import { useWordContext, WordConext } from './context/WordContext'
import Wrapper from './Wrapper'

function App() {
  const { isShown, setShown, words, setWords, currentOption, setCurrentOption } = useWordContext()

  return (
    <WordConext.Provider value={{ words, setWords, currentOption, setCurrentOption, isShown, setShown }}>
      <Wrapper />
    </WordConext.Provider>
  )
}

export default App;