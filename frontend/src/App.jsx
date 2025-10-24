import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/footer/footer'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
    </AuthProvider>
  )
}

export default App
