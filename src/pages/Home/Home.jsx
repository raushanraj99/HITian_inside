import React from 'react'
import './home.css'
import hit from "../../assets/images/fourpillar.png";
import curve from "../../assets/images/homepage-curve.png";
import grad1 from "../../assets/images/gradient-1.png";
import collage from "../../assets/images/Image-collage.png";
import name from "../../assets/images/Hitian-name.png";

// import hit from '../../assets/images/'

function Home() {
  return (
    <div>
      {/* ============ Landing Page ============= */}

      <section className="homepage">
        

        <h1>COME AND EXPLORE</h1>
        <img src={name} alt="name" className="name" />
        <img src={hit} alt="hit" className="hit" />
        <img src={curve} alt="curve" className="curve" />
      </section>

      {/* About us */}

      <section className="aboutus">
        <img src={grad1} alt="gradient" className="gradient1" />
        <h1>About us</h1>
        <div className="aboutus-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dicta
            culpa pariatur qui consectetur dolor quasi, illum vero nam
            molestiae. Molestiae exercitationem doloremque molestias ullam,
            laudantium totam excepturi velit praesentium.
          </p>
        </div>
        <div className="button">
          <button>Know More</button>
        </div>
        <div className="cards">
          <div className="card one"></div>
          <div className="card two"></div>
          <div className="card three"></div>
          <div className="card four"></div>
          <div className="card five"></div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-contents">
          <h1>Gallery</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            exercitationem odit debitis, veritatis, quidem rem molestias
            deserunt at nam dolore ab dolor, reprehenderit iste minima ipsum ut
            amet voluptates magni?
          </p>
          <button>See More</button>
        </div>
        <img src={collage} alt="" />
      </section>



    </div>
  )
}

export default Home