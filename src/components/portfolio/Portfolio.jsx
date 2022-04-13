import React from 'react'
import './Portfolio.css'
import MeWeb from '../../assets/meweb.jpg'
import PORTWEB1 from '../../assets/portweb1.jpg'
import PORTWEB2 from '../../assets/portweb2.png' 
import MeWeb2 from '../../assets/meweb2.png'

const images = [
  {
    id:1,
    image: MeWeb,
    title: 'Portfolio website',
    github:'https://github.com/Hammvin',
    demo:'https://www.vincenthammond.co.ke'
  },
  {
    id: 2,
    image: MeWeb2,
    title: 'Portfolio website',
    github: 'https://github.com/Hammvin',
    demo: 'https://www.vincenthammond.co.ke'
  },
  {
    id: 3,
    image: PORTWEB1,
    title: 'Sample website',
    github: 'https://github.com/Hammvin',
    demo: 'https://miamiproject.vincenthammond.co.ke'
  },
  {
    id: 4,
    image: PORTWEB2,
    title: 'Sample website',
    github: 'https://github.com/Hammvin',
    demo: 'https://miamiproject.vincenthammond.co.ke'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          images.map(({id, image, title, github, demo}) =>{
            return(
              <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>GitHub</a>
                  <a href={demo} className='btn btn-primary'>Live View</a>
                </div>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio