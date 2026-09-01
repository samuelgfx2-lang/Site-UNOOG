'use client';

import { useState } from 'react';

type ContactLinksProps = {
  email: string | null;
  behance: string;
  instagram: string;
  linkedin: string | null;
};

export function ContactLinks({ email, behance, instagram, linkedin }: ContactLinksProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="contact-links">
      <button type="button" onClick={copyEmail} disabled={!email} aria-live="polite">
        {email ? (copied ? 'Email copied*' : 'Copy email ↗') : 'Email — add in data'}
      </button>
      <a href={behance} target="_blank" rel="noreferrer">Behance ↗</a>
      <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
      {linkedin ? <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a> : null}
    </div>
  );
}
