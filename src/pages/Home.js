import { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ReactComponent as Cone } from "../assets/icons/cone.svg"
import { ReactComponent as ButtonArrow } from "../assets/icons/button-arrow.svg"
import "../style/Home.css"
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { products } from "../data/Products"
import { Link } from "react-router-dom"

// Video
import beerWebm from "../assets/videos/beer/beer.webm"
import beerMp4 from "../assets/videos/beer/beer.mp4"

export default function Home() {
  const navigate = useNavigate()
  const heading1Ref = useRef(null)
  const heading2Ref = useRef(null)

  const featuredIds = [8, 2, 9, 6];
  const featured = products.filter(p => featuredIds.includes(p.id));

  useEffect(() => {
    gsap.set([heading1Ref.current, heading2Ref.current, ".cone-svg"], { y: 100, opacity: 0 })
    gsap.set(".cone-svg", { opacity: 0 })

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    tl.to(heading1Ref.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: .5
    })
      .to(heading2Ref.current, {
        y: 0,
        opacity: 1,
        duration: 1
      }, "-=.75")
      .to(".cone-svg", {
        y: 0,
        opacity: 1,
        duration: .8,
        // delay: 1
      }, "-=.7")

    return () => tl.kill()
  }, [])

  return (
    <Loader>
      <div className="home-container" >

        <div className='home-hero'>
          <h1 className='heading1' ref={heading1Ref}>Mäntylä</h1>
          <h1 className='heading2' ref={heading2Ref}>Brewery</h1>

          <Cone className="cone-svg" />
        </div>

        <div className='marquee'>
          <div className='marquee-group'>
            <h2 className='marquee-text'>Ystävien kesken maistuu parhaalta.</h2>
            <h2 className='marquee-text'>Ystävien kesken maistuu parhaalta.</h2>
          </div>
          <div className='marquee-group'>
            <h2 className='marquee-text'>Ystävien kesken maistuu parhaalta.</h2>
            <h2 className='marquee-text'>Ystävien kesken maistuu parhaalta.</h2>
          </div>
        </div>

        <div className='call-to-action'>
          <p>Kun avaat pullon, maistat muutakin kuin olutta. Maistat intohimoa, tarinoita ja hetkiä, jotka on valmistettu jakamista varten. Astu sisään Mäntylän Panimon maailmaan ja löydä, mistä kaikki alkoi.</p>
          <div className='btn-wrapper'>
            <button
              className="btn"
              onClick={() => navigate("/About")}
            >
              <p className='text'>
                Tarinamme
              </p>
              <ButtonArrow className='button-arrow' />
            </button>
          </div>
        </div>

        <div className='beer-video-container'>
          <video
            className='beer-video'
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload='metadata'
            controls={false}
          >
            <source src={beerWebm} type='video/webm' />
            <source src={beerMp4} type='video/mp4' />
          </video>
        </div>

        <div className='highlights'>

          <h2>Metsän makuja lasissasi</h2>

          <div className='container'>
            {featured.map(product => (
              <Link

                key={product.id}
                to={`/product/${product.id}`}
              >
                <div className='highlights-image-wrapper'>
                  <picture>
                    <source srcSet={product.sbg.avif} type="image/avif" />
                    <source srcSet={product.sbg.webp} type="image/webp" />
                    <img
                      className='highlights-bg-image'
                      src={product.sbg.fallback}
                      alt={product.name}
                      loading="lazy"
                    />
                  </picture>

                  <img
                    className='highlights-bottle-image'
                    src={product.bottle}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </Loader>
  )
}
