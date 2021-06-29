import React from "react";

function Intro({ intro }) {
  return (
    <section className="w-full md:w-2/5 md:ml-36">
      <div className="w-full px-5 py-16">
        <p className="text-indigo-400 font-source text-lg">Hi, I am</p>
        <h1 className="text-white font-semibold text-4xl py-8">{intro.name}</h1>
        {/* <p className="">
          a {""}
          <span className="text-indigo-400 font-semibold inline-block">
            full-stack developer
          </span>
          {""} and a graduate from IIT Roorkee. I'm passionate about writing
          code and exploring new technologies to solve real world problems.
          Currently I am looking for a full-time opportunity as
          full-stack/frond-end developer.
        </p> */}
        <p>{intro.introPara}</p>
        <a
          href="#"
          className=" inline-block font-source border border-indigo-400 text-sm text-indigo-400 mt-12 p-4 px-6 rounded-sm btn-shadow transition-all delay-75"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Intro;
