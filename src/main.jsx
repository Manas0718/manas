import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'C', 'Java', 'Python', 'React', 'Express', 'Networking']

const education = [
  { period: '2024 — 2028', qualification: 'B.Tech', institution: 'VVITU', score: 'CGPA: 8.2', current: true },
  { period: '2022 — 2024', qualification: 'Intermediate', institution: 'Sri Chaitanya College', score: '93.3%' },
  { period: '2021 — 2022', qualification: '10th Standard', institution: 'Sri Chaitanya School', score: '93.4%' },
]

const projects = [
  { number: '01', title: 'Smart Home Temperature Monitoring', description: 'A project focused on monitoring temperature in a smart-home environment.' },
  { number: '02', title: 'VVIT Exam Papers and Notes', description: 'A student-focused resource project for accessing exam papers and study notes.' },
  { number: '03', title: 'AI-Powered Smart Ambulance System', description: 'An AI-powered concept aimed at supporting smarter ambulance and emergency response.' },
]

function App() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Manas home"><span>MC</span><b>MANAS<span className="orange">.</span></b></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact" className="nav-contact">Contact ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> STUDENT · ASPIRING CYBERSECURITY PROFESSIONAL</p>
            <h1>Hi, I'm<br /><span>Manas</span> Chimakurthi<span className="orange">.</span></h1>
            <p className="hero-lede">Curious mind. Competitive spirit. Future-focused technologist.</p>
            <p className="hero-text">I'm a B.Tech student interested in technology, problem-solving and building a career in cybersecurity. I enjoy exploring how systems work and how they can be made more secure.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span>↘</span></a>
              <a className="text-link" href="mailto:manaskarthik1122@gmail.com">Get in touch ↗</a>
            </div>
            <div className="hero-meta"><span>BASED IN INDIA</span><i /> <span>VVITU · 2024—2028</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative cybersecurity-inspired graphic">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="crosshair crosshair-a">+</div><div className="crosshair crosshair-b">+</div>
            <div className="monogram"><span>MC</span><small>LEARN · BUILD · SECURE</small></div>
            <div className="art-tag tag-top">01 / MINDSET</div><div className="art-tag tag-bottom">FOCUSED ON WHAT'S NEXT ↗</div>
          </div>
          <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-content">
            <h2>Driven by curiosity.<br /><span className="muted">Motivated by</span> <span className="orange">challenges.</span></h2>
            <div className="about-details">
              <p>I'm currently pursuing my B.Tech at VVITU. My interests span software development, computer networks and cybersecurity. I'm building my foundation through coursework, hands-on projects and continuous learning.</p>
              <div className="traits">
                <div><strong>3×</strong><span>College chess champion</span></div>
                <div><strong>8.2</strong><span>B.Tech CGPA</span></div>
                <div><strong>09</strong><span>Technical skills listed</span></div>
              </div>
              <p className="chess-note"><span className="chess-icon">♞</span> Chess has shaped my patience, strategic thinking and ability to evaluate decisions — skills I bring to technical problem-solving too.</p>
            </div>
          </div>
        </section>

        <section className="education section-wrap section-block" id="education">
          <div className="section-kicker">02 / EDUCATION</div>
          <div className="section-heading"><h2>Learning is a <span className="orange">process.</span></h2><p>My academic journey so far.</p></div>
          <div className="education-list">
            {education.map((item, index) => (
              <article className="education-item" key={item.qualification}>
                <span className="edu-index">0{index + 1}</span>
                <div><p className="period">{item.period} {item.current && <span className="current">CURRENT</span>}</p><h3>{item.qualification}</h3><p className="institution">{item.institution}</p></div>
                <strong className="score">{item.score}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-kicker">03 / TOOLKIT</div>
          <div className="section-heading"><h2>Technologies I <span className="orange">work with.</span></h2><p>A growing set of technical skills.</p></div>
          <div className="skill-grid">{skills.map((skill, index) => <div className="skill-card" key={skill}><span>0{index + 1}</span><b>{skill}</b><i>↗</i></div>)}</div>
          <p className="skill-footnote">Always learning. Always improving.</p>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-kicker">04 / SELECTED PROJECTS</div>
          <div className="section-heading"><h2>Ideas turned into <span className="orange">projects.</span></h2><p>A selection of academic and personal project work.</p></div>
          <div className="project-list">
            {projects.map(project => <article className="project-card" key={project.number}><span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p></div><span className="project-arrow">↗</span></article>)}
          </div>
          <p className="small-note">Project descriptions are brief summaries. More details and links can be added when available.</p>
        </section>

        <section className="certifications section-wrap section-block" id="certifications">
          <div className="section-kicker">05 / CERTIFICATIONS</div>
          <div className="section-heading"><h2>Learning beyond the <span className="orange">classroom.</span></h2></div>
          <div className="cert-list">
            <div><span className="cert-mark">N</span><p><b>Competitive Programming</b><small>NPTEL Certification</small></p><span className="cert-arrow">↗</span></div>
            <div><span className="cert-mark">N</span><p><b>Data Structures and Algorithms in Java</b><small>NPTEL Certification</small></p><span className="cert-arrow">↗</span></div>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="section-kicker">06 / CONTACT</div>
          <div className="contact-main"><p className="eyebrow">HAVE AN IDEA OR AN OPPORTUNITY?</p><h2>Let's start a<br /><span className="orange">conversation.</span></h2><a className="email-link" href="mailto:manaskarthik1122@gmail.com">manaskarthik1122@gmail.com <span>↗</span></a></div>
          <div className="contact-side"><p>I'm interested in connecting with people working across technology, software and cybersecurity.</p><a href="https://in.linkedin.com/in/manas-karthik-b2602734a" target="_blank" rel="noreferrer">CONNECT ON LINKEDIN ↗</a></div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span>MC</span><b>MANAS<span className="orange">.</span></b></a><p>Designed & built with curiosity.</p><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} MANAS CHIMAKURTHI</small></footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
