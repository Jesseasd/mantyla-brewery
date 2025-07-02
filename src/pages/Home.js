import "../fonts/heavyHeap.ttf"
import { ReactComponent as Cone } from "../images/pine-cone/cone.svg"
import { ReactComponent as Arrow } from "../images/arrow.svg"
import "../style/Home.css"

export default function Home() {
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

        <div className='section section1'>
          <div className='image'>
            <img src={require('../images/beers-wide.png')} />
          </div>

          <div className='wrapper '>
            <h3>Tutustu oluisiimme</h3>
            <p>Sukella Mäntylän Panimon maailmaan ja tutustu ainutlaatuisiin oluihimme. Jokainen olut on huolella valmistettu, käsityöläisperinteitä kunnioittaen ja suomalaisen luonnon inspiroimana. Löydä suosikkisi klassikoistamme tai anna makunystyröillesi uusia elämyksiä kausioluillamme.</p>
            <button>Oluet</button>
          </div>
        </div>
      
        <div className='section section2'>
          <div className='wrapper'>
            <h3>Shoppaile nyt</h3>
            <p>Nauti Mäntylän Panimon parhaista oluista kotonasi! Tilaa suosikkioluet, lahjapakkaukset ja panimotuotteet helposti verkkokaupastamme. Täydellinen lahjaksi tai omiin erityisiin hetkiisi – shoppaile nyt ja tuo ripaus pohjoista taikaa päivääsi.</p>
            <button>Kauppaan</button>
          </div>

          <div className='image'>
            <img src={require('../images/shopnow1.png')} className='image2'/>
          </div>
        </div>
        
      </div>

      <div className='highlights'>

        <h2>Metsän makuja lasissasi</h2>
        <div className='container'>
          <div className='grid-item metsamarja'>
            <p>Metsämarja Stout</p>
            <img src={require("../images/metsamarja.png")} alt='metsämarja stout' />
            <Arrow className='arrow'/>
          </div>
          <div className='grid-item juniper'>
            <p>Juniper Pale Ale</p>
            <img src={require("../images/juniper.png")} alt='metsämarja stout' />
            <Arrow className='arrow'/>
          </div>
          <div className='grid-item pellava'>
            <p>Pellava Blonde Ale</p>
            <img src={require("../images/pellava.png")} alt='metsämarja stout' />
            <Arrow className='arrow'/>
          </div>
          <div className='grid-item kuusenkerkka'>
            <p>kuusenkerkkä IPA</p>
            <img src={require("../images/kuusenkerkka.png")} alt='metsämarja stout' />
            <Arrow className='arrow'/>
          </div>
        </div>
        
      </div>
      
    </div>

  )
}
