import { useContext, useEffect } from "react";
import ThemeContext from "./context/ThemeProvider";
import {  HiOutlineHomeModern } from "react-icons/hi2";
import { BsPersonBoundingBox } from "react-icons/bs";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

type MenuProps = {
  open: boolean;
  handleOpen: () => void;
};

const Menu2 = ({ open, handleOpen }: MenuProps) => {
  const { theme } = useContext(ThemeContext);
  

 useEffect(() => {
    

    function ToggleActive() {
    const menuList = document.querySelectorAll(".menu-item");
      for (const el of menuList) {
        if (el.classList.contains("active")) {
          el.classList.remove("active")
        }
      }
      this.parentNode.classList.add("active")
    }
  const menuList = document.querySelectorAll(".menu-item a");
    for (const el of menuList) {
      el.addEventListener("click", ToggleActive)
    }
  }, []) 
  return (
    <nav
      className={`menu col-span-2 md:flex md:justify-center ${open ? "is-active" : ""}`}
      onClick={() => handleOpen()}
    >
      <div className="navbarcss">
        <div className="rect">
          <ul className="menu-list">
            <li className="menu-item active"><a href="#home"><HiOutlineHomeModern style={{ fontSize: '24px', marginBottom: '2px' }} /></a><div className="text">Home</div></li>
            <li className="menu-item" ><a href="#about"><BsPersonBoundingBox style={{ fontSize: '22px', marginBottom: '2px' }} /></a><div className="text">About</div></li>
            <li className="menu-item" ><a href="#projects"><IoDocumentsOutline style={{ fontSize: '24px', marginBottom: '2px' }} /></a><div className="text">Projects</div></li>
            <li className="menu-item" ><a href="#contact"><MdOutlineMarkEmailRead style={{ fontSize: '24px', marginBottom: '2px' }} /></a><div className="text">Contact</div></li>
            
            <div className="indicator"></div>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Menu2;
