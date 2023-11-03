import React from 'react'
import "./Merchandise.css";
import tshirtf from "../../assets/images/t-shirt-front.jpg";
import tshirtb from "../../assets/images/t-shirt-back.jpg";
import qr from "../../assets/images/QR.png";

function Merchandise() {
  return (

    <>
      <div className='merch-home'>
        <div className='merch-display'>
          <h1 style={{overflow:"hidden",fontSize:"3rem",color:"#650808",fontWeight:"700"}}>The HITian Inside</h1>
          <div className="merch">
            <img src={tshirtf} alt="front tshirt" />
            <img src={tshirtb} alt="back tshirt" />
          </div>
          <img src={qr} alt="QR" className='qr'/>

        </div>
      </div>
    </>
  )
}

export default Merchandise