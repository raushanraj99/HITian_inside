import React from "react";

import almanac_img from "../../assets/images/almanac-vector.png";
import almanac_background from "../../assets/images/almanac-img.png";
import { Link } from "react-router-dom";

const almanacs = [
  {
    img_url: almanac_img,
    alt:"value",
    name: "Ayush Prasad",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    alt:"value",
    name: "Kaif Khan",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    alt:"value",
    name: "Ayush Prasad",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    alt:"value",
    name: "Kaif Khan",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    alt:"value",
    name: "Ayush Prasad",
    roll: "22/CSE-CS/023",
  },
  {
    img_url:almanac_img,
    alt:"value",
    name: "Kaif Khan",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    alt:"value",
    name: "Ayush Prasad",
    roll: "22/CSE-CS/023",
  },
  {
    img_url: almanac_img,
    alt:"value",
    name: "Kaif Khan",
    roll: "22/CSE-CS/023",
  },
];


function Almanac() {
  return (
    <div className="bg-[#650808]">
      {/* ======== Almanac Section ========= */}

      <div className="ps-[10%] md:ps-[8%] pt-[5%]">
        <div className="w-[80vw] md:w-[43vw]">

          <h1 className="text-[3rem] md:text-[5rem] text-[#fdd0d0] font-bold ">Almanac</h1>
          <p className="text-[#f2b5b5] font-medium text-[1.2rem]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          </p>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeNNZafdW_Y33poIvwD801j3_Tbg2i0b1aVU9rRI1X_fADR9A/viewform">
          <button type="submit" className="mt-5 text-[#650808] font-bold bg-[#fdd0d0] text-[.9rem] md:text-[1.3rem] w-[120px] h-[38px] md:w-[160px] md:h-[45px] rounded-[50px]
          ">Submit Here</button>
          </Link>

        </div>
      </div>


        <div className="flex justify-end mt-[5%] md:mt-[-20%]">

          <img src={almanac_img} alt="IMAGE" className="w-[80%] md:w-[65%]" />
        </div>



      <div className="Almanac-section flex flex-col justify-center bg-no-repeat bg-bottom " style={{ backgroundImage: `url(${almanac_background})` }}>

        <h1 className="text-[2rem] md:text-[2.5rem] text-[#f5d9d9] md:text-[#650808]  pt-10 pb-5 font-bold">Best of Almanac</h1>
    
        <div className=" grid justify-center grid-cols-4 gap-3 pb-10 pe-10 md:pe-16 ps-10 md:ps-16">
        {
            almanacs.map((almanac, index) => (
              <div class="Almanac-card  bg-[#d17f7f]  bg-opacity-50 col-span-4 ms-auto md:col-span-1 rounded-lg flex flex-col justify-center">
                <img
                  class="w-full p-3"
                  src={almanac.img_url}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-2">
                  <div class="font-bold text-base mb-2 text-white">NAME: {almanac.name}</div>
                  <div class="font-bold text-base mb-2 text-white">ROLL: {almanac.roll}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>





    </div>
  );
}

export default Almanac;
