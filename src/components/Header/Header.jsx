// import "./header.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/almanac",
    display: "Almanac",
  },
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/merchandise",
    display: "Merchandise",
  },
  {
    path: "/team",
    display: "Team",
  },
  {
    path:"/about",
    display:"About"
  }
];

function Header() {
  return (
    <>
     <div>
      <nav class="border-gray-200 bg-[#650808] dark:bg-[#650808] dark:border-[#650808]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <img
              src={logo} alt="INSIDE LOGO"
              class="h-8 mr-3"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            HITian Inside
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-[#650808] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-[#650808] md:dark:bg-transparent dark:border-gray-700">
              {
              
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-[#FFB5B5] text-[16px] leading-7 font-[600] "
                        : "text-white text-[16px] leading-7 font-[500] hover:text-[#FFB5B5]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}

               
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Header;
