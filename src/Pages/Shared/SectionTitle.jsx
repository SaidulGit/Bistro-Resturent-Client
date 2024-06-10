import React from 'react'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='text-center w-3/12 mx-auto mb-6'>
      <p className='text-[#D99904] font-normal text-lg mb-2'>---{subHeading}---</p>
      <h2 className='text-3xl font-normal border-y-4 py-2 uppercase'>{heading}</h2>


    </div>
  )
}

export default SectionTitle