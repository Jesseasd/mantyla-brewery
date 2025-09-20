import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

// Wraps app and gives all its child components access to the cart
export function CartProvider({ children }) {
    // Start by checking localStorage, so cart persists on refresh
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("cart")  // Read from localStorage
        return saved ? JSON.parse(saved) : []       // If found, parse it. Else start empty
    })

    // When ever cartItems changes, save it to localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    // Looks at the current cart (prev)
    // Checks if the item is already in it
    // If it is, increase its quantity
    // If it's not, it adds it with quantity 1 
    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            // Look through the cart to see if the product is already there
            const existing = prev.find(item => item.id === product.id)
            if (existing) {
                return prev.map(item =>
                    // If product already exists loop through items and increse the quanityt
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            }
            // If item doesn't exist -> add new item with given quantity
            return [...prev, { ...product, quantity }]
        })
    }

    // Removes item by its ID
    const removeFromCart = (id) => {
        // Filter creates new array without item with the given id 
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    // Clears everything
    const clearCart = () => setCartItems([])

    // Update quantity of a specific item in the cart
    const updateQuantity = (id, qty) => {
        // Make sure the new qty is valid:
        // - If qty is a number → round it down to whole number
        // - Ensure it’s at least 1 (no zero or negatives allowed)
        // - If qty is not valid → default to 1
        const next = Number.isFinite(qty) ? Math.max(1, Math.floor(qty)) : 1

        // Update cart state:
        // Map over previous cart items
        // - If item matches the id -> return a new object with updated quantity
        // - If not -> keep item as it is
        setCartItems(prev =>
            prev.map(item => 
                item.id === id ? { ...item, quantity: next } : item
            )
        )
    }

    // Makes cart data and functions available to all components inside {children}
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

// Helper function
export function useCart() {
    return useContext(CartContext)
}