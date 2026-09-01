import { BrandSymbol, Wordmark } from '@/components/brand-mark';
import { ContactLinks } from '@/components/contact-links';
import { CustomCursor } from '@/components/custom-cursor';
import { Header } from '@/components/header';
import { ProjectGrid } from '@/components/project-grid';
import { capabilities, experience, profile, tools, visualLab } from '@/data/profile';

export default function Home() {
  const currentYear = new Date().getFullYear();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: profile.moniker,
    jobTitle: profile.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressCountry: 'BR',
    },
    sameAs: [profile.contact.behance, profile.contact.instagram],
  };

  return (
    <main id="main-content">
      <CustomCursor />
      <a className="skip-link" href="#selected-work">Skip to selected work</a>
      <Header />

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-blue" aria-hidden="true" />
        <div className="hero-orange" aria-hidden="true" />
        <p className="hero-vertical hero-vertical-left">SAMUEL NOGUEIRA / MULTIDISCIPLINARY DESIGNER</p>
        <p className="hero-vertical hero-vertical-right">INDEPENDENT PRACTICE / SÃO PAULO / BRAZIL</p>
        <p className="hero-kicker">UNOOG® / SÃO PAULO — BRAZIL</p>
        <h1 id="hero-title" className="hero-title">
          <span>SAMUEL</span>
          <span>UN*OG</span>
        </h1>
        <BrandSymbol className="hero-symbol" title="UNOOG symbol" />
        <div className="hero-footer">
          <p>MULTIDISCIPLINARY<br />DESIGNER</p>
          <p>BRANDING / VISUAL IDENTITY / PACKAGING / CAMPAIGNS / 3D / ILLUSTRATION</p>
          <p>LET&apos;S MAKE<br />SOMETHING INTERESTING.</p>
        </div>
        <span className="scroll-cue" aria-hidden="true">SCROLL ↓</span>
      </section>

      <section id="selected-work" className="work-section" aria-labelledby="work-title">
        <div className="section-heading">
          <p>SELECTED WORK — NOW</p>
          <h2 id="work-title">SELECTED<br />WORK*</h2>
          <p>IDENTITY FIRST.<br />PROJECTS SECOND.<br />INTERFACE THIRD.</p>
        </div>
        <ProjectGrid />
      </section>

      <section className="ribbon-stage" aria-label="Capabilities in motion">
        <p className="sr-only">Branding, visual identity, packaging, campaigns, 3D and illustration.</p>
        <div className="kinetic-ribbon ribbon-orange" aria-hidden="true">
          <span>BRANDING ✱ VISUAL IDENTITY ✱ PACKAGING ✱ CAMPAIGNS ✱ BRANDING ✱ VISUAL IDENTITY ✱ PACKAGING ✱ CAMPAIGNS ✱</span>
        </div>
        <div className="kinetic-ribbon ribbon-blue" aria-hidden="true">
          <span>ART DIRECTION ✱ DIGITAL DESIGN ✱ 3D &amp; MOTION ✱ ILLUSTRATION ✱ ART DIRECTION ✱ DIGITAL DESIGN ✱ 3D &amp; MOTION ✱ ILLUSTRATION ✱</span>
        </div>
        <BrandSymbol aria-hidden="true" />
      </section>

      <section className="thought-break" aria-labelledby="thought-title">
        <p>CREATIVE PRINCIPLE / 01</p>
        <h2 id="thought-title">
          <span>MOVE IDEAS</span>
          <span><i>PAST</i> THE EXPECTED*</span>
        </h2>
        <p>Curiosity builds the distance between familiar and unforgettable.</p>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-label">
          <p>ABOUT / MANIFESTO</p>
          <p>São Paulo<br />Brazil</p>
        </div>
        <h2 id="about-title">ABOUT<br />UN*OG</h2>
        <BrandSymbol className="about-symbol" aria-hidden="true" />
        <div className="about-copy">
          {profile.about.pt.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <p className="about-statement">CULTURE.<br />PERSONALITY.<br />RELEVANCE.</p>
      </section>

      <div className="motion-quote" aria-label="Design principle">
        <span>SHARP IDEAS</span><BrandSymbol aria-hidden="true" /><span>BUILT TO MOVE</span>
      </div>

      <section id="experience" className="experience-section" aria-labelledby="experience-title">
        <div className="experience-intro">
          <p>EXPERIENCE / CONFIRMED ROLES</p>
          <h2 id="experience-title">MORE THAN<br />A DECADE<br />IN MOTION*</h2>
        </div>
        <ol className="experience-list">
          {experience.map((item, index) => (
            <li key={item.company}>
              <span>0{index + 1}</span>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              <p className="experience-date">DATES — TBC IN DATA</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="capabilities-header">
          <p>CAPABILITIES &amp; TOOLS</p>
          <h2 id="capabilities-title">WHAT I<br />MAKE*</h2>
          <BrandSymbol aria-hidden="true" />
        </div>
        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <p key={capability}><span>{String(index + 1).padStart(2, '0')}</span>{capability}</p>
          ))}
        </div>
        <div className="tools-list">
          <p>TOOLS — CONFIRMED</p>
          {tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>

      {visualLab.length > 0 ? (
        <section className="visual-lab" aria-label="Visual Lab">VISUAL LAB*</section>
      ) : null}

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <p>NEW BUSINESS / COLLABORATIONS / CONVERSATIONS</p>
        <h2 id="contact-title">LET&apos;S MAKE<br />SOMETHING<br /><span>INTERESTING*</span></h2>
        <BrandSymbol aria-hidden="true" />
        <ContactLinks
          email={profile.contact.email}
          behance={profile.contact.behance}
          instagram={profile.contact.instagram}
          linkedin={profile.contact.linkedin}
        />
      </section>

      <footer className="site-footer">
        <Wordmark title="UNOOG" />
        <p>UN*OG — SAMUEL NOGUEIRA<br />MULTIDISCIPLINARY DESIGNER</p>
        <p>SÃO PAULO — BRAZIL<br />© {currentYear}</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
    </main>
  );
}
