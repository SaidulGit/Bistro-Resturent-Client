import React from 'react'
import OrderCard from './OrderCard'

const OrderTabs = ({items}) => {
  return (
    <div className='grid md:grid-cols-3'>
{
    items.map(item => <OrderCard 
    key={item._id} item={item}
    ></OrderCard>)
}
    </div>
  )
}

export default OrderTabs