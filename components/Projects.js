import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects({ projects }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section className="w-full px-5 md:w-4/5 md:m-auto" id="projects">
      <h1 className="text-2xl  md:text-3xl text-center md:text-left pb-10 font-semibold text-white md:flex items-center flex-row-reverse ">
        💻 Projects{" "}
        <span className="md:inline-block md:w-3/10 md:h-0.5 md:mr-5 md:bg-indigo-400"></span>
      </h1>

      {projects.map((project) => {
        return projects.indexOf(project) % 2 == 0 ? (
          <div
            className="md:w-full md:flex md:items-center md:justify-around md:py-5"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {/*project img  */}
            <div className="hidden md:block w-9/20 md:transform md:translate-x-14">
              <img src={project.links.img} className="img-effect"></img>
            </div>
            {/* project detail */}
            <div className="text-right w-full px-5 md:px-0 pb-10 md:w-9/20 md:pb-0 md:transform md:-translate-x-14">
              <p className="text-indigo-400 text-sm pb-3 font-source">
                Featured Project
              </p>
              <h3 className="text-gray-350 text-2xl pb-5 font-semibold md:pb-8">
                {project.title}
              </h3>
              <p className="text-sm rounded-md bg-gray-800 p-5">
                {project.detail}
              </p>
              <p className="py-3 text-sm font-source md:py-5">
                {project.technologies}
              </p>
              <div className="flex justify-end">
                <div className="flex w-1/5 justify-between md:w-3/20 ">
                  <a href={project.links.github} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-github hover:text-indigo-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>

                  <a href={project.links.liveView} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7 hover:text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="md:w-full md:flex md:items-center flex-row-reverse md:justify-around md:py-5"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {/*project img  */}
            <div className="hidden md:block w-9/20 md:transform md:-translate-x-14">
              <img src={project.links.img} className="img-effect"></img>
            </div>
            {/* project detail */}
            <div className=" w-full px-5 pb-10 md:px-0 md:w-9/20 md:pb-0 md:transform md:translate-x-14">
              <p className="text-indigo-400 text-sm pb-3 font-source">
                Featured Project
              </p>
              <h3 className="text-gray-350 text-2xl pb-5 font-semibold md:pb-8">
                {project.title}
              </h3>
              <p className="text-sm rounded-md bg-gray-800 p-5">
                {project.detail}
              </p>
              <p className="py-3 text-sm font-source md:py-5">
                {project.technologies}
              </p>
              <div className="">
                <div className="flex w-1/5 justify-between md:w-3/20 ">
                  <a href={project.links.github} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-github hover:text-indigo-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>

                  <a href={project.links.liveView} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7 hover:text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .btn-shadow:hover {
          box-shadow: 0 0.5em 0.5em -0.4em #818cf8;
          transform: translateY(-0.25em);
        }
        .img-effect {
          filter: gray;
          -webkit-filter: grayscale(100%);
        }
        .img-effect:hover {
          -webkit-filter: grayscale(0%);
        }
      `}</style>
    </section>
  );
}

export default Projects;
