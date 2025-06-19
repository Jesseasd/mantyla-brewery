import React from 'react'
import { products } from "../data/Products"

export default function Beers() {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  )
}
