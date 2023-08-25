import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div
      className="relative flex items-center min-h-screen flex-col
    bg-gradient-to-tr from-sky-800 via-transparent via-80% to-white/[0.9]"
    >
      <NavBar />
      <main className="main w-full">
        <section
          id="section-1"
          className="section-1 flex content-center justify-center flex-wrap
          bg-gradient-to-tr from-sky-950 via-transparent via-80% to-white/[0.9]"
        >
          <div>Imagen de set up hero</div>
        </section>
        <section
          id="section-2"
          className="section-2
        bg-gradient-to-tr from-sky-900 via-transparent via-80% to-white/[0.9]"
        >
          eeee
        </section>
        <section
          id="section-3"
          className="section-3
        bg-gradient-to-tr from-sky-950 via-transparent via-80% to-white/[0.9]"
        >
          q
        </section>
      </main>
    </div>
  );
}
