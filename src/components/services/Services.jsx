import React from 'react'
import './Services.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      {/*<h5>What I Offer</h5>*/}
      <h2>Services</h2>

      <div className="container services__container">
        <arcticle className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Producing professional designs.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Re-designing existing websites.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Designing vatual concept into actual product.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Converting prototypes to actual designs.</p>
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
            <p>Developing as per your need.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Maintaining codebase for scalability.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Taking care of back-end security.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Ensuring code Re-usability.</p>
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
            <p>Guaranteed first page Google ranking.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Continious optimization and testing.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Regular search assesments.</p>
            </li>
            <li>
            <BsFillPatchCheckFill className='services__list-icon'/>
            <p>Regular reporting and analysis.</p>
            </li>
          </ul>
        </arcticle>
      </div>
    </section>
  )
}

export default Services