import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Source China", "#source-china"],
  ["Why Ensamico", "#why"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

const trust = [
  "Based in Shanghai",
  "Smart China-side business support",
  "Technology + talent + supplier network",
  "English & Chinese communication",
  "For startups, SMEs, importers & global businesses",
];

const aboutPoints = [
  "Based in Shanghai",
  "International business mindset",
  "Cross-cultural communication",
  "China market understanding",
  "Technology, talent & supplier network",
  "Practical execution support",
  "Flexible project or ongoing engagement",
];

const coreServices = [
  {
    id: "smart-business-solutions",
    n: "01",
    icon: "⌁",
    title: "Smart Business Solutions",
    desc: "Practical business support for international companies working with China, entering new markets, building partnerships, or improving cross-border operations.",
    bullets: ["China market support", "Business research", "Partnership development", "Cross-border coordination", "Local resource connection", "Business follow-up support"],
  },
  {
    id: "technology-digital-solutions",
    n: "02",
    icon: "◎",
    title: "Technology & Digital Solutions in China",
    desc: "Website development, custom software coordination, IT consulting, digital process support, and technology solutions for startups, SMEs, and international businesses.",
    bullets: ["Website & landing page development", "Custom software coordination", "IT consulting", "Digital workflow support", "Tech project management", "Digital business support"],
  },
  {
    id: "talent-hr-support",
    n: "03",
    icon: "▣",
    title: "Talent & HR Support",
    desc: "Cross-border HR, recruitment coordination, talent support, and team-building assistance for companies expanding internationally.",
    bullets: ["International recruitment support", "Overseas team coordination", "HR consulting", "Multilingual talent communication", "China-side hiring support", "Remote team support"],
  },
  {
    id: "outsourcing-project-support",
    n: "04",
    icon: "↗",
    title: "Outsourcing & Project Support",
    desc: "Flexible execution support for companies that need China-side help without building a full local team.",
    bullets: ["Project coordination", "Vendor communication", "Remote business support", "Admin & operational support", "Follow-up management", "Local coordination in China"],
  },
  {
    id: "exhibition-networking-support",
    n: "05",
    icon: "≡",
    title: "China Exhibition & Networking Support",
    desc: "Support for international companies attending exhibitions in China and looking to meet suppliers, distributors, importers, buyers, or strategic partners.",
    bullets: ["Exhibition preparation", "Meeting coordination", "On-site support in China", "Supplier or partner follow-up", "Lead organization", "Business development support"],
  },
];

const sourceChinaServices = [
  {
    id: "supplier-sourcing",
    letter: "A",
    title: "Supplier Sourcing & Shortlisting",
    desc: "Find suitable Chinese suppliers based on product, industry, quantity, target price, quality needs, and business requirements.",
  },
  {
    id: "supplier-verification",
    letter: "B",
    title: "Supplier Verification",
    desc: "Help check whether a supplier is a real manufacturer, trading company, or unreliable contact, with background checks and basic due diligence.",
  },
  {
    id: "quotation-comparison",
    letter: "C",
    title: "Quotation Comparison",
    desc: "Collect and compare quotations across suppliers, including price, MOQ, quality, delivery timeline, and payment terms.",
  },
  {
    id: "factory-visits",
    letter: "D",
    title: "Factory Visit Coordination",
    desc: "Arrange factory visits, supplier meetings, and on-site communication support in China.",
  },
  {
    id: "sample-coordination",
    letter: "E",
    title: "Sample Coordination",
    desc: "Support sample requests, follow-ups, supplier communication, and sample comparison before bulk orders.",
  },
  {
    id: "exhibition-sourcing-support",
    letter: "F",
    title: "Exhibition Sourcing Support",
    desc: "Prepare for China trade shows, meet exhibitors, collect supplier details, organize leads, and follow up after exhibitions.",
  },
  {
    id: "negotiation-communication-support",
    letter: "G",
    title: "Negotiation & Communication Support",
    desc: "Reduce communication gaps between overseas buyers and Chinese suppliers through clear communication and follow-up.",
  },
  {
    id: "china-buying-office",
    letter: "H",
    title: "China Buying Office Support",
    desc: "Monthly or project-based China-side support for regular supplier communication, sourcing follow-ups, quotation management, and local coordination.",
  },
];

const groups = [
  "Overseas buyers sourcing from China",
  "Importers and distributors",
  "Retailers and e-commerce sellers",
  "Startups and SMEs",
  "Companies attending China exhibitions",
  "International companies entering China",
  "Businesses needing China-side support",
  "Companies needing technology, talent, or suppliers",
  "Brands looking for overseas partners",
  "Procurement managers seeking supplier support",
];

const reasons = [
  "Shanghai-based with direct access to China's business, supplier, technology, and exhibition ecosystem",
  "Combines technology, talent, sourcing, and business support in one flexible company",
  "Source China division provides focused supplier and sourcing support",
  "Multilingual and cross-cultural communication ability",
  "Practical support for overseas companies without a local China team",
  "Flexible project-based or ongoing support",
  "Suitable for startups, SMEs, importers, retailers, and e-commerce sellers",
  "Modern, lean, execution-focused approach",
  "Strong understanding of both international clients and China-side communication",
];

const processSteps = [
  ["01", "Understand Your Goal", "We learn what you need: technology support, sourcing help, market entry, talent, exhibitions, supplier coordination, or business development."],
  ["02", "Create a Practical Plan", "We define the right approach, timeline, communication flow, and support model."],
  ["03", "Connect & Coordinate", "We communicate with suppliers, partners, service providers, candidates, project teams, or exhibition contacts."],
  ["04", "Execute & Follow Up", "We support meetings, quotations, samples, digital projects, documentation, supplier follow-up, or post-exhibition communication."],
  ["05", "Build Long-Term Support", "For ongoing needs, Ensamico can act as your China-side smart solutions partner."],
];
type ContactItem = {
  label: string;
  value: string;
  href?: string;
  wechatId?: string;
  qr?: string;
};
const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "contact@ensamico.com",
    href: "mailto:contact@ensamico.com",
  },
  {
    label: "Website",
    value: "ensamico.com",
    href: "https://ensamico.com",
  },
  {
    label: "Location",
    value: "Shanghai, CN",
    href: "",
  },

  {
    label: "LinkedIn | Ensamico",
    value: "@ensamico",
    href: "https://www.linkedin.com/company/ensamico",
  },
  {
    label: "Instagram | Ensamico",
    value: "@ensamico",
    href: "https://www.instagram.com/ensamico/",
  },
  {
    label: "WhatsApp | Ensamico",
    value: "@ensamico",
    href: "https://wa.me/8617717557151",
  },
  {
    label: "WeChat | Ensamico",
    value: "@ensami_co",
    href: "",
    wechatId: "ensami_co",
    qr: "/ensamico-wechat-qr.png",
  },
  {
    label: "Phone | Ensamico",
    value: "+86 177 1755 7151",
    href: "tel:+8617717557151",
  },

  {
    label: "LinkedIn | Source China",
    value: "@source.china",
    href: "https://www.linkedin.com/company/source-cn",
  },
  {
    label: "Instagram | Source China",
    value: "@source.china",
    href: "https://www.instagram.com/source.china/",
  },
  {
    label: "WhatsApp | Source China",
    value: "@source.china",
    href: "https://wa.me/8618017270669",
  },
  {
    label: "WeChat | Source China",
    value: "@source_cn",
    href: "",
    wechatId: "source_cn",
    qr: "/source-china-wechat-qr.png",
  },
  {
    label: "Phone | Source China",
    value: "+86 180 1727 0669",
    href: "tel:+8618017270669",
  },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
    <a className="logo" href="#top" aria-label="Ensamico home">
  <img src="/ensamico-logo.png" alt="Ensamico logo" className="logo-img" />
