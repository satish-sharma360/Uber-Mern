import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CatpainLogin from './pages/CatpainLogin'
import CatpainSignup from './pages/CatpainSignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CatpainLogin/>}/>
        <Route path='/captain-signup' element={<CatpainSignup/>}/>
      </Routes>
    </div>
  )
}

export default App
