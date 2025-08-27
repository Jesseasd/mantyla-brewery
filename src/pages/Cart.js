import React, { useState } from 'react'
import { useCart } from "../contexts/CartContext"
import { ReactComponent as DeleteIcon } from "../images/close.svg"
import "../style/Cart.css"

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart()

  // Local drafts per item.id (string value so "" works in number input)
  const [qtyDrafts, setQtyDrafts] = useState({})

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      // <div className="cart-page">
        <div className="cart-empty"><h2>Ostoskori on tyhjä</h2></div>
      // </div>
    )
  }

  const commitQty = (id) => {
    const raw = qtyDrafts[id]
    const parsed = parseInt(raw, 10)
    const next = Number.isFinite(parsed) ? Math.max(1, parsed) : 1
    updateQuantity(id, next)
    // clear the draft so it follows context again
    setQtyDrafts(d => {
      const { [id]: _omit, ...rest } = d
      return rest
    })
  }

  return (
    <div className="cart-page">
      {/* <h2>Ostoskori</h2> */}

      <table className='cart-table'>
        <colgroup>
          <col style={{width: "60%"}} />  {/* Tuote */}
          <col style={{width: "20%"}} />  {/* Määrä */}
          <col style={{width: "10%"}} />  {/* Hinta */}
          <col style={{width: "10%"}} />  {/* Poista */}
        </colgroup>
        <thead> 
          <tr>
            <th>Tuote</th>
            {/* <th></th> */}
            <th>Määrä</th>
            <th>Hinta</th>
            <th>Poista</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => {
            // console.log(item)
            return(
            <tr key={item.id}>
              <td className='td-image'>
                <img
                  src={item.bottle}
                  alt={item.name} 
                  className="cart-item-image"
                />
                <div className='table-item-name'>
                  <span>{item.name}</span>
                  <span>{item.price.toFixed(2)}€ / {item.volume}L</span>
                </div>
              </td>
              {/* <td>
                <div className='table-item-name'>
                  <span>{item.name}</span>
                  <span>{item.price.toFixed(2)}€ / {item.volume}L</span>
                </div>
              </td> */}
              <td>
                <input 
                  type='number'
                  // show draft while editing; otherwise show cart value
                  value={qtyDrafts[item.id] ?? String(item.quantity)}
                  onChange={(e) => {
                    const v = e.target.value; // can be "" while typing
                    setQtyDrafts(d => ({ ...d, [item.id]: v }));
                  }}
                  onBlur={() => commitQty(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.currentTarget.blur(); // triggers onBlur -> commit
                    }
                  }}
                />
              </td>
              {/* <td>{item.quantity}</td> */}
              <td>{(item.price * item.quantity).toFixed(2)}€</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}><DeleteIcon className='delete-icon' /></button>
              </td>
            </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}></td>
            <td>
              <button onClick={clearCart}>Tyhjennä</button>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className='bottom-container'>
        <div><span>Hinta:</span> {totalPrice.toFixed(2)}€</div>
        <button className='pay-button'>Maksamaan</button>
      </div>
    </div>
  )
}
