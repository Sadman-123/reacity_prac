import React from 'react'
import Nav from '../src/component/Nav'
import Footer from './component/Footer'
import Card from './component/Card'
import Login_Form from './component/Login_Form'
import Alertbox from './component/Alertbox'
import Clock from './pages/Clock'
import Home from './pages/Home'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    {/* <Nav/>
    < Home />
    <Footer/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/clock' element={<Clock/>} />
      <Route path='/login_form' element={<Login_Form/>} />
      <Route path='/alertbox' element={<Alertbox/>} />
      <Route path='/card' element={<Card/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App