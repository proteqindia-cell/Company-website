
import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (currentPage === 'home') {
      animateCounters()
    }
  }, [currentPage])

  const animateCounters = () => {
    document.querySelectorAll('[data-target]').forEach((el) => {
      const target = +el.dataset.target
      const suffix = el.dataset.suffix || ''
      let current = 0
      const step = target / 50
      const timer = setInterval(() => {
        current = Math.min(current + step, target)
        el.textContent = (current >= target ? target : Math.floor(current)) + suffix
        if (current >= target) clearInterval(timer)
      }, 30)
    })
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('light')
  }

  const navigate = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); navigate('home') }}>
            <div className="logo-mark">PQ</div>
            <span className="logo-text">ProTeQ India</span>
          </a>
          <ul className="nav-links">
            <li><a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('home') }}>Home</a></li>
            <li><a href="#" className={currentPage === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('about') }}>About Us</a></li>
            <li><a href="#" className={currentPage === 'vision' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('vision') }}>Vision & Mission</a></li>
            <li><a href="#" className={`nav-cta ${currentPage === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); navigate('contact') }}>Contact Us</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Menu</button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); setMobileMenuOpen(false) }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('about'); setMobileMenuOpen(false) }}>About Us</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('vision'); setMobileMenuOpen(false) }}>Vision & Mission</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('contact'); setMobileMenuOpen(false) }}>Contact Us</a>
      </div>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'vision' && <VisionPage />}
        {currentPage === 'contact' && <ContactPage setFormSubmitted={setFormSubmitted} formSubmitted={formSubmitted} />}
      </main>

      {/* FOOTER */}
      <Footer navigate={navigate} />

      {/* CHAT WIDGET */}
      <ChatWidget chatOpen={chatOpen} setChatOpen={setChatOpen} />

      {/* THEME TOGGLE */}
      <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
        {isDarkMode ? 'D' : 'L'}
      </button>
    </div>
  )
}

// HOME PAGE
function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="grid-lines"></div>
        <div className="hero-content">
          <div className="hero-badge">LAUNCH - India's Next-Gen Tech Training</div>
          <h1>Empowering Future Technologies Through <span>Innovation & Industry Training</span></h1>
          <p>Industry-oriented learning, real-world projects, research, and technology partnerships for professionals across India.</p>
          <div className="hero-btns">
            <button className="btn-primary">Explore Programs</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
          <div className="hero-stats">
            <div className="h-stat"><div className="num" data-target="5000" data-suffix="+">0</div><div className="lbl">Students</div></div>
            <div className="h-stat"><div className="num" data-target="50" data-suffix="+">0</div><div className="lbl">Institutes</div></div>
            <div className="h-stat"><div className="num" data-target="100" data-suffix="+">0</div><div className="lbl">Projects</div></div>
            <div className="h-stat"><div className="num" data-target="25" data-suffix="+">0</div><div className="lbl">Mentors</div></div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <div className="section-inner">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Built for Industry, Designed for Future</h2>
          <div className="cards-grid">
            <div className="feature-card"><span className="card-num">01</span><div className="card-icon">[IND]</div><h3 className="card-title">Industry Training</h3><p className="card-desc">Curriculum designed with industry professionals ensuring direct skill application.</p></div>
            <div className="feature-card"><span className="card-num">02</span><div className="card-icon">[PRJ]</div><h3 className="card-title">Real Projects</h3><p className="card-desc">Hands-on experience with live deployments and capstone challenges.</p></div>
            <div className="feature-card"><span className="card-num">03</span><div className="card-icon">[AI]</div><h3 className="card-title">AI & Emerging Tech</h3><p className="card-desc">Deep-dive into AI/ML, AR/VR, Embedded Systems, and Robotics.</p></div>
            <div className="feature-card"><span className="card-num">04</span><div className="card-icon">[INT]</div><h3 className="card-title">Internships</h3><p className="card-desc">Structured programs with industry partners for real-world exposure.</p></div>
            <div className="feature-card"><span className="card-num">05</span><div className="card-icon">[RES]</div><h3 className="card-title">Research</h3><p className="card-desc">Collaborative projects and participation in national competitions.</p></div>
            <div className="feature-card"><span className="card-num">06</span><div className="card-icon">[PLY]</div><h3 className="card-title">Placement</h3><p className="card-desc">Resume building, mock interviews, and direct hiring connections.</p></div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ABOUT PAGE
function AboutPage() {
  return (
    <div className="page">
      <section style={{ paddingTop: '4rem' }}>
        <div className="section-inner">
          <div className="section-label">Who We Are</div>
          <h1 className="section-title">About ProTeQ India</h1>
          <div className="about-grid">
            <div className="about-text">
              <p>ProTeQ India bridges academic education and industry readiness through technology-focused training.</p>
              <p>Founded to empower professionals, we partner with colleges, corporates, and research institutions.</p>
              <p>Programs span AI, Embedded Systems, Robotics, Data Science, Business Automation, and AR/VR.</p>
              <p>We believe learning happens through doing. Every program culminates in capstone projects and certifications.</p>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <h3>Technology Domains</h3>
                <div className="tech-list">
                  <div className="tech-item"><span>[AI]</span><div><div className="tech-name">Artificial Intelligence</div></div></div>
                  <div className="tech-item"><span>[EMB]</span><div><div className="tech-name">Embedded Systems</div></div></div>
                  <div className="tech-item"><span>[XR]</span><div><div className="tech-name">AR/VR Systems</div></div></div>
                  <div className="tech-item"><span>[ROB]</span><div><div className="tech-name">Robotics</div></div></div>
                  <div className="tech-item"><span>[DATA]</span><div><div className="tech-name">Data Science</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// VISION PAGE
function VisionPage() {
  return (
    <div className="page">
      <section style={{ paddingTop: '4rem' }}>
        <div className="section-inner">
          <div className="section-label">Our North Star</div>
          <h1 className="section-title">Vision & Mission</h1>
          
          <div className="vision-grid">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <blockquote>Become a leading technology training platform empowering learners with industry-oriented skills through practical learning and real-world projects.</blockquote>
            </div>
            <div className="core-values-card">
              <h4>Core Values</h4>
              <ul>
                <li>Excellence in Practical Education</li>
                <li>Industry-Aligned Innovation</li>
                <li>Collaborative Learning</li>
                <li>Ethical Technology</li>
                <li>Inclusive Access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// CONTACT PAGE
function ContactPage({ setFormSubmitted, formSubmitted }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setFormSubmitted(false), 5000)
    }
  }

  return (
    <div className="page">
      <section style={{ paddingTop: '4rem' }}>
        <div className="section-inner">
          <div className="section-label">Get In Touch</div>
          <h1 className="section-title">Contact ProTeQ India</h1>
          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
              {formSubmitted && <div className="success-msg show">Message sent! We'll respond within 24 hours.</div>}
            </form>
            <div className="contact-info">
              <div className="info-block">
                <h4>Contact Details</h4>
                <div className="info-item">Pune, Maharashtra, India</div>
                <div className="info-item">info@proteqindia.com</div>
                <div className="info-item">+91 90000 00000</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// FOOTER
function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-mark">PQ</div>
              <span className="logo-text">ProTeQ India</span>
            </div>
            <p>Technology training and innovation partnership platform bridging academia and industry.</p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home') }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('about') }}>About</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('vision') }}>Vision</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('contact') }}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Programs</h5>
            <ul>
              <li><a href="#">Embedded Systems</a></li>
              <li><a href="#">Robotics</a></li>
              <li><a href="#">AI & ML</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">AR/VR</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="#">Pune, India</a></li>
              <li><a href="#">info@proteqindia.com</a></li>
              <li><a href="#">+91 90000 00000</a></li>
              <li><a href="#">Partnerships</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ProTeQ India. All rights reserved.</p>
          <p>Designed for India's Technology Future</p>
        </div>
      </div>
    </footer>
  )
}

// CHAT WIDGET
function ChatWidget({ chatOpen, setChatOpen }) {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! Ask me about courses, internships, or partnerships.' }
  ])
  const [chatInput, setChatInput] = useState('')
  const messagesEndRef = useRef(null)

  const handleSendMessage = () => {
    if (!chatInput.trim()) return
    setMessages([...messages, { type: 'user', text: chatInput }])
    const responses = {
      'course': 'We offer 6 certification tracks: AI/ML, Embedded Systems, Robotics, Data Science, Business AI, and AR/VR. Each is 60-72 hours with hands-on projects.',
      'internship': 'AI Research and Embedded Systems internships are open now. AR/VR and Robotics coming soon. Apply via Contact page.',
      'partner': 'We partner with colleges and corporates. We offer MoU frameworks and co-certification programs.',
      'default': 'Great question! Contact us at info@proteqindia.com for details.'
    }
    let reply = responses.default
    Object.keys(responses).forEach(k => { if (chatInput.toLowerCase().includes(k)) reply = responses[k] })
    setTimeout(() => setMessages(m => [...m, { type: 'bot', text: reply }]), 600)
    setChatInput('')
  }

  return (
    <div className="chat-widget">
      <div className={`chat-panel ${chatOpen ? 'open' : ''}`}>
        <div className="chat-messages">
          {messages.map((msg, idx) => (<div key={idx} className={`chat-msg ${msg.type}`}>{msg.text}</div>))}
        </div>
        <div className="chat-input-row">
          <input type="text" placeholder="Ask..." value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage() }} />
          <button onClick={handleSendMessage}>Go</button>
        </div>
      </div>
      <button className="chat-bubble" onClick={() => setChatOpen(!chatOpen)}>Chat</button>
    </div>
  )
}

export default App
