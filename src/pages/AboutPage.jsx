// ── Data ───────────────────────────────────────────────────────────────────
const DOMAINS = [
  { name: 'Artificial Intelligence',   sub: 'Python · TensorFlow · OpenCV' },
  {  name: 'Embedded Systems',           sub: 'ESP32 · ARM Cortex · Arduino' },
  {  name: 'AR / VR Systems',            sub: 'Unity · Blender · XR SDKs' },
  {  name: 'Robotics & Automation',      sub: 'ROS · Arduino · Python' },
  {  name: 'Data Science & Cloud AI',    sub: 'Pandas · Scikit-learn · AWS' },
  {  name: 'AI in Business',             sub: 'Power BI · Generative AI Tools' },
]

const WHY_CARDS = [
  {  title: 'Practical, Project-Based Learning',  desc: 'Every module is built around doing. Students work on real hardware, write actual code, and solve genuine engineering problems.' },
  { title: 'Industry Expert Mentors',           desc: 'Our faculty are practitioners — working engineers, data scientists, and researchers who bring current industry experience.' },
  {  title: 'Research Opportunities',             desc: 'Top performers gain access to collaborative research projects, paper publications, and innovation competitions at national level.' },
  { title: 'Internship Support',                 desc: 'Structured placement into internship programs with our corporate network, giving every student real professional experience.' },
  {  title: 'Placement Preparation',              desc: 'Resume coaching, mock technical interviews, aptitude training, and direct referrals to our 50+ hiring partners across India.' },
  {  title: 'Institutional Partnerships',         desc: 'Full MoU support for colleges: faculty development, lab setup guidance, student training programs, and co-certification.' },
]

const TEAM = [
  { initials: 'PK', gradient: 'var(--orange), var(--blue)',   name: 'ProTeQ Founder',  role: 'Founder & CEO',                  bio: 'Technology entrepreneur with 10+ years in embedded systems and professional training. Driving ProTeQ India\'s vision of industry-aligned education.' },
  { initials: 'AI', gradient: '#8b5cf6, var(--blue)',         name: 'AI Research Lead', role: 'Head of AI Programs',            bio: 'PhD in Machine Learning with industry experience at top tech firms. Leads our AI certification tracks and research collaboration initiatives.' },
  { initials: 'RV', gradient: '#10b981, var(--blue)',         name: 'Robotics Expert',  role: 'Head of Robotics & Embedded',    bio: 'Senior robotics engineer with experience building autonomous systems for industrial and defense applications across India and abroad.' },
  { initials: 'XR', gradient: 'var(--orange), #ec4899',      name: 'XR Design Lead',  role: 'Head of AR/VR Programs',         bio: 'Immersive technology specialist with shipped projects on Meta Quest, HoloLens, and mobile AR. Leads our 6-course AR/VR certification series.' },
]

const TIMELINE = [
  { year: '2020', title: 'Foundation',                    desc: 'ProTeQ India established with a mission to deliver industry-aligned tech training across India.' },
  { year: '2021', title: 'First 10 College Partnerships', desc: 'Signed MoUs with 10 engineering colleges in Maharashtra, launching our first embedded systems batches.' },
  { year: '2022', title: '1000+ Students Milestone',      desc: 'Trained over 1000 students in AI, Embedded Systems, and Robotics. Launched internship pipeline with corporate partners.' },
  { year: '2023', title: 'Research & Innovation Hub',     desc: 'Launched ProTeQ Research Lab enabling students to publish papers and compete at national-level tech competitions.' },
  { year: '2024', title: 'AR/VR Series Launch',           desc: "Launched 6-course AR/VR & Immersive Technologies professional certification series — India's first of its kind." },
  { year: '2025', title: '5000+ Students & 50+ Partners', desc: 'Reached 5000+ trained students, 50+ institutional partners, and expanded to 8 technology domains.' },
]

// ── Sub-components ─────────────────────────────────────────────────────────
function DomainItem({ icon, name, sub }) {
  return (
    <div className="tech-item">
      <span className="tech-icon">{icon}</span>
      <div>
        <div className="tech-name">{name}</div>
        <div className="tech-sub">{sub}</div>
      </div>
    </div>
  )
}

function WhyCard({ icon, title, desc }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

function TeamCard({ initials, gradient, name, role, bio }) {
  return (
    <div className="team-card">
      <div className="team-avatar" style={{ background: `linear-gradient(135deg, ${gradient})` }}>
        {initials}
      </div>
      <h4 className="team-name">{name}</h4>
      <p className="team-role">{role}</p>
      <p className="team-bio">{bio}</p>
    </div>
  )
}

function TimelineItem({ year, title, desc }) {
  return (
    <div className="tl-item">
      <div className="tl-year">{year}</div>
      <div className="tl-title">{title}</div>
      <div className="tl-desc">{desc}</div>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
function AboutPage({ navigate }) {
  return (
    <div className="page">

      {/* COMPANY OVERVIEW */}
      <section className="section-top">
        <div className="section-inner">
          <div className="section-label">Who We Are</div>
          <h1 className="section-title">About ProTeQ India</h1>

          <div className="about-grid">
            {/* Text side */}
            <div className="about-text">
              <p>
                ProTeQ India is a technology-focused training and partnership
                organization dedicated to bridging the gap between academic
                education and industry readiness. We deliver professional
                certifications and project-based training in emerging technologies.
              </p>
              <p>
                Founded to empower the next generation of technology professionals,
                ProTeQ India partners with leading engineering colleges, corporate
                organizations, and research institutions to create real-world
                learning ecosystems.
              </p>
              <p>
                Our programs span Embedded Systems, Robotics, Artificial
                Intelligence, Data Science, Business Automation, and AR/VR — each
                designed with direct input from industry experts to ensure every
                learner is job-ready from day one.
              </p>
              <p>
                We believe learning happens through doing. Every ProTeQ India
                program culminates in a capstone project and professional
                certification, ensuring our graduates carry tangible proof of their
                skills.
              </p>
              <div className="hero-btns" style={{ marginTop: '1.5rem' }}>
                <button className="btn-primary" onClick={() => navigate('contact')}>Partner With Us</button>
                <button className="btn-secondary" onClick={() => navigate('vision')}>Our Vision</button>
              </div>
            </div>

            {/* Visual side */}
            <div className="about-visual">
              <div className="about-card">
                <h3>Our Technology Domains</h3>
                <div className="tech-list">
                  {DOMAINS.map((d) => <DomainItem key={d.name} {...d} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHY CHOOSE US */}
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-label">Why ProTeQ India</div>
          <h2 className="section-title">What Sets Us Apart</h2>
          <div className="why-grid">
            {WHY_CARDS.map((w) => <WhyCard key={w.title} {...w} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TEAM */}
      <section>
        <div className="section-inner">
          <div className="section-label">Our People</div>
          <h2 className="section-title">Leadership & Mentors</h2>
          <div className="team-grid">
            {TEAM.map((t) => <TeamCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TIMELINE */}
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-label">Our Journey</div>
          <h2 className="section-title">Milestones That Define Us</h2>
          <div className="timeline">
            {TIMELINE.map((item) => <TimelineItem key={item.year} {...item} />)}
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage
