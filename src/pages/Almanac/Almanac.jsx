import React from "react";

// all images are there, add only path and it will be active
import aditi from "../../assets/images/best_of_almanac/Aditi_bera_IT.jpg"
import aditya from "../../assets/images/best_of_almanac/Aditya_Raj_IT.jpg"
import ashwin from "../../assets/images/best_of_almanac/Ashwini_Kumar_IT.jpg"
import durba from "../../assets/images/best_of_almanac/Durba_Chattopadhyay_CHE.jpg"
import kaif from "../../assets/images/best_of_almanac/Md Kaif_CSE_CS.jpg"
import mrin from "../../assets/images/best_of_almanac/Mrinmoyee Sil_CSE.jpg"
import pushp from "../../assets/images/best_of_almanac/Pushp_Ranjan_CSE_CS.jpg"
import satyam from "../../assets/images/best_of_almanac/Satyam_Kumar_ECE.jpg"
 
import almanac_img from "../../assets/images/almanac-vector.png";
import almanac_background from "../../assets/images/almanac-img.png";
// import almanacPoster from "../../assets/images/almanac-poster.jpg";
import { Link } from "react-router-dom";

const almanacs = [
  {
    img_url: aditi,
    alt:"value",
    name: "Aditi bera",
    roll: "Information Technology",
  },
  {
    img_url: aditya,
    alt:"value",
    name: "Aditya Raj",
    roll: "Information Technology",
  },
  {
    img_url: ashwin,
    alt:"value",
    name: "Ashwini Kumar",
    roll: "Information Technology",
  },
  {
    img_url: durba,
    alt:"value",
    name: "Durba Chattopadhyay",
    roll: "Chemical",
  },
  {
    img_url: kaif,
    alt:"value",
    name: "Md Kaif",
    roll: "Cyber Security",
  },
  {
    img_url:mrin,
    alt:"value",
    name: "Mrinmoyee sil",
    roll: "Computer Science",
  },
  {
    img_url: pushp,
    alt:"value",
    name: "Pushp Ranjan",
    roll: "Cyber Security",
  },
  {
    img_url: satyam,
    alt:"value",
    name: "Satyam Kumar",
    roll: "Electronics and communication",
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
          <Link to="https://bit.ly/AlmanacSubmission2k24" target="_blank">
          <button type="submit" className="mt-5 text-[#650808] font-bold bg-[#fdd0d0] text-[.9rem] md:text-[1.3rem] w-[120px] h-[38px] md:w-[160px] md:h-[45px] rounded-[50px]
           hover:scale-125 transition-all duration-700">Submit Here</button>
          </Link>

        </div>
      </div>

        <div className="flex justify-end mt-[5%] md:mt-[-20%]">
          <img src={almanac_img} alt="IMAGE" className="w-[80%] md:w-[65%]" />
        </div>

      <div className="Almanac-section flex flex-col justify-center bg-no-repeat bg-bottom " style={{ backgroundImage: `url(${almanac_background})` }}>

        <h1 className="text-[2rem] md:text-[2.5rem] text-[#f5d9d9] md:text-[#650808]  pt-10 pb-5 font-bold bg-[#650808]">Best of Almanac</h1>
    
        <div className=" grid justify-center grid-cols-4 gap-3 pb-10 pe-10 md:pe-16 ps-10 md:ps-16">
        {
            almanacs.map((almanac, index) => (
              <div class="Almanac-card  bg-[#d17f7f] bg-opacity-50 col-span-4 ms-auto md:col-span-1 rounded-lg flex flex-col justify-center">
                <div className=" object-contain w-full h-full">
                <img
                  class="w-full h-full p-3"
                  src={almanac.img_url}
                  alt="Sunset in the mountains"
                />
                </div>
                <div class="px-6 py-2">
                  <div class="font-bold text-base text-white">{almanac.name}</div>
                  <div class="font-bold text-base mb-2 text-white">{almanac.roll}</div>
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
