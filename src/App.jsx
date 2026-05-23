import React, { useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
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
  role: "Security Researcher & Full-Stack Developer",
  tagline:
    "Saya membangun pengalaman digital yang cepat, aman, dan memorable — dari website premium sampai sistem yang siap diuji di dunia nyata.",
  location: "Bogor, Indonesia",
  email: "ajjayv2@gmail.com",
  github: "https://github.com/jhingshaw",
  linkedin: "https://linkedin.com/in/-",
};

const projects = [
  {
    title: "SentinelOS Dashboard",
    category: "Security",
    year: "2026",
    impact: "+42% faster triage",
    description:
      "Dashboard threat intelligence dengan scoring risiko, workflow incident, dan insight berbasis AI untuk tim security.",
    stack: ["React", "Node", "AI", "PostgreSQL"],
  },
  {
    title: "Flux Commerce",
    category: "Web App",
    year: "2025",
    impact: "99.98% uptime",
    description:
      "Platform e-commerce premium dengan checkout cepat, personalization, dan analytics conversion-first.",
    stack: ["Vite", "Stripe", "Edge", "Analytics"],
  },
  {
    title: "Bug Bounty Lab",
    category: "Security",
    year: "2026",
    impact: "120+ labs solved",
    description:
      "Ruang belajar interaktif untuk XSS, IDOR, SSRF, auth bypass, dan report writing berbasis real-world scenario.",
    stack: ["Docker", "Go", "React", "CI/CD"],
  },
  {
    title: "Nebula Portfolio Kit",
    category: "Branding",
    year: "2026",
    impact: "3.1s first load",
    description:
      "Template portofolio cinematic dengan bento cards, gradient mesh, animated sections, dan konten yang mudah diedit.",
    stack: ["Framer Motion", "React", "Design System"],
  },
];

const skills = [
  "Web Security",
  "React / Vite",
  "API Design",
  "Bug Bounty",
  "UI Engineering",
  "Automation",
  "Cloud Deploy",
  "Performance",
];

const experience = [
  {
    period: "2026 — Now",
    title: "Independent Security Researcher",
    body: "Menganalisis aplikasi web, menulis laporan kerentanan yang actionable, dan membantu tim memperkuat posture keamanan.",
  },
  {
    period: "2024 — 2026",
    title: "Full-Stack Developer",
    body: "Membangun produk digital end-to-end dengan fokus pada UX, reliability, dan clean architecture.",
  },
  {
    period: "2022 — 2024",
    title: "Frontend Engineer",
    body: "Mengubah desain high-fidelity menjadi interface responsif, animatif, dan cepat diakses lintas device.",
  },
];

const filters = ["All", "Security", "Web App", "Branding"];
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
            Available for selective collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            Designing secure digital products with cinematic precision.
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
              Kombinasi visual high-end, architecture bersih, dan security-first thinking untuk hasil yang terlihat bagus sekaligus kuat.
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
              Cocok untuk portofolio developer, bug hunter, security researcher, creative technologist, atau founder teknis.
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
            <h2>Punya ide yang harus terlihat premium dan tetap secure?</h2>
            <p>
              Kirim brief singkat, target audience, dan contoh referensi. Saya akan bantu ubah menjadi produk digital yang tajam secara visual dan kuat secara teknis.
            </p>

            <div className="contact-actions">
              <Button href={`mailto:${profile.email}`}>
                <Mail size={16} /> Email Me
              </Button>
              <Button href={profile.github} variant="secondary">
                <Github size={16} /> GitHub
              </Button>
              <Button href={profile.linkedin} variant="secondary">
                <Linkedin size={16} /> LinkedIn
              </Button>
            </div>

            <div className="contact-note">
              <ShieldCheck size={18} />
              <span>{profile.role} · {profile.location}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 {profile.name}. Crafted with React, motion, and security-first thinking.</p>
        <p>{profile.location}</p>
      </footer>
    </main>
  );
}
