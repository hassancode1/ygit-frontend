import React from 'react'
import Aboutimg from "../assets/steplogo.svg"
import Icon from "../assets/Icon.svg"
const Aboutus = () => {
  return (
    <div className='bg-aboutBg mt-32 mb-9 px-4 py-4 flex justify-center items-center flex-col text-center' id='aboutus'>
        <img src={Aboutimg} alt='logo'/>
        <div>
            <h2 className='font-medium text-lg mt-3'>Join our patner  training program after your learning here</h2>
            <h3 className='font-normal text-base mt-3 md:w-1/2 text-center mx-auto'>S.T.E.P is for career professional, seeking opportunities for work experience Ideal S.T.E.P. trainees have an unparalleled hunger for knowledge and are seeking astronomic professional growth. You must be willing to fully attend all S.T.E.P. sessions, have a steady internet</h3>
        </div>
        <div className="bg-active text-white px-9 py-2 mt-6 rounded-md gap-3 flex md: text-center">
        <h2>  Apply here</h2>
          <img src={Icon} alt='right'/>
        </div>
    </div>
  )
}

export default Aboutus