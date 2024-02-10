import React,{useEffect} from "react";
// import "./Events.css";
import { InstagramEmbed } from "react-social-media-embed";
import { FacebookEmbed } from "react-social-media-embed";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Elist = [
  {
    year: "2023",
    list: [
      {
        img_url: "https://www.instagram.com/p/CybFEKehBlS/?img_index=1",
        alt: "navroopam poster",
        name: "Navroopam",
        date: "18/08/23",
      },
      {
        img_url: "https://www.instagram.com/p/ChpYIIVBldA/",
        alt: "Deepdarpan poster",
        name: "Deepdarpan",
        date: "cancelled",
      },
      {
        img_url: "https://www.instagram.com/p/ChpYIIVBldA/",
        alt: "extravganza poster",
        name: "Extravaganza",
        date: "cancelled",
      },
    ],
  },

  {
    year: "2022",
    list: [
      {
        img_url: "https://www.instagram.com/p/CjKoc0KBFnJ/?img_index=1",
        alt: "Navroopam poster",
        name: "Navroopam",
        date: "18/08/23",
      },
      {
        img_url: "https://www.instagram.com/p/CkBgMJ8BoDm/?img_index=1",
        alt: "Deepdarpan poster",
        name: "Deepdarpan",
        date: "18/08/23",
      },
    ],
  },
  {
    year: "2021",
    list: [
      {
        img_url: "https://www.instagram.com/p/CU4wxYxBonN/?img_index=1",
        alt: "Navroopam poster",
        name: "Navroopam",
        date: "18/08/23",
      },
    ],
  },
];

function Events() {

  useEffect(()=>{
    AOS.init({duration:1700})
  },[])

  return (
    <div className="bg-[#650808] flex justify-center">
      <section className="events-home  pb-16 w-[80%]">
        <h1 className="event-heading text-[3rem] font-bold text-[#fdd0d0] pt-10 pb-10">
          EVENTS
        </h1>
        {/* <div className="events-list"> */}

        {Elist.map((index) => (
          <div data-aos="fade-up">
            <p className="text-start font-bold text-2xl ps-10 pb-5 text-[#fdd0d0]">
              {index.year}
            </p>
            <div className="allthrebox Events-cards grid grid-cols-3 gap-8 ms-5 me-5 mb-10">
              {index.list.map((event, indexes) => (
                <div
                  key={indexes}
                  data={event}
                  className="event-card rounded-lg col-span-3 md:col-span-1 ms-5 me-5 h-[90%] bg-[#a81f1f]"
                >
                  <InstagramEmbed
                    url={event.img_url}
                    className="rounded-t-lg h-[87%] w-full"
                  />

                  <div class="px-6 py-4">
                    <div class="font-bold text-base mb-2 text-white">
                      NAME: {event.name}
                    </div>
                    <div class="font-bold text-base mb-2 text-white">
                      DATE: {event.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* </div> */}
      </section>
    </div>
  );
}

export default Events;
