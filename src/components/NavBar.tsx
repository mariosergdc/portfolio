import Menu from "./Menu";

const NavBar = () => {
  return (
    <div
      className="sticky top-0 z-40 w-full h-16 lg:border-b lg:border-b-slate-500/10 
    bg-gradient-to-r from-sky-800 via-sky-700 via-80% to-white/[0.9] shadow-slate-50"
    >
      <header className="container grid grid-cols-3 navbar h-full items-center mx-auto ">
        <h1 className="brand text-2xl pl-2 md:pl-1 font-serif">MarioSergDC</h1>
        <Menu />
      </header>
    </div>
  );
};

export default NavBar;
