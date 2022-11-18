import { useState } from 'react';
import './App.css'
import Input from './components/Input/input'
import Select from './components/Select/select'

function App() {
  const [words, setWords] = useState([])
  const [currentOption, setCurrentOption] = useState('style1')

  return (
    <div className="App">
      <Input currentOption={currentOption} setWords={setWords} />
      <Select currentOption={currentOption} setCurrentOption={setCurrentOption} />
      {words.map(({text, classname}, index) => (
        <div className={classname} key={index}>{text}</div>
      ))}
    </div>
  );
}

export default App;
