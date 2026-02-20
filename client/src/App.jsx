import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CatpainLogin from './pages/CatpainLogin'
import CatpainSignup from './pages/CatpainSignup'
import Start from './pages/Start'
import UserProtected from './Routes/UserProtected'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CatpainLogin/>}/>
        <Route path='/captain-signup' element={<CatpainSignup/>}/>
        <Route path='/home' element={
          <UserProtected>
            <Start/>
          </UserProtected>
        }/>
      </Routes>
    </div>
  )
}

export default App
