import { useState, useEffect } from 'react'
import './App.css'
import "./style/Nav.css"
import "./style/Home.css"
import "./style/Footer.css"
import { Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { CartProvider } from './contexts/CartContext'
import { useLenis } from '@studio-freight/react-lenis'
import ScrollToTop from "./components/ScrollToTop"

function App() {

  // State that decides whether the nav bar should be shown or hidden
  const [showNav, setShowNav] = useState(false)

  // Hook that gives access to scroll events
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return    // Do nothing until lenis is ready
    // If more than 50px is scrolled -> show nav
    const onScroll = ({ scroll }) => setShowNav(scroll > 50)
    lenis.on('scroll', onScroll)    // Listen for scroll events
    return () => lenis.off('scroll', onScroll)    // Cleanup on unmount
  }, [lenis])

  return (
    <>
      {/* Scroll to top when changing routes */}
      <ScrollToTop />
      <CartProvider>
        <Nav showNav={showNav} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shop' element={<Shop />} />
          <Route path='product/:id' element={<Product />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
