import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Option1 from './pages/Option1'
import Option2 from './pages/Option2'

const Wrapper = () => {
    return (
        <Router>
            <Routes>
                <Route path='/option1' element={<Option1 />} />
                <Route path='/option2' element={<Option2 />} />
                <Route path='*' element={<Option1 />} />
            </Routes>
        </Router>

    )
}

export default Wrapper