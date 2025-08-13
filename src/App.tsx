import React from 'react'
import style from './App.module.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Baldes from './pages/Baldes'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/baldes" element={<Baldes />} />
      </Routes>
    </div>
  )
}

export default App
