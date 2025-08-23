// import "../fonts/heavyHeap.ttf"
import { useEffect } from 'react'
import { ReactComponent as Cone } from "../images/pine-cone/cone.svg"
import { ReactComponent as Arrow } from "../images/arrow.svg"
import { ReactComponent as ButtonArrow } from "../images/button-arrow.svg"
import "../style/Home.css"

export default function Home() {
  useEffect(() => {
    // Only run this on touch devices (no hover)
    const mm = window.matchMedia('(hover: none) and (pointer: coarse)');
    if (!mm.matches) return;

    const sections = document.querySelectorAll('.call-to-action .section');

    // Consider a section "active" when ≥60% is visible
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const isActive = entry.isIntersecting && entry.intersectionRatio >= 0.6;
          entry.target.classList.toggle('is-inview', isActive);
        });
      },
      {
        threshold: [0, 0.6, 1],
        rootMargin: '0px 0px -10% 0px', // tighten a bit so it flips closer to center
      }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);


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
            <img src={require('../images/beers-wide3.png')} />

            <div className='home-wrapper'>
              <h3>Tutustu oluisiimme</h3>
              <p>Sukella Mäntylän Panimon maailmaan ja tutustu ainutlaatuisiin oluihimme. Jokainen olut on huolella valmistettu, käsityöläisperinteitä kunnioittaen ja suomalaisen luonnon inspiroimana. Löydä suosikkisi klassikoistamme tai anna makunystyröillesi uusia elämyksiä kausioluillamme.</p>
              <button className="btn border-wipe">
                <span>Oluet</span>
                <ButtonArrow className="button-arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className='section'>
          <div className='image'>
            <img src={require('../images/garage2.png')} className='image2' />
            {/* <img src={require('../images/garage.png')} className='image2'/> */}
            {/* <img src={require('../images/forest-wide.png')} className='image2'/> */}

            <div className='home-wrapper'>
              <h3>Panimon juuret</h3>
              {/* <p>Mäntylän Panimo syntyi ystävyydestä, intohimosta ja suomalaisesta luonnosta. Lue, miten autotallista kasvoi käsityöläispanimo.</p> */}
              <p>Kun avaat pullon, maistat muutakin kuin olutta. Maistat intohimoa, tarinoita ja hetkiä, jotka on valmistettu jakamista varten. Astu sisään Mäntylän Panimon maailmaan ja löydä, mistä kaikki alkoi.</p>
              <button className="btn border-wipe">
                <span>Tarinamme</span>
                <ButtonArrow className="button-arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className='section'>
          <div className='image'>
            <img src={require('../images/contact-us.png')} className='image2' />

            <div className='home-wrapper'>
              <h3>Kerro asiasi</h3>
              {/* <p>Mäntylän Panimo syntyi ystävyydestä, intohimosta ja suomalaisesta luonnosta. Lue, miten autotallista kasvoi käsityöläispanimo.</p> */}
              <p>Meille olut on enemmän kuin juoma. Se on yhteys ihmisten välillä. Kerro meille ajatuksesi, kysy rohkeasti tai ehdota yhteistyötä. Olemme aina valmiita kuuntelemaan.</p>
              {/* <p>Me ei olla mikään iso tehdaspanimo. Täällä vastaa ihan oikea tyyppi. Kerro asiasi suoraan.</p> */}
              <button className="btn border-wipe">
                <span>Ota yhteyttä</span>
                <ButtonArrow className="button-arrow" />
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className='highlights'>

        <h2>Metsän makuja lasissasi</h2>
        <div className='container'>
          <div className='grid-item metsamarja'>
            <p>Metsämarja Stout</p>
            <img src={require("../images/metsamarja.png")} alt='metsämarja stout' />
            <Arrow className='arrow' />
          </div>
          <div className='grid-item juniper'>
            <p>Juniper Pale Ale</p>
            <img src={require("../images/juniper.png")} alt='metsämarja stout' />
            <Arrow className='arrow' />
          </div>
          <div className='grid-item pellava'>
            <p>Pellava Blonde Ale</p>
            <img src={require("../images/pellava.png")} alt='metsämarja stout' />
            <Arrow className='arrow' />
          </div>
          <div className='grid-item kuusenkerkka'>
            <p>kuusenkerkkä IPA</p>
            <img src={require("../images/kuusenkerkka.png")} alt='metsämarja stout' />
            <Arrow className='arrow' />
          </div>
        </div>

      </div>

    </div>

  )
}
