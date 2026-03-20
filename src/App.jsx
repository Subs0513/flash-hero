import React, { useState } from "react";
import { Mail, Cpu, Globe, Briefcase, Sparkles, Database, University, Bot, Layers, Workflow, CircuitBoard, ExternalLink } from "lucide-react";

export default function FlashHeroWebsite() {
  const [page, setPage] = useState("home");
  const [contactForm, setContactForm] = useState({ name: "", company: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const scholarshipLink = "https://www.sydney.edu.au/scholarships/b/flash-hero-scholarship.html";

  const navItems = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "services", label: "Services" },
    { key: "projects", label: "Projects" },
    { key: "partners", label: "Partners" },
    { key: "contact", label: "Contact" },
  ];

  const services = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Software Development",
      description:
        "We build practical AI-powered tools that actually solve business problems — from automation to smarter workflows and data-driven systems.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Agent Development",
      description:
        "We design and deploy AI agents that can handle real tasks — customer support, internal operations, and workflow automation.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Business Systems & Platforms",
      description:
        "From internal systems to client-facing platforms, we build software that helps businesses run smoother and scale faster.",
    },
  ];

  const projects = [
    {
      title: "FlashHero App (On-demand Service Platform)",
      text: "A real-world service app designed for on-demand tasks and errands. Focused on user experience, order flow, and operational practicality.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "AlphaNest Office System",
      text: "An internal system built to help companies manage workflows, operations, and team coordination more efficiently.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      title: "VZ Boutique Transaction System",
      text: "A system designed to support transactions, orders, and business operations in a retail-style environment.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    },
  ];

  const companyHighlights = [
    { icon: <Sparkles className="h-5 w-5" />, label: "Focus", value: "AI Software & AI Agents" },
    { icon: <Briefcase className="h-5 w-5" />, label: "ABN", value: "89 647 657 190" },
    { icon: <Database className="h-5 w-5" />, label: "ACN", value: "647 657 190" },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${contactForm.name}`);
    const body = encodeURIComponent(`${contactForm.message}`);
    window.location.href = `mailto:jiliu1020@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const HomePage = () => (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
          alt="AI technology background"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.35),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.28),transparent_30%),linear-gradient(135deg,rgba(2,6,23,0.95),rgba(15,23,42,0.88))]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center lg:py-32">
        <div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-sky-200 backdrop-blur">
            AI Software • AI Agents • Business Systems
          </div>
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl md:leading-[1.05]">
            Build smarter digital products with <span className="text-sky-400">Flash Hero</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We help businesses turn ideas into working software — from AI tools and AI agents to internal systems, transaction platforms, and tailored digital products.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => setPage("services")} className="rounded-2xl bg-sky-500 px-6 py-3.5 font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">Explore Services</button>
            <button onClick={() => setPage("projects")} className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 font-medium text-white backdrop-blur transition hover:bg-white/10">View Projects</button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {companyHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sky-300">
                  {item.icon}
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-300">{item.label}</div>
                </div>
                <div className="mt-3 text-sm font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:pl-10">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="Team working with technology"
              className="h-72 w-full object-cover"
            />
            <div className="grid gap-4 p-6 md:grid-cols-3">
              <div>
                <div className="text-sm text-slate-400">What we build</div>
                <div className="mt-2 text-lg font-semibold">Practical software for real business use</div>
              </div>
              <div>
                <div className="text-sm text-slate-400">Specialty</div>
                <div className="mt-2 text-lg font-semibold">AI products and AI agent workflows</div>
              </div>
              <div>
                <div className="text-sm text-slate-400">Experience</div>
                <div className="mt-2 text-lg font-semibold">Commercial systems and research collaboration</div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-xl backdrop-blur">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" alt="Digital network" className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="text-sm text-sky-300">AI-ready delivery</div>
                <div className="mt-2 text-base font-semibold">Modern architecture, clean UX, scalable systems</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-xl backdrop-blur">
              <img src="https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1200&q=80" alt="Futuristic interface" className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="text-sm text-sky-300">Business-focused</div>
                <div className="mt-2 text-base font-semibold">Software designed to support growth and efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const AboutPage = () => (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1800&q=80" alt="About Flash Hero background" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 to-slate-900/90" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold">About Flash Hero</h2>
          <p className="mt-6 text-lg text-slate-300 leading-8">
            Flash Hero Pty Ltd is a Sydney-based software company focused on building practical digital products. We’re not about over-complicated tech — we build systems that actually get used.
          </p>
          <p className="mt-4 text-lg text-slate-300 leading-8">
            Over the years, we’ve delivered real-world platforms including service apps, internal business systems, and transaction solutions. Today, we’re focused on helping companies adopt AI — especially through custom AI tools and AI agents that can automate real work.
          </p>
          <p className="mt-4 text-lg text-slate-300 leading-8">
            Whether it's building something from scratch or improving an existing system, we work closely with clients to turn ideas into reliable, scalable products.
          </p>
        </div>

        <div className="grid gap-6">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" alt="Office collaboration" className="rounded-2xl object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80" alt="Team discussion" className="rounded-2xl object-cover h-64 w-full" />
        </div>
      </div>
    </section>
  );

  const ServicesPage = () => (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80" alt="technology chips background" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 to-slate-900/95" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold md:text-4xl">What We Do</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          We combine product thinking, software engineering, and AI capability to help businesses launch useful systems that people actually want to use.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, idx) => {
            const images = [
              "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
            ];
            return (
              <div key={s.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl backdrop-blur">
                <img src={images[idx]} alt={s.title} className="h-52 w-full object-cover" />
                <div className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300">
                    {s.icon}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  const ProjectsPage = () => (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Selected Work</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Here are some examples of products and systems we’ve worked on — from customer-facing platforms to internal tools and retail transaction workflows.
        </p>
        <div className="mt-12 space-y-8">
          {projects.map((p, idx) => (
            <div key={p.title} className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm md:grid-cols-2">
              <img src={p.image} className={`h-full min-h-[280px] w-full object-cover ${idx % 2 === 1 ? "md:order-2" : ""}`} alt={p.title} />
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="inline-flex w-fit rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">Case Study</div>
                <h3 className="mt-4 text-3xl font-bold text-slate-900">{p.title}</h3>
                <p className="mt-5 text-lg leading-8 text-slate-600">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const PartnersPage = () => (
    <section className="relative overflow-hidden bg-slate-900 px-6 py-20 text-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1800&q=80" alt="University campus" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/80" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold md:text-4xl">Partners & Collaboration</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          We value long-term collaboration and enjoy working with organisations that care about innovation, practical delivery, and strong technical execution.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <a
            href={scholarshipLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur transition duration-300 hover:border-sky-400/40 hover:bg-white/[0.07]"
          >
            <img
              src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1400&q=80"
              alt="University of Sydney collaboration"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <div className="p-8">
              <div className="flex items-center gap-3 text-sky-300">
                <University className="h-5 w-5" />
                Research Partner
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold group-hover:text-sky-300">
                  University of Sydney
                </h3>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1.5 text-sm font-medium text-sky-300 transition hover:bg-sky-500/20">
                  Visit page
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>

              <p className="mt-4 leading-8 text-slate-300 group-hover:text-slate-200">
                We have worked with the University of Sydney on research-related initiatives, supporting technical development and collaboration-driven innovation projects.
              </p>
            </div>
          </a>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-sky-300"><Layers className="h-5 w-5" /> Practical collaboration</div>
              <p className="mt-4 leading-7 text-slate-300">We enjoy partnerships where ideas can be turned into products, systems, or pilots with clear business value.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-sky-300"><Workflow className="h-5 w-5" /> Flexible engagement</div>
              <p className="mt-4 leading-7 text-slate-300">We can contribute through technical development, product support, or solution design depending on project needs.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-sky-300"><CircuitBoard className="h-5 w-5" /> Innovation mindset</div>
              <p className="mt-4 leading-7 text-slate-300">Our work combines practical delivery with a strong interest in emerging technologies, especially AI-driven solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1800&q=80" alt="Futuristic workspace" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 to-slate-900/90" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Let’s talk about your next project</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Whether you need a new platform, an internal business system, an AI feature, or a custom AI agent, we’d love to hear what you’re building.
          </p>
          <div className="mt-10 grid gap-4">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="Collaboration team" className="h-48 w-full object-cover" />
              <div className="p-5 text-slate-300">Tell us what you need, and we can explore the right solution together.</div>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Enquiry Box</div>
          <h3 className="mt-3 text-2xl font-bold">Start a conversation</h3>
          <form onSubmit={handleContactSubmit} className="mt-8 space-y-4">
            <input placeholder="Your Name" className="w-full rounded-2xl border border-slate-300 p-3" onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} />
            <input placeholder="Company" className="w-full rounded-2xl border border-slate-300 p-3" onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })} />
            <input placeholder="Email" className="w-full rounded-2xl border border-slate-300 p-3" onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} />
            <textarea placeholder="Message" rows={5} className="w-full rounded-2xl border border-slate-300 p-3" onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} />
            <button className="rounded-2xl bg-sky-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-sky-400">Send Enquiry</button>
            {submitted && <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm text-sky-700">Your enquiry has been prepared.</div>}
          </form>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    switch (page) {
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "projects":
        return <ProjectsPage />;
      case "partners":
        return <PartnersPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <button onClick={() => setPage("home")} className="text-left">
            <div className="text-xl font-bold tracking-tight text-white">FLASH HERO</div>
            <div className="text-sm text-slate-400">AI software company</div>
          </button>
          <div className="flex flex-wrap gap-2">
            {navItems.map((n) => (
              <button
                key={n.key}
                onClick={() => setPage(n.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${page === n.key ? "bg-sky-500 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      </header>
      {renderPage()}
    </div>
  );
}