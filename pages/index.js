import "tailwindcss/tailwind.css";
import Head from "next/head";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main
      className="bg-gray-900 w-full"
      style={{
        fontFamily: "Montserrat",
      }}
    >
      <Head>
        {/* montserrat */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* source code pro */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* all content wrap */}
      <div className="w-full m-auto text-gray-400 z-20">
        {/* header */}
        <header className="w-1/2 fixed right-0 top-0 bg-gray-800 h-screen md:h-auto md:bg-transparent md:w-full md:py-4 md:items-center flex flex-col items-center md:justify-evenly shadow-sm md:relative">
          <div className=" md:w-full md:flex md:justify-center">
            <div className="w-full md:hidden flex justify-end p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
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
            <ul className="text-center md:pt-0 text-sm font-medium text-gray-400 font-source md:flex  ">
              <a href="#">
                <li className="p-6 md:px-7 md:py-2 md:hover:text-indigo-400">
                  About
                </li>
              </a>
              <a href="#">
                <li className="p-6 md:px-7 md:py-2 md:hover:text-indigo-400">
                  Skills
                </li>
              </a>
              <a href="#">
                <li className="p-6 md:px-7 md:py-2 md:hover:text-indigo-400">
                  Experience
                </li>
              </a>
              <a href="#">
                <li className="p-6 md:px-7 md:py-2 md:hover:text-indigo-400">
                  Work
                </li>
              </a>
              <a href="#">
                <li className="p-6 md:px-7 md:py-2 md:hover:text-indigo-400">
                  Contact
                </li>
              </a>
            </ul>
          </div>
          <div className=" md:pr-10 pt-5 md:absolute md:right-1/100">
            <a
              href="#"
              className=" inline-block font-source border border-indigo-400 text-sm font-semibold text-indigo-400  p-2 px-3 rounded-sm hover:bg-indigo-400 hover:text-gray-900"
            >
              Resume
            </a>
          </div>
        </header>

        {/* main page */}
        <section className="w-full md:w-2/5 md:ml-36">
          <div className="w-full px-5 py-16">
            <p className="text-indigo-400 font-source text-lg">Hi, I am</p>
            <h1 className="text-white font-semibold text-4xl py-8">
              Vinod Sonagara
            </h1>
            <p className="">
              a {""}
              <span className="text-indigo-400 font-semibold inline-block">
                full-stack developer
              </span>
              {""} and a graduate from IIT Roorkee. I'm passionate about writing
              code and exploring new technologies to solve real world problems.
              Currently I am looking for a full-time opportunity as
              full-stack/frond-end developer.
            </p>
            <a
              href="#"
              className=" inline-block font-source border border-indigo-400 text-sm text-indigo-400 mt-12 p-4 px-6 rounded-sm btn-shadow transition-all delay-75"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* about me page */}
        <section className="w-full px-5 my-5 md:w-4/5 m-auto md:pt-16">
          <h1 className="text-2xl font-semibold text-white py-5 text-center md:text-3xl md:text-left md:flex md:items-center">
            😎 About me{" "}
            <span className="md:inline-block md:w-3/10 md:h-0.5 md:ml-5 md:bg-indigo-400"></span>
          </h1>

          <div className="w-full grid md:grid-cols-2 md:gap-10 md:px-5 md:py-10 items-center ">
            {/* about para */}
            <div className="w-full">
              <p className="pb-4 ">
                Hi, I am Vinod Sonagara, a JavaScript developer with a firm
                knowledge of React, Express, Redux, MongoDB and MySQL.{" "}
              </p>
              <p className="pb-4">
                I have good a knowledge of frameworks and tools such as Webpack,
                npm, and Yarn and have experience working with RESTful API,
                GraphQL and JWT. I have good grasp of software architectural,
                low-level and high-level design.
              </p>
              <p className="pb-4">
                I'm passionate about learning new technologies and am seeking to
                improve my skills.
              </p>
            </div>

            {/* photo */}
            <div className="w-3/4 m-auto py-10 md:w-3/5 md:pt-0">
              <img src="/img/vinod.jpeg" className="rounded-full"></img>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="w-full px-5 my-10 md:w-4/5 md:m-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-white py-5 text-center md:text-right md:flex md:items-center md:flex-row-reverse">
            👨‍💻 Skills{" "}
            <span className="md:inline-block md:w-3/10 md:h-0.5 md:mr-5 md:bg-indigo-400"></span>
          </h1>
          <div className="md:w-full md:flex justify-end ">
            <ul className="md:gap-x-28 grid grid-cols-2 md:grid-cols-3 p-5 gap-4">
              <li className="bullet flex items-center">Node.js</li>
              <li className="bullet flex items-center">React</li>
              <li className="bullet flex items-center">Express</li>
              <li className="bullet flex items-center">Redux</li>
              <li className="bullet flex items-center">JavaScript(ES6)</li>
              <li className="bullet flex items-center">HTML</li>
              <li className="bullet flex items-center">CSS</li>
              <li className="bullet flex items-center">MongoDB</li>
              <li className="bullet flex items-center">REST APIs</li>
              <li className="bullet flex items-center">GraphQL</li>
              <li className="bullet flex items-center">Git</li>
              <li className="bullet flex items-center">GitHub</li>
              <li className="bullet flex items-center">Webpack</li>
              <li className="bullet flex items-center">npm</li>
              <li className="bullet flex items-center">Yarn</li>
              <li className="bullet flex items-center">Jest</li>
              <li className="bullet flex items-center">Bootstrap</li>
              <li className="bullet flex items-center">MaterialCSS</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="w-full px-5 my-10 md:w-4/5 md:m-auto md:my-20">
          <h1 className="text-2xl md:text-3xl md:text-left font-semibold text-white py-10 text-center md:flex md:items-center">
            👨‍🎓 Experience{" "}
            <span className="md:inline-block md:w-3/10 md:h-0.5 md:ml-5 md:bg-indigo-400"></span>
          </h1>
          <Experience />
          <Experience />
          <Experience />
        </section>

        {/* project page */}
        <section className="w-full px-5 md:w-4/5 md:m-auto">
          <h1 className="text-2xl  md:text-3xl text-center md:text-left pb-10 font-semibold text-white md:flex items-center flex-row-reverse ">
            💻 Projects{" "}
            <span className="md:inline-block md:w-3/10 md:h-0.5 md:mr-5 md:bg-indigo-400"></span>
          </h1>

          {/* p-1 */}

          <div className="md:w-full md:flex md:items-center md:justify-around md:py-5">
            {/*project img  */}
            <div className="hidden md:block w-9/20 md:transform md:translate-x-14">
              <img src="/img/fileBrowser.png" className="img-effect"></img>
            </div>
            {/* project detail */}
            <div className="text-right w-full px-5 md:px-0 pb-10 md:w-9/20 md:pb-0 md:transform md:-translate-x-14">
              <p className="text-indigo-400 text-sm pb-3 font-source">
                Featured Project
              </p>
              <h3 className="text-gray-350 text-2xl pb-5 font-semibold md:pb-8">
                File Browser App
              </h3>
              <p className="text-sm rounded-md bg-gray-800 p-5">
                A File Browser app to add, remove, or rename files/folders and
                travesal between different folders.
              </p>
              <p className="py-3 text-sm font-source md:py-5">
                React Redux MaterialCSS
              </p>
              <div className="flex justify-end">
                <div className="flex w-1/5 justify-between md:w-3/20 ">
                  <a href="#">
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

                  <a href="#">
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

          {/* p-2 */}

          <div className="md:w-full md:flex md:items-center flex-row-reverse md:justify-around md:py-5">
            {/*project img  */}
            <div className="hidden md:block w-9/20 md:transform md:-translate-x-14">
              <img src="/img/fileBrowser.png" className="img-effect"></img>
            </div>
            {/* project detail */}
            <div className=" w-full px-5 pb-10 md:px-0 md:w-9/20 md:pb-0 md:transform md:translate-x-14">
              <p className="text-indigo-400 text-sm pb-3 font-source">
                Featured Project
              </p>
              <h3 className="text-gray-350 text-2xl pb-5 font-semibold md:pb-8">
                File Browser App
              </h3>
              <p className="text-sm rounded-md bg-gray-800 p-5">
                A File Browser app to add, remove, or rename files/folders and
                travesal between different folders.
              </p>
              <p className="py-3 text-sm font-source md:py-5">
                React Redux MaterialCSS
              </p>
              <div className="">
                <div className="flex w-1/5 justify-between md:w-3/20 ">
                  <a href="#">
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

                  <a href="#">
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

          {/* p-3 */}
          <div className="md:w-full md:flex md:items-center md:justify-around md:py-5">
            {/*project img  */}
            <div className="hidden md:block w-9/20 md:transform md:translate-x-14">
              <img src="/img/fileBrowser.png" className=" img-effect"></img>
            </div>
            {/* project detail */}
            <div className="text-right w-full px-5 md:px-0 pb-10 md:w-9/20 md:pb-0 md:transform md:-translate-x-14">
              <p className="text-indigo-400 text-sm pb-3 font-source">
                Featured Project
              </p>
              <h3 className="text-gray-350 text-2xl pb-5 font-semibold md:pb-8">
                File Browser App
              </h3>
              <p className="text-sm rounded-md bg-gray-800 p-5">
                A File Browser app to add, remove, or rename files/folders and
                travesal between different folders.
              </p>
              <p className="py-3 text-sm font-source md:py-5">
                React Redux MaterialCSS
              </p>
              <div className="flex justify-end">
                <div className="flex w-1/5 justify-between md:w-3/20 ">
                  <a href="#">
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

                  <a href="#">
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
        </section>

        {/* contact page */}
        <section className="w-full px-5 text-center pb-28 pt-5 md:w-4/5 m-auto md:py-20 md:pb-28">
          <h1 className="text-2xl md:text-3xl pb-10 font-semibold text-white py-5 text-center">
            ☎️ Contact Me
          </h1>
          <p className="pb-5">
            Contact me on my mail for professional queries or DM me on Twitter
            for casual chat.
          </p>
          <p className="pb-5">vsonagara@ee.iitr.ac.in | (+91) 7060334254</p>
          <div className="flex justify-evenly w-2/5 m-auto md:w-3/20">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-github hover:text-indigo-400"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-linkedin hover:text-indigo-400"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-twitter hover:text-indigo-400"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </div>

          <a
            href="#"
            className=" inline-block font-source border border-indigo-400 text-sm text-indigo-400 mt-10 p-4 px-6 rounded-sm btn-shadow transition-all delay-75"
          >
            Say Hi
          </a>
        </section>
      </div>

      {/* footer */}
      {/* <footer className="w-19/20 h-60 m-auto text-gray-400 hidden md:flex justify-between fixed bottom-0 left-1/40 z-0"> */}
      <div className="w-1/20 gap-5 hidden text-gray-400 md:flex flex-col justify-between items-center fixed bottom-0 left-1/40 ">
        <a href="#" className="hover:text-indigo-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-github "
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        <a href="#" className="hover:text-indigo-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-linkedin hover:text-indigo-400"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>

        <a href="#" className="hover:text-indigo-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-twitter hover:text-indigo-400"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
        <div className="w-0.5 h-28 bg-gray-400"></div>
      </div>

      <div className="w-1/20 text-gray-400 h-60 hidden md:flex flex-col justify-between items-center fixed bottom-0 right-1/40">
        <a
          href="#"
          className="font-source transform rotate-90 hover:text-indigo-400 "
        >
          vksonagara@gmail.com
        </a>

        <div className="w-0.5 h-28 bg-gray-400"></div>
      </div>
      {/* </footer> */}
      <style jsx>{`
        .bullet::before {
          content: url(/img/emoji.svg);
          color: #818cf8;
          width: 1.25rem;
          height: 1.25rem;
          display: inline-block;
          margin-right: 5px;
        }
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
    </main>
  );
}
