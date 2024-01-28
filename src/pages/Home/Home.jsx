import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { InstagramEmbed } from 'react-social-media-embed';
import AOS from 'aos';
import 'aos/dist/aos.css';


import "./home.css";
import hit from "../../assets/images/fourpillar.png";
import curve from "../../assets/images/homepage-curve.png";
import collage from "../../assets/images/Image-collage2.png";
import name from "../../assets/images/Hitian-name.png";

// all image
import testImg from "../../assets/aboutimage/testimage.jpg";
import img1 from "../../assets/images/best_of_almanac/Aditi_bera_IT.jpg"
import img2 from "../../assets/images/best_of_almanac/Ashwini_Kumar_IT.jpg"
import img3 from "../../assets/images/best_of_almanac/Durba_Chattopadhyay_CHE.jpg"
import img4 from "../../assets/images/best_of_almanac/Md Kaif_CSE_CS.jpg"
import img5 from "../../assets/images/best_of_almanac/Mrinmoyee Sil_CSE.jpg"

// recruitment 
import recruitmentbanner from "../../assets/images/recruitment/recuritment_header.png"
import recruitmentposter from "../../assets/images/recruitment/Recruitment_poster.png"


function Home() {
  useEffect(()=>{
      AOS.init({duration:1700})
  },[])


  return (
    <div className="min-h-fit">
      {/* ============ Landing Page ============= */}

      <section className="homepage bg-[#650808] justify-center ">
         {/* recruitment poster  */}
         {/* <div className="recruitment pt-3 ">
          <a href="#recruitmentsection" className=" flex justify-center ">
            <img src={recruitmentbanner} alt="banner" className="" />
          </a>
         </div> */}

         <div class="w-full  md:h-[450px] h-20 bg-fixed bg-contain  bg-center flex justify-center items-center opacity-60"
         data-aos="slide-down"
        style={{ backgroundImage: `url(${recruitmentbanner})` }}>
      {/* <h1 class=" drop-shadow-md  md:text-8xl text-1xl italic font-extrabold text-[white] bg-[#660909] p-2"></h1> */}
      <Link to="/team" className='ms-5' >
            <button className="bg-[#650808] font-bold text-[#ffffff] md:text-[2rem] text-[.7rem] md:w-[250px] w-[78px] md:h-[70px] h-[28px] rounded-[50px] hover:scale-125 transition-all duration-700"
            data-aos="slide-up">
              checkout
            </button>
          </Link>
    </div>






        <div className="text-2xl/[2.3rem] md:text-[2.2rem] pt-[20%] md:pt-10 comeExplore font-semibold text-[#ffa6a6]" >
          COME AND EXPLORE
        </div>
        <img src={name} alt="name" className="name inline w-[30%]" />

          {/* /////////////// recruitment snippet ///////////// */}
          {/* <div className=" text-2xl/[2.3rem] text-[#ffa6a6] mt-5"> <button> We are recruiting </button></div> */}


        <img data-aos="fade-up" src={hit} alt="hit" className="hit mt-[30%] md:mt-10" />
        <img src={curve} alt="curve" className="curve mt-[-8%] w-full" />
      </section>
      
      {/* About us */}
      

      <section className="aboutus bg-gradient-to-b from-[#FFB5B5] to-[#A95454] ">
        {/* <img src={grad1} alt="gradient" className="gradient1" /> */}
        <h1 className="text-3xl/[3rem] md:text-5xl/[3rem] aboutus-title font-medium text-[#650808] pt-10" data-aos="fade-down">
          About us
        </h1>
        <div className="aboutus-content inline">
          <p className="text-lg mt-7 md:mt-10 md:px-[20%] px-[3%] text-[#650808] font-bold" data-aos="slide-down">
          The Maroon Squad, as the official media team of HIT, is a dynamic unit within the media club. Dedicated to keeping the campus community informed, it meticulously cover and present ongoing details about campus life.
          </p>
        </div>
        <div className="button mt-10">
          <Link to="about">
            <button className="text-[#FFB5B5] font-semibold bg-[#650808] text-[1.3rem] w-[169px] h-[48px] rounded-[50px] hover:scale-125 transition-all duration-700	">
              Know More
            </button>
          </Link>
        </div>
    

    {/* // recruitment */}

    <div className="banner mt-5 p-5" id="recruitmentsection">
      <marquee behavior="alternate" direction="left">
        <div className="px-20">
        <Link to="team">
          <h3 className="text-[3rem] text-[#650808] font-bold mt-3 md:mt-3 hover:scale-105 transition-all duration-700 ">WE ARE RECRUITING</h3>
        </Link>
        </div>
      </marquee>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4RxyUj_laFiecBYONwinvLuXDnO2D54ZGYpB_LbggEqFGvA/viewform" target="_blank" className="">  {/* google form link */}
          <img src={recruitmentposter} alt="recruitment poster" className="mt-5 border-red-600" data-aos="zoom-in"/>
      </a>
    </div>
    

        <div className="cards mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 justify-between h-full ">
          <div className="card one rounded-r-md m-3 md:m-0">
            <img data-aos="flip-down" src={img1} alt="" />
          </div>
          <div className="card two rounded-md m-3 md:m-0">
            <img data-aos="flip-down" src={img2} alt="" />
          </div>
          <div className="card three rounded-md m-3 md:m-0">
            <img data-aos="flip-down" src={img3} alt="" />
          </div>
          <div className="card four rounded-md m-3 md:m-0">
            <img data-aos="flip-down" src={img4} alt="" />
          </div>
          <div className="card five rounded-l-md m-3 md:m-0">
            <img data-aos="flip-down" src={img5} alt="" />
          </div>
        </div>
      </section>
      {/* <Gallery/> */}
      <section className="gallery grid grid-cols-5">
        <div className="gallery-contents bg-[#660909] col-span-5 md:col-span-2 ">
          <p className="text-5xl/[2] text-[#FFB5B5] font-semibold flex flex-col md:mt-[12rem] mt-[2rem] " data-aos="slide-up">
            Gallery
          </p>
          <p className="mt-10 ps-10 pe-10 text-[#FFB5B5] font-medium" data-aos="fade-down">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            exercitationem odit debitis, veritatis, quidem rem molestias
            deserunt at nam dolore ab dolor, reprehenderit iste minima ipsum ut
            amet voluptates magni?
          </p>
          <Link to="/almanac">
            <button className="mt-10 mb-10 text-[#650808] font-bold bg-[#FFB5B5] text-[1.3rem] w-[150px] h-[45px] rounded-[50px]	hover:scale-125 transition-all duration-700">
              See More
            </button>
          </Link>

        </div>
        <div className=" bordeertext md:col-span-3 col-span-5 bg-[#660909] ">
          <img
            src={collage}
            alt="insideGallery"
            className=" md:w-[100%] w-full h-fit md:h-[100%]"
            data-aos="slide-right"
          />
        </div>
      </section>

      {/* Events */}

      <section className="grid grid-cols-5">
      <div className="bordeertext md:col-span-3 col-span-5 bg-[#660909] flex flex-col md:flex-row justify-center items-center pt-[3rem] md:pb-[5rem] pb-[1rem]">
            {/* <img src={testImg} alt="test image" className="w-[30%] h-[45%] "/> */}
            {/* <img src={testImg} alt="test image" className="w-[50%] h-[65%]"/> */}
            <div className="md:h-[70%%] md:w-[40%] " data-aos="fade-up">
              <InstagramEmbed url="https://www.instagram.com/p/CjKoc0KBFnJ/?img_index=1" className="w-[100%] h-full  " />
            </div>
            <div className="md:h-[50%%] md:w-[40%]" data-aos="fade-down"> 
              <InstagramEmbed url="https://www.instagram.com/p/CybFEKehBlS/?img_index=1" className="w-[100%] h-full " />

            </div>
      </div>

      <div className="bg-[#660909] col-span-5 md:col-span-2 md:pt-[3rem] pt-[1rem] md:pb-[20rem] pb-[5rem]">
          <p className="text-5xl/[2] text-[#FFB5B5] font-semibold flex flex-col " data-aos="fade-right">
           Events
          </p>
          <div className="text-left w-[90%] ps-3 pt-10" data-aos="fade-right">
          <ul className=" list-disc leading-6 ">
            <li className="text-2xl text-red-200 font-bold mt-3">Navroopam</li>
            <hr className="my-2" />
            <p className=" text-red-300">'NAVROOPAM' is an annual event organised by HITian Inside, offering a vibrant display of
the cultural richness surrounding Durga Puja. The event beautifully showcases artistic
pandals, cultural performances, and traditional rituals, idols of maa durga through creative
displays(like Photography,Vlogs,Artwork).</p>
            <li className="text-2xl text-red-200 font-bold mt-3">Deepdarpan</li>
            <hr className="my-2" />
            <p className=" text-red-300">‘DEEPDARPAN’ an exclusive event by HITian Inside for HITians, illuminates the spirit of
Diwali through captivating displays including Photography, Videography, Artwork, and
Creative Writing, showcasing the radiant beauty of lights and diyas.</p>
            <li className="text-2xl text-red-200 font-bold mt-3">Extravaganza</li>
            <hr className="my-2" />
            <p className=" text-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odio fugiat tempora error quas temporibus odit quaerat nemo expedita doloremque.</p>
          </ul>
          </div>
          <Link to="/events">
            <button className="mt-10 mb-10 text-[#650808] font-bold bg-[#FFB5B5] text-[1.3rem] w-[150px] h-[45px] rounded-[50px] hover:scale-125 transition-all duration-700">
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
