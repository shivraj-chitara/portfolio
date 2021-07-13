import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Intro({ intro }) {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section
      className="w-full md:w-3/5 md:ml-36 h-screen flex md:items-center md:pl-32 2xl:pl-64"
      style={{
        marginTop: "-1rem",
      }}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="2000"
    >
      <div className="w-full px-5 py-16">
        <p className="text-indigo-400 font-source text-lg">Hi, I am</p>
        <h1 className="text-white font-semibold text-4xl py-8">{intro.name}</h1>
        <p>{intro.introPara}</p>
        <a
          href="#"
          target="_blank"
          className=" inline-block font-source border border-indigo-400 text-sm text-indigo-400 mt-12 p-4 px-6 rounded-sm btn-shadow transition-all delay-75"
        >
          Get in Touch
        </a>
      </div>

      <style jsx>
        {`
          .btn-shadow:hover {
            box-shadow: 0 0.5em 0.5em -0.4em #818cf8;
            transform: translateY(-0.25em);
          }
        `}
      </style>
    </section>
  );
}

export default Intro;
