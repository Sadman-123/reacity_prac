import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Card = () => {
  return (
    <div>
      <Nav/>
        <div className="card" style={{width: '18rem'}}>
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Card