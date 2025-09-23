import { useState } from 'react'
import { useCart } from "../contexts/CartContext"
import { ReactComponent as DeleteIcon } from "../assets/icons/close.svg"
import "../style/Cart.css"

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart()

  // Local drafts per item.id (so the input can temporarily hold raw strings like "" while editing)
  const [qtyDrafts, setQtyDrafts] = useState({})

  // State for showing / hiding the modal
  const [showModal, setShowModal] = useState(false)

  // Change quantity with plus / minus buttons
  const changeQty = (id, delta) => {
    // Checks items current draft value and if there's no draft falls back to the actual quantity
    const currentRaw = qtyDrafts[id] ?? cartItems.find(i => i.id === id)?.quantity

    // Converts the raw string into an integer
    const current = parseInt(currentRaw, 10)

    // If current is a real number -> keep it, else handle as 1
    const safe = Number.isFinite(current) ? current : 1
    
    // Add delta to the safe value, next can't be lower than 1
    const next = Math.max(1, safe + delta)

    // Call to update the cart with the new quantity
    updateQuantity(id, next)

    // Clears the draft after cart updates
    // "[id]: _omit" removes the property for the current id (value goes into _omit but is unused)
    // "...rest" gathers all remaining properties if there is more than one draft
    setQtyDrafts(prevDrafts => {
      const { [id]: _omit, ...rest } = prevDrafts
      return rest
    })
  }

  // Close modal and clear cart
  const closeModal = () => {
    setShowModal(false)
    clearCart()
  }

  // Calculate total cart price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  // If cart is empty -> show message
  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Ostoskori on tyhjä</h2>
      </div>
    )
  }

  // Commit input value when leaving field or pressing enter
  const commitQty = (id) => {
    // Look up temporary value the user typed for this item
    const raw = qtyDrafts[id]

    // Convert that draft string into a number
    const parsed = parseInt(raw, 10)

    // If parsed is a valid number -> keep it, else handle as 1
    const next = Number.isFinite(parsed) ? Math.max(1, parsed) : 1

    // Updates cartItems in cartContext
    updateQuantity(id, next)

    // Clears items draft entry so the input shows the context value again
    setQtyDrafts(prevDrafts => {
      const { [id]: _omit, ...rest } = prevDrafts
      return rest
    })
  }

  return (
    <div className="cart-page">
      <h1>Ostoskori</h1>

      {cartItems.map(item => {
        return (
          <div className='cart-item-container' key={item.id}>
            <div className='cart-item-image-container'>
              <img
                src={item.bottle}
                alt={item.name}
                className="cart-item-image"
              />

              <div className='cart-input-container'>
                <button
                  className='cart-input-decrease'
                  aria-label='decrease'
                  onClick={() => changeQty(item.id, -1)}
                >
                  -
                </button>

                <input
                  id="cart-input"
                  className='cart-input'
                  type='number'
                  min="1"
                  value={qtyDrafts[item.id] ?? String(item.quantity)}
                  onChange={(e) => {
                    const v = e.target.value
                    setQtyDrafts(prevDrafts => ({ ...prevDrafts, [item.id]: v }))
                  }}
                  onBlur={() => commitQty(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.currentTarget.blur()
                    }
                  }}
                />

                <button
                  className='cart-input-increase'
                  aria-label='increase'
                  onClick={() => changeQty(item.id, +1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className='cart-item-info'>
              <h5 className='cart-item-name'>{item.name}</h5>
              <p className='cart-item-price-volume'>{item.price.toFixed(2)}€ / {item.volume}L</p>
            </div>

            <div className='cart-item-right'>
              <button
                className='delete-btn'
                onClick={() => removeFromCart(item.id)}
              >
                <DeleteIcon className='delete-icon' />
              </button>
              <p className='cart-item-total'>{(item.price * item.quantity).toFixed(2)}€</p>

            </div>
          </div>
        )
      })}

      <div className='clear-cart-container'>
        <button
          className='clear-cart'
          onClick={clearCart}
        >
          Tyhjennä kori
        </button>
      </div>

      <div className='bottom-container'>
        <div>Hinta: {totalPrice.toFixed(2)}€</div>
        <button className='pay-button' onClick={() => setShowModal(true)}>Maksamaan</button>
      </div>

      {/* Modal: click backdrop to close. */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => closeModal()}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fake-checkout-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="fake-checkout-title">🧪 Oho! Tämä on vain demo.</h3>
            <p>
              Mitään ei veloiteta, eikä mitään toimiteta 🌲.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
