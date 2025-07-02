import React, { useEffect, useRef } from 'react'
import "../style/Shop.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "../data/Products"
import { ReactComponent as Cone } from "../images/pine-cone/cone.svg"

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Shop() {

  const gridRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.batch(".product", {
      batchMax: 3,
      onEnter: batch => gsap.to(batch, {opacity: 1, y:-50, stagger: .3}),
    })
    
    
  }, [])
  return (
    <div className='shop-container'>
      <div className='title-container'>
        <h1>Kauppa</h1>
      </div>
      <div className='shop-grid' ref={gridRef}>
        {products.map((product, index) => (
          <div className='product' key={index}>
            <div className='product-image-wrapper'>
              <img className='product-image' src={product.image} />
              <img className='product-image2' src={product.image2} />
              <div className='product-info'>
                <h3>{product.name}</h3>
                <div className='e-l'>
                  <p>{product.price}e</p>
                  <p>{product.volume}l</p>
                </div>
              </div>
              <Cone className='cone-icon' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
