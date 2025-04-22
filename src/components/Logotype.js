import { ReactComponent as LogoIcon } from "../icons/logo.svg";
import "./Logotype.css";

function Logotype({ className }) {
  return (
    <a className={`logotype ${(className = "")}`}>
      <LogoIcon className="logo-icon" />
      <p>Estatery</p>
    </a>
  );
}

export default Logotype;
