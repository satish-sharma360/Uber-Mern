import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtected = ({children}) => {
    const {user} = useContext(UserDataContext)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token)
    if (!token) {
        navigate('/login')
    }
  return (
    <>
      {children}
    </>
  )
}

export default UserProtected
