import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineDribbble} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <header className='header__socials'>
        <a href='https://linkedin.com' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://dribbble.com' target='_blank' rel="noreferrer"><AiOutlineDribbble/></a>
    </header>
  )
}

export default HeaderSocials