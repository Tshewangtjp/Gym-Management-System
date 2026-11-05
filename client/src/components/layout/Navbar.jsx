
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink
        to="/"
        className="navbar-brand"
        onClick={closeMenu}
      >
        <span className="brand-icon">G</span>
        <span>
          GYM<span className="brand-highlight">HUB</span>
        </span>
      </NavLink>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <div
        id="navbar-menu"
        className={`nav-links ${menuOpen ? "show-menu" : ""}`}
      >
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/dashboard" onClick={closeMenu}>
          Dashboard
        </NavLink>

        <NavLink to="/profile" onClick={closeMenu}>
          Profile
        </NavLink>

        <NavLink to="/login" onClick={closeMenu}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
