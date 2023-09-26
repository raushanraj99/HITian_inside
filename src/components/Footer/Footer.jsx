import React from 'react'
import './footer.css'
import newLogo from '../../assets/images/insidewhitelogo.png'

function Footer() {
  return (
    <>

    {/* ========= Footer ============ */}
    <footer>
        <div className="sections contactus">
          <h1>Contact Us</h1>
          <div className="form">
            <input type="text" placeholder="Name" className="formInput name" />
            <input
              type="email"
              placeholder="email"
              className="formInput email"
            />
            <input
              type="text-area"
              placeholder="Write a message"
              className="formInput message"
            />
            <button>Submit</button>
          </div>
        </div>
        <div className="sections contents">
          <h1>Contents</h1>
          <ul className="content-list" width="90%">
            <li className="content-items">
              <a href="#">
                <i class="fa-solid fa-circle fa-2xs"></i>Home
              </a>
            </li>
            <li className="content-items">
              <a href="#">
                <i class="fa-solid fa-circle fa-2xs"></i>Events
              </a>
            </li>
            <li className="content-items">
              <a href="#">
                <i class="fa-solid fa-circle fa-2xs"></i>Almanac
              </a>
            </li>
            <li className="content-items">
              <a href="#">
                <i class="fa-solid fa-circle fa-2xs"></i>Merchandise
              </a>
            </li>
            <li className="content-items">
              <a href="#">
                <i class="fa-solid fa-circle fa-2xs"></i>Members
              </a>
            </li>
          </ul>
        </div>
        <div className="sections social">
          <img src={newLogo} alt="Logo" width="50%" />
          <hr
            width="80%"
            style={{
              backgroundColor: "#f2b5b5",
              height: "2px",
              border: "none",
              margin: "3% 0% 3% 0%",
            }}
          />
          <div className="social-icons">
            <i class="fa-brands fa-facebook fa-2xl icon"></i>
            <i class="fa-brands fa-linkedin fa-2xl"></i>
            <i class="fa-brands fa-square-instagram fa-2xl"></i>
            <i class="fa-brands fa-square-youtube fa-2xl"></i>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <span><i class="fa-solid fa-copyright"></i> All Copyright reserved || 2023</span>
      </div>




    </>
  )
}

export default Footer