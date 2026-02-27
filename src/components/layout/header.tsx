'use client'; // Required for useState

import Link from 'next/link';
import { useState } from 'react';
import Button from '../common/Button';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary-background shadow-lg rounded-2xl xl:w-5xl w-[95%] flex flex-col lg:flex-row justify-between items-center mx-auto p-4 absolute top-4 left-1/2 -translate-x-1/2 z-50 gap-4 lg:gap-0">
      {/* Top Section: Logo, Resume (Desktop), and Hamburger */}
      <div className="flex justify-between items-center w-full">
        <Button variant="secondary">Elkady</Button>

        {/* Desktop Navigation & Resume (Visible on Large Screens) */}
        <div className="hidden lg:flex items-center gap-x-8">
          <nav>
            <ul className="flex items-center justify-center gap-x-8 text-xl text-gray-500">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} aria-label={link.label}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button>My resume</Button>
        </div>

        {/* Hamburger Button (Visible on Mobile/Tablet) */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation (Visible when toggled) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center w-full gap-4 pb-2">
          <nav className="w-full">
            <ul className="flex flex-col items-center justify-center gap-y-4 text-lg text-gray-500">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button>My resume</Button>
        </div>
      )}
    </header>
  );
}
