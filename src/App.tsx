import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div
      className="app relative flex items-center min-h-screen flex-col
    bg-gradient-to-tr from-sky-800 via-transparent via-80% to-white/[0.9]"
    >
      <NavBar />
      <main className="main w-full">
        <section
          id="home"
          className="home flex flex-col content-center justify-center flex-wrap
          bg-gradient-to-tr from-sky-900 via-transparent via-80% to-white/[0.9]"
        >
          <div>Imagen de set up hero</div>
          <div>I'm Mario Domínguez</div>
          <div>Web Developer</div>
          <div>Social Media</div>
          <div>Download CV</div>
        </section>
        <section
          id="section-about"
          className="section-about flex content-center justify-center flex-wrap
          bg-gradient-to-tr from-sky-950 via-transparent via-80% to-white/[0.9]"
        >
          <div>About</div>
        </section>
        <section
          id="section-projects"
          className="section-projects flex content-center justify-center flex-wrap
        bg-gradient-to-tr from-sky-900 via-transparent via-80% to-white/[0.9]"
        >
          Projects
        </section>
        <section
          id="section-contact"
          className="section-contact flex content-center justify-center flex-wrap
        bg-gradient-to-tr from-sky-950 via-transparent via-80% to-white/[0.9]"
        >
          Contact
        </section>
      </main>
    </div>
  );
}
