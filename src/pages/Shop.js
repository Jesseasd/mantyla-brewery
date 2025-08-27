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
  const component = useRef(null)

  useEffect(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.batch(".product", {
        batchMax: 3,
        onEnter: batch => gsap.to(batch, { opacity: 1, y: -50, stagger: .3 }),
      })
    })

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".title-container",
        start: "top",
        end: "bottom",
        pin: ".title-container",
        markers: false,
      })

      gsap.to(".title-container h1", {
        backgroundPosition: "0% 100%", // Move gradient down fully
        ease: "none",
        scrollTrigger: {
          trigger: ".title-container",
          start: "top-=100",
          end: "center+=500",
          scrub: true,
          markers: false,
        }
      })

    }, component)

    return () => ctx.revert()

  }, [])

  return (
    <div className='shop-container' ref={component}>
      <div className='title-container'>
        <div className='mask'></div>
        <video 
          className='beers-video' 
          autoPlay 
          loop 
          muted 
          playsInline 
          webkit-playsinline="true" 
          controls={false} 
          preload='auto'
        >
          <source src={beersVideo} type='video/mp4' />
        </video>
        <h1>Kauppa</h1>
        <div className='beers-text'>
          <p>Mäntylän Panimo syntyi intohimosta käsityöläisolueen, metsän tuoksuun ja jaettuihin hetkiin ystävien kesken. Jokainen oluemme kantaa mukanaan tarinaa – mausta, paikasta tai muistosta, joka inspiroi sen syntyä. Valikoimastamme löydät monipuolisen kattauksen pienpanimo oluita: raikkaista vehnäoluista syviin porttereihin, metsän makuisista kokeiluista klassisiin tyyleihin. Kaikki oluet valmistetaan huolella, käsityönä ja rakkaudella – Mäntylän hengessä. Olitpa sitten mökillä, saunan jälkeen, pitkällä illallisella tai retkellä metsässä, meiltä löydät oluen juuri siihen hetkeen. Tutustu valikoimaan – ehkä löydät uuden suosikkisi.</p>
        </div>
      </div>
      <div className='shop-grid' ref={gridRef}>
        {products.map((product) => (
          // <div className='product' key={product.id}>
            <Link className='product' key={product.id} to={`/product/${product.id}`}>
              <div className='product-image-wrapper'>
                <img className='product-bg-image' src={product.sbg} alt={product.name} />
                <img className="product-bottle-image" src={product.bottle} alt={product.name} />
              </div>
  
              <h3>{product.name}</h3>
              <p>{product.price.toFixed(2)}e</p>
              <p>{product.volume}l</p>
              
              {/* <Cone className='cone-icon' /> */}
            </Link>
          // </div>
        ))}
      </div>
    </div>
  )
}
