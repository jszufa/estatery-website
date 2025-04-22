import "./Footer.css";
import Logotype from "./Logotype";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <Logotype />

        <div className="footer-menu">
          <a href="">HELP CENTER</a>
          <a href="">FAQ</a>
          <a href="">TERMS & PRIVACY</a>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <div className="footer-info">
          <p>© 2021 Estatery. All rights reserved</p>
          <div className="footer-links">
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
