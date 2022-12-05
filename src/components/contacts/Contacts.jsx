import React from 'react'
import './Contacts.css'
import {BiMailSend} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'

const Contacts = () => {
  return (
    <section id='contact'>
      {/*<h5>Get In Touch</h5>*/}
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiMailSend className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hammond***@gmail.com</h5>
            <a href="mailto:hammondvin@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Vin Hammond</h5>
            <a href="https://m.me/vin.hammond" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+254713 *** 046</h5>
            <a href="https://api.whatsapp.com/send?phone=+254713618046" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Email Adress' required/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts