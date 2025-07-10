import React from 'react'
import { useCart } from "../contexts/CartContext"
import "../style/Cart.css"

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return <div className="cart-page"><h2>Ostoskori on tyhjä</h2></div>
  }

  return (
    <div className="cart-page">
      <h2>Ostoskori</h2>

      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.bottle} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Määrä: {item.quantity}</p>
              <p>Hinta: {item.price}€</p>
              <p>Yhteensä: {(item.price * item.quantity).toFixed(2)}€</p>
              <button onClick={() => removeFromCart(item.id)}>Poista</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <h3>Kokonaishinta: {totalPrice.toFixed(2)}€</h3>
        <button onClick={clearCart}>Tyhjennä ostoskori</button>
      </div>
    </div>
  )
}
