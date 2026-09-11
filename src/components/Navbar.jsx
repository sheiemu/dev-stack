import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Desktop Navbar */}
      <div className="nav-inner">
        <div className="nav-logo">
          <img src="/logo-text.png" alt="Dev Stack" />
          
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* Mobile Navbar */}
<div className="nav-mobile">
  <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
  </button>
  <div className="nav-logo">
    <img src="/logo-text.png" alt="Dev Stack" className="w-28 h-auto" />
  </div>
  <div className="nav-buttons">
    <button className="signin-btn">Sign In</button>
    <button className="signup-btn">Sign Up</button>
  </div>
</div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
    
  );
  
}
