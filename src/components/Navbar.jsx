import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

function Navbar({ one, two, three, four }) {

  const [show,setShow] = useState(false)
  const navigate = useNavigate()
  const showInActiveNav=()=>{
    setShow(!show)
  }

  const navStyle = {
    transition: ".5s ease-in-out",
  }
  return (
    <nav className="navbar space-between ">
      <div className='navLogo'>
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className="navRoutes">
        <div className="activeNav flex">
          <input value={one.toUpperCase()} contentEditable='false' />
          {
            show?
            <i class="fa-solid fa-circle-up" onClick={showInActiveNav}></i>:
            <i class="fa-solid fa-circle-down" onClick={showInActiveNav} ></i>
          }
          {/* <i class="fa-solid fa-circle-chevron-down" onClick={showInActiveNav}></i> */}
        </div>
        <div className="inActiveNavs center" style={show? {transform: 'translateX(0)',...navStyle}:{transform: "translateX(20rem)",...navStyle}}>
          <Link to={`/${two}`}>{two==""?"HOME":"ABOUT"}</Link> 
          <Link to={`/${three}`}>{three.toUpperCase()}</Link>
          <Link to={`/${four}`}>{four.toUpperCase()}</Link>
          <button className='btn w-100' onClick={()=>navigate('/login')}>Login</button>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar