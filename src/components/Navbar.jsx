function Navbar({ currentPage, navigate, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a
            href="#"
            className="nav-logo"
            onClick={(e) => { e.preventDefault(); navigate('home') }}
          >
            <div className="logo-mark">PQ</div>
            <span className="logo-text">ProTeQ India</span>
          </a>

          <ul className="nav-links">
            <li>
              <a
                href="#"
                className={currentPage === 'home' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); navigate('home') }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={currentPage === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); navigate('about') }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={currentPage === 'vision' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); navigate('vision') }}
              >
                Vision & Mission
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-cta ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); navigate('contact') }}
              >
                Contact Us
              </a>
            </li>
          </ul>

          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); setMobileMenuOpen(false) }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('about'); setMobileMenuOpen(false) }}>About Us</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('vision'); setMobileMenuOpen(false) }}>Vision & Mission</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('contact'); setMobileMenuOpen(false) }}>Contact Us</a>
      </div>
    </>
  )
}

export default Navbar
