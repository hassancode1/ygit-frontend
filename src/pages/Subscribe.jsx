import React from 'react'

const Subscribe = () => {
  return (
    <div className='mt-32 mb-4 px-4 py-4  flex  items-center w-full  flex-col md:flex-row  justify-between  text-center' >
        <div className='w-full'>
        <h2 className='font-medium text-lg mt-3'>SUBSCRIBE TO OUR NEW LETTER</h2>
        <h3 className='font-normal text-base mt-3'>Get the latest new , articles and resources in your inbox weekly</h3>
        </div>
        <div className='flex  mt-5  gap-4 md:flex-row  justify-around w-full'>
<input  type='text' placeholder='Email address' className='border  md:w-3/4 p-3 rounded-md w-[70%]'/>
<button className='bg-active text-white px-4 py-2 rounded-md  md: w-[50%]'>
        Subscribe
    </button>
        </div>
    </div>
  )
}

export default Subscribe