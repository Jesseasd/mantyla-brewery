import React, { useState, useEffect } from 'react'
import { ReactComponent as Cone } from "../images/pine-cone/cone.svg"
import { ReactComponent as Cart } from "../images/cart.svg"
import { NavLink } from "react-router-dom"
import { ReactComponent as Menu } from "../images/menu.svg"
import { ReactComponent as Close } from "../images/close.svg"
import "../style/Nav.css"

export default function Nav({ showNav }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    return (  
       
        <nav className={showNav ? "nav-visible" : "nav-hidden"}>

            {isOpen && (
                <div className='close' onClick={() => setIsOpen(false)}>
                    <Close className='close-icon' />
                </div>
            )}

            <div className="nav-bg">
                <NavLink to="/" className='logo nav-item'>
                    <Cone className="cone-svg" />
                </NavLink>

                <div className='hamburger' onClick={toggleMenu}>
                    <Menu className='menu-icon' />
                </div>
            </div>

            <NavLink to="cart" className='cart nav-item' onClick={() => setIsOpen(false)}>
                <Cart className='cart-svg'/>
            </NavLink>

            <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
                <li>
                    <NavLink to="about" className='nav-item' onClick={() => setIsOpen(false)}>Meistä</NavLink>
                </li>
                <li>
                    <NavLink to="beers" className='nav-item' onClick={() => setIsOpen(false)}>Oluet</NavLink>
                </li>
                <li>
                    <NavLink to="shop" className='nav-item' onClick={() => setIsOpen(false)}>Kauppa</NavLink>
                </li>
                <li>
                    <NavLink to="contact" className='nav-item' onClick={() => setIsOpen(false)}>Ota Yhteyttä</NavLink>
                </li>

                {isOpen && (
                    <li>
                        <NavLink to="/" className='nav-item' onClick={() => setIsOpen(false)}>
                            <Cone className="cone-svg menu-cone" />
                        </NavLink>
                    </li>
                )}

            </ul>

            

        </nav>
    )
}

