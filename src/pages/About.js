import { useRef, useLayoutEffect } from 'react'
import "../style/About.css"
import aboutHeroMp4 from "../assets/videos/about-hero-video/about-hero-video.mp4"
import aboutHeroWebm from "../assets/videos/about-hero-video/about-hero-video.webm"
import waterDropletsMp4 from "../assets/videos/water-droplets-on-a-branch/water-droplets-on-a-branch.mp4"
import waterDropletsWebm from "../assets/videos/water-droplets-on-a-branch/water-droplets-on-a-branch.webm"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from 'split-type'
import { ReactComponent as Cone } from "../assets/icons/cone.svg"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function About() {
  const component = useRef(null)
  const horizontalRef = useRef(null)
  
  useLayoutEffect(() => {
    const splitTypes = document.querySelectorAll(".reveal")

    // Media query handler for responsive animations
    let mm = gsap.matchMedia()

    let ctx = gsap.context(() => {
      // Collect all horizontal panels into an array
      const sections = gsap.utils.toArray(".panel")

      // Pine cone opacity
      gsap.to(".cone",
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".about-hero",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: false,
          }
        }
      )

      // Hero video pinning
      gsap.to(".story-wrapper",
        {
          scrollTrigger: {
            trigger: ".about-hero",
            start: "top top",
            end: "bottom bottom",
            pin: ".video-container",
          }
        }
      )

      // Our story text pinning
      gsap.to(".story-wrapper",
        {
          scrollTrigger: {
            trigger: ".story",
            start: "top top",
            end: "bottom bottom",
            pin: ".story-wrapper",
          }
        }
      )

      // Video opacity
      gsap.to(".video-container2",
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".story",
            start: "top+=500 top",
            //end: "bottom bottom",
            toggleActions: "play reverse play reverse",
          }
        }
      )

      // Initial state
      gsap.set(".video-container2", 
        { 
          width: "25rem", 
          height: "40rem", 
        }
      )

      // Animate video size
      gsap.to(".video-container2", 
        {
          width: "100%",
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".story",
            start: "top+=1000 top",
            end: "top+=2500 top",
            scrub: true,
          }
        }
      )

      // Video text
      gsap.to(".text-item1",
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ".story",
            start: "top+=2500 top",
            end: "bottom-=300 bottom",
            scrub: true,
            markers: false,
          }
        }
      )

      // Horizontal scroll
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: horizontalRef.current,
          start: "top top",
          end: "+=5500",
          pin: true,
          scrub: 0.2,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.5,
            delay: 0,
            ease: "none"
          },
          animation: gsap.to(sections, { 
            xPercent: -100 * (sections.length - 1), 
            ease: "none" 
          })
        })
      })

      // Long section text pin
      gsap.to(".text2",
        {
          scrollTrigger: {
            trigger: ".long",
            start: "top top",
            end: "center center",
            pin: ".text2",
          }
        }
      )

      // Long section text animation
      gsap.to(".text2",
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".long",
            start: "top top",
            end: "center-=200 center",
            scrub: true,
            markers: false,
          }
        }
      )

      // Final text pin
      gsap.to(".text3",
        {
          scrollTrigger: {
            trigger: ".text-section3",
            start: "top top",
            end: "bottom bottom",
            pin: ".text3",
            markers: false,
          }
        }
      )

      // Animate words of elements with .reveal
      splitTypes.forEach((element) => {
        // Split the text into words
        const text = new SplitType(element, { types: "words" })

        // Animate each word
        gsap.from(text.words, {
          scrollTrigger: {
            trigger: ".text-section3",
            start: "top+=100vh top",
            end: "bottom-=100vh bottom",
            scrub: true,
            markers: false,
          },
          opacity: 0.3,
          stagger: 0.5,
        })
      })
    }, component)

    // Clean up all animations when component unmounts
    return () => ctx.revert()

  }, [])

  return (
    <div className='about-container' ref={component}>

      <div className='about-hero'>
        <div className='video-container'>
          <video
            className='video'
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            controls={false}
            preload='metadata'
          >
            <source src={aboutHeroWebm} type='video/Webm' />
            <source src={aboutHeroMp4} type='video/mp4' />
          </video>
          <div className='shadow'></div>
          <Cone className='cone' />
        </div>
      </div>

      <div className='story'>
        <div className='story-wrapper'>
          <p className='text'>Tarinamme</p>

          <div className='video-stage'>
            <div className='video-container2'>
              <video
                className='video'
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                controls={false}
                preload='auto'
              >
                <source src={waterDropletsWebm} type='video/Webm' />
                <source src={waterDropletsMp4} type='video/mp4' />
              </video>
              <p className='text-item1'>Mäntylän Panimo sai alkunsa yksinkertaisesta ideasta ja kolmen ystävän intohimosta. Kaikki alkoi pienestä autotallista Mäntylän naapurustossa, jossa kokeiltiin rohkeasti reseptejä ja hiottiin oluenvalmistuksen taitoja. Aluksi kyse oli vain yhdessä tekemisestä, mutta nopeasti kävi selväksi, että näistä oluista voisi tulla jotain enemmän.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='horizonatl-section' ref={horizontalRef}>
        <div className='horizontal'>
            <div className='horizontal-image horizontal-image1 panel'></div>
            <div className='horizontal-image horizontal-image2 panel'></div>
            <div className='horizontal-image horizontal-image3 panel'></div>
            <div className='horizontal-image horizontal-image4 panel'></div>
            <div className='horizontal-image horizontal-image5 panel'></div>
        </div>
      </div>

      <div className='wrapper'>
        <div className='long'>
          <div className='text-section text-section2'>
            <div className='text-item text-item2'>
              <p className='text2'>Ensimmäinen erä, katajalla maustettu Pale Ale, tarjottiin ystäville ja perheelle – ja palaute oli ylitsevuotavan positiivista. Tämä kannusti kolmikkoa panostamaan panimotoimintaan kunnolla. Laitteet rakennettiin pääosin itse, ja reseptit kehitettiin huolella paikallisia raaka-aineita hyödyntäen.</p>
            </div>
          </div>
        </div>

        <div className='text-section text-section3'>
          <div className='text-item text-item3'>
            <p className='reveal text3'>Panimomme nimi on kunnianosoitus Mäntylän naapurustolle, jossa kaikki sai alkunsa. Samalla se muistuttaa meitä siitä, mistä tulemme – vaatimattomista juurista ja yhteisöllisyydestä. Oluemme, kuten raikas Juniper Pale Ale ja savuinen Sahti, heijastavat tätä henkeä: yhdistämme paikalliset perinteet ja luonnon maut moderniin käsityöläisyyteen.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
