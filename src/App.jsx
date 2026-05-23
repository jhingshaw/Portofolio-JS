import React, { useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe,
  Mail,
  Menu,
  Moon,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

const profile = {
  name: "JhingShaw",
  role: "Student Developer & Cybersecurity Learner",
  tagline:
    "Seorang siswa kelas 8 SMP di Bogor yang sedang belajar coding, web development, dan keamanan siber. Saya suka mengeksplorasi cara kerja website, membangun project kecil, memahami dasar-dasar keamanan aplikasi, dan terus berkembang lewat latihan, riset, serta eksperimen kreatif.",
  location: "Bogor, Indonesia",
  email: "ajjayv2@gmail.com",
  github: "https://github.com/jhingshaw",
  linkedin: "",
};

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Web App",
    year: "2026",
    impact: "Ready to publish",
    description:
      "Website portofolio pribadi dengan tampilan modern, responsif, animasi halus, dan struktur yang mudah dikembangkan.",
    stack: ["React", "Vite", "CSS", "Framer Motion"],
  },
  {
    title: "Coding Practice Lab",
    category: "Learning",
    year: "2026",
    impact: "Daily progress",
    description:
      "Kumpulan latihan coding untuk memahami HTML, CSS, JavaScript, React, logika pemrograman, dan problem solving.",
    stack: ["JavaScript", "React", "GitHub", "Practice"],
  },
  {
    title: "Cybersecurity Notes",
    category: "Security",
    year: "2026",
    impact: "Security mindset",
    description:
      "Catatan belajar tentang dasar keamanan web, bug bounty, responsible disclosure, dan cara berpikir seperti security researcher.",
    stack: ["Web Security", "Notes", "Research", "Ethics"],
  },
  {
    title: "Frontend UI Experiments",
    category: "Branding",
    year: "2026",
    impact: "Creative exploration",
    description:
      "Eksperimen tampilan UI seperti glassmorphism, bento layout, gradient mesh, micro-interaction, dan desain mobile-first.",
    stack: ["UI Design", "CSS", "Animation", "Responsive"],
  },
];

const skills = [
  "HTML / CSS",
  "JavaScript",
  "React / Vite",
  "Web Security Basics",
  "Bug Bounty Learning",
  "UI Experiments",
  "GitHub",
  "Problem Solving",
];

const experience = [
  {
    period: "2026 — Now",
    title: "Student Developer & Cybersecurity Learner",
    body: "Belajar membuat website modern, memahami dasar JavaScript dan React, serta mulai mengenal konsep keamanan aplikasi web secara etis.",
  },
  {
    period: "2025 — 2026",
    title: "Coding Practice Journey",
    body: "Membangun project kecil, mencoba desain UI, memperbaiki error, dan membiasakan diri memakai GitHub untuk menyimpan kode.",
  },
  {
    period: "Ongoing",
    title: "Creative Tech Exploration",
    body: "Mengeksplorasi ide-ide baru seputar website, desain interaktif, automation, dan cara membuat karya digital yang bisa dipublikasikan.",
  },
];

const filters = ["All", "Security", "Web App", "Learning", "Branding"];
const navItems = ["Home", "Projects", "Skills", "Contact"];

