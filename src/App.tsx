import { useContext } from "react";
import NavBar from "./components/NavBar";
import ThemeContext from "./components/context/ThemeProvider";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme} app relative flex items-center min-h-screen flex-col bg-gradient-to-tr from-sky-800 via-transparent "via-80% to-white/[0.9]"`}
    >
      <NavBar />
      <main className="main w-full">
        <section
          id="home"
          className="home relative flex flex-col content-center justify-center flex-wrap
          bg-gradient-to-tr from-sky-900 via-transparent via-80% to-white/[0.9]"
        >
          <div className="absolute h-full w-full flex items-center justify-center text-9xl text-slate-950">
            Imagen de set up hero
          </div>
          <div className="mario text-9xl z-10 text-white bg-black mix-blend-screen text-opacity-10">
            I'm Mario
          </div>
          <div className="text-4xl z-10">
            <code>&lt;</code>Web Developer<code>/&gt;</code>
          </div>
          <div className="z-10">Social Media</div>
          <div className="z-10">Download CV</div>
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
          className="projects flex content-center justify-center flex-wrap
        bg-gradient-to-tr from-sky-900 via-transparent via-80% to-white/[0.9]"
        >
          Projects
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
