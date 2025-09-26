import { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ReactComponent as Cone } from "../assets/icons/cone.svg"
import { ReactComponent as ButtonArrow } from "../assets/icons/button-arrow.svg"
import "../style/Home.css"
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'

// Call to action images
import beersWideAvif from "../assets/images/beers-wide/beers-wide.avif"
import beersWideWebp from "../assets/images/beers-wide/beers-wide.webp"
import beersWideJpg from "../assets/images/beers-wide/beers-wide.jpg"

import garageAvif from "../assets/images/garage/garage.avif"
import garageWebp from "../assets/images/garage/garage.webp"
import garageJpg from "../assets/images/garage/garage.jpg"

import contactUsAvif from "../assets/images/contact-us/contact-us.avif"
import contactUsWebp from "../assets/images/contact-us/contact-us.webp"
import contactUsJpg from "../assets/images/contact-us/contact-us.jpg"

// Highlights images
import metsamarjaAvif from "../assets/images/metsamarja/metsamarja.avif"
import metsamarjaWebp from "../assets/images/metsamarja/metsamarja.webp"
import metsamarjaJpg from "../assets/images/metsamarja/metsamarja.jpg"

import juniperAvif from "../assets/images/juniper/juniper.avif"
import juniperWebp from "../assets/images/juniper/juniper.webp"
import juniperJpg from "../assets/images/juniper/juniper.jpg"

import pellavaAvif from "../assets/images/pellava/pellava.avif"
import pellavaWebp from "../assets/images/pellava/pellava.webp"
import pellavaJpg from "../assets/images/pellava/pellava.jpg"

import kuusenkerkkaAvif from "../assets/images/kuusenkerkka/kuusenkerkka.avif"
import kuusenkerkkaWebp from "../assets/images/kuusenkerkka/kuusenkerkka.webp"
import kuusenkerkkaJpg from "../assets/images/kuusenkerkka/kuusenkerkka.jpg"

export default function Home() {
  const navigate = useNavigate()
  const heading1Ref = useRef(null)
  const heading2Ref = useRef(null)

  useEffect(() => {
    // Only run this on touch devices (no hover)
    const mm = window.matchMedia('(hover: none) and (pointer: coarse)')
    if (!mm.matches) return   // If it's a desktop device -> exit early

    const sections = document.querySelectorAll('.call-to-action .section')

    // IntesectionObserver watches when elements enter / leave viewport
    // A section becomes "active" when at least 60% of it is visible
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // True if element is intersecting and at least 60% visible
          const isActive = entry.isIntersecting && entry.intersectionRatio >= .6

          // Toggle "is-inview" class on the section
          entry.target.classList.toggle('is-inview', isActive)
        })
      },
      {
        threshold: [0, .6, 1],
        rootMargin: '0px 0px -10% 0px',
      }
    )

    // Start observing each section
    sections.forEach(s => io.observe(s))

    // Cleanup -> stop observing when component unmounts
    return () => io.disconnect()
  }, [])

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

          <div className='section'>
            <div className='image'>
              <picture>
                <source srcSet={beersWideAvif} type='image/avif' />
                <source srcSet={beersWideWebp} type='image/webp' />
                <img
                  src={beersWideJpg}
                  alt=''
                />
              </picture>

              <div className='home-wrapper'>
                <h3>Tutustu oluisiimme</h3>
                <p>Sukella Mäntylän Panimon maailmaan ja tutustu ainutlaatuisiin oluihimme. Jokainen olut on huolella valmistettu, käsityöläisperinteitä kunnioittaen ja suomalaisen luonnon inspiroimana. Löydä suosikkisi klassikoistamme tai anna makunystyröillesi uusia elämyksiä kausioluillamme.</p>
                <div className='btn-wrapper'>
                  <button
                    className="btn"
                    onClick={() => navigate("/Shop")}
                  >
                    <p className='text'>
                      Oluet
                    </p>
                    <ButtonArrow className='button-arrow' />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='section'>
            <div className='image'>
              <picture>
                <source srcSet={garageAvif} type='image/avif' />
                <source srcSet={garageWebp} type='image/webp' />
                <img
                  src={garageJpg}
                  alt=''
                />
              </picture>

              <div className='home-wrapper'>
                <h3>Panimon juuret</h3>
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
            </div>
          </div>

          <div className='section'>
            <div className='image'>
              <picture>
                <source srcSet={contactUsAvif} type='image/avif' />
                <source srcSet={contactUsWebp} type='image/webp' />
                <img
                  src={contactUsJpg}
                  alt=''
                />
              </picture>

              <div className='home-wrapper'>
                <h3>Kerro asiasi</h3>
                <p>Meille olut on enemmän kuin juoma. Se on yhteys ihmisten välillä. Kerro meille ajatuksesi, kysy rohkeasti tai ehdota yhteistyötä. Olemme aina valmiita kuuntelemaan.</p>
                <div className='btn-wrapper'>
                  <button
                    className="btn"
                    onClick={() => navigate("/Contact")}
                  >
                    <p className='text'>
                      Ota yhteyttä
                    </p>
                    <ButtonArrow className='button-arrow' />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='highlights'>

          <h2>Metsän makuja lasissasi</h2>
          <div className='container'>
            <div
              className='grid-item metsamarja'
              onClick={() => navigate("/product/8")}
            >
              <p>Metsämarja Stout</p>
              <picture>
                <source srcSet={metsamarjaAvif} type='image/avif' />
                <source srcSet={metsamarjaWebp} type='image/webp' />
                <img
                  src={metsamarjaJpg}
                  alt='Metsämarja Stout'
                />
              </picture>
            </div>

            <div
              className='grid-item juniper'
              onClick={() => navigate("/product/2")}
            >
              <p>Juniper Pale Ale</p>
              <picture>
                <source srcSet={juniperAvif} type='image/avif' />
                <source srcSet={juniperWebp} type='image/webp' />
                <img
                  src={juniperJpg}
                  alt='Juniper Pale Ale'
                />
              </picture>
            </div>

            <div
              className='grid-item pellava'
              onClick={() => navigate("/product/9")}
            >
              <p>Pellava Blonde Ale</p>
              <picture>
                <source srcSet={pellavaAvif} type='image/avif' />
                <source srcSet={pellavaWebp} type='image/webp' />
                <img
                  src={pellavaJpg}
                  alt='Pellava Blonde Ale'
                />
              </picture>
            </div>

            <div
              className='grid-item kuusenkerkka'
              onClick={() => navigate("/product/6")}
            >
              <p>kuusenkerkkä IPA</p>
              <picture>
                <source srcSet={kuusenkerkkaAvif} type='image/avif' />
                <source srcSet={kuusenkerkkaWebp} type='image/webp' />
                <img
                  src={kuusenkerkkaJpg}
                  alt='Kuusenkerkkä IPA'
                />
              </picture>
            </div>
          </div>

        </div>

      </div>
    </Loader>
  )
}
