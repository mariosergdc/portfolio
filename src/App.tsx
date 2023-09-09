import { useContext } from "react";
import NavBar from "./components/NavBar";
import ThemeContext from "./components/context/ThemeProvider";
import { BsGithub, BsDownload } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme} app relative flex items-center min-h-screen flex-col `}
    >
      <NavBar />
      <main className="main w-full">
        <section
          id="home"
          className="home relative flex flex-col content-center justify-center flex-wrap"
        >
          <div className="absolute hero-back h-full w-full flex items-center justify-center text-9xl text-blue-700 pt-24">
            <code>&lt;</code>Web Developer<code>/&gt;</code>
          </div>
          <div className="mario  z-10 text-white bg-black mix-blend-screen text-opacity-20 font-serif">
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
            <a className="inline-flex justify-start items-center gap-2 cursor-pointer border bg-slate-400 mt-4">
              <BsDownload />
              Download CV
            </a>
          </div>
        </section>
        <section
          id="about"
          className="about flex content-center justify-center flex-wrap
          bg-gradient-to-tr from-sky-950 via-transparent via-80% to-white/[0.9]"
        >
          <div>About</div>
        </section>
        <section
          id="projects"
          className="projects flex flex-col justify-start items-center flex-wrap
        bg-gradient-to-tr from-sky-900 via-transparent via-80% to-white/[0.9]"
        >
          <div>Projects</div>
          <section className="projects-container lg:max-w-screen-lg flex flex-col justify-start items-center">
            <div className="project flex flex-col justify-between items-center md:flex-row">
              <div className="project-img-container flex justify-center items-center ">
                <img
                  className="project-img"
                  src="./src/assets/invoker-project.png"
                  alt=""
                />
              </div>
              <div className="project-description text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit aperiam omnis quod officiis quidem repellat unde itaque
                eos, cum autem nisi iusto dolore veniam atque minus et
                reiciendis sunt ipsa.
              </div>
            </div>
            <div className="project flex flex-col justify-between items-center md:flex-row">
              <div className="project-description order-2 text-center md:order-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit aperiam omnis quod officiis quidem repellat unde itaque
                eos, cum autem nisi iusto dolore veniam atque minus et
                reiciendis sunt ipsa.
              </div>
              <div className="project-img-container order-1 flex justify-center items-center md:order-2">
                <img
                  className="project-img"
                  src="./src/assets/back.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="project flex justify-between items-center">
              <div className="project-img-container flex justify-center items-center">
                <img
                  className="project-img"
                  src="./src/assets/back.jpeg"
                  alt=""
                />
              </div>
              <div className="project-description text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit aperiam omnis quod officiis quidem repellat unde itaque
                eos, cum autem nisi iusto dolore veniam atque minus et
                reiciendis sunt ipsa.
              </div>
            </div>
            <div className="project flex justify-between items-center">
              <div className="project-description text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit aperiam omnis quod officiis quidem repellat unde itaque
                eos, cum autem nisi iusto dolore veniam atque minus et
                reiciendis sunt ipsa.
              </div>
              <div className="project-img-container flex justify-center items-center">
                <img
                  className="project-img"
                  src="./src/assets/back.jpeg"
                  alt=""
                />
              </div>
            </div>
          </section>
        </section>
        <section
          id="contact"
          className="contact flex content-center justify-center flex-wrap
        bg-gradient-to-tr from-sky-950 via-transparent via-80% to-white/[0.9]"
        >
          Contact
        </section>
      </main>
    </div>
  );
}
