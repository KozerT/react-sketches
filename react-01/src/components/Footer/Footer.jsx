import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#" className="logo">
            <span className="logo-text">Kolibrium</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="footer-divider" />
        <span className="footer-text">
          © 2023 <a href="#">Lombok S.A.</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
