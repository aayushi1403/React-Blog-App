import React from 'react'
import logo from '../components/images/logo.jpg'
function Logo({width='100px'}) {
  return (
    <div>
      <img src={logo} alt=""  style={{width:{width},height:'100px'}}/>
    </div>
  )
}

export default Logo
