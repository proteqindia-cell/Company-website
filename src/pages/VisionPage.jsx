// ── Data ───────────────────────────────────────────────────────────────────
const CORE_VALUES = [
  'Excellence in Practical Education',
  'Industry-Aligned Innovation',
  'Collaborative Learning Culture',
  'Ethical Technology Development',
  'Inclusive Access to Tech Education',
]

const MISSION_CARDS = [
  {
    num: '01',
    title: 'Practical & Project-Based Learning',
    desc: 'To provide high-quality training in emerging technology domains through practical and project-based learning that ensures every graduate is deployment-ready.',
  },
  {
    num: '02',
    title: 'Bridging Academia & Industry',
    desc: 'To bridge the gap between academic knowledge and industry requirements by focusing on real-world applications, live projects, and skill development that matters.',
  },
  {
    num: '03',   
    title: 'Fostering Innovation & Excellence',
    desc: 'To foster innovation, problem-solving, and technical excellence among students, researchers, and professionals through research collaboration and competitive programs.',
  },
  {
    num: '04',
    title: 'Collaborative Learning Culture',
    desc: 'To create a collaborative learning environment that encourages continuous growth, peer learning, mentorship, and technological advancement at every stage.',
  },
]

const STRATEGY_CARDS = [
  {
    accent: 'var(--orange)',
    title: 'Institutional Expansion',
    desc: 'Partner with 200+ engineering colleges across India by 2027, bringing ProTeQ programs to every corner of the country.',
  },
  {
    accent: 'var(--blue)',
    title: 'Digital Learning Platform',
    desc: 'Launch a full-featured online learning platform with live sessions, project submissions, and AI-assisted mentoring.',
  },
  {
    accent: '#8b5cf6',
    title: 'Research Publication',
    desc: 'Facilitate 50+ student and mentor research publications in nationally and internationally indexed journals by 2026.',
  },
  {
    accent: '#10b981',
    title: 'Industry Placement Network',
    desc: 'Grow our hiring partner network to 100+ companies, ensuring structured placement pathways for every ProTeQ graduate.',
  },
]

// ── Sub-components ─────────────────────────────────────────────────────────
function MissionCard({ num, icon, title, desc }) {
  return (
    <div className="mission-card">
      <div className="mc-num">{num}</div>
      <div className="mc-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

function StrategyCard({ accent, icon, title, desc }) {
  return (
    <div className="strategy-card" style={{ borderTopColor: accent }}>
      <h4>
        <span style={{ marginRight: '8px' }}>{icon}</span>
        {title}
      </h4>
      <p>{desc}</p>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
function VisionPage() {
  return (
    <div className="page">

      {/* VISION */}
      <section className="section-top">
        <div className="section-inner">
          <div className="section-label">Our North Star</div>
          <h1 className="section-title">Vision & Mission</h1>
          <p className="section-sub">
            The principles and purpose that drive everything we build at ProTeQ India.
          </p>

          <div className="vision-layout">
            {/* Vision card */}
            <div className="vision-card">
             
              <h3 className="vision-heading">Our Vision</h3>
              <blockquote>
                "To become a leading technology training and innovation platform
                that empowers learners with industry-oriented skills in emerging
                technologies through practical learning, research, and real-world
                project development."
              </blockquote>
            </div>

            {/* Right column */}
            <div className="vision-right">
              {/* Core values */}
              <div className="core-values-card">
                <h4>Core Values</h4>
                <ul>
                  {CORE_VALUES.map((v) => (
                    <li key={v}>
                      <span className="value-arrow">→</span>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Promise */}
              <div className="promise-card">
                <h4>Our Promise</h4>
                <p>
                  Every student who completes a ProTeQ India program will leave
                  with a portfolio of real projects, a professional certification,
                  and the skills to contribute to India's technology future from
                  day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* MISSION */}
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Our Mission</h2>
          <p className="section-sub">
            Four strategic pillars that guide every program, partnership, and
            innovation at ProTeQ India.
          </p>
          <div className="mission-grid">
            {MISSION_CARDS.map((m) => <MissionCard key={m.num} {...m} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* STRATEGY */}
      <section>
        <div className="section-inner">
          <div className="section-label">How We Get There</div>
          <h2 className="section-title">Strategic Focus Areas</h2>
          <div className="strategy-grid">
            {STRATEGY_CARDS.map((s) => <StrategyCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

    </div>
  )
}

export default VisionPage
