import React, { useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const profile = {
  name: "JhingShaw",
  role: "Student Developer & Cybersecurity Learner",
  location: "Bogor, Indonesia",
  email: "ajjayv2@gmail.com",
  github: "https://github.com/jhingshaw",
  tagline:
    "Seorang siswa kelas 8 SMP di Bogor yang sedang belajar coding, web development, dan keamanan siber. Saya suka mengeksplorasi cara kerja website, membangun project kecil, memahami dasar-dasar keamanan aplikasi, dan terus berkembang lewat latihan, riset, serta eksperimen kreatif.",
};

const projects = [
  {
    title: "JhingShaw Portfolio OS",
    type: "Web App",
    status: "Published Ready",
    year: "2026",
    description:
      "Portfolio pribadi yang dirancang seperti command center: modern, responsif, cepat, dan mudah dikembangkan untuk menampilkan perjalanan belajar.",
    stack: ["React", "Vite", "Framer Motion", "CSS"],
    score: 96,
    accent: "cyan",
  },
  {
    title: "Cybersecurity Notes",
    type: "Security",
    status: "Learning",
    year: "2026",
    description:
      "Catatan belajar tentang keamanan web, responsible disclosure, bug bounty ethics, HTTP basics, auth flow, dan mindset analisis kerentanan.",
    stack: ["Web Security", "Notes", "Research", "Ethics"],
    score: 88,
    accent: "green",
  },
  {
    title: "Frontend UI Experiments",
    type: "Interface",
    status: "Exploration",
    year: "2026",
    description:
      "Eksperimen desain UI menggunakan gradient mesh, glass panel, bento cards, micro-interaction, dan layout mobile-first.",
    stack: ["HTML", "CSS", "JavaScript", "Animation"],
    score: 91,
    accent: "violet",
  },
  {
    title: "Coding Practice Lab",
    type: "Learning",
    status: "Ongoing",
    year: "2026",
    description:
      "Tempat latihan logika, komponen React, struktur file, debugging, GitHub workflow, dan kebiasaan membangun project kecil secara konsisten.",
    stack: ["JavaScript", "React", "GitHub", "Problem Solving"],
    score: 84,
    accent: "amber",
  },
];

const skills = [
  { name: "HTML & CSS", level: 86, note: "layout, responsive, animation" },
  { name: "JavaScript", level: 72, note: "logic, DOM, functions" },
  { name: "React / Vite", level: 68, note: "components, props, state" },
  { name: "GitHub", level: 64, note: "repo, commit, deploy" },
  { name: "UI Design", level: 78, note: "visual, spacing, hierarchy" },
  { name: "Web Security", level: 58, note: "basics, ethics, research" },
];

const roadmap = [
  {
    phase: "01",
    title: "Foundation",
    body: "Memperkuat HTML, CSS, JavaScript, Git, dan cara berpikir problem-solving.",
  },
  {
    phase: "02",
    title: "Build",
    body: "Membuat project kecil yang nyata: portfolio, landing page, notes app, dan UI experiments.",
  },
  {
    phase: "03",
    title: "Secure",
    body: "Belajar keamanan web secara etis: HTTP, auth, input validation, OWASP basics, dan responsible disclosure.",
  },
  {
    phase: "04",
    title: "Publish",
    body: "Deploy project ke Vercel/GitHub, dokumentasi rapi, dan membangun jejak portfolio yang konsisten.",
  },
];

const navItems = ["Home", "Work", "Skills", "Roadmap", "Contact"];
const filters = ["All", "Web App", "Security", "Interface", "Learning"];

function Icon({ name }) {
  const icons = {
    arrow: "↗",
    spark: "✦",
    menu: "☰",
    close: "×",
    mail: "✉",
    globe: "◎",
    play: "▶",
    shield: "⬡",
    code: "</>",
    star: "★",
    bolt: "ϟ",
  };

  return <span className="icon" aria-hidden="true">{icons[name] || "•"}</span>;
}

function Button({ children, href, variant = "primary", onClick }) {
  const props = href
    ? {
        href,
        target: href.startsWith("http") ? "_blank" : undefined,
        rel: href.startsWith("http") ? "noreferrer" : undefined,
      }
    : { onClick };

  const Component = href ? "a" : "button";

  return (
    <Component className={`btn btn-${variant}`} {...props}>
      {children}
    </Component>
  );
}

function SectionBadge({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-badge"
    >
      <Icon name="spark" />
      {children}
    </motion.div>
  );
}

function ProgressRing({ value }) {
  const deg = Math.round((value / 100) * 360);

  return (
    <div className="progress-ring" style={{ "--deg": `${deg}deg` }}>
      <span>{value}</span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card accent-${project.accent}`}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.58, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
    >
      <div className="project-head">
        <div>
          <span className="project-type">{project.type}</span>
          <h3>{project.title}</h3>
        </div>
        <ProgressRing value={project.score} />
      </div>

      <p>{project.description}</p>

      <div className="project-orbit">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="project-meta">
        <span>{project.status}</span>
        <span>{project.year}</span>
      </div>

      <div className="stack-list">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </motion.article>
  );
}

function SkillBar({ skill, index }) {
  return (
    <motion.div
      className="skill-row"
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <div className="skill-copy">
        <strong>{skill.name}</strong>
        <span>{skill.note}</span>
      </div>
      <div className="skill-track">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
        />
      </div>
      <b>{skill.level}%</b>
    </motion.div>
  );
}

function TerminalCard() {
  const lines = [
    "$ whoami",
    "JhingShaw — learner, builder, explorer",
    "$ focus --today",
    "React components · UI polish · cyber ethics",
    "$ deploy --target vercel",
    "status: ready for public launch",
  ];

  return (
    <motion.div
      className="terminal-card"
      initial={{ opacity: 0, y: 28, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      <div className="terminal-top">
        <div className="traffic">
          <span />
          <span />
          <span />
        </div>
        <small>jhingshaw@portfolio:~</small>
      </div>
      <div className="terminal-body">
        {lines.map((line, index) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.15 }}
            className={line.startsWith("$") ? "command" : "result"}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FloatingMetric({ label, value, delay = 0 }) {
  return (
    <motion.div
      className="floating-metric"
      animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <strong>{value}</strong>
      <span>{label}</span>
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 110, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 110, damping: 24 });
  const heroShift = useTransform(smoothY, [0, 900], [-18, 18]);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((item) => item.type === filter);
  }, [filter]);

  function handleMove(event) {
    x.set(event.clientX);
    y.set(event.clientY);
  }

  return (
    <main className="app" onPointerMove={handleMove}>
      <div className="noise" />
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      <motion.div className="cursor" style={{ x: smoothX, y: smoothY }} />

      <header className="navbar">
        <a className="brand" href="#home" aria-label="JhingShaw homepage">
          <span className="brand-mark">JS</span>
          <span>
            <strong>{profile.name}</strong>
            <small>Creative Developer Portfolio</small>
          </span>
        </a>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="desktop-cta">
          <Button href={`mailto:${profile.email}`}>Contact <Icon name="arrow" /></Button>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>

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

      <section id="home" className="hero container">
        <div className="hero-left">
          <motion.div
            className="hero-pill"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="live-dot" />
            Building from Bogor · Learning in public
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.08 }}
          >
            Young coder crafting interfaces with security mindset.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.16 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.24 }}
          >
            <Button href="#work">Explore Work <Icon name="arrow" /></Button>
            <Button href={profile.github} variant="secondary"><Icon name="globe" /> GitHub</Button>
          </motion.div>

          <div className="hero-stats">
            <div>
              <strong>2026</strong>
              <span>Portfolio era</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Featured modules</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Learning mindset</span>
            </div>
          </div>
        </div>

        <motion.div className="hero-right" style={{ y: heroShift }}>
          <TerminalCard />
          <FloatingMetric label="Build quality" value="A+" delay={0.2} />
          <FloatingMetric label="Public ready" value="100%" delay={0.8} />
          <div className="holo-card">
            <div className="holo-grid" />
            <div className="holo-content">
              <span><Icon name="shield" /> Ethical Security</span>
              <strong>Code · Design · Secure · Ship</strong>
              <p>Portfolio ini dirancang untuk terlihat serius, tetap jujur, dan cocok dipublikasikan sebagai karya belajar.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="marquee-section" aria-label="Focus area">
        <div className="marquee-track">
          {["React", "Vite", "JavaScript", "UI Design", "Cybersecurity", "GitHub", "Vercel", "Learning"].concat(
            ["React", "Vite", "JavaScript", "UI Design", "Cybersecurity", "GitHub", "Vercel", "Learning"]
          ).map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section id="work" className="section container">
        <SectionBadge>Featured Work</SectionBadge>

        <div className="section-header">
          <div>
            <h2>Project showcase yang terasa lebih matang, bukan sekadar template.</h2>
            <p>
              Setiap kartu dibuat untuk menunjukkan progress belajar dengan tampilan premium, namun tetap jujur dan aman untuk dipublikasikan.
            </p>
          </div>

          <div className="filter-panel">
            {filters.map((item) => (
              <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>
                {item}
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

      <section id="skills" className="section container split-section">
        <div className="sticky-copy">
          <SectionBadge>Skill Matrix</SectionBadge>
          <h2>Belajar seperti engineer: rapi, bertahap, dan bisa dibuktikan.</h2>
          <p>
            Fokus utama portfolio ini bukan mengaku paling hebat, tapi menunjukkan arah belajar yang jelas: membuat, memperbaiki, mengamankan, lalu mempublikasikan.
          </p>

          <div className="quote-card">
            <Icon name="star" />
            <p>“Small projects, serious execution.”</p>
          </div>
        </div>

        <div className="skill-panel">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </section>

      <section id="roadmap" className="section container">
        <SectionBadge>Learning Roadmap</SectionBadge>

        <div className="section-header compact">
          <div>
            <h2>Roadmap yang realistis untuk terus naik level.</h2>
            <p>
              Dari dasar coding, project nyata, security mindset, sampai deploy publik. Semua dibuat agar perjalanan belajar terlihat profesional.
            </p>
          </div>
        </div>

        <div className="roadmap-grid">
          {roadmap.map((item, index) => (
            <motion.article
              key={item.phase}
              className="roadmap-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span>{item.phase}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section container lab-section">
        <div className="lab-card">
          <div className="lab-visual">
            <div className="scanline" />
            {Array.from({ length: 48 }).map((_, index) => (
              <motion.span
                key={index}
                animate={{ opacity: [0.18, 1, 0.18] }}
                transition={{ duration: 2.4, delay: (index % 12) * 0.07, repeat: Infinity }}
              />
            ))}
          </div>

          <div className="lab-copy">
            <SectionBadge>Portfolio Identity</SectionBadge>
            <h2>Designed for public launch, not just local preview.</h2>
            <p>
              Struktur dibuat clean, tanpa data rahasia, tanpa API key, tanpa library yang ribet, dan siap dihosting gratis lewat Vercel.
            </p>
            <div className="identity-list">
              <span><Icon name="code" /> React single page app</span>
              <span><Icon name="shield" /> Safe public content</span>
              <span><Icon name="bolt" /> Fast Vite build</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section container contact">
        <div className="contact-card">
          <div className="contact-bg" />
          <div className="contact-content">
            <SectionBadge>Contact</SectionBadge>
            <h2>Let’s build, learn, and publish better projects.</h2>
            <p>
              Terbuka untuk diskusi belajar coding, kolaborasi project kecil, eksplorasi UI, dan obrolan seputar keamanan web secara etis.
            </p>

            <div className="contact-actions">
              <Button href={`mailto:${profile.email}`}><Icon name="mail" /> Email</Button>
              <Button href={profile.github} variant="secondary"><Icon name="globe" /> GitHub</Button>
            </div>

            <div className="profile-strip">
              <span>{profile.role}</span>
              <span>{profile.location}</span>
              <span>© 2026 {profile.name}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <p>© 2026 JhingShaw. All rights reserved.</p>
        <p>Built with React, motion, curiosity, and clean execution.</p>
      </footer>
    </main>
  );
}
