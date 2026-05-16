import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import "../portfolio.css";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Emmanuel Oladimeji Oladipupo — Developer Portfolio" },
      {
        name: "description",
        content:
          "Emmanuel Oladimeji Oladipupo — CS student and full-stack developer building thoughtful web experiences and AI-powered tools.",
      },
    ],
  }),
});

function Index() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const tick = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 4);
      setProgress(Math.floor(p));
      if (p >= 100) {
        clearInterval(tick);
        setTimeout(() => setLoading(false), 350);
      }
    }, 120);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    if (loading) return;
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    const nav = document.querySelector(".portfolio nav") as HTMLElement | null;
    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle("nav-scrolled", window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const onMove = (e: MouseEvent) => {
      if (!nav) return;
      const r = nav.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      nav.style.setProperty("--rx", `${(-y * 4).toFixed(2)}deg`);
      nav.style.setProperty("--ry", `${(x * 4).toFixed(2)}deg`);
    };
    const onLeave = () => {
      if (!nav) return;
      nav.style.setProperty("--rx", "0deg");
      nav.style.setProperty("--ry", "0deg");
    };
    nav?.addEventListener("mousemove", onMove);
    nav?.addEventListener("mouseleave", onLeave);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      nav?.removeEventListener("mousemove", onMove);
      nav?.removeEventListener("mouseleave", onLeave);
    };
  }, [loading]);

  return (
    <div className="portfolio">
      {loading && (
        <div className="boot-screen" aria-hidden="true">
          <div className="boot-grid" />
          <div className="boot-inner">
            <div className="boot-logo">
              EO<span>.</span>
            </div>
            <div className="boot-name">Emmanuel Oladimeji Oladipupo</div>
            <div className="boot-bar">
              <div className="boot-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="boot-meta">
              <span>// booting portfolio</span>
              <span>{progress.toString().padStart(3, "0")}%</span>
            </div>
          </div>
        </div>
      )}

      <nav className="nav-3d">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            EO<span className="dot">.</span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a href="#contact" className="nav-cta">
            Hire me →
          </a>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-tag">// CS Student &amp; Full-Stack Developer</div>
        <h1 className="hero-name">
          Emmanuel
          <br />
          <em>Oladimeji Oladipupo</em>
        </h1>
        <p className="hero-desc">
          Building thoughtful web experiences and AI-powered tools. Currently studying Computer
          Science at the University of East London while shipping real products.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
        <div className="hero-scroll">scroll</div>
      </section>

      <hr className="divider" />

      <section id="about" className="reveal">
        <div className="about-text">
          <div className="section-label">// 01 — about</div>
          <h2 className="section-title">
            Developer,
            <br />
            <em>builder, learner.</em>
          </h2>
          <p>
            I'm <strong>Emmanuel</strong> — a co-staff developer at Devantics and first-year CS
            student on the pathway to a BSc (Hons) in Computer Science at the University of East
            London. I write backend systems, build interfaces, and integrate AI into products people
            actually use.
          </p>
          <p>
            Outside of code I'm involved in church AV production, exploring biblical study, and
            thinking about how technology can serve communities. I hold a{" "}
            <strong>Python PCEP™</strong> certification and have industry experience in IT
            management and software development.
          </p>
          <p>
            Currently co-building <strong>Notitia AI</strong> — a K-12 tutoring platform for Texas
            educators — and developing the backend for <strong>Courseware Cloud</strong> at
            Devantics.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-cell">
            <div className="stat-num">2+</div>
            <div className="stat-label">Years building products</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">5+</div>
            <div className="stat-label">Projects shipped</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">PCEP™</div>
            <div className="stat-label">Python certified</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">BSc</div>
            <div className="stat-label">CS pathway, UEL</div>
          </div>
        </div>
      </section>

      <section id="skills" className="reveal">
        <div className="section-label">// 02 — skills</div>
        <h2 className="section-title">
          What I <em>work with.</em>
        </h2>
        <div className="skills-grid">
          {[
            {
              icon: "⚙️",
              name: "Backend Development",
              tags: ["Python", "Node.js", "REST APIs", "MySQL", "PostgreSQL"],
            },
            {
              icon: "🖥️",
              name: "Frontend Development",
              tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
            },
            {
              icon: "🤖",
              name: "AI Integration",
              tags: ["Claude API", "Prompt Engineering", "LLM Workflows"],
            },
            { icon: "🗄️", name: "Data & Modelling", tags: ["UML", "SQL", "SSMS", "ERD Design"] },
            { icon: "🛠️", name: "Tooling & DevOps", tags: ["Git", "GitHub", "Bash", "VS Code"] },
            {
              icon: "📡",
              name: "AV & Systems",
              tags: ["Behringer Consoles", "Stage Box Config", "IT Management"],
            },
          ].map((s) => (
            <div key={s.name} className="skill-card">
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="reveal">
        <div className="section-label">// 03 — projects</div>
        <h2 className="section-title">
          Things <em>I've built.</em>
        </h2>
        <div className="projects-grid">
          {[
            {
              icon: "🧠",
              title: "Notitia AI",
              desc: "K-12 tutoring platform for Texas educators. Built with TEKS/STAAR alignment and Claude API integration. Covers lesson planning, student Q&A, and curriculum scaffolding.",
              stack: [
                ["Claude API", "accent"],
                ["React", "blue"],
                ["TypeScript", "blue"],
                ["Node.js", "muted"],
              ],
            },
            {
              icon: "📚",
              title: "Courseware Cloud",
              desc: "Centralised academic resource management platform for universities. Role-based access for students, lecturers, HODs, and admins. Built at Devantics.",
              stack: [
                ["React", "blue"],
                ["TypeScript", "blue"],
                ["Vite", "accent"],
                ["Tailwind", "muted"],
              ],
            },
            {
              icon: "🏋️",
              title: "Fit Flex GMS",
              desc: "Gym Management System designed with full UML suite — Use Case, Class, Activity, and Sequence diagrams — for the CN4016 Modelling & Design module.",
              stack: [
                ["UML", "orange"],
                ["Systems Design", "muted"],
                ["PlantUML", "accent"],
              ],
            },
            {
              icon: "🎟️",
              title: "Club Event Booking System",
              desc: "University Club Event Booking System modelled with complete UML diagrams. Covers member registration, event creation, booking flows, and admin management.",
              stack: [
                ["UML", "orange"],
                ["Sequence Diagrams", "muted"],
                ["Activity Flow", "muted"],
              ],
            },
          ].map((p) => (
            <a key={p.title} className="project-card" href="#" onClick={(e) => e.preventDefault()}>
              <div className="project-header">
                <div className="project-icon">{p.icon}</div>
                <div className="project-arrow">↗</div>
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-stack">
                {p.stack.map(([label, variant]) => (
                  <span key={label} className={`stack-tag stack-${variant}`}>
                    {label}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="reveal">
        <div className="section-label">// 04 — experience</div>
        <h2 className="section-title">
          Where <em>I've worked.</em>
        </h2>
        <div className="timeline">
          {[
            {
              period: "2023 — Present",
              role: "Co-Staff Developer",
              org: "Devantics",
              desc: 'Building full-stack products including Courseware Cloud — a role-based academic resource management platform. Working alongside the PM ("Lightning Lad") to deliver features on the React + TypeScript frontend and Node.js backend.',
            },
            {
              period: "2025 — Present",
              role: "Developer (Co-founder)",
              org: "Notitia AI",
              desc: "Developer counterpart to Tomiwa's product strategy. Responsible for Claude API integration, backend architecture, and TEKS/STAAR curriculum alignment tooling for K-12 Texas educators.",
            },
            {
              period: "2022 — 2023",
              role: "IT Manager",
              org: "Chrisdorn Solutions",
              desc: "Managed IT infrastructure and systems. Gained hands-on experience in network administration, hardware support, and internal tooling.",
            },
            {
              period: "Sep 2025 — Present",
              role: "International Year One — Computer Science",
              org: "Malvern House / University of East London",
              desc: "BSc (Hons) Computer Science pathway. Modules include CN4016 Modelling & Designing Information Systems. Python PCEP™ certified (2024).",
            },
          ].map((t) => (
            <div key={t.role + t.org} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-period">{t.period}</div>
              <div className="timeline-role">{t.role}</div>
              <div className="timeline-org">{t.org}</div>
              <div className="timeline-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="reveal">
        <div className="section-label">// 05 — contact</div>
        <h2 className="section-title">
          Let's <em>talk.</em>
        </h2>
        <p className="contact-blurb">
          Open to internships, freelance projects, and collaborations. Whether you're building
          something interesting or just want to connect — my inbox is open.
        </p>
        <div className="contact-links">
          <a href="mailto:emmanueloladimeji435@gmail.com" className="btn-primary">
            Send an Email →
          </a>
          <a
            href="https://github.com/overgearedmonarch"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/overgearedmonarch"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <div>© 2026 Emmanuel Oladimeji Oladipupo</div>
        <div>Built with care — no frameworks needed</div>
      </footer>
    </div>
  );
}
