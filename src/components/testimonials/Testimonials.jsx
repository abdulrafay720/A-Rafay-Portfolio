import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Basit Hussain',
      role: 'Front-end Engineer . Improving open-source projects, one commit at a time.',
      test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repudiandae fuga! Nobis unde, neque voluptatibus enim dignissimos dolorum excepturi dolore iure dolor quibusdam minima reprehenderit, qui architecto eligendi ut! Deleniti."
    },
    {
      id: 2,
      name: 'M Nasar',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus voluptatum, fuga atque molestias dignissimos sapiente corrupti molestiae blanditiis expedita!"
    },
    {
      id: 3,
      name: 'M Taha',
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magnam tempora vel tenetur alias explicabo necessitatibus molestiae eligendi facilis atque"
    },
    {
      id: 4,
      name: 'Imran Khan',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quam deleniti nesciunt libero? Fuga distinctio atque ex suscipit provident, repellendus cupiditate nisi dolorem ullam quam in voluptate enim blanditiis consequuntur.",
    },
    {
      id: 5,
      name: 'M Ali Jinnah',
      role: 'Software Developer',
      test: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sunt dolores illo praesentium dolorum, totam dolorem maxime suscipit tenetur! Itaque."
    },
  ];
  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials