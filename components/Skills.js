import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills({ skills }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="w-full px-5 my-10 md:w-4/5 md:m-auto"
      id="skills"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <h1 className="text-2xl md:text-3xl font-semibold text-white py-5 text-center md:text-right md:flex md:items-center md:flex-row-reverse">
        👨‍💻 Skills{" "}
        <span className="md:inline-block md:w-3/10 md:h-0.5 md:mr-5 md:bg-indigo-400"></span>
      </h1>
      <div className="md:w-full md:flex justify-end ">
        <ul className="md:gap-x-28 grid grid-cols-2 md:grid-cols-3 p-5 gap-4">
          {skills.map((skill) => {
            return <li className="bullet flex items-center">{skill}</li>;
          })}
        </ul>
      </div>
      <style jsx>
        {`
          .bullet::before {
            content: url(/img/emoji.svg);
            color: #818cf8;
            width: 1.25rem;
            height: 1.25rem;
            display: inline-block;
            margin-right: 5px;
          }
        `}
      </style>
    </section>
  );
}

export default Skills;
