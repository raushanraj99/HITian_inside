import React from 'react'

import recruitposter from "../../assets/images/recruitment/Recruitment_poster.png"
import recruitheader from "../../assets/images/recruitment/recuritment_header.png"
import { Link } from 'react-router-dom'


function Team() {
  return (
    <div className='h-full bg-[#660909] text-[white]'>
      {/* <h1>About Page </h1> */}
      {/* We are Working on it team page */}
      <Link to={Team}>
        <div className="header">
          <img src={recruitheader} alt="" />
        </div>
      </Link>


      <section className="pt-5">
        {/* <div className="text-[2.5rem] mt-3  text-[#f0d4d4] font-bold px-3 pb-3">We Are Recruiting (2024)</div> */}
        <div className="boxsection  justify-center align-middle">
          <div className="text-[2rem]  text-[#f5baba] font-bold py-5">
            Fill the form : 
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4RxyUj_laFiecBYONwinvLuXDnO2D54ZGYpB_LbggEqFGvA/viewform" target='_blank' className='ms-5' >
            <button className="text-[#650808] font-bold bg-[#FFB5B5] text-[1.3rem] w-[150px] h-[45px] rounded-[50px] hover:scale-125 transition-all duration-700">
              Submit here
            </button>
          </a>
          </div>
        </div>
        
        <div className="poster p-5">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4RxyUj_laFiecBYONwinvLuXDnO2D54ZGYpB_LbggEqFGvA/viewform" target='_blank'>
          <img src={recruitposter} alt="" />
          </a>
        </div>


      </section>
      </div>
  )
}

export default Team