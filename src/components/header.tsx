'use client';
import Link from 'next/link';
import Image from 'next/image';

import { NavLink } from 'src/components/atoms';
import ThemeToggle from 'src/components/toggle';
import avatar from 'public/images/the-avatar.png';

import { ROUTES } from './rotes';

export default function Header() {
  return (
    <header className="container m-auto h-32 max-w-screen-lg overflow-hidden px-5 sm:px-12 md:px-20">
      <nav className="mt-auto flex h-full items-center justify-start space-x-6 text-sm md:justify-start">
        <Link
          href="/"
          aria-label="Website logo"
          className="flex items-center border-white focus-visible:outline-accent"
        >
          <div className="mr-10 h-12 w-12 overflow-hidden rounded-full border-2 transition-transform ease-in-out group-hover:-translate-y-1 hover:-translate-y-1">
            <Image src={avatar} alt="My avatar" width={41} height={40} />
          </div>
        </Link>

        <div className="hidden flex-grow items-center space-x-6 sm:flex">
          {ROUTES.map((route) => (
            <NavLink key={route.path} to={route.path} title={route.label} />
          ))}
        </div>

        <ThemeToggle className="mt-1 hidden transition-transform ease-in-out hover:-translate-y-1 hover:text-accent focus:outline-none focus-visible:outline-accent sm:block" />
      </nav>
    </header>
  );
}
