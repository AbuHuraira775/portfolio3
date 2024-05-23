import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Work from '../screens/Work'
import About from '../screens/About'
import Contact from '../screens/Contact'

function AllRoutes() {
  return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/work' element={<Work />} />
            </Routes>
        </Router>
  )
}

export default AllRoutes