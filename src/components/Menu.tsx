const Menu = () => {
  return (
    <nav className="hidden md:flex md:justify-center">
      <ul className="flex flex-col  md:flex-row gap-4 text-lg">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
