import Link from 'next/link';
import Button from '../common/Button';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
];

export default function header() {
  return (
    <header className="bg-secondary-background shadow-lg rounded-2xl xl:w-5xl w-full flex justify-between items-center mx-auto p-4 absolute top-4 left-1/2 -translate-x-1/2 z-50">
      <Button variant="secondary">Elkady</Button>
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
    </header>
  );
}
