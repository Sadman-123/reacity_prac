import React from 'react'
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import '../CSS/style.css'
const Clock = () => {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    let xx=()=>{
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(xx,1000);
  return (
    <>
    <Nav/>
    <div className='clk'>
      <h1>{time}</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Clock