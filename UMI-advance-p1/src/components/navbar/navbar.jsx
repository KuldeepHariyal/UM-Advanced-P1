import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <h1>Online Catering</h1>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("about")} className={menu=="about"?"active":""}>About</li>
            <li onClick={()=>setMenu("contact")} className={menu=="contact"?"active":""}>Contact us</li>
        </ul>
        <button>Sign up</button>
    </div>
  )
}

export default Navbar
