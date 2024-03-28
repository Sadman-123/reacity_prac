import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/style.css'
const Nav = () => {
  return (
    <div className='navboss'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#"><i class="bi bi-apple"></i> My App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to='/'>
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                <Link to='/clock'>
                    <a className="nav-link" href="#">Clock</a>
                    </Link>
                </li>
                <li className="nav-item">
                <Link to='/login_form'>
                    <a className="nav-link" href="#">Login</a>
                    </Link>
                </li>
                <li className="nav-item">
                <Link to='/alertbox'>
                    <a className="nav-link " href="#" tabindex="-1" >Alert</a>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav