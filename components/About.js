import React from "react";

function About({ about }) {
  return (
    <section className="w-full px-5 my-5 md:w-4/5 m-auto md:pt-16" id="about">
      <h1 className="text-2xl font-semibold text-white py-5 text-center md:text-3xl md:text-left md:flex md:items-center">
        😎 About me{" "}
        <span className="md:inline-block md:w-3/10 md:h-0.5 md:ml-5 md:bg-indigo-400"></span>
      </h1>

      <div className="w-full grid md:grid-cols-2 md:gap-10 md:px-5 md:py-10 items-center ">
        {/* about para */}
        <div className="w-full">
          {about.paras.map((para) => {
            return <p className="pb-4">{para}</p>;
          })}
        </div>

        {/* photo */}
        <div className="w-3/4 m-auto py-10 md:w-3/5 md:pt-0">
          <img src={about.imageLink} className="rounded-full"></img>
        </div>
      </div>
    </section>
  );
}

export default About;
