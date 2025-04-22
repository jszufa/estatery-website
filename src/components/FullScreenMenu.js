import "./FullScreenMenu.css";
import Button from "./Button";

function FullScreenMenu() {
  return (
    <div className="full-screen-menu">
      <div className="full-screen-menu__container">
        <ul className="full-screen-menu__menu">
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage Property</li>
          <li>Resources</li>
        </ul>

        <div className="full-screen-menu__buttons">
          <Button variant="secondary">Login</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  );
}

export default FullScreenMenu;
