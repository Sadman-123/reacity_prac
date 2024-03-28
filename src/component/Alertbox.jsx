import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Alertbox = () => {
  return (
    <div>
      <Nav/>
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>Hola Amigos!</strong> You should check in on some of those fields below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <Footer/>
    </div>
  )
}

export default Alertbox