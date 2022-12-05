import React from 'react'
import './Testimonials.css'
import CLIENT1 from '../../assets/client1.jpeg'
import CLIENT2 from '../../assets/client2.jpg'
import CLIENT3 from '../../assets/client3.jpg'
import CLIENT4 from '../../assets/client4.jpg'
//import CLIENT5 from '../../assets/client5.jpg'
//import {Pagination} from 'swiper';
//import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//import 'swiper/css';
//import 'swiper/css/pagination';


const clients = [
  {
    id: 1,
    image: CLIENT1,
    cname: 'Sally Monalisa',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    id: 2,
    image: CLIENT2,
    cname: 'Mary Mboya',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    id: 3,
    image: CLIENT3,
    cname: 'Alex Monta',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    id: 4,
    image: CLIENT4,
    cname: 'Tonny Adar',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <article className="container testimonials__container" 
       // install Swiper modules
      // modules={[ Pagination ]}
       //spaceBetween={40}
       //slidesPerView={1}
       //pagination={{ clickable: true }}
      >
        {
          clients.map(({id, image, cname, review }) =>{
            return(
              <div className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt="Avatar" />
                </div>
                <h5 className='client__name'>{cname}</h5>
                <small className="client__review">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Sequi dolores consectetur culpa soluta nobis doloribus! 
                  Tempore quo accusantium molestias doloremque.
                </small>
              </div>
            )
          })
        }
      </article>
    </section>
  )
}

export default Testimonials