import React from 'react'

const OrderCard = ({item}) => {
    const {name,price,image,recipe,} = item;
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='bg-slate-600 text-white absolute top-0 right-0 mt-2 mr-4 p-2 rounded-lg'>${price}</p>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className='btn btn-outline border-0 border-b-4 mx-auto border-orange-400'>Add to card</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default OrderCard