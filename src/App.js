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
import Loader from "./components/Loader"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

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

  // Show loader until everything is fully loaded
  useEffect(() => {
    // Waits 1.2s before setting isLoading to false -> for nicer UX
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1200)
    }

    // If the page is already fully loaded -> run now
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      // Otherwise, wait for the real "load" event
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  // After fade-out -> unmount loader
  useEffect(() => {
    // Run once loading is finished
    if (!isLoading) {
      // Unmounts the loader after .55s, so it matches css transition
      const t = setTimeout(() => setShowLoader(false), 550)
      return () => clearTimeout(t)
    }
  }, [isLoading])

  // Prevent scroll while loading
  useEffect(() => {
    document.documentElement.style.overflow = isLoading ? "hidden" : ""
    document.body.style.overflow = isLoading ? "hidden" : ""

    // Clean up, if isLoading flips again
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [isLoading])

  return (
    <>
      {showLoader && <Loader hidden={!isLoading} />}

      {/* App content fades in when ready */}
      <div
        aria-busy={isLoading}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity .6s ease"
        }}
      >
        <ScrollToTop />   {/* Scroll to top when changing routes */}
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
      </div>
    </>
  )
}

export default App
