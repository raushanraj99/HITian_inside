import React from 'react'
import './almanac.css'
import almanac_img from '../../assets/images/almanac-vector.png'

function Almanac() {
  return (
    <div>Almanac

      {/* ======== Almanac Sectin ========= */}

      <div className="Almanac-home">
        <div className="home-contents">
          <h1>Almanac</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            nesciunt recusandae mollitia sed ex repellendus aliquam! Iusto
            voluptatibus ad alias hic eveniet, laborum voluptates explicabo quae
            odio. Possimus, libero dolore.
          </p>
          <button type="submit">Submit Here</button>
        </div>
        <img src={almanac_img} alt="IMAGE" />
      </div>

    </div>
  )
}

export default Almanac