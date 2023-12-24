import React from 'react'
import Logo from "../assets/Logo.svg"
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"

const Footer = () => {
  return (
    <div className='bg-subtle   px-4 py-8 flex justify-center items-center flex-col text-center mt-40'>
 <img  src={Logo} className='mt-7'/>
 
 <div>
 <ul className="flex justify-between mt-2 gap-4">     
              <li className=" my-8  text-black  text-lg">
              Resources 
              </li>
              <li className=" my-8  text-black text-lg">
              About Us 
              </li>
              <li className=" my-8  text-black  text-lg">
            Contribute 
              </li>
           
        </ul>
        <div className='mx-auto flex justify-center'>
        <ul className="flex justify-between mt-2 gap-1 w-[50%] mx-auto">     
              <li className="   text-black">
           <img src={Instagram} alt="instagram"/>
              </li>
              <li className="   text-black">
              <img src={Linkedin} alt="instagram"/>
              </li>
             
        </ul>
        </div>
 </div>
    </div>
  )
}

export default Footer