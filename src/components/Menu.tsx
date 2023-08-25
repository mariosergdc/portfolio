const Menu = () => {
  return (
    <nav className="hidden md:flex md:justify-center">
      <ul className="flex flex-col  md:flex-row gap-4 text-lg">
        <li className="nav-links">
          <a href="#home">Home</a>
        </li>
        <li>|</li>
        <li className="nav-links">
          <a href="#section-1">About</a>
        </li>
        <li>|</li>
        <li className="nav-links">
          <a href="#section-2">Projects</a>
        </li>
        <li>|</li>
        <li className="nav-links">
          <a href="#section-3">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
