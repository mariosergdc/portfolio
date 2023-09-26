import { useContext } from "react";
import NavBar from "./components/NavBar";
import ThemeContext from "./components/context/ThemeProvider";
import { BsGithub, BsDownload, BsCodeSlash, BsBootstrap } from "react-icons/bs";
import { SiExpress, SiLeetcode } from "react-icons/si";
import { AiFillHtml5, AiFillLinkedin } from "react-icons/ai";
import {
  BiLinkExternal,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
} from "react-icons/bi";
import pdf from "./assets/my-cv.pdf";
import { FaReact } from "react-icons/fa";
import ContactForm from "./components/ContactForm";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme} app relative flex items-center min-h-screen flex-col font-playfair`}
    >
      <NavBar />
      <main className="main w-full">
        <section
          id="home"
          className="home relative flex flex-col content-center justify-center flex-wrap"
        >
          <div className="absolute hero-back h-full w-full flex items-center justify-center text-9xl text-blue-500 pt-24">
            <div className="max-w-screen-lg">
              <code>&lt;</code>Web Developer
              <code>/&gt;</code>
            </div>
          </div>
          <div className="max-w-screen-lg flex flex-col items-start justify-center flex-wrap">
            <div
              className={`mario z-10 text-transparent mix-blend-screen  font-anton
            ${theme === "dark" ? "" : "mario-dark "}`}
            >
              I'm Mario
            </div>

            <div className="social-media-container z-10">
              <a
                href="https://www.linkedin.com/in/mariosergdc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="social-media linkedin" />
              </a>
              <a
                href="https://github.com/mariosergdc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="social-media" />
              </a>
              <a
                href="https://leetcode.com/MarioSergDC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="social-media" />
              </a>
            </div>
            <div className="z-10">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="my-cv.pdf"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 cursor-pointer font-bold py-2 px-2 mt-2 rounded inline-flex items-center"
              >
                <BsDownload className=" mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="about flex flex-col  justify-center items-center flex-wrap
          bg-gradient-to-r from-sky-950  to-gray-500/[0.9]"
        >
          <h1 className="header-texts mt-2">About</h1>
          <div className="max-w-screen-lg flex items-center justify-center flex-wrap">
            <div className="w-1/2 flex flex-col items-center justify-center p-4">
              <p>
                I am Mario Sergio Domínguez Consuegra. As a licensed Computer
                Science professional, I have a great interest in programming and
                problem-solving. I believe that practice is the key to becoming
                a successful web developer, and I dedicate time every day to
                improve my skills and learn new technologies. I am committed to
                staying up-to-date with the latest industry trends and best
                practices to deliver high-quality work.
              </p>
              <p>
                In conclusion, I am a dedicated and skilled developer with a
                passion for programming and problem-solving. I have a strong
                technical vocabulary in both Spanish and English. I am excited
                about the opportunity to join a development team as a frontend
                programmer and contribute to challenging projects that allow me
                to improve my skills and knowledge.{" "}
              </p>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center p-4 ">
              Skills
              <div className="flex items-center justify-center p-4 flex-wrap gap-4">
                <div className="skill-logos">
                  <img src="./src/assets/logos/react.svg" alt="react-logo" />
                </div>
                <div className="skill-logos">
                  <img
                    src="./src/assets/logos/javascript.svg"
                    alt="javascript-logo"
                  />
                </div>
                <div className="skill-logos">
                  <img
                    className="typescript-logo"
                    src="./src/assets/logos/typescript.svg"
                    alt="typescript-logo"
                  />
                </div>
                <div className="skill-logos">
                  <img src="./src/assets/logos/html.svg" alt="html-logo" />
                </div>

                <div className="skill-logos">
                  <img src="./src/assets/logos/css.svg" alt="css-logo" />
                </div>
                <div className="skill-logos">
                  <img
                    src="./src/assets/logos/bootstrap.svg"
                    alt="bootstrap-logo"
                  />
                </div>
                <div className="skill-logos">
                  <img
                    src="./src/assets/logos/tailwind.svg"
                    alt="tailwind-logo"
                  />
                </div>
                <div className="skill-logos">
                  <img src="./src/assets/logos/nodejs.svg" alt="nodejs-logo" />
                </div>
                <div className="skill-logos">
                  <img
                    src="./src/assets/logos/mongodb-icon.svg"
                    alt="mongodb-logo"
                  />
                </div>
                <div className="skill-logos">
                  <img
                    className="mysql-logo"
                    src="./src/assets/logos/mysql.svg"
                    alt="mysql-logo"
                  />
                </div>
                <div className="skill-logos">
                  <img src="./src/assets/logos/git.png" alt="git-logo" />
                </div>
                <div className="skill-logos">
                  <img src="./src/assets/logos/github.svg" alt="github-logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="projects flex flex-col justify-start items-center flex-wrap
          bg-gradient-to-r from-sky-950  to-gray-500/[0.9]"
        >
          <h1 className="header-texts mt-2">Projects</h1>
          <section className="projects-container lg:max-w-screen-lg flex flex-col justify-start items-center">
            <div className="project flex flex-col justify-between items-center md:flex-row">
              <div className="project-img-container flex justify-center items-center ">
                <img
                  className="project-img"
                  src="./src/assets/invoker-project.png"
                  alt=""
                />
              </div>
              <div className="project-description">
                <div>
                  This website is a free online tool designed to help Dota 2
                  players improve their skills with Invoker hero. Our platform
                  allows you to test your abilities and see how many spells you
                  can cast with the hero in one minute. The goal is to enhance
                  your gameplay and increase your chances of success.
                </div>
                <div className="flex justify-center items-center gap-1 mt-2">
                  <FaReact /> React.js <BiLogoJavascript /> JS <BiLogoCss3 />
                  CSS <AiFillHtml5 /> HTML
                </div>
                <div
                  className={`flex justify-evenly items-center mt-4 ${
                    theme === "dark" ? "text-blue-400" : "text-blue-800"
                  } `}
                >
                  <a
                    href="https://github.com/mariosergdc/InvokerApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-1"
                  >
                    <BsCodeSlash size="1.8rem" className="code-icon" />
                    Get Code
                  </a>
                  <a
                    href="https://mariosergdc.github.io/InvokerApp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-1"
                  >
                    <BiLinkExternal size="1.5rem" />
                    Visit Page
                  </a>
                </div>
              </div>
            </div>
            <div className="project flex flex-col justify-between items-center md:flex-row">
              <div className="project-description order-2 md:order-1">
                <div>
                  Website to display information about the past soccer cup
                  during the vacations (2023) in Tacajó. We offer you the
                  standings table, the top scorers, and the schedule of played
                  matches.
                </div>
                <div className="flex justify-center items-center gap-1 mt-2">
                  <FaReact /> React.js <BiLogoJavascript /> JS <BiLogoCss3 />
                  CSS <AiFillHtml5 /> HTML <BsBootstrap />
                  Bootstrap
                </div>
                <div className="flex justify-center items-center gap-1">
                  <BiLogoNodejs />
                  Node.js <SiExpress />
                  Express <BiLogoMongodb />
                  MongoDB
                </div>
                <div
                  className={`flex justify-evenly items-center mt-4 ${
                    theme === "dark" ? "text-blue-400" : "text-blue-800"
                  } `}
                >
                  <a
                    href="https://github.com/mariosergdc/soccer-app-client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-1"
                  >
                    <BsCodeSlash size="1.8rem" className="code-icon" />
                    Get Code
                  </a>
                  <a
                    href="https://futbol-tacajo.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-1"
                  >
                    <BiLinkExternal size="1.5rem" />
                    Visit Page
                  </a>
                </div>
              </div>
              <div className="project-img-container order-1 flex justify-center items-center md:order-2">
                <img
                  className="project-img"
                  src="./src/assets/futbol-tacajo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project flex flex-col justify-between items-center md:flex-row">
              <div className="project-img-container flex justify-center items-center ">
                <img
                  className="project-img"
                  src="./src/assets/contacts-app.png"
                  alt=""
                />
              </div>
              <div className="project-description">
                <div>
                  A webpage to store your contacts can be a practical and
                  efficient solution to keep personal and professional contact
                  information organized.
                </div>
                <div className="flex justify-center items-center gap-1 mt-2">
                  <FaReact /> React.js <BiLogoJavascript /> JS <BiLogoCss3 />
                  CSS <AiFillHtml5 /> HTML <BsBootstrap />
                  Bootstrap
                </div>
                <div className="flex justify-center items-center gap-1">
                  <BiLogoNodejs />
                  Node.js <SiExpress />
                  Express <BiLogoMongodb />
                  MongoDB
                </div>
                <div
                  className={`flex justify-evenly items-center mt-4 ${
                    theme === "dark" ? "text-blue-400" : "text-blue-800"
                  } `}
                >
                  <a
                    href="https://github.com/mariosergdc/contactsapp-client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-1"
                  >
                    <BsCodeSlash size="1.8rem" className="code-icon" />
                    Get Code
                  </a>
                  <a
                    href="https://contactsapp-client.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-1"
                  >
                    <BiLinkExternal size="1.5rem" />
                    Visit Page
                  </a>
                </div>
              </div>
            </div>
            <div className="project flex flex-col justify-between items-center md:flex-row">
              <div className="project-description order-2 md:order-1">
                <div>My CV</div>
                <div className="flex justify-center items-center gap-1 mt-2">
                  <FaReact /> React.js <BiLogoJavascript /> JS <BiLogoCss3 />
                  CSS <AiFillHtml5 /> HTML
                </div>

                <div
                  className={`flex justify-evenly items-center mt-4 ${
                    theme === "dark" ? "text-blue-400" : "text-blue-800"
                  } `}
                >
                  <a
                    href="https://github.com/mariosergdc/my-cv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-1"
                  >
                    <BsCodeSlash size="1.8rem" className="code-icon" />
                    Get Code
                  </a>
                  <a
                    href="https://mariosergdc.github.io/my-cv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-1"
                  >
                    <BiLinkExternal size="1.5rem" />
                    Visit Page
                  </a>
                </div>
              </div>
              <div className="project-img-container order-1 flex justify-center items-center md:order-2">
                <img className="project-img" src="./src/assets/cv.png" alt="" />
              </div>
            </div>
          </section>
        </section>
        <section
          id="contact"
          className="contact flex content-center justify-center flex-wrap
          bg-gradient-to-r from-sky-950  to-gray-500/[0.9]"
        >
          <div className="max-w-screen-lg df-jcc-aic flex-wrap w-full p-4">
            <div className="w-1/2 df-jcc-aic flex-col ">
              Info Personal, Contáctanos
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
