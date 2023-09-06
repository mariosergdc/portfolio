import { useState, useContext, useEffect } from "react";
import "./SwitchTheme.css";
import ThemeContext from "./context/ThemeProvider";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const SwitchTheme = () => {
  const [isOn, setIsOn] = useState(false);
  const { theme, handleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }, [theme]);

  const handleToggle = () => {
    if (theme === "dark") {
      handleTheme("light");
    } else {
      handleTheme("dark");
    }
    setIsOn(!isOn);
  };

  return (
    <div className="relative w-10 mx-2 align-middle">
      <div
        className={`${
          theme === "dark" ? "toggle-checkbox-left" : "toggle-checkbox-right"
        } absolute block w-6 h-6 rounded-full  opacity-90 border-gray-200 border-2 `}
        onClick={handleToggle}
      >
        {theme === "dark" && <BsFillMoonStarsFill className="moon absolute" />}
        {theme === "light" && <FaSun className="sun absolute" />}
      </div>
      <div
        onClick={handleToggle}
        className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></div>
    </div>
  );
};

export default SwitchTheme;
