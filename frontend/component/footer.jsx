'use client';
import React from 'react';
import { GiNoodles } from 'react-icons/gi';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white px-8 sm:px-12 lg:px-24 py-10">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <GiNoodles className="text-2xl text-white" />
          <span className="text-xl font-bold text-white">noodly</span>
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} noodly. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
