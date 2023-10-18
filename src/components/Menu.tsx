import { useContext } from "react";
import ThemeContext from "./context/ThemeProvider";

type MenuProps = {
  open: boolean;
  handleOpen: () => void;
};

const Menu = ({ open, handleOpen }: MenuProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav
      className={`menu md:flex md:justify-center ${open ? "is-active" : ""}`}
      onClick={() => handleOpen()}
    >
      <ul className="flex flex-col  md:flex-row gap-4 text-lg">
        <li className="nav-links">
          <a href="#home">Home</a>
          <div
            className={`under-link ${theme === "dark" ? "light" : "dark"}`}
          ></div>
        </li>
        <li className={`${open ? "d-none" : ""}`}>|</li>
        <li className="nav-links">
          <a href="#about">About</a>
          <div
            className={`under-link ${theme === "dark" ? "light" : "dark"}`}
          ></div>
        </li>
        <li className={`${open ? "d-none" : ""}`}>|</li>
        <li className="nav-links">
          <a href="#projects">Projects</a>
          <div
            className={`under-link ${theme === "dark" ? "light" : "dark"}`}
          ></div>
        </li>
        <li className={`${open ? "d-none" : ""}`}>|</li>
        <li className="nav-links">
          <a href="#contact">Contact</a>
          <div
            className={`under-link ${theme === "dark" ? "light" : "dark"}`}
          ></div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
