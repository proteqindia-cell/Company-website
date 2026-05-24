import { useState } from 'react'
import AnimatedCounter from '../components/AnimatedCounter'

// ── Feature card data ──────────────────────────────────────────────────────
const FEATURES = [
  {
    num: '01',
  
    title: 'Industry-Oriented Training',
    desc: 'Curriculum designed in partnership with leading industry professionals to ensure every skill is directly applicable.',
  },
  {
    num: '02',

    title: 'Real-Time Projects',
    desc: 'Hands-on project experience with live deployments, capstone challenges, and collaborative team environments.',
  },
  {
    num: '03',
   
    title: 'AI & Emerging Technologies',
    desc: 'Deep-dive into AI/ML, AR/VR, Embedded Systems, Robotics, and Cloud technologies shaping tomorrow.',
  },
  {
    num: '04',
   
    title: 'Internship Opportunities',
    desc: 'Structured internship programs with industry partners giving you the real-world exposure employers demand.',
  },
  {
    num: '05',
  
    title: 'Research & Innovation',
    desc: 'Collaborative research projects, innovation labs, and national-level competitions and hackathons.',
  },
  {
    num: '06',

    title: 'Placement Assistance',
    desc: 'Dedicated support including resume building, mock interviews, and connections with hiring partners.',
  },
]

// ── Course card data ───────────────────────────────────────────────────────
const COURSES = [
  { tag: 'Embedded Systems', title: 'Embedded Systems & Edge Computing', desc: 'ESP32, ARM Cortex, Arduino — build real hardware solutions for IoT and edge applications.', code: 'PTEQ-ESC-101' },
  { tag: 'Robotics', title: 'Robotics & Autonomous Systems', desc: 'Build autonomous robots with Arduino, ESP32, and ROS introduction for real-world deployment.', code: 'PTEQ-RAS-102' },
  { tag: 'Artificial Intelligence', title: 'Applied Artificial Intelligence', desc: 'Python, TensorFlow, OpenCV — from ML fundamentals to computer vision deployments.', code: 'PTEQ-AAI-103' },
  { tag: 'Data Science', title: 'Data Science & Cloud AI', desc: 'Python, Pandas, Scikit-learn and cloud platforms for end-to-end data-driven solutions.', code: 'PTEQ-DSC-104' },
  { tag: 'Business AI', title: 'AI in Business & Automation', desc: 'Power BI, Generative AI Tools — automate workflows and drive insights at enterprise scale.', code: 'PTEQ-AIB-105' },
  { tag: 'AR / VR', title: 'Augmented & Virtual Reality Systems', desc: 'Unity, Blender, XR SDKs — design and develop immersive AR/VR experiences for real platforms.', code: 'PTEQ-AVR-106' },
]

// ── Stats data ─────────────────────────────────────────────────────────────
const STATS = [
  { target: 5000, suffix: '+', label: 'Students Trained' },
  { target: 50,   suffix: '+', label: 'Partner Institutes' },
  { target: 100,  suffix: '+', label: 'Projects Completed' },
  { target: 25,   suffix: '+', label: 'Industry Mentors' },
]

// ── Internship data ────────────────────────────────────────────────────────
const INTERNSHIPS = [
  { status: 'open', title: 'AI Research Intern', desc: 'Work on cutting-edge AI/ML research projects alongside industry mentors.', tags: ['Python', 'TensorFlow', 'Research'] },
  { status: 'open', title: 'Embedded Systems Intern', desc: 'Develop firmware and IoT prototypes using ESP32 and STM32.', tags: ['ESP32', 'C/C++', 'IoT'] },
  { status: 'soon', title: 'AR/VR Developer Intern', desc: 'Build immersive experiences using Unity, Blender and deploy on Meta Quest.', tags: ['Unity', 'ARCore', 'Blender'] },
  { status: 'soon', title: 'Robotics Engineering Intern', desc: 'Design and program autonomous robotic systems for real-world use cases.', tags: ['ROS', 'Arduino', 'Python'] },
]

// ── Testimonial data ───────────────────────────────────────────────────────
const TESTIMONIALS = [
  { initials: 'AR', name: 'Arjun Reddy', role: 'B.Tech Electronics — Hyderabad', text: "ProTeQ India's embedded systems program was unlike any other. The hands-on projects gave me the confidence to crack my first internship at a top IoT startup within 2 months." },
  { initials: 'PS', name: 'Priya Sharma',role: 'Data Science Professional — Pune', text: 'The AI certification at ProTeQ was the turning point in my career. Real project exposure and mentor guidance helped me land a Data Science role at an MNC.' },
  { initials: 'KM', name: 'Karan Mehta', role: 'Robotics Engineer — Bangalore', text: "ProTeQ's Robotics course was extraordinary. Our capstone project — an autonomous delivery robot — was selected for a national competition. Incredible mentorship!" },
]

