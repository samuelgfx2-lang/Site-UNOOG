'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Wordmark } from '@/components/brand-mark';

const links = [
  { href: '#selected-work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusable = () => Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
    );
    const items = focusable();
    items[0]?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
        return;
      }
      if (event.key !== 'Tab') return;
      const currentItems = focusable();
      const first = currentItems[0];
      const last = currentItems[currentItems.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <header className="site-header">
      <a href="#top" className="header-brand" aria-label="UNOOG — back to top">
        <Wordmark className="h-7 w-auto" />
        <span>SAMUEL NOGUEIRA — MULTIDISCIPLINARY DESIGNER</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
      </nav>

      <button
        ref={triggerRef}
        className="mobile-menu-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
      >
        Menu +
      </button>

      {open ? (
        <div className="mobile-menu-layer">
          <dialog
            open
            id="mobile-navigation"
            ref={menuRef}
            className="mobile-menu"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <p id="mobile-menu-title" className="mobile-menu-label">UN*OG / INDEX</p>
            <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
              <X aria-hidden="true" />
            </button>
            <nav aria-label="Mobile navigation">
              {links.map((link, index) => (
                <a href={link.href} key={link.href} onClick={closeMenu}>
                  <span>0{index + 1}</span>{link.label}
                </a>
              ))}
            </nav>
            <p className="mobile-menu-location">SÃO PAULO — BRAZIL</p>
          </dialog>
        </div>
      ) : null}
    </header>
  );
}
