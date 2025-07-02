import React from 'react'
import "../style/Shop.css"
import { products } from "../data/Products"
import { ReactComponent as Cone } from "../images/pine-cone/cone.svg"

export default function Shop() {
  return (
    <div className='shop-container'>
      <div className='title-container'>
        <h1>Kauppa</h1>
      </div>
      <div className='shop-grid'>
        {products.map((product, index) => (
          <div className='product' key={index}>
            <div className='product-image-wrapper'>
              <img className='product-image' src={product.image} />
              <img className='product-image2' src={product.image2} />
              {/*<Cone className='cone-icon' />*/}
              <div className='product-info'>
                <h3>{product.name}</h3>
                <p>{product.price}e</p>
                <p>{product.volume}l</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
