import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Wrapper = () => {
    return (
        <Routes>
            <Route path='/option1' element='' />
            <Route path='/option2' element='' />
            <Route path='*' element='' />
        </Routes>
    )
}

export default Wrapper