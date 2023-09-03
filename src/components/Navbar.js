import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
function Navbar() {
  return (
    <header id="header" className=" navbar-expand-lg ">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><Link to='/' className="nav-link"><span className='text-danger'>k</span>halil <span className='text-danger'>B</span>ouzidi <span className='text-danger'>.</span></Link></h1>
      <button class="navbar-toggler bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon bg-light"></span></button>
      
      <nav id="navbar" className="navbar ">
      <div className="collapse navbar-collapse nav " id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className='trait'>
            <Link to='/' className="nav-link ">Home</Link>
            </li>
          <li>
            <Link to='/project ' className="nav-link " >projects</Link>
            </li>
            <li>
            <Link to='/about' className="nav-link "> About </Link>
            </li>
            <li>
            <Link to='/contact' className="nav-link ">Contact </Link>
            </li>
            <li>
              <Link to='/login' id='resume' className="getstarted  nav-link"> Login</Link>
              </li>
        </ul>
      
        </div>
      </nav>
      
    </div>
  </header>
  )
}

export default Navbar
