import React from 'react'
import Navbar from '../components/Navbar'
import Iconright from "../assets/icon-right.svg"
import Headphone from "../assets/headphone.svg"
import Trainers from "../assets/trainers.svg"

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col justify-center items-center mt-16'>
    <div className='flex bg-subtle px-6 py-3 gap-3 rounded-md md:hidden'>
        <h2 className='text-active'>Explore curated resources</h2>
        <img src={Iconright} />
    </div>
    <div className='hidden md:flex bg-subtle px-6 py-3 gap-3 rounded-md '>
        <h2 className='text-black'>Explore curated resources.</h2>
        <h2 className='text-active'>Gain insights from top industry talent</h2>
        <img src={Iconright} />
    </div>
    <img src={Headphone}  className='mt-4'/>

    <div className='mt-3 p-4 text-center md:w-2/3 mx-auto'>
        <h2 className='text-2xl font-bold'>Tech is for everyone, and we're here to help you unleash your full potential.</h2>
        <p className='font-normal text-base mt-2 opacity-50 '> Discover your roadmap to tech success with 'Your Guide into Tech.'
             Join us as we provide an inclusive, empowering platform where you can explore a diverse range of first-class resources and courses. Whether you're a novice eager to dive into the tech world or a professional looking to stay at the cutting edge, we're here to support every step of your journey. 
            Join us today and take advantage of the knowledge and connections you need to thrive in the tech industry</p>
    </div>

    <div className='flex flex-col justify-center items-center p-4 md:flex-row gap-5'>
    <img src={Trainers} />
    <h3 className='font-medium text-lg opacity-50 '>
    Join the train of 100+ people using YGIT to take their tech career to the next level 
    </h3>
    </div>
  
    </div>
    </>
  )
}

export default Home