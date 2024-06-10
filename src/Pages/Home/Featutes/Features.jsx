import React from 'react'
import SectionTitle from '../../Shared/SectionTitle'
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Features = () => {
  return (
    <div className='featured-item text-white pt-8 my-20 bg-fixed'>
        <SectionTitle
        subHeading={'Check it Out'} heading='Featured items'
        ></SectionTitle>
        <div className='md:flex justify-center items-center bg-slate-400 bg-opacity-40 pt-12 py-20 px-36'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:m-10'>
                <p>Aug 20,1999</p>
                <p className='uppercase'>Where camn i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis placeat adipisci quasi sunt vitae illo qui excepturi consequuntur! Incidunt.</p>
                <button className='btn btn-outline border-0 border-b-4 '>Order</button>
            </div>
        </div>
    </div>
  )
}

export default Features