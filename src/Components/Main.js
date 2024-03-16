import React from 'react'
import Header from './Header/Header'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Auth from './Auth/Auth'

const Main = () => {
  return (
    <div>
        <Header/>
            <Routes>
                <Route path='/' element={<Navigate to='/home' replace={true}/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/login' element={<Auth/>}/>
            </Routes>
        <Footer/>
    </div>
  )
}

export default Main