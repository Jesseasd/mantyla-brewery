import React, { useState, useEffect } from 'react'
import './App.css'
import "./style/Nav.css"
import "./style/Home.css"
import "./style/Footer.css"
import { Routes, Route, Router } from "react-router-dom"
import About from "./pages/About"
import Beers from "./pages/Beers"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { CartProvider } from './contexts/CartContext'


function App() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Showing nav when scrolled
      if (window.scrollY > 50) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <CartProvider>
      <Nav showNav={showNav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='beers' element={<Beers />} />
        <Route path='cart' element={<Cart />} />
        <Route path='contact' element={<Contact />} />
        <Route path='shop' element={<Shop />} />
        <Route path='product/:id' element={<Product />} />
      </Routes>
      <Footer />
    </CartProvider>
  )
}

export default App
