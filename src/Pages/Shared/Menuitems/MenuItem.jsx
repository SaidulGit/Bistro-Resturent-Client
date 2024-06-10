import React from 'react'

const MenuItem = ({item}) => {
  const {name,price,image,recipe,} = item;
  return (
    <div style={{borderRadius:'0 200px 200px 200px'}} className='flex space-x-4 mb-5'>
        <img className='w-[100px] rounded-se-2xl rounded-ee-2xl rounded-es-2xl' src={image} alt="" />
        <div>
         <h3 className='text-lg font-normal uppercase'>{name}---------</h3>
         <p className='text-base font-normal'>{recipe}</p>
        </div>
        <p className='text-[#BB8506] text-lg font-normal'>${price}</p>
    </div>
  )
}

export default MenuItem