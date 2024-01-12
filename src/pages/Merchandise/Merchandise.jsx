import React from 'react'
// import "./Merchandise.css";

import tshirtf from "../../assets/images/t-shirt-front.jpg";
import tshirtb from "../../assets/images/t-shirt-back.jpg";
import qr from "../../assets/images/QR.png";

function Merchandise() {
  return (
    <section className='bg-[#650808] pt-5 pb-10'>

    <h1 style={{fontSize:"3rem",color:"#f5b5b5",fontWeight:"700"}}>Attire of 2023</h1>
    <div className='merch-home bg-[#650808] mt-10 flex  justify-center'>
        <div className='bg-[#f5b5b5] w-[65vw] h-[95vw] md:w-[44vw] md:h-[40vw] rounded-md'>

          <div className="merch flex flex-row justify-center items-center p-5 ">
            <img src={tshirtf} alt="front tshirt" className='w-[28vw] md:w-[20vw]' />
            <img src={tshirtb} alt="back tshirt" className='w-[28vw] md:w-[20vw]' />
          </div>
          <div className="flex flex-col md:flex-row justify-center">
          <img src={qr} alt="QR" className=' w-[22vw] md:w-[10vw] ms-20 md:ms-5'/>
          <div className="flex flex-col justify-center items-center font-bold ps-2 pe-2 text-[.8rem] md:text-[1rem]">
          <p>Scan the Qr to Order, contact <span className='bg-[#650808] md:bg-[#650808]'>👇</span> for queries</p>
          <p>Raushan Raj : XXXXXXXXXX</p>
          <p>Raushan Raj : XXXXXXXXXX</p>

          </div>
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default Merchandise