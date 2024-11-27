import "./Navbar.scss";
import Logo from "../../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  function handleShowNav() {
    setShowNav(!showNav);
  }

  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a href="" className="navbar__logo" onClick={handleShowNav}>
          <img src={Logo} alt="logo" />
        </a>

        <ul className={`${showNav ? "show" : ""}`}>
          <li onClick={handleShowNav}>
            <a href="">product</a>
          </li>
          <li onClick={handleShowNav}>
            <a href="">company</a>
          </li>
          <li onClick={handleShowNav}>
            <a href="">pricing</a>
          </li>
          <li onClick={handleShowNav}>
            <a href="">blog</a>
          </li>
        </ul>

        <div className="navbar__btns">
          <a href="">login</a>
          <a href="" className="btn">
            register
          </a>
        </div>

        <div className="navbar__menu" onClick={handleShowNav}>
          {showNav ? <IoMdClose /> : <IoMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
