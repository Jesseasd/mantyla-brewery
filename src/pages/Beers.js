import { useEffect, useRef } from 'react'
import { products } from "../data/Products"
import "../style/Beers.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { ReactComponent as CottageIcon } from "../images/icons/cottage75.svg"
import { ReactComponent as PartyIcon } from "../images/icons/party75.svg"
import { ReactComponent as SaunaIcon } from "../images/icons/sauna75.svg"
import { ReactComponent as DiningIcon } from "../images/icons/dining75.svg"
import { ReactComponent as FireplaceIcon } from "../images/icons/fireplace75.svg"
import { ReactComponent as SunsetIcon } from "../images/icons/sunset75.svg"
import beersVideo from "../videos/6682813_Bottle_Glass_1920x1080.mp4"

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Beers() {

  const component = useRef(null)

  const getIconsForFits = (fits) => {

    // Icon for each category
    const iconMap = [
      { keywords: ["Mökki ja metsä"], icon: <CottageIcon className='icon' /> },
      { keywords: ["Pimeät illat ja takkatuli"], icon: <FireplaceIcon className='icon' /> },
      { keywords: ["Ruokapöytään"], icon: <DiningIcon className='icon' /> },
      { keywords: ["Saunan jälkeen"], icon: <SaunaIcon className='icon' /> },
      { keywords: ["Kesäillat ja aurinko"], icon: <SunsetIcon className='icon' /> },
      { keywords: ["Ystävien kanssa jaettavaksi"], icon: <PartyIcon className='icon' /> },
    ]

    // Looks through a list of possible icons and returns those that matches the situation
    return iconMap
      .filter(entry =>
        entry.keywords.some(kw =>
          fits.some(fit => fit.includes(kw))
        )
      )
      .map((entry, i) => (
        <div
          className='icon-wrapper'
          key={i}
          onClick={(e) => e.currentTarget.classList.toggle("active")}
        >
          <div className='icon-slide-container'>
            <div className='icon-slide icon-part'>{entry.icon}</div>
            <div className='icon-slide text-part'>
              <p className='icon-keyword'>{entry.keywords[0]}</p>
            </div>
          </div>
        </div>
      ))
  }

  useEffect(() => {
    let ctx = gsap.context(() => {

      ScrollTrigger.create({
        trigger: ".overview",
        start: "top",
        end: "bottom",
        pin: ".overview",
        markers: false,
      })

      gsap.to(".overview h1", {
        backgroundPosition: "0% 100%", // Move gradient down fully
        ease: "none",
        scrollTrigger: {
          trigger: ".overview",
          start: "top-=100",
          end: "center+=500",
          scrub: true,
          markers: false,
        }
      })

      gsap.utils.toArray(".image-pin").forEach((section) => {
        const image = section.querySelector(".beer-image")
        const title = section.querySelector(".product-name")

        // Pin the image
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          pin: image,
        })

        // Pin product title
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "top+=1100",
          pin: title,
        })

        // Animate product name color
        gsap.to(title, {
          backgroundPosition: "0% 100%", // Move gradient down fully
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top",
            end: "center-=190",
            scrub: true,
            markers: false,
          }
        })
      })

    }, component)

    return () => ctx.revert()

  }, [])

  return (
    <ReactLenis root>
      <div className='beers-container' ref={component}>
        <div className='overview'>
          <div className='mask'></div>
          <video className='beers-video' autoPlay loop muted>
            <source src={beersVideo} type='video/mp4' />
          </video>
          <h1>Oluet</h1>
          <div className='beers-text'>
            <p>Mäntylän Panimo syntyi intohimosta käsityöläisolueen, metsän tuoksuun ja jaettuihin hetkiin ystävien kesken. Jokainen oluemme kantaa mukanaan tarinaa – mausta, paikasta tai muistosta, joka inspiroi sen syntyä. Valikoimastamme löydät monipuolisen kattauksen pienpanimo oluita: raikkaista vehnäoluista syviin porttereihin, metsän makuisista kokeiluista klassisiin tyyleihin. Kaikki oluet valmistetaan huolella, käsityönä ja rakkaudella – Mäntylän hengessä. Olitpa sitten mökillä, saunan jälkeen, pitkällä illallisella tai retkellä metsässä, meiltä löydät oluen juuri siihen hetkeen. Tutustu valikoimaan – ehkä löydät uuden suosikkisi.</p>
          </div>
        </div>

        {products.map((product, index) => (
          <div key={index} className='image-pin'>
            <img className='beer-image' src={product.image} />
            <div className='info'>
              <h2 className='product-name'>{product.name}</h2>
              <p className='product-story'>{product.story}</p>
              <div className='info-line'>
                <div className='fits'>
                  {getIconsForFits(product.fits)}
                </div>
                <div className='info-wrap'>
                  <p>{product.alcohol}%</p>
                  <p>{product.volume}L</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ReactLenis>
  )
}
