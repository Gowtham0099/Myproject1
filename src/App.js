import React from 'react'
import Login from './login'
import Sigup from './sigup'
import Dashboard from './Dashboard'
import './App.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/Sigup'element={<Sigup/>}></Route>
        <Route path='/Dashboard'element={<Dashboard/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
