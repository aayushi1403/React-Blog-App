import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutButton() {
  const disptach=useDispatch()
  const logoutHandler=()=>{
    //logout returns a promise so handle it using then
    authservice.logout().then(()=>{
      disptach(logout())
    })
  }
  return (
    <button
    className='inline-block px-6 py-2 duration-200
     hover:bg-blue-100 rounded-full'
     onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutButton
