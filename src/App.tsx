import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div
      className="relative flex items-center min-h-screen flex-col overflow-hidden w-screen 
    bg-gradient-to-tr from-sky-950 via-transparent via-80% to-white/[0.9]  "
    >
      <NavBar />
    </div>
  );
}
