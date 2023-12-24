import React,{useState} from 'react'
import Logo from "../assets/Logo.svg"
import Menu from "../assets/menu.svg"
import Menulogo from "../assets/menulogo.svg"
import "../App.css"
import Buttoncustom from './Buttoncustom'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  return (
    // <div className="flex items-center justify-between  p-4">
     
      <nav>
        <section className="MOBILE-MENU flex justify-between p-4 md:hidden">
        <div>
        <img src={Logo} alt="logo" />
        </div>
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
          <img  src={Menu} alt="menu" className='cursor-pointer'/>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
          <div>  <img  src={Menulogo} alt="menu" className='cursor-pointer  absolute top-0 left-0 px-8 py-8'/></div>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-5 w-5 text-white cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col  justify-between min-h-[250px] absolute top-20 left-4">
              <li className=" my-8  text-white">
              Home 
              </li>
            
              <li className=" my-8  text-white" onClick={() => setIsNavOpen(!isNavOpen)}>
              <a href='#resources' > Resources </a>
              </li>
              <li className=" my-8  text-white" onClick={() => setIsNavOpen(!isNavOpen)}>
              <a href='#aboutus' >    About Us  </a>
              </li>
              <li className=" my-8  text-white">
            Contribute 
              </li>
            
            </ul>
          </div>
        </section>

    <div className=' DESKTOP-MENU hidden space-x-8 md:flex  justify-between w-11/12 mx-auto items-center px-6 py-4'>
       <div>
        <img src={Logo} alt="logo" />
        </div>
        <ul className="flex justify-between w-2/5 ">
        <li className=" my-8  text-black">
           Home 
              </li>
            
              <li className=" my-8  text-black">
              <a href='#resources'>     Resources </a> 
              </li>
              <li className=" my-8  text-black">
              <a href='#aboutus'> About Us </a> 
              </li>
              <li className=" my-8  text-black">
            Contribute 
              </li>
           
        </ul>
        <Buttoncustom title="Join Community"/>

        </div>
      </nav>

    // </div>
  );
}