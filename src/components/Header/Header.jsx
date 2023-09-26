import {useEffect, useRef} from 'react'
import './header.css'
import logo from '../../assets/images/logo.png'
import { NavLink, Link } from "react-router-dom";


const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/events",
      display: "Events",
    },
    {
      path: "/merchandise",
      display: "Merchandise",
    },
    {
      path: "/almanac",
      display: "Almanac",
    },
  ];


function Header() {
  return (
    <>
     <header className="header">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ===== LOGO ====== */}
          <div className='homelogo'>
            <img src={logo} alt="" />
          </div>

          {/* ======== menu ======= */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primarycolor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primarycolor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        

        </div>
      </div>
    </header>
    
    
    </>
  )
}

export default Header