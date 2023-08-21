const Menu = () => {
  return (
    <nav className="hidden md:flex md:justify-center">
      <ul className="flex flex-col  md:flex-row gap-4 text-lg">
        <li className="nav-links">About</li>
        <li>|</li>
        <li className="nav-links">Projects</li>
        <li>|</li>
        <li className="nav-links">Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
