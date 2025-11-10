import React from 'react'
 import './App.css'
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LoginForm } from './Components/SignupForm/Login'
import {SignUpForm} from './Components/SignupForm/Register'
import Footer  from './Components/Footer/Footer'
import Fashion from './Components/NavPaneel/Fashion/Fashion'



function App() {
 
  return (
    <>
    <Router>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addtocart' element={<Cart/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/signupform' element={<SignUpForm/>}/>
        <Route path='/fashion' element={<Fashion/>}/>
       </Routes>
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <Footer/>
    </Router>
    
    
    </>
  )
}

export default App
