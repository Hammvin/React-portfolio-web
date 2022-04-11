import React from 'react'
import './Header.css'
import CTA  from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Vincent Hammond</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>
        <a href='#contacts' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header