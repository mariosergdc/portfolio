import { useEffect } from "react";
//import { useContext, useEffect } from "react";
//import ThemeContext from "./context/ThemeProvider";
import {  HiOutlineHomeModern } from "react-icons/hi2";
import { BsPersonBoundingBox } from "react-icons/bs";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

type MenuProps = {
  open: boolean;
  handleOpen: () => void;
};

const Menu2 = ({ open, handleOpen }: MenuProps) => {
  //const { theme } = useContext(ThemeContext);
  
  useEffect(() => {
    // Función para activar el elemento del menú
    function ToggleActive(event:any){
      const menuList = document.querySelectorAll(".menu-item");
      menuList.forEach((el) => {
        el.classList.remove("active"); // Elimina la clase "active" de todos los elementos
      });
      event.currentTarget.parentNode.classList.add("active"); // Agrega la clase "active" al elemento clicado
    };

    const menuList = document.querySelectorAll(".menu-item a");
    
    // Agregar el event listener a cada enlace del menú
    menuList.forEach((el) => {
      el.addEventListener("click", ToggleActive);
    });

    // Limpiar el event listener al desmontar el componente
    return () => {
      menuList.forEach((el) => {
        el.removeEventListener("click", ToggleActive);
      });
    };
  }, []); 


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
