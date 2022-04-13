import React from 'react'
import './Services.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <arcticle className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
          </ul>
        </arcticle>

        <arcticle className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
          </ul>
        </arcticle>

        <arcticle className="service">
          <div className="service__head">
            <h3>Search Engine Opt</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet elit.</p>
            </li>
          </ul>
        </arcticle>
      </div>
    </section>
  )
}

export default Services