import React from 'react'
import Cover from '../Shared/Cover/Cover'
import MenuItem from '../Shared/Menuitems/MenuItem'
import { NavLink } from 'react-router-dom'

const MenuCategory = ({items,title,img}) => {
  return (
   
   <div className='pt-8'>
     {title && <Cover img={img} title={title}></Cover>}
     <div className="grid md:grid-cols-2 gap-10 my-10">
        {
          items.map(item => <MenuItem 
            key={item._id} 
            item={item}>
            </MenuItem> )
        }
        
      </div>
    <NavLink to={`/order/${title}`}>
    <button className='btn btn-outline mb-4 border-0 border-b-4 w-2/8 mx-auto justify-items-center flex'>Order Your Favourite Food</button>
    </NavLink>
   </div>
      
  )
}

export default MenuCategory