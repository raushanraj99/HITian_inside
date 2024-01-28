import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import background from "../../assets/images/recruitment/Recruitment_poster.png";
import { useEffect } from 'react';
function About() {
  
  useEffect(()=>{
    AOS.init({duration:1700})
  },[])


  return (
    <div className="h-full bg-[#660909] text-[white]">
      {/* Working on it on About page */}
      <div
        class="w-full h-[450px] bg-fixed bg-cover bg-center flex justify-center items-center opacity-50"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 class=" drop-shadow-md  md:text-8xl text-3xl italic font-extrabold text-[white] bg-[#660909] p-2">
          Welcome to the Maroon Squad
        </h1>
      </div>

      <div class="px-5 md:px-20 py-20 space-y-5 ">
        <p className=" text-justify font-bold " data-aos="fade-down">
          The Maroon Squad, as the official media team of HIT, is a dynamic unit
          within the media club. Dedicated to keeping the campus community
          informed, it meticulously cover and present ongoing details about
          campus life.
        </p>

        <p className=" text-justify font-bold" data-aos="fade-down">
          The club's commitment extends beyond reporting, many diverse events
          are organised that showcases the vibrant spirit of our college. From
          cultural festivals to academic symposiums, the Maroon Squad plays a
          pivotal role in encouraging a sense of community and pride among
          students.
        </p>
        <p className=" text-justify font-bold" data-aos="fade-down">
          Harnessing the power of social media, we leverage our extensive reach
          to promote college activities, achievements, and noteworthy
          happenings. Through engaging content the Maroon Squad aims to create a
          digital presence that reflects the excellence and vibrancy of HIT.
        </p>
        <p className=" text-justify font-bold" data-aos="fade-down">
          HITtian Inside continues to be the voice of HIT, connecting the campus
          community and beyond through the lens of media and literary pursuits.
        </p>
      </div>
    </div>
  );
}

export default About;
