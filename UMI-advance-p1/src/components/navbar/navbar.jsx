import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Online Catering</h1>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Sign up</button>
    </div>
  )
}

export default Navbar
