import "./DesktopMenu.css";
import Button from "./Button";

function DesktopMenu() {
  return (
    <div className="desktop-menu">
      <div className="desktop-menu__container">
        <ul className="desktop-menu__menu">
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage Property</li>
          <li>Resources</li>
        </ul>

        <div className="desktop-menu__buttons">
          <Button variant="secondary">Login</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  );
}

export default DesktopMenu;
