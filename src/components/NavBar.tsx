import { useState } from "react";
import Menu2 from "./Menu2";
import RightMenu from "./RightMenu";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const clickHome=()=>{
    const menuList = document.querySelectorAll(".menu-item");
      for (const el of menuList) {
        if (el.classList.contains("active")) {
          el.classList.remove("active")
        }
      }
      menuList[0].classList.add("active") 
  }
  return (
    <div
      className="sticky top-0 z-40 w-full h-16 lg:border-b lg:border-b-slate-500/10
    bg-gradient-to-b from-sky-700 via-sky-700 via-80% to-white/[0.9] shadow-slate-50"
    >
      <header className="container max-w-screen-lg grid md:grid-cols-4 grid-cols-2 navbar h-full items-center mx-auto ">
        <div className="brand-container flex  items-center justify-start " onClick={clickHome}>
          <a href="#home">
            <img className="h-12 ml-3 md:h-16" src="./m.png" alt="logo" />
          </a>
          <h1 className="brand hidden sm:block text-base sm:text-2xl sm:pl-1 lg:pl-2 font-serif">
            <a href="#home">MarioSergDC</a>
          </h1>
        </div>
        <Menu2 open={open} handleOpen={handleOpen} />
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
