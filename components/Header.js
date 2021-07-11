import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

function Header({ header }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.init({ disable: "mobile" });
  }, []);
  const [nav, setNav] = useState(false);

  function showNav() {
    setNav(true);
  }

  function hideNav() {
    setNav(false);
  }

  useEffect(() => {
    window.addEventListener("mouseup", function (event) {
      var box = document.querySelector(".navbar");
      if (
        event.target != box &&
        event.target.parentNode != box &&
        event.target != document.querySelector(".hamburger") &&
        event.target.parentNode != document.querySelector(".hamburger")
      ) {
        hideNav();
      }
    });
  }, []);
  let count = 2000;
  return (
    <header>
      <nav
        className={`w-1/2 fixed right-0 top-0 bg-gray-800 md:bg-gray-900 h-screen md:h-auto   md:w-full md:py-4 md:items-center flex flex-col items-center md:justify-evenly shadow-sm md:block navbar z-50 md:relative ${
          !nav && "hidden"
        }`}
      >
        <div className=" md:w-full md:flex md:justify-center">
          <div
            className="w-full md:hidden flex justify-end p-5"
            onClick={hideNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <ul className="text-center md:pt-0 text-sm font-medium text-gray-400 font-source md:flex">
            {header.headerLinks.map((link, index) => {
              console.log(count);
              count -= 300;
              return (
                // <a href={`#${link.toLowerCase()}`} key={index}>
                //   <li className="p-6 md:px-7 md:py-2 md:hover:text-indigo-400">
                //     {link}
                //   </li>
                // </a>
                <li
                  className="p-6 md:px-7 md:py-2 md:hover:text-indigo-400 cursor-pointer"
                  data-aos="fade-down"
                  data-aos-once="true"
                  data-aos-duration={count}
                >
                  <Link
                    activeClass="active"
                    to={link.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={index}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className=" md:pr-10 md:absolute md:right-1/100 md:top-0 p-4"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <a
            href={header.resumeLink}
            className=" inline-block font-source border border-indigo-400 text-sm font-semibold text-indigo-400  p-2 px-3  rounded-sm hover:bg-indigo-400 hover:text-gray-900"
          >
            Resume
          </a>
        </div>
      </nav>
      <div
        className="w-full md:hidden flex justify-end p-5 hamburger"
        onClick={showNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <style jsx>
        {`
          .box-shadow {
            box-shadow: rgb(62 67 72) 0px 2px 4px;
          }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
