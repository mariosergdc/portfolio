import Menu from "./Menu";
import RightMenu from "./RightMenu";

const NavBar = () => {
  return (
    <div
      className="sticky top-0 z-40 w-full h-16 lg:border-b lg:border-b-slate-500/10
    bg-gradient-to-r from-sky-800 via-sky-700 via-80% to-white/[0.9] shadow-slate-50"
    >
      <header className="container max-w-screen-lg grid grid-cols-3 navbar h-full items-center mx-auto ">
        <div className="brand-container flex  items-center justify-start ">
          <img className="h-16" src="/m.png" alt="logo" />
          <h1 className="brand text-2xl pl-6 lg:pl-1 font-serif">
            MarioSergDC
          </h1>
        </div>
        <Menu />
        <RightMenu />
      </header>
    </div>
  );
};

export default NavBar;
