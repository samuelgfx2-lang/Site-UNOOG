/* oxlint-disable next/no-img-element */
import { BrandSymbol, OgMark, Wordmark } from '@/components/brand-mark';
import { ContactLinks } from '@/components/contact-links';
import { CustomCursor } from '@/components/custom-cursor';
import { Header } from '@/components/header';
import { InteractiveCharacter } from '@/components/interactive-character';
import { ProjectGrid } from '@/components/project-grid';
import { RepelTitle } from '@/components/repel-title';
import { ThoughtBreak } from '@/components/thought-break';
import { capabilities, experience, profile, tools, visualLab, workflow } from '@/data/profile';

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
        <p className="hero-kicker">UNOOG® / SÃO PAULO — BRAZIL</p>
        <div className="availability-badge"><span aria-hidden="true" /><strong>AVAILABLE FOR NEW PROJECTS</strong></div>
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
          <RepelTitle />
          <div className="section-side"><p>IDENTITY FIRST.<br />PROJECTS SECOND.<br />INTERFACE THIRD.</p><InteractiveCharacter className="work-character" src="/brand/characters/head-primary.svg" alt="" decorative /></div>
        </div>
        <ProjectGrid />
      </section>

      <ThoughtBreak />

      <section className="ribbon-stage" aria-label="Capabilities in motion">
        <p className="sr-only">Branding, visual identity, packaging, campaigns, 3D and illustration.</p>
        <div className="kinetic-ribbon ribbon-orange" aria-hidden="true">
          <div className="ribbon-track">
            <span>BRANDING ✱ VISUAL IDENTITY ✱ PACKAGING ✱ CAMPAIGNS ✱</span>
            <span>BRANDING ✱ VISUAL IDENTITY ✱ PACKAGING ✱ CAMPAIGNS ✱</span>
          </div>
        </div>
        <div className="kinetic-ribbon ribbon-blue" aria-hidden="true">
          <div className="ribbon-track">
            <span>ART DIRECTION ✱ DIGITAL DESIGN ✱ 3D &amp; MOTION ✱ ILLUSTRATION ✱</span>
            <span>ART DIRECTION ✱ DIGITAL DESIGN ✱ 3D &amp; MOTION ✱ ILLUSTRATION ✱</span>
          </div>
        </div>
        <BrandSymbol aria-hidden="true" />
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-label">
          <p>ABOUT / MANIFESTO</p>
          <p>São Paulo<br />Brazil</p>
        </div>
        <h2 id="about-title">ABOUT<br />UN*OG</h2>
        <BrandSymbol className="about-symbol" aria-hidden="true" />
        <InteractiveCharacter className="about-character" src="/brand/characters/head-light.svg" alt="UNOOG illustrated character" />
        <div className="about-copy">
          <div className="about-language about-language-pt" lang="pt-BR"><span>PT / BR</span>{profile.about.pt.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <div className="about-language about-language-en" lang="en"><span>EN / INTL</span>{profile.about.en.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        <p className="about-statement">CULTURE.<br />PERSONALITY.<br />RELEVANCE.</p>
      </section>

      <div className="motion-quote" aria-label="Design principle">
        <span>SHARP IDEAS</span><BrandSymbol aria-hidden="true" /><span>BUILT TO MOVE</span>
      </div>

      <section id="experience" className="experience-section" aria-labelledby="experience-title">
        <ol className="experience-list">
          {experience.map((item, index) => (
            <li key={item.company}>
              <span>0{index + 1}</span>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              <p className="experience-date">{item.date}</p>
            </li>
          ))}
        </ol>
        <div className="experience-intro">
          <p>EXPERIENCE / CONFIRMED ROLES</p>
          <h2 id="experience-title">MORE THAN<br />A DECADE<br />IN MOTION*</h2>
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <p key={capability}><span>{String(index + 1).padStart(2, '0')}</span>{capability}</p>
          ))}
        </div>
        <div className="capabilities-header">
          <p>CAPABILITIES &amp; TOOLS</p>
          <h2 id="capabilities-title">WHAT I<br />MAKE*</h2>
          <BrandSymbol aria-hidden="true" />
        </div>
        <div className="tools-list">
          <p>TOOLS — CONFIRMED</p>
          {tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <div className="systems-list">
          <p>SYSTEMS &amp; OPERATIONS</p>
          {workflow.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      {visualLab.length > 0 ? (
        <section className="visual-lab" aria-label="Visual Lab">VISUAL LAB*</section>
      ) : null}

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <p>NEW BUSINESS / COLLABORATIONS / CONVERSATIONS</p>
        <h2 id="contact-title">LET&apos;S MAKE<br />SOMETHING<br /><span>INTERESTING*</span></h2>
        <BrandSymbol aria-hidden="true" />
        <div className="contact-cta-panel">
          <div className="contact-panel-copy">
            <span>NEW PROJECT / 2026</span>
            <h3>LET&apos;S GET YOUR PROJECT OFF THE GROUND?</h3>
            <p>Tell me what you are building, where the brand needs to go and what would make the project a success.</p>
          </div>
          <div className="contact-panel-actions">
            <a href={`mailto:${profile.contact.email}?subject=Novo%20projeto%20—%20UNOOG`}>Send an email <span>↗</span></a>
            <a href={profile.contact.whatsapp} target="_blank" rel="noreferrer">Let&apos;s talk on WhatsApp <span>↗</span></a>
            <a href={profile.contact.behance} target="_blank" rel="noreferrer">Full portfolio <span>↗</span></a>
          </div>
          <a className="contact-panel-og" href="#top" aria-label="UNOOG — back to top"><OgMark /></a>
        </div>
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
