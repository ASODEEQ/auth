import React from 'react'
import logo from '../assets/logo.jpeg'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='Nav'>
      <div className='nav-logo'>
        <img src={logo} alt="" srcset="" />
        <h2 style={{ color: 'red' }}>MIXlr</h2>
      </div>
      <div className='nav-links'>
        <a style={{color:'red'}} href="">Features</a>
        <a href="">Listen</a>
        <a href="">Pricing</a>
        <a href="">Login</a>
        {/* <Button/> */}
      </div>
    </div>
  )
}

export default Navbar