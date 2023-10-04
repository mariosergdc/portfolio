import { useContext } from "react";
import ThemeContext from "./context/ThemeProvider";

const Menu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className="hidden md:flex md:justify-center">
      <ul className="flex flex-col  md:flex-row gap-4 text-lg">
        <li className="nav-links">
          <a href="#home">Home</a>
          <div
            className={`under-link ${theme === "dark" ? "light" : "dark"}`}
          ></div>
        </li>
        <li>|</li>
        <li className="nav-links">
          <a href="#about">About</a>
          <div
            className={`under-link ${theme === "dark" ? "light" : "dark"}`}
          ></div>
        </li>
        <li>|</li>
        <li className="nav-links">
          <a href="#projects">Projects</a>
          <div
            className={`under-link ${theme === "dark" ? "light" : "dark"}`}
          ></div>
        </li>
        <li>|</li>
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
