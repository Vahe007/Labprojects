import { createContext, useState } from 'react'

export const WordConext = createContext(null)

export const useWordContext = () => {
  const [words, setWords] = useState([])
  const [currentOption, setCurrentOption] = useState('style1')
  const [isShown, setShown] = useState({ style: false, input: false, btn: true })
  const [url, seturl] = useState('')

  return { url, seturl, isShown, setShown, words, setWords, currentOption, setCurrentOption }
}
