import "tailwindcss/tailwind.css";
import Head from "next/head";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import portfolioData from "../portfolio-data.json";
import { useEffect } from "react";

export default function Home() {
  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      document.querySelector(".navbar").classList.remove("md:relative");
    } else {
      document.querySelector(".navbar").classList.add("md:relative");
    }
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
  useEffect(() => {
    window.addEventListener("wheel", checkScrollDirection);
  }, []);
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
        <Header header={portfolioData.header} />
        {/* main page */}
        <Intro intro={portfolioData.intro} />
        {/* about me page */}
        <About about={portfolioData.about} />
        {/* Skills */}
        <Skills skills={portfolioData.skills} />
        {/* Experience */}
        {portfolioData.experience && (
          <Experience experience={portfolioData.experience} />
        )}{" "}
        {/* project page */}
        <Projects projects={portfolioData.projects} />
        {/* contact page */}
        <Contact
          contact={portfolioData.contact}
          links={portfolioData.universalLinks}
        />
      </div>

      {/* footer */}

      <div className="w-1/20 gap-5 hidden text-gray-400 md:flex flex-col justify-between items-center fixed bottom-0 left-1/40 ">
        <a
          href={portfolioData.universalLinks.github}
          className="hover:text-indigo-400"
        >
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

        <a
          href={portfolioData.universalLinks.linkedin}
          className="hover:text-indigo-400"
        >
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

        <a
          href={portfolioData.universalLinks.twitter}
          className="hover:text-indigo-400"
        >
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
          href={portfolioData.universalLinks.mail}
          className="font-source transform rotate-90 hover:text-indigo-400 "
        >
          vksonagara@gmail.com
        </a>

        <div className="w-0.5 h-28 bg-gray-400"></div>
      </div>
      {/* </footer> */}
    </main>
  );
}
