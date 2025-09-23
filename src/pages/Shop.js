import { useEffect, useRef } from 'react'
import "../style/Shop.css"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { products } from "../data/Products"
import { Link } from "react-router-dom"
import shopHeroMp4 from "../assets/videos/shop-hero-video/shop-hero-video.mp4"
import shopHeroWebm from "../assets/videos/shop-hero-video/shop-hero-video.webm"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Shop() {
  const gridRef = useRef(null)
  const component = useRef(null)

  useEffect(() => {
    requestAnimationFrame(() => {
      // Animate product items in batches as they enter the viewport
      ScrollTrigger.batch(".product", {
        batchMax: 3,    // Animate max 3 items together
        onEnter: batch => gsap.to(batch, { 
          opacity: 1,
          y: -50, 
          stagger: .3   // Delay between items
        }),
      })
    })

    let ctx = gsap.context(() => {
      // Pins the title container while scrolling through it
      ScrollTrigger.create({
        trigger: ".title-container",
        start: "top",
        end: "bottom",
        pin: ".title-container",
        markers: false,
      })

      // Animate the gradient in the h1
      gsap.to(".title-container h1", {
        backgroundPosition: "0% 100%",    // Move gradient down fully
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

    // Cleanup
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
          preload='metadata'
          controls={false}
        >
          <source src={shopHeroWebm} type='video/webm' />
          <source src={shopHeroMp4} type='video/mp4' />
        </video>
        <h1>Kauppa</h1>
        <div className='beers-text'>
          <p>Mäntylän Panimo syntyi intohimosta käsityöläisolueen, metsän tuoksuun ja jaettuihin hetkiin ystävien kesken. Jokainen oluemme kantaa mukanaan tarinaa – mausta, paikasta tai muistosta, joka inspiroi sen syntyä. Valikoimastamme löydät monipuolisen kattauksen pienpanimo oluita: raikkaista vehnäoluista syviin porttereihin, metsän makuisista kokeiluista klassisiin tyyleihin. Kaikki oluet valmistetaan huolella, käsityönä ja rakkaudella – Mäntylän hengessä. Olitpa sitten mökillä, saunan jälkeen, pitkällä illallisella tai retkellä metsässä, meiltä löydät oluen juuri siihen hetkeen. Tutustu valikoimaan – ehkä löydät uuden suosikkisi.</p>
        </div>
      </div>

      <div className='shop-grid' ref={gridRef}>
        {products.map((product) => (
          <Link className='product' key={product.id} to={`/product/${product.id}`}>
            <div className='product-image-wrapper'>
              <picture>
                <source srcSet={product.sbg.avif} type="image/avif" />
                <source srcSet={product.sbg.webp} type="image/webp" />
                <img className='product-bg-image' src={product.sbg} alt={product.name} />
              </picture>
              <img className="product-bottle-image" src={product.bottle} alt={product.name} />
            </div>

            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)}e</p>
            <p>{product.volume}l</p>
          </Link>
        ))}
      </div>
      
    </div>
  )
}