</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="nav-actions">
  <details className="language-switcher">
  <summary>🌐 EN</summary>

  <div className="language-menu">
    <a href="#top">English</a>

    <a
      href="https://translate.google.com/translate?sl=en&tl=zh-CN&u=https%3A%2F%2Fensamico.com%2F"
      target="_blank"
      rel="noreferrer"
    >
      中文
    </a>

    <a
      href="https://translate.google.com/translate?sl=en&tl=ar&u=https%3A%2F%2Fensamico.com%2F"
      target="_blank"
      rel="noreferrer"
    >
      العربية
    </a>

    <a
      href="https://translate.google.com/translate?sl=en&tl=ur&u=https%3A%2F%2Fensamico.com%2F"
      target="_blank"
      rel="noreferrer"
    >
      اردو
    </a>

    <a
      href="https://translate.google.com/translate?sl=en&tl=tr&u=https%3A%2F%2Fensamico.com%2F"
      target="_blank"
      rel="noreferrer"
    >
      Türkçe
    </a>

    <a
      href="https://translate.google.com/translate?sl=en&tl=ru&u=https%3A%2F%2Fensamico.com%2F"
      target="_blank"
      rel="noreferrer"
    >
      Русский
    </a>

    <a
      href="https://translate.google.com/translate?sl=en&tl=es&u=https%3A%2F%2Fensamico.com%2F"
      target="_blank"
      rel="noreferrer"
    >
      Español
    </a>

    <a
      href="https://translate.google.com/translate?sl=en&tl=hi&u=https%3A%2F%2Fensamico.com%2F"
      target="_blank"
      rel="noreferrer"
    >
      हिन्दी
    </a>
  </div>
