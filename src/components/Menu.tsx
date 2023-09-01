const Menu = () => {
  return (
    <nav className="hidden md:flex md:justify-center">
      <ul className="flex flex-col  md:flex-row gap-4 text-lg">
        <li className="nav-links">
          <a href="#home">Home</a>
        </li>
        <li>|</li>
        <li className="nav-links">
          <a href="#about">About</a>
        </li>
        <li>|</li>
        <li className="nav-links">
          <a href="#projects">Projects</a>
        </li>
        <li>|</li>
        <li className="nav-links">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
