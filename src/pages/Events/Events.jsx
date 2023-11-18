import React from "react";
// import "./Events.css";



const events = [
  {
    img_url: "https://www.w3schools.com/howto/img_5terre.jpg",
    name: "Navroopam",
    date: "18/08/23",
  },
  {
    img_url: "https://www.w3schools.com/howto/img_5terre.jpg",
    name: "Deepdarpan",
    date: "18/08/23",
  },
  {
    img_url: "https://www.w3schools.com/howto/img_5terre.jpg",
    name: "Extravaganza",
    date: "18/08/23",
  },
];

function Events() {
  return (
    <>
      <section className="events-home bg-[#650808] pb-16">
        <h1 className="event-heading text-[3rem] font-bold text-[#fdd0d0] pt-10 pb-10">EVENTS</h1>
        {/* <div className="events-list"> */}
          <div className="Events-cards grid grid-cols-3 gap-8 ms-5 me-5">
            {events.map((event, index) => (
              <div class="event-card rounded-lg col-span-3 md:col-span-1 ms-5 me-5  bg-[#892828] ">
                <img
                  src={event.img_url}
                  className=" rounded-t-lg"
                  alt="Sunset in the mountains"
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
        {/* </div> */}
      </section>
    </>
  );
}

export default Events;
