import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import PopularMenu from './Popular/PopularMenu'
import Features from './Featutes/Features'
import Testimonials from './Testimonials/Testimonials'
import { Helmet} from 'react-helmet-async';


const Home = () => {
  return (
    <div>
<Helmet>
  <title>Bistro Boss | Home</title>
</Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home