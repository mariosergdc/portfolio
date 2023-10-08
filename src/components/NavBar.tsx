import { useContext, useState } from "react";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import ThemeContext from "./context/ThemeProvider";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div
      className="sticky top-0 z-40 w-full h-16 lg:border-b lg:border-b-slate-500/10
    bg-gradient-to-r from-sky-800 via-sky-700 via-80% to-white/[0.9] shadow-slate-50"
    >
      <header className="container max-w-screen-lg grid md:grid-cols-3 grid-cols-2 navbar h-full items-center mx-auto ">
        <div className="brand-container flex  items-center justify-start ">
          <a href="#home">
            <img className="h-16" src="/m.png" alt="logo" />
          </a>
          <h1 className="brand text-2xl pl-6 lg:pl-1 font-serif">
            <a href="#home">MarioSergDC</a>
          </h1>
        </div>
        <Menu open={open} handleOpen={handleOpen} />
        <div className="flex items-center justify-end">
          <RightMenu />
          <div
            onClick={handleOpen}
            className={`hamburger ${open ? "is-active" : ""} `}
          >
            <div className="layer top"></div>
            <div className="layer mid"></div>
            <div className="layer bottom"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
