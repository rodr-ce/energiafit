import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Plans from '../pages/Plans/Plans'
import Login from '../pages/Login/Login'


export default function AppRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
    </>
  )
}
