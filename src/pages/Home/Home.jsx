import React from "react";

import "./home.css";
import hit from "../../assets/images/fourpillar.png";
import curve from "../../assets/images/homepage-curve.png";
import collage from "../../assets/images/Image-collage2.png";
import name from "../../assets/images/Hitian-name.png";

import { Link } from "react-router-dom";
import { InstagramEmbed } from 'react-social-media-embed';
// all image
import testImg from "../../assets/aboutimage/testimage.jpg";
import img1 from "../../assets/images/best_of_almanac/Aditi_bera_IT.jpg"
import img2 from "../../assets/images/best_of_almanac/Ashwini_Kumar_IT.jpg"
import img3 from "../../assets/images/best_of_almanac/Durba_Chattopadhyay_CHE.jpg"
import img4 from "../../assets/images/best_of_almanac/Md Kaif_CSE_CS.jpg"
import img5 from "../../assets/images/best_of_almanac/Mrinmoyee Sil_CSE.jpg"

function Home() {

  return (
    <div className="min-h-fit">
      {/* ============ Landing Page ============= */}

      <section className="homepage bg-[#650808] justify-center ">
        <div className="text-2xl/[2.3rem] md:text-[2.2rem] pt-[30%] md:pt-10 comeExplore font-semibold text-[#ffa6a6]">
          COME AND EXPLORE
        </div>
        <img src={name} alt="name" className="name inline w-[30%]" />

          {/* /////////////// recruitment snippet ///////////// */}
          {/* <div className=" text-2xl/[2.3rem] text-[#ffa6a6] mt-5"> <button> We are recruiting </button></div> */}


        <img src={hit} alt="hit" className="hit mt-[30%] md:mt-10" />
        <img src={curve} alt="curve" className="curve mt-[-8%] w-full" />
      </section>
      
      {/* About us */}

      <section className="aboutus bg-gradient-to-b from-[#FFB5B5] to-[#A95454] ">
        {/* <img src={grad1} alt="gradient" className="gradient1" /> */}
        <h1 className="text-3xl/[3rem] md:text-5xl/[3rem] aboutus-title font-medium text-[#650808] pt-10">
          About us
        </h1>
        <div className="aboutus-content inline">
          <p className="text-lg mt-7 md:mt-10 ps-[20%] pe-[20%] text-[#650808] font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dicta
            culpa pariatur qui consectetur dolor quasi, illum vero nam
            molestiae. Molestiae exercitationem doloremque molestias ullam,
            laudantium totam excepturi velit praesentium.
          </p>
        </div>
        <div className="button mt-10">
          <Link to="about">
            <button className="text-[#FFB5B5] font-semibold bg-[#650808] text-[1.3rem] w-[169px] h-[48px] rounded-[50px]	">
              Know More
            </button>
          </Link>
        </div>
    

        <div className="cards mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 justify-between h-full ">
          <div className="card one rounded-r-md m-3 md:m-0">
            <img src={img1} alt="" />
          </div>
          <div className="card two rounded-md m-3 md:m-0">
            <img src={img2} alt="" />
          </div>
          <div className="card three rounded-md m-3 md:m-0">
            <img src={img3} alt="" />
          </div>
          <div className="card four rounded-md m-3 md:m-0">
            <img src={img4} alt="" />
          </div>
          <div className="card five rounded-l-md m-3 md:m-0">
            <img src={img5} alt="" />
          </div>
        </div>
      </section>

      {/* <Gallery/> */}
      <section className="gallery grid grid-cols-5">
        <div className="gallery-contents bg-[#660909] col-span-5 md:col-span-2 ">
          <p className="text-5xl/[2] text-[#FFB5B5] font-semibold flex flex-col md:mt-[12rem] mt-[2rem] ">
            Gallery
          </p>
          <p className="mt-10 ps-10 pe-10 text-[#FFB5B5] font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            exercitationem odit debitis, veritatis, quidem rem molestias
            deserunt at nam dolore ab dolor, reprehenderit iste minima ipsum ut
            amet voluptates magni?
          </p>
          <Link to="/almanac">
            <button className="mt-10 mb-10 text-[#650808] font-bold bg-[#FFB5B5] text-[1.3rem] w-[150px] h-[45px] rounded-[50px]	">
              See More
            </button>
          </Link>
        </div>
        <div className=" bordeertext md:col-span-3 col-span-5 bg-[#660909]">
          <img
            src={collage}
            alt="insideGallery"
            className=" md:w-[100%] w-full h-fit md:h-[100%]"
          />
        </div>
      </section>

      {/* Events */}

      <section className="grid grid-cols-5">
      <div className="bordeertext md:col-span-3 col-span-5 bg-[#660909] flex flex-col md:flex-row justify-center items-center pt-[3rem] md:pb-[5rem] pb-[1rem]">
            {/* <img src={testImg} alt="test image" className="w-[30%] h-[45%] "/> */}
            {/* <img src={testImg} alt="test image" className="w-[50%] h-[65%]"/> */}
            <div className="md:h-[70%%] md:w-[40%] ">
              <InstagramEmbed url="https://www.instagram.com/p/CjKoc0KBFnJ/?img_index=1" className="w-[100%] h-full  " />
            </div>
            <div className="md:h-[50%%] md:w-[40%] ">
              <InstagramEmbed url="https://www.instagram.com/p/CybFEKehBlS/?img_index=1" className="w-[100%] h-full " />

            </div>
      </div>

      <div className="bg-[#660909] col-span-5 md:col-span-2 md:pt-[3rem] pt-[1rem] md:pb-[20rem] pb-[5rem]">
          <p className="text-5xl/[2] text-[#FFB5B5] font-semibold flex flex-col ">
           Events
          </p>
          <div className="text-left w-[90%] ps-3 pt-10">
          <ul className=" list-disc leading-6 ">
            <li className="text-2xl text-red-200 font-bold mt-3">Navroopam</li>
            <p className=" text-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odio fugiat tempora error quas temporibus odit quaerat nemo expedita doloremque.</p>
            <li className="text-2xl text-red-200 font-bold mt-3">Deepdarpan</li>
            <p className=" text-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odio fugiat tempora error quas temporibus odit quaerat nemo expedita doloremque.</p>
            <li className="text-2xl text-red-200 font-bold mt-3">Extravaganza</li>
            <p className=" text-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odio fugiat tempora error quas temporibus odit quaerat nemo expedita doloremque.</p>
          </ul>
          </div>
          <Link to="/events">
            <button className="mt-10 mb-10 text-[#650808] font-bold bg-[#FFB5B5] text-[1.3rem] w-[150px] h-[45px] rounded-[50px]	">
              See More
            </button>
          </Link>
        </div>



    {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/C16Al2UhmBg/" width={328} />
      </div> */}
    


      </section>


    </div>
  );
}

export default Home;
