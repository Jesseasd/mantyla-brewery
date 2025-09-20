import React, { useState, useEffect } from 'react'
import { ReactComponent as Cone } from "../images/pine-cone/cone.svg"
import { ReactComponent as Cart } from "../images/icons/cart.svg"
import { NavLink } from "react-router-dom"
import { ReactComponent as Menu } from "../images/icons/menu.svg"
import { ReactComponent as Close } from "../images/icons/close.svg"
import "../style/Nav.css"
import { useCart } from "../contexts/CartContext"

export default function Nav({ showNav }) {
    // Get cart items from CartContext
    const { cartItems } = useCart()

    // Calculate total quantity of items in cart
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    // Tracks if mobile menu is open
    const [isOpen, setIsOpen] = useState(false)

    // Toggle menu open / close when hamburger is clicked
    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            document.body.style.position = "fixed"
            document.body.style.width = "100%"
        } else {
            document.body.style.overflow = ""
            document.body.style.position = ""
            document.body.style.width = ""
        }
    }, [isOpen]) // Runs when "isOpen" changes

    return (  
        // Whole nav is shown or hidden depending on "showNav"
        <nav className={showNav ? "nav-visible" : "nav-hidden"}>
            <div className='nav-content'>

                <NavLink to="/" className='logo nav-item'>
                    <Cone className="nav-cone" />
                </NavLink>

                {/* Close button, only shown on mobile */}
                {isOpen && (
                    <div className='close' onClick={() => setIsOpen(false)}>
                        <Close className='close-icon' />
                    </div>
                )}

                <div className="nav-bg">
                    <div className='hamburger' onClick={toggleMenu}>
                        <Menu className='menu-icon' />
                    </div>
                </div>

                <div className='nav-right'>
                    {/* Nav links, if "nav-active" becomes mobile items (column)  */}
                    <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
                        {/* Extra cone at top of mobile menu */}
                        {isOpen && (
                            <li>
                                <NavLink 
                                    to="/" 
                                    className="nav-item menu-cone-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Cone className="nav-cone menu-cone" />
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink 
                                to="about" 
                                className="nav-item"
                                onClick={() => setIsOpen(false)}
                            >
                                Meistä
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="shop" 
                                className="nav-item"
                                onClick={() => setIsOpen(false)}
                            >
                                Kauppa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="contact" 
                                className="nav-item"
                                onClick={() => setIsOpen(false)}
                            >
                                Ota Yhteyttä
                            </NavLink>
                        </li>

                    </ul>

                    <NavLink 
                        to="cart" 
                        className='cart nav-item' 
                        onClick={() => setIsOpen(false)}
                    >
                        <Cart className='cart-svg'/>
                        {/* Show counter badge if there are items in cart */}
                        {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}

