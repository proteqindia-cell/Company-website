function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-mark">PQ</div>
              <span className="logo-text">ProTeQ India</span>
            </div>
            <p>
              Technology training and innovation partnership platform
              bridging academia and industry across India.
            </p>
            <div className="social-links">
              <a href="#" className="social-btn" title="LinkedIn">in</a>
              <a href="#" className="social-btn" title="Instagram">ig</a>
              <a href="#" className="social-btn" title="GitHub">gh</a>
              <a href="#" className="social-btn" title="YouTube">yt</a>
            </div>
          </div>

          {/* Navigate */}
          <div className="footer-col">
            <h5>Navigate</h5>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home') }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('about') }}>About Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('vision') }}>Vision & Mission</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('contact') }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-col">
            <h5>Programs</h5>
            <ul>
              <li><a href="#">Embedded Systems & Edge Computing</a></li>
              <li><a href="#">Robotics & Autonomous Systems</a></li>
              <li><a href="#">Applied Artificial Intelligence</a></li>
              <li><a href="#">Data Science & Cloud AI</a></li>
              <li><a href="#">AI in Business & Automation</a></li>
              <li><a href="#">Augmented & Virtual Reality Systems</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="#">Pune, Maharashtra, India</a></li>
              <li><a href="mailto:info@proteqindia.com">info@proteqindia.com</a></li>
              <li><a href="tel:+919000000000">+91 90000 00000</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('contact') }}>Partnerships</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('contact') }}>Internships</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 <span>ProTeQ India</span>. All rights reserved.</p>
          <p>Designed with <span>♥</span> for India's Technology Future</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