// ── FAQ data ───────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Who can enroll in ProTeQ India programs?', a: 'ProTeQ India programs are open to engineering students, science graduates, faculty, and working professionals. No prior experience is required for beginner tracks.' },
  { q: 'What modes of training are available?', a: 'We offer Offline, Online, and Hybrid formats. Our hybrid model combines live virtual sessions with hands-on lab days for maximum flexibility.' },
  { q: 'Are the certifications industry-recognized?', a: 'Yes. ProTeQ India Professional Certifications are recognized by our industry partners and backed by practical project demonstration.' },
  { q: 'Does ProTeQ India provide placement support?', a: 'Absolutely. Our placement cell provides resume reviews, mock interviews, soft-skills training, and direct referrals to our hiring partner network.' },
  { q: 'Can my college partner with ProTeQ India?', a: 'Yes! We offer institutional partnership programs for colleges. Contact us to explore MoU opportunities, faculty development, and campus training.' },
]

// ── Partner data ───────────────────────────────────────────────────────────
const PARTNERS = [
  { label: 'Engineering Colleges' },
  {  label: 'Corporate Partners' },
  {  label: 'Research Labs' },
  {  label: 'Cloud Ecosystems' },
  { label: 'NGO Collaborations' },
  {  label: 'Global Networks' },
]

// ── Sub-components ─────────────────────────────────────────────────────────
function FeatureCard({ num, icon, title, desc }) {
  return (
    <div className="feature-card">
      <span className="card-num">{num}</span>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
    </div>
  )
}

function CourseCard({ tag, title, desc, code }) {
  return (
    <div className="course-card">
      <div className="course-tag">{tag}</div>
      <h4 className="card-title">{title}</h4>
      <p className="card-desc" style={{ marginBottom: '1.25rem' }}>{desc}</p>
      <div className="course-meta">
        <span>⏱ 60–72 hrs</span>
        <span> Beginner–Advanced</span>
        <span className="course-code">{code}</span>
      </div>
    </div>
  )
}

function InternshipCard({ status, title, desc, tags }) {
  return (
    <div className="intern-card">
      <span className={`badge badge-${status}`}>
        {status === 'open' ? 'Open Now' : 'Coming Soon'}
      </span>
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="intern-tags">
        {tags.map((t) => <span key={t} className="intern-tag">{t}</span>)}
      </div>
    </div>
  )
}

function TestimonialCard({ initials, name, role, text }) {
  return (
    <div className="testi-card">
      <p className="testi-text">"{text}"</p>
      <div className="testi-author">
        <div className="testi-avatar">{initials}</div>
        <div>
          <div className="testi-name">{name}</div>
          <div className="testi-role">{role}</div>
        </div>
      </div>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen(!open)}>
        {q}
        <span className="faq-arrow">{open ? '▴' : '▾'}</span>
      </div>
      {open && <div className="faq-a">{a}</div>}
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
function HomePage({ navigate }) {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="grid-lines" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            India's Next-Gen Tech Training Platform
          </div>
          <h1>
            Empowering Future Technologies Through{' '}
            <span>Innovation & Industry Training</span>
          </h1>
          <p>
            Industry-oriented learning, real-world projects, research, and
            technology partnerships for future-ready professionals across India.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('about')}>
              Explore Programs
            </button>
            <button className="btn-secondary" onClick={() => navigate('contact')}>
              Contact Us
            </button>
          </div>
          <div className="hero-stats">
            {STATS.map(({ target, suffix, label }) => (
              <div key={label} className="h-stat">
                <div className="num">
                  <AnimatedCounter target={target} suffix={suffix} />
                </div>
                <div className="lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FEATURES */}
      <section>
        <div className="section-inner">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">
            Built for the Industry.<br />Designed for the Future.
          </h2>
          <p className="section-sub">
            Every program at ProTeQ India is engineered around real-world outcomes,
            cutting-edge tools, and industry-aligned curriculum.
          </p>
          <div className="cards-grid">
            {FEATURES.map((f) => <FeatureCard key={f.num} {...f} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* COURSES */}
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-label">Our Programs</div>
          <h2 className="section-title">Professional Certification Courses</h2>
          <p className="section-sub">
            6 flagship certification tracks designed for engineers, designers,
            and professionals ready to master emerging technologies.
          </p>
          <div className="courses-grid">
            {COURSES.map((c) => <CourseCard key={c.code} {...c} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* STATS */}
      <section>
        <div className="section-inner">
          <div className="section-label">Impact by Numbers</div>
          <h2 className="section-title">Proven Results Across India</h2>
          <div className="stats-grid">
            {STATS.map(({ target, suffix, label }) => (
              <div key={label} className="stat-box">
                <span className="stat-num">
                  <AnimatedCounter target={target} suffix={suffix} />
                </span>
                <div className="stat-lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* INTERNSHIPS */}
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-label">Opportunities</div>
          <h2 className="section-title">Internship Programs</h2>
          <p className="section-sub">
            Gain real industry experience through structured internship programs
            across our technology domains.
          </p>
          <div className="internship-grid">
            {INTERNSHIPS.map((i) => <InternshipCard key={i.title} {...i} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIALS */}
      <section>
        <div className="section-inner">
          <div className="section-label">Student Stories</div>
          <h2 className="section-title">Success Stories</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PARTNERS */}
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-label">Our Network</div>
          <h2 className="section-title">Trusted by Leading Institutions</h2>
          <p className="section-sub">
            Partnerships across colleges, corporates, research labs, and
            technology ecosystems across India.
          </p>
          <div className="partners-grid">
            {PARTNERS.map(({ icon, label }) => (
              <div key={label} className="partner-pill">
                <div className="p-icon">{icon}</div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section>
        <div className="section-inner">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQS.map((f) => <FaqItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage
