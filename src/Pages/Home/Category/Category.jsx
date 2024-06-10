import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/Category/slide1.jpg'
import slide2 from '../../../assets/Category/slide2.jpg'
import slide3 from '../../../assets/Category/slide3.jpg'
import slide4 from '../../../assets/Category/slide4.jpg'
import slide5 from '../../../assets/Category/slide5.jpg'



// import "./swiper.css";

import { Pagination } from 'swiper/modules';
import SectionTitle from '../../Shared/SectionTitle';

const Category = () => {
  return (
    <div>
        <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
        >
        </SectionTitle>
    <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h2 className='text-center text-3xl text-white -mt-12 uppercase'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h2 className='text-center text-3xl text-white -mt-12 uppercase'>Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h2 className='text-center text-3xl text-white -mt-12 uppercase'>Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h2 className='text-center text-3xl text-white -mt-12 uppercase'>Dessert</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h2 className='text-center text-3xl text-white -mt-12 uppercase'>Salads</h2>
        </SwiperSlide>
        
      </Swiper>
  
    </div>
  )
}

export default Category