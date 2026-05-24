import { useState, useEffect } from 'react'
import './App.css'

// ── Components ─────────────────────────────────────────────────────────────
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import ChatWidget from './components/ChatWidget'

// ── Pages ──────────────────────────────────────────────────────────────────
import HomePage    from './pages/HomePage'
import AboutPage   from './pages/AboutPage'
import VisionPage  from './pages/VisionPage'
import ContactPage from './pages/ContactPage'

// ── App ────────────────────────────────────────────────────────────────────
function App() {
  const [currentPage,    setCurrentPage]    = useState('home')
  const [isDarkMode,     setIsDarkMode]     = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen,       setChatOpen]       = useState(false)
  const [formSubmitted,  setFormSubmitted]  = useState(false)

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const navigate = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
    document.body.classList.toggle('light')
  }

  // Render the active page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':    return <HomePage    navigate={navigate} />
      case 'about':   return <AboutPage   navigate={navigate} />
      case 'vision':  return <VisionPage  navigate={navigate} />
      case 'contact': return (
        <ContactPage
          navigate={navigate}
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
        />
      )
      default:        return <HomePage    navigate={navigate} />
    }
  }

  return (
    <div className="app">

      {/* ── Navbar ───────────────────────────────────────────────────── */}
      <Navbar
        currentPage={currentPage}
        navigate={navigate}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* ── Page Content ─────────────────────────────────────────────── */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <Footer navigate={navigate} />

      {/* ── Chat Widget ──────────────────────────────────────────────── */}
      <ChatWidget chatOpen={chatOpen} setChatOpen={setChatOpen} />

      {/* ── Dark / Light Toggle ──────────────────────────────────────── */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        title="Toggle theme"
        aria-label="Toggle dark/light mode"
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>

    </div>
  )
}

export default App