function Button({ children, variant = "primary", href, className = "" }) {
  const classes = `btn ${variant === "secondary" ? "btn-secondary" : "btn-primary"} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}

function GlowOrb({ className = "" }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`glow-orb ${className}`}
      animate={{ scale: [1, 1.12, 1], opacity: [0.28, 0.55, 0.28] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <Sparkles size={16} />
      {children}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="project-card"
    >
      <div className="project-visual">
        <div className="project-grid" />
        <motion.div
          className="floating-cube"
          animate={{ rotate: [0, 8, 0], y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="project-tags-top">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </div>

      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <ArrowUpRight className="project-arrow" size={22} />
        </div>

        <p>{project.description}</p>

        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="impact-box">{project.impact}</div>
      </div>
    </motion.article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22 });
  const heroY = useTransform(springY, [0, 900], [-18, 18]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  function handlePointerMove(event) {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  }

  return (
    <main onPointerMove={handlePointerMove} className="site">
      <div className="background-layer">
        <GlowOrb className="orb-cyan" />
        <GlowOrb className="orb-purple" />
        <GlowOrb className="orb-blue" />
        <motion.div className="cursor-glow" style={{ x: springX, y: springY }} />
        <div className="fade-overlay" />
      </div>

      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand" aria-label="Homepage">
            <span className="brand-icon">
              <Zap size={20} />
            </span>
            <span>
              <strong>{profile.name}</strong>
              <small>Portfolio 2026</small>
            </span>
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>

          <div className="desktop-action">
            <Button href={`mailto:${profile.email}`}>
              Let’s Talk <ArrowUpRight size={16} />
            </Button>
          </div>

          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="hero section-container">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="availability"
          >
            <span className="pulse-dot" />
            Open to learn, build, and collaborate
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            Building creative websites while learning code and cybersecurity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="hero-text"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="hero-actions"
          >
            <Button href="#projects">
              View Projects <ArrowUpRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary">
              <Play size={16} /> Start Brief
            </Button>
          </motion.div>

          <div className="stats-grid">
            <Stat value="6+" label="Years building" />
            <Stat value="40+" label="Projects shipped" />
            <Stat value="Top" label="Security mindset" />
          </div>
        </div>

        <motion.div style={{ y: heroY }} className="hero-panel" aria-hidden="true">
          <div className="window-card">
            <div className="window-shell">
              <div className="window-topbar">
                <div className="traffic-lights">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="live-pill">live.system</span>
              </div>

              <div className="dashboard-card focus-card">
                <div className="focus-header">
                  <div>
                    <span>Current Focus</span>
                    <strong>Secure Interfaces</strong>
                  </div>
                  <Moon size={26} />
                </div>
                <div className="progress-track">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: "12%" }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="metric-grid">
                <div className="metric-card">
                  <Star size={26} />
                  <strong>A+</strong>
                  <span>UX Quality</span>
                </div>
                <div className="metric-card">
                  <Code2 size={26} />
                  <strong>98</strong>
                  <span>Perf Score</span>
                </div>
              </div>

              <div className="dashboard-card signal-card">
                <div className="signal-top">
                  <span>Signal map</span>
                  <strong>real-time</strong>
                </div>
                <div className="signal-grid">
                  {Array.from({ length: 72 }).map((_, index) => (
                    <motion.span
                      key={index}
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{ duration: 2.2, delay: (index % 12) * 0.06, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="section-container section-block">
        <SectionLabel>Selected Work</SectionLabel>

        <div className="section-heading-row">
          <div>
            <h2>Projects built to feel premium and perform under pressure.</h2>
            <p>
              Kumpulan project belajar yang dibuat untuk melatih coding, desain UI, problem solving, dan security mindset secara bertahap.
            </p>
          </div>

          <div className="filter-row">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "active-filter" : ""}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="skills" className="section-container section-block">
        <div className="skills-layout">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2>Skillset yang memadukan design, engineering, dan security.</h2>
            <p>
              Dibangun sebagai portofolio belajar yang jujur, rapi, dan mudah dikembangkan seiring bertambahnya skill.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="skill-card"
              >
                <span>
                  <Sparkles size={20} />
                </span>
                <strong>{skill}</strong>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container section-block">
        <div className="timeline-card">
          <div>
            <SectionLabel>Timeline</SectionLabel>
            <h2>Experience built in layers.</h2>
          </div>

          <div className="timeline-list">
            {experience.map((item) => (
              <article key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-container contact-section">
        <div className="contact-card">
          <div className="contact-grid-bg" />
          <div className="contact-content">
            <SectionLabel>Let’s Build</SectionLabel>
            <h2>Mari belajar, membangun, dan berkembang lewat project nyata.</h2>
            <p>
              Terbuka untuk belajar, diskusi project, kolaborasi kecil, dan eksplorasi ide seputar website, coding, serta keamanan web secara etis.
            </p>

            <div className="contact-actions">
              <Button href={`mailto:${profile.email}`}>
                <Mail size={16} /> Email Me
              </Button>
              <Button href={profile.github} variant="secondary">
                <Globe size={16} /> GitHub
              </Button>
                {profile.linkedin && (
                <Button href={profile.linkedin} variant="secondary">
                  <Globe size={16} /> LinkedIn
                </Button>
              )}
            </div>

            <div className="contact-note">
              <ShieldCheck size={18} />
              <span>{profile.role} · {profile.location}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 {profile.name}. All rights reserved. Built with React, motion, and curiosity.</p>
        <p>{profile.location}</p>
      </footer>
    </main>
  );
}
