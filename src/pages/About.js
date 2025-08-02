import { useEffect, useRef } from 'react'
import "../style/About.css"
import bg from "../videos/coverr-woods-covered-by-fog-8066-1080p.mp4"
import video1 from "../videos/coverr-water-droplets-on-a-branch-7524-1080p.mp4"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { ReactComponent as Cone } from "../images/pine-cone/cone.svg"

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const component = useRef(null)
  const horizontalRef = useRef(null)

  useEffect(() => {
    const splitTypes = document.querySelectorAll(".reveal");

    splitTypes.forEach((element) => {
      // Split the text into words
      const text = new SplitType(element, { types: "words" });

      // Animate each word
      gsap.from(text.words, {
        scrollTrigger: {
          trigger: ".text-section3",
          start: "top+=5800vh top",
          end: "bottom+=4000vh top",
          scrub: true,
          markers: true,
        },
        opacity: 0.3,
        stagger: 0.5,
      });
    });

    let ctx = gsap.context(() => {
      const horizontal = horizontalRef.current
      const sections = gsap.utils.toArray(".panel")

      gsap.to(".cone",
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".about-hero",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: false,
          },
        }
      )

      gsap.to(".story-wrapper",
        {
          scrollTrigger: {
            trigger: ".about-hero",
            start: "top top",
            end: "bottom bottom",
            pin: ".video-container",
          }
        })

      // Tarinamme text pinning
      gsap.to(".story-wrapper",
        {
          scrollTrigger: {
            trigger: ".story",
            start: "top top",
            end: "bottom bottom",
            pin: ".story-wrapper",
          }
        })

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
        })

      // Video size
      gsap.to(".video-container2",
        {
          width: "100vw",
          height: "100vh",
          scrollTrigger: {
            trigger: ".story",
            start: "top+=1000 top",
            end: "top+=2500 top",
            scrub: true,
            markers: false,
          },
        }
      )

      // Video text
      gsap.to(".text-item1",
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ".story",
            start: "top+=2500vh top",
            end: "bottom-=300vh bottom",
            scrub: true,
            markers: false,
          },
        }
      )

      // Long sections text
      gsap.to(".text2",
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ".long",
            start: "top+=6000",
            end: "top+=6500",
            scrub: true,
            markers: false,
          }
        }
      )

      // Horizontal scroll
      gsap.to(sections,
        {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: horizontal,
            pin: true,
            scrub: true,
            end: "+=5500",
          }
        }
      )

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


    }, component)

    return () => ctx.revert()

  }, [])

  return (
    <ReactLenis root>

      <div className='about-container' ref={component}>
        <div className='about-hero'>

          <div className='video-container'>

            <video className='video' autoPlay loop muted>
              <source src={bg} type='video/mp4' />
            </video>

            <div className='shadow'></div>

            <Cone className='cone' />

          </div>

        </div>

        <div className='story'>
          <div className='story-wrapper'>

            <p className='text'>Tarinamme</p>

            <div className='video-container2'>

              <video className='video' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
              </video>

              <p className='text-item1'>Mäntylän Panimo sai alkunsa yksinkertaisesta ideasta ja kolmen ystävän intohimosta. Kaikki alkoi pienestä autotallista Mäntylän naapurustossa, jossa kokeiltiin rohkeasti reseptejä ja hiottiin oluenvalmistuksen taitoja. Aluksi kyse oli vain yhdessä tekemisestä, mutta nopeasti kävi selväksi, että näistä oluista voisi tulla jotain enemmän.</p>

            </div>

          </div>
        </div>

        <div className='horizontal' ref={horizontalRef}>
          <div className='horizontal-image horizontal-image1 panel'></div>
          <div className='horizontal-image horizontal-image2 panel'></div>
          <div className='horizontal-image horizontal-image3 panel'></div>
          <div className='horizontal-image horizontal-image4 panel'></div>
          <div className='horizontal-image horizontal-image5 panel'></div>
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

          {/* <div className='gradient1' />

          <div className='cone2-wrapper'>
            <Cone className='cone2' />
          </div>

          <div className='gradient2' /> */}

        </div>

      </div>

    </ReactLenis>
  )
}
