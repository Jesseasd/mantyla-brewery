import React, { useEffect, useRef } from 'react'
import "../style/Shop.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "../data/Products"
import { ReactComponent as Cone } from "../images/pine-cone/cone.svg"
import { Link } from "react-router-dom"
import beersVideo from "../videos/6682813_Bottle_Glass_1920x1080.mp4"

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
        <div className='mask'></div>
        <video className='beers-video' autoPlay loop muted>
          <source src={beersVideo} type='video/mp4' />
        </video>
        <h1>Kauppa</h1>
        <div className='beers-text'>
          <p>Mäntylän Panimo syntyi intohimosta käsityöläisolueen, metsän tuoksuun ja jaettuihin hetkiin ystävien kesken. Jokainen oluemme kantaa mukanaan tarinaa – mausta, paikasta tai muistosta, joka inspiroi sen syntyä. Valikoimastamme löydät monipuolisen kattauksen pienpanimo oluita: raikkaista vehnäoluista syviin porttereihin, metsän makuisista kokeiluista klassisiin tyyleihin. Kaikki oluet valmistetaan huolella, käsityönä ja rakkaudella – Mäntylän hengessä. Olitpa sitten mökillä, saunan jälkeen, pitkällä illallisella tai retkellä metsässä, meiltä löydät oluen juuri siihen hetkeen. Tutustu valikoimaan – ehkä löydät uuden suosikkisi.</p>
        </div>
      </div>
      <div className='shop-grid' ref={gridRef}>
        {products.map((product) => (
          <div className='product' key={product.id}>
            <Link className='product-image-wrapper' to={`/product/${product.id}`}>
              <div className='product-image-mask'></div>
              <img className='product-image' src={product.image} />
              {/* <img className='product-image2' src={product.image2} /> */}
              <div className='product-info'>
                <h3>{product.name}</h3>
                <div className='e-l'>
                  <p>{product.price}e</p>
                  <p>{product.volume}l</p>
                </div>
              </div>
              <Cone className='cone-icon' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
