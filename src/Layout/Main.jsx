import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar'
import Footer from '../Pages/Shared/Footer'

const Main = () => {
  const location= useLocation()
 const noHeadewrFooter= location.pathname.includes('login') || location.pathname.includes('signup');

  return (
    <div>
      {noHeadewrFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
     {noHeadewrFooter || <Footer></Footer>}
    </div>
  )
}

export default Main