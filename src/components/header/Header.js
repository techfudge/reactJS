import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'



const Header = () => {
  return (
    <div>
      <nav className ="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
    <Link to='/' style={{textDecoration: 'none'}}><a className='navbar-brand'>Navbar</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to='/'style={{textDecoration: 'none'}} ><a className="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item">
        <Link to='/Contact'style={{textDecoration: 'none'}} ><a className="nav-link" >Contact</a></Link>
        </li>
        <li className="nav-item">
        <Link to='/about' style={{textDecoration: 'none'}}><a className="nav-link">About</a></Link>
        </li>
        <li className="nav-item">
        <Link to='/' style={{textDecoration: 'none'}}><a className="nav-link disabled">More Info</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header