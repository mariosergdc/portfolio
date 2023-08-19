import Menu from "./Menu";

const NavBar = () => {
  return (
    <header className="container grid grid-cols-3 navbar h-10 items-center ">
      <h1 className="pl-2">MarioSergDC</h1>
      <Menu />
    </header>
  );
};

export default NavBar;
