import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

// Wraps app and gives all its child components access to the cart
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cart")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    // Looks at the current cart (prev)
    // Checks if the item is already in it
    // If it is, increase its quantity
    // If it's not, it adds it with quantity 1 
    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id)
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            }
            return [...prev, { ...product, quantity }]
        })
    }

    // Removes item by its ID
    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    // Clears everything
    const clearCart = () => setCartItems([])

    // Makes cart data and functions available to all components inside {children}
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

// Helper function
export function useCart() {
    return useContext(CartContext)
}