</details>

  <a className="nav-cta" href="#contact">
    Book a Consultation <span>→</span>
  </a>
</div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow"><span /> Shanghai · Smart Solutions Company</p>
        <h1>Connecting Technology, Talent, <em>Suppliers</em> & Global Markets</h1>
        <p className="hero-subtitle">
  Ensamico helps international businesses work with China through China sourcing support, supplier verification, technology solutions, talent support, exhibition coordination, and cross-border business development — all from Shanghai.
</p>
        <div className="button-row">
          <a className="btn primary" href="#contact">Start a Conversation <span>→</span></a>
          <a className="btn secondary" href="#services">Explore Services</a>
        </div>
        <ul className="trust-list">
          {trust.map((item) => <li key={item}>✓ {item}</li>)}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section border-top">
      <div className="container split">
        <div>
          <p className="eyebrow">About Ensamico</p>
          <h2>Smart China-side support for businesses working across borders</h2>
        </div>
        <div>
          <p className="lead">
            Ensamico helps overseas businesses, SMEs, importers, retailers, e-commerce sellers, and growing companies connect with China more smoothly. From digital solutions and business consulting to supplier coordination, talent support, and exhibition networking, we act as a practical China-side smart solutions partner.
          </p>
          <p>
            Built from real experience in international business, HR operations, technology services, trade exhibitions, supplier communication, and China-side project coordination.
          </p>
          <ul className="check-grid">
            {aboutPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section alt border-top">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Core Services</p>
          <h2>Smart solutions across technology, talent, sourcing, and business support</h2>
        </div>
        <div className="service-grid">
          {coreServices.map((service) => (
            <article id={service.id} className="card service-card" key={service.id}>
              <div className="card-top"><span className="service-icon">{service.icon}</span><span className="number">{service.n}</span></div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul>
                {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SourceChina() {
  return (
    <section id="source-china" className="section dark-section border-top">
      <div className="container">
        <div className="split source-intro">
          <div>
            <p className="eyebrow light">Source China by Ensamico</p>
            <h2>Your China-side sourcing and <em>supplier support</em> partner</h2>
          </div>
          <div>
            <p>
              Source China helps overseas buyers, importers, retailers, e-commerce sellers, and SMEs source from China with more confidence. It is the dedicated sourcing division of Ensamico.
            </p>
            <p className="small-light">
              Too many suppliers but not enough trust. Unclear factory vs trading company differences. Communication gaps. Risky payments. Difficult quotation comparisons. No local person to visit factories or follow up after exhibitions. Source China solves these problems practically, on the ground.
            </p>
          </div>
        </div>
        <div className="source-grid">
          {sourceChinaServices.map((service) => (
  <article id={service.id} className="source-card" key={service.id}>
    <div>
      <span>{service.letter}</span>
      <h3>{service.title}</h3>
    </div>
    <p>{service.desc}</p>
  </article>
))}
        </div>
        <a className="btn white" href="#contact">Need help sourcing from China? Talk to Source China <span>→</span></a>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  return (
    <section className="section border-top">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Who We Help</p>
          <h2>Built for global businesses working with China</h2>
        </div>
        <div className="people-grid">
          {groups.map((group, index) => (
            <div className="person-row" key={group}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{group}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyEnsamico() {
  return (
    <section id="why" className="section alt border-top">
      <div className="container split">
        <div>
          <p className="eyebrow">Why Ensamico</p>
          <h2>Why work with Ensamico?</h2>
          <p>A single partner across the parts of China that overseas businesses usually need to coordinate separately.</p>
        </div>
        <div className="reason-grid">
          {reasons.map((reason, index) => (
            <article className="reason-card" key={reason}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section border-top">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">How We Work</p>
          <h2>A clear five-step process</h2>
        </div>
        <ol className="process-grid">
          {processSteps.map(([n, title, desc]) => (
            <li key={title}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ExhibitionBanner() {
  return (
    <section className="section border-top banner-section">
      <div className="container">
        <div className="banner">
          <div>
            <p className="eyebrow light">Featured Service</p>
            <h2>Planning to attend an exhibition in China?</h2>
            <p>
              Ensamico can support international visitors and exhibitors before, during, and after trade shows in China. From supplier shortlisting and meeting coordination to translation, follow-up, and business development, we help you make every exhibition visit more productive.
            </p>
          </div>
          <a className="btn white" href="#contact">Prepare for Your Next China Exhibition <span>→</span></a>
        </div>
      </div>
    </section>
  );
}
const faqs = [
  {
    q: "What does Ensamico help with?",
    a: "Ensamico helps global businesses work with China through sourcing support, supplier verification, exhibition support, technology solutions, talent support, and cross-border business coordination."
  },
  {
    q: "Can Ensamico help me find suppliers in China?",
    a: "Yes. Through Source China by Ensamico, we help overseas buyers shortlist suppliers, compare quotations, coordinate samples, arrange factory visits, and manage supplier communication."
  },
  {
    q: "Can Ensamico verify Chinese suppliers?",
    a: "Yes. We support basic supplier verification, background checks, manufacturer versus trading company checks, and communication follow-up before buyers make sourcing decisions."
  },
  {
    q: "Does Ensamico support trade shows in China?",
    a: "Yes. Ensamico supports international visitors and exhibitors before, during, and after China trade shows, including supplier shortlisting, meeting coordination, lead organization, and post-exhibition follow-up."
  },
  {
    q: "Where is Ensamico based?",
    a: "Ensamico is based in Shanghai, China, and supports international businesses working with Chinese suppliers, partners, service providers, and local business networks."
  }
];
function FAQ() {
  return (
    <section id="faq" className="section border-top">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions about working with Ensamico</h2>
        </div>

        <div className="faq-grid">
          {faqs.map((item) => (
            <article className="card faq-card" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [wechatModal, setWechatModal] = React.useState<{
    label: string;
    wechatId: string;
    qr: string;
  } | null>(null);

  const openWechatContact = (label: string, wechatId: string, qr: string) => {
    window.location.href = `weixin://dl/chat?username=${wechatId}`;

    setTimeout(() => {
      setWechatModal({
        label,
        wechatId,
        qr,
      });
    }, 1200);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = encodeURIComponent(String(form.get("name") || ""));
    const company = encodeURIComponent(String(form.get("company") || ""));
    const email = encodeURIComponent(String(form.get("email") || ""));
    const topic = encodeURIComponent(String(form.get("topic") || ""));
    const message = encodeURIComponent(String(form.get("message") || ""));

    const body = `Name: ${name}%0ACompany: ${company}%0AEmail: ${email}%0ATopic: ${topic}%0A%0AMessage:%0A${message}`;

    window.location.href = `mailto:contact@ensamico.com?subject=New%20Ensamico%20Website%20Inquiry&body=${body}`;
  };

  return (
    <section id="contact" className="section alt border-top">
      <div className="container split">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's build your China connection</h2>
          <p>
            Tell us what you are working on — sourcing, suppliers, technology,
            market entry, talent, exhibitions, or cross-border business support.
            Ensamico will help you understand the best next step.
          </p>

          <dl className="contact-list">
            {contacts.map((contact) => (
              <div key={contact.label}>
                <dt>{contact.label}</dt>
                <dd>
                  {contact.wechatId && contact.qr ? (
                    <button
                      type="button"
                      className="contact-link-button"
                      onClick={() =>
                        openWechatContact(contact.label, contact.wechatId!, contact.qr!)
                      }
                    >
                      {contact.value}
                    </button>
                  ) : contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    contact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Name
              <input name="name" required />
            </label>

            <label>
              Company
              <input name="company" />
            </label>

            <label>
              Email
              <input name="email" type="email" required />
            </label>

            <label>
              WhatsApp / WeChat
              <input name="messenger" />
            </label>
          </div>

          <label>
            What do you need help with?
            <select name="topic">
              <option>Smart Business Solutions</option>
              <option>Technology & Digital Solutions</option>
              <option>Talent & HR Support</option>
              <option>Outsourcing & Project Support</option>
              <option>Exhibition & Networking Support</option>
              <option>Source China — Sourcing / Suppliers</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows={5}></textarea>
          </label>

          <div className="form-actions">
            <button className="btn primary" type="submit">
              Send Message <span>→</span>
            </button>

            <a href="mailto:contact@ensamico.com">or email us directly</a>
          </div>

          <p className="form-note">
  For now, this form opens your email app. Direct website submissions will be
  added later.
</p>
        </form>
      </div>

      {wechatModal && (
        <div className="wechat-mask" onClick={() => setWechatModal(null)}>
          <div className="wechat-modal" onClick={(event) => event.stopPropagation()}>
            <img src={wechatModal.qr} alt={`${wechatModal.label} QR code`} />

            <p className="wechat-title">Scan to add us on WeChat</p>

            <p className="wechat-id">
              WeChat ID: <strong>{wechatModal.wechatId}</strong>
            </p>

            <button
              type="button"
              className="wechat-close"
              onClick={() => setWechatModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer border-top">
      <div className="container footer-grid">
        <div>
          <a className="logo" href="#top" aria-label="Ensamico home">
            <img src="/ensamico-logo.png" alt="Ensamico logo" className="footer-logo-img" />
          </a>

          <p>
            A Shanghai-based smart solutions company connecting global businesses with China through technology, talent, sourcing, and cross-border support.
          </p>

          <small>Shanghai, China · contact@ensamico.com</small>
        </div>

        <div>
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#smart-business-solutions">Smart Business Solutions</a></li>
            <li><a href="#technology-digital-solutions">Technology & Digital</a></li>
            <li><a href="#talent-hr-support">Talent & HR Support</a></li>
            <li><a href="#outsourcing-project-support">Outsourcing & Projects</a></li>
            <li><a href="#exhibition-networking-support">Exhibition & Networking</a></li>
          </ul>
        </div>

        <div>
          <h4>Source China by Ensamico</h4>
          <ul className="footer-links">
            <li><a href="#supplier-sourcing">Supplier Sourcing</a></li>
            <li><a href="#supplier-verification">Supplier Verification</a></li>
            <li><a href="#quotation-comparison">Quotation Comparison</a></li>
            <li><a href="#factory-visits">Factory Visits</a></li>
            <li><a href="#china-buying-office">China Buying Office</a></li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#why">Why Ensamico</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <small>© 2026 Ensamico. All rights reserved.</small>
        <small>Smart solutions for global businesses working with China.</small>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SourceChina />
        <WhoWeHelp />
        <WhyEnsamico />
        <Process />
        <ExhibitionBanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
