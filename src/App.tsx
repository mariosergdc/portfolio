import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div
      className="app relative flex items-center min-h-screen flex-col overflow-hidden
    bg-gradient-to-tr from-sky-950 via-transparent via-80% to-white/[0.9]"
    >
      <NavBar />
      <main className="main w-full">
        <section
          id="section-1"
          className="section-1 bg-cyan-950 flex content-center justify-center flex-wrap"
        >
          <div>Imagen de set up hero</div>
        </section>
        <section id="section-2" className="section-2 bg-cyan-800">
          eeee
        </section>
        <section id="section-3" className="section-3 bg-cyan-950">
          q
        </section>
      </main>
    </div>
  );
}
