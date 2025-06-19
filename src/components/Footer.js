import React from 'react'
import { ReactComponent as Instagram} from "../images/instagram.svg"
import { ReactComponent as Facebook} from "../images/facebook.svg"
import { ReactComponent as Twitter} from "../images/twitter.svg"

export default function Footer() {
  return (
    <div className='footer'>

      <div className='socials'>
        <a href='https://www.instagram.com/' target="_blank">
          <Instagram className='ig' />
        </a>
        <a href='https://www.facebook.com/?locale=fi_FI' target="_blank">
          <Facebook className='fb' />
        </a>
        <a href='https://x.com/?lang=fi' target="_blank">
          <Twitter className='tw' />
        </a>
      </div>

      <p>Mäntylä</p>
        
    </div>
  )
}
