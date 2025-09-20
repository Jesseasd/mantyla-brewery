import { useRef, useState } from 'react'
import "../style/Contact.css"
import contactImage from "../images/contact.png"
import emailjs from '@emailjs/browser'
import { ReactComponent as CorrectSVG } from "../images/icons/correct.svg"
import { ReactComponent as WrongSVG } from "../images/icons/wrong.svg"

export default function Contact() {
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

  // Ref to access <form> element
  const form = useRef()

  // "idle" | "loading" | "success" | "error"
  const [status, setStatus] = useState("idle")

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault()    // Stops browser from reloading the page
    if (status === "loading") return    // Prevents double-submit if already sending
    setStatus("loading")    // Show spinner

    try {
      // Sends the form fields to EmailJS
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })

      // If successful -> show success message
      setStatus("success")

      // Clear all fields in the form
      form.current.reset()

      // After 3 seconds, reset status back to idle
      setTimeout(() => setStatus("idle"), 3000)
    } catch (err) {
      // If sending fails -> log the error and show error message
      console.log('FAILED...', err)
      setStatus("error")

      // Reset back to idle after 3 seconds
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  // Boolean to disable inputs + button when sending
  const isDisabled = status === "loading"

  return (
    <div className='contact-page'>
      <div className="contact-image-container">
        <img className="contact-image" src={contactImage} alt="A man holding two beers" />
      </div>

      <div className='contact-info-wrapper'>
        <form className='contact-info' ref={form} onSubmit={sendEmail}>
          <h2>Ota yhteyttä</h2>

          <label htmlFor='name'>
            Nimi
            
            <input 
              id='name' 
              name="name" 
              placeholder=" " 
              required disabled={isDisabled} 
              autoComplete='name' 
            />
          </label>

          <label htmlFor='email'>
            Sähköposti

            <input 
              id='email' 
              name="email" 
              type='email' 
              placeholder=" " 
              required 
              disabled={isDisabled} 
              autoComplete='email' 
            />
          </label>

          <label htmlFor='message'>
            Kerro asiasi

            <textarea 
              id='message' 
              name="message" 
              className='message' 
              rows={8} 
              placeholder=" " 
              required 
              disabled={isDisabled} 
              autoComplete='message' 
            />
          </label>

          <div className="contact-actions">
            <div className="status-message" role="status" aria-live="polite">
              {status === "loading" && (
                <span className="loading-message">
                  <span className="spinner" aria-hidden />
                  Lähetetään…
                </span>
              )}
              {status === "success" && (
                <span className="success-message">
                  <CorrectSVG />
                  Viestisi on lähetetty!
                </span>
              )}
              {status === "error" && (
                <span className="failure-message">
                  <WrongSVG />
                  Viestin lähetys epäonnistui
                </span>
              )}
            </div>

            <button className="contact-btn" type="submit" disabled={isDisabled}>
              {status === "loading" ? "Lähetetään…" : "Lähetä"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
