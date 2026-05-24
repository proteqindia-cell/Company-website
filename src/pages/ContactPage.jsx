import { useState } from 'react'

const QUICK_CONNECT = [
  { title: 'Student Enrollment',    desc: 'Enroll in a professional certification program today' },
  {  title: 'College Partnership',   desc: 'Explore MoU, faculty development, and campus programs' },
  {  title: 'Corporate Collaboration', desc: 'Internship pipelines, joint projects, and hiring partnerships' },
]

const INITIAL_FORM = { name: '', email: '', phone: '', subject: '', message: '' }

function ContactPage({ setFormSubmitted, formSubmitted }) {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [sending, setSending]   = useState(false)

  const set = (field) => (e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setFormSubmitted(true)
      setFormData(INITIAL_FORM)
      setTimeout(() => setFormSubmitted(false), 5000)
    }, 1200)
  }

  return (
    <div className="page">
      <section className="section-top">
        <div className="section-inner">
          <div className="section-label">Get In Touch</div>
          <h1 className="section-title">Contact ProTeQ India</h1>
          <p className="section-sub">
            Whether you're a student, college, or corporate partner — we'd love
            to hear from you.
          </p>

          <div className="contact-grid">

            {/* FORM */}
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={set('name')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={set('email')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={set('phone')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  className="form-select"
                  value={formData.subject}
                  onChange={set('subject')}
                >
                  <option value="">Select a subject</option>
                  <option value="student">Student Enrollment</option>
                  <option value="college">College Partnership</option>
                  <option value="corporate">Corporate Collaboration</option>
                  <option value="internship">Internship Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={set('message')}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%' }}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message →'}
              </button>

              {formSubmitted && (
                <div className="success-msg show">
                Message sent! We'll get back to you within 24 hours.
                </div>
              )}
            </form>

            {/* INFO */}
            <div className="contact-info">

              <div className="info-block">
                <h4>Reach Us Directly</h4>
                <div className="info-item">
                  <span className="info-icon"></span>
                  <div>ProTeQ India HQ<br />Pune, Maharashtra, India — 411001</div>
                </div>
                <div className="info-item">
                  <span className="info-icon"></span>
                  <div>
                    info@proteqindia.com<br />
                    training@proteqindia.com
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon"></span>
                  <div>+91 90000 00000<br />Mon–Sat: 9 AM – 7 PM IST</div>
                </div>
              </div>

              <div className="info-block">
                <h4>Follow Us Online</h4>
                <div className="social-links">
                  <a href="#" className="social-btn" title="LinkedIn">in</a>
                  <a href="#" className="social-btn" title="Instagram">ig</a>
                  <a href="#" className="social-btn" title="Facebook">fb</a>
                  <a href="#" className="social-btn" title="GitHub">gh</a>
                  <a href="#" className="social-btn" title="YouTube">yt</a>
                </div>
              </div>

              <div className="info-block">
                <h4>Quick Connect</h4>
                <div className="quick-connect">
                  {QUICK_CONNECT.map(({ icon, title, desc }) => (
                    <div key={title} className="qc-card">
                      <div className="qc-title">
                        <span>{icon}</span> {title}
                      </div>
                      <div className="qc-desc">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
