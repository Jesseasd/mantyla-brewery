import { useEffect } from 'react'
import { ReactComponent as Cone } from "../images/pine-cone/cone.svg"
import { ReactComponent as ButtonArrow } from "../images/icons/button-arrow.svg"
import "../style/Home.css"
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

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

  return (
    <div className='home-container'>

      <div className='home-hero'>
        <h1 className='heading1'>Mäntylä</h1>
        <h1 className='heading2'>Brewery</h1>

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
            <img src={require('../images/beers-wide.png')} alt='' />

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
            <img src={require('../images/garage.png')} className='image2' alt='' />

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
            <img src={require('../images/contact-us.png')} className='image2' alt='' />

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
            <img src={require("../images/metsamarja.png")} alt='metsämarja stout' />
          </div>

          <div 
            className='grid-item juniper'
            onClick={() => navigate("/product/2")}
          >
            <p>Juniper Pale Ale</p>
            <img src={require("../images/juniper.png")} alt='metsämarja stout' />
          </div>

          <div 
            className='grid-item pellava'
            onClick={() => navigate("/product/9")}
          >
            <p>Pellava Blonde Ale</p>
            <img src={require("../images/pellava.png")} alt='metsämarja stout' />
          </div>

          <div 
            className='grid-item kuusenkerkka'
            onClick={() => navigate("/product/6")}
          >
            <p>kuusenkerkkä IPA</p>
            <img src={require("../images/kuusenkerkka.png")} alt='metsämarja stout' />
          </div>
        </div>

      </div>

    </div>

  )
}
