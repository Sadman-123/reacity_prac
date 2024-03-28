import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css'
import Nav from './component/Nav.jsx'
import Footer from './component/Footer.jsx'
import Master from './utility/Master.jsx'
import Login_Form from './component/Login_Form.jsx'
import Clock from './pages/Clock.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Master/>
  </React.StrictMode>,
)
