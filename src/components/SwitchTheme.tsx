import { useState, useContext, useEffect } from "react";
import "./SwitchTheme.css";
import ThemeContext from "./context/ThemeProvider";

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
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-black border-gray-200 border-2 appearance-none cursor-pointer"
        checked={isOn}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  );
};

export default SwitchTheme;
