'use client';
import React, { useState } from 'react';
import { GiNoodles } from 'react-icons/gi';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#f6f5ef] text-[#111] px-8 sm:px-12 lg:px-24 py-6 border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <GiNoodles className="text-3xl text-black" />
          <span className="text-2xl font-extrabold tracking-tight">noodly</span>
        </div>

        {/* Center: Navigation (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/get-started">
            <span className="hover:underline cursor-pointer">GET STARTED ▾</span>
          </Link>
          <Link href="/community">
            <span className="hover:underline cursor-pointer">COMMUNITY ▾</span>
          </Link>
          <Link href="/blog">
            <span className="font-semibold underline underline-offset-4 decoration-2 decoration-yellow-500">BLOG</span>
          </Link>
          <Link href="/docs">
            <span className="hover:underline cursor-pointer">DOCS</span>
          </Link>
        </nav>

        {/* Right: Icons + Button (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <FaGithub className="text-xl hover:text-blue-500 transition" />
          <FaDiscord className="text-xl hover:text-indigo-400 transition" />
          <a href="#" className="bg-black text-white px-3 py-1 rounded">
            Encore Cloud →
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm">
          <nav className="flex flex-col gap-2">
            <span className="hover:underline cursor-pointer">GET STARTED ▾</span>
            <span className="hover:underline cursor-pointer">COMMUNITY ▾</span>
            <span className="font-semibold underline underline-offset-4 decoration-2 decoration-yellow-500">BLOG</span>
            <span className="hover:underline cursor-pointer">DOCS</span>
          </nav>
          <div className="flex items-center gap-4 text-lg mt-2">
            <FaGithub className="hover:text-blue-500" />
            <FaDiscord className="hover:text-indigo-400" />
            <a href="#" className="bg-black text-white px-3 py-1 rounded text-sm">
              Noodly Cloud →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
