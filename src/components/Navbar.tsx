import { useState } from "react";
import menuIcon from "../assets/close.svg"; // Replace with correct path
import closeIcon from "../assets/menu.svg"; // Replace with correct path
import "./Navbar.css";
import t4taxLogo from "../assets/T4Tax.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="content-container">
        <a href="/">
          <img src={t4taxLogo} alt="T4Tax" className="h-16 w-auto" />
        </a>

        <input
          type="checkbox"
          id="check"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
          style={{ display: "none" }}
        />
        <label htmlFor="check" className="menu">
          <img
            src={isMenuOpen ? menuIcon : closeIcon}
            alt={isMenuOpen ? "menu" : "close"}
            className="h-8 w-6"
          />
        </label>
        <nav
          className={`navbar flex gap-10 items-center ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/Blogs" className="nav-link">
            Blogs
          </Link>
          <a href="/" className="nav-link">
            Services
          </a>
          <a href="/" className="nav-link">
            Why us
          </a>
          <a href="/" className="nav-link">
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
