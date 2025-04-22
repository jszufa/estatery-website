import { ReactComponent as MenuIcon } from "../icons/menu-icon.svg";
import { ReactComponent as CloseMenuIcon } from "../icons/close-menu-icon.svg";
import { useState } from "react";
import "./Navbar.css";
import FullScreenMenu from "./FullScreenMenu";
import Logotype from "./Logotype";
import DesktopMenu from "./DesktopMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="main__navbar">
      <Logotype />

      <DesktopMenu />
      <button
        className="navbar__hamburger-btn"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {!isMenuOpen ? (
          <MenuIcon className="navbar__menu-icon" />
        ) : (
          <CloseMenuIcon className="navbar__close-icon" />
        )}
      </button>

      {isMenuOpen && <FullScreenMenu />}
    </nav>
  );
}

export default Navbar;
