import React from 'react'
import Courseimg from "../assets/courseillustration.svg"
const Course = ({resource}) => {
  return (
 <>
 {resource.map((item) =>(

    <div className='flex justify-center items-center' key={item.name}>
    <div className='bg-courseColour shadow-md  my-6 w-[310px] h-[368px] mx-4 px-6 py-2 flex flex-col mt-3 '>
      <img  src={Courseimg} alt='illustration' className='w-[80px] h-[80px] mt-3'/>
      <h2 className='text-3xl font-extrabold mt-4'>{item.name}</h2>
      <div>
      <div className=' bg-subtle px-1 py-1 rounded-md mt-4'>
        <h2 className='text-active font-semibold'> <a href={item.link} target="_blank">ALL YOU NEED TO GET STARTED </a></h2>
       
    </div>
        <h3 className='text-base mt-5 font-normal'>
     {item.paragraph}
    </h3>
      </div>
    </div>
    </div>
)
     )}
    </>
  )
}

export default Course