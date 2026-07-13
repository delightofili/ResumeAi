"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Templates", href: "#templates" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = ["features", "how-it-works", "templates"];

    const observerOptions = {
      rootMargin: "-100px 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Only run logic when a section explicitly becomes active
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          setActiveSection(sectionId);

          // Only update history if the hash is actually changing to prevent spamming
          if (window.location.hash !== `#${sectionId}`) {
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Track the elements
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Cleanup both listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // restore scroll position on reload
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse-glow">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1L10 6H15L11 9.5L12.5 15L8 12L3.5 15L5 9.5L1 6H6L8 1Z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-[15px] tracking-tight">
            Del<span className="gradient-text">ResumeAI</span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-white bg-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* cta */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/builder"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/builder"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
          >
            Get started free
          </Link>
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-400 hover:text-white py-2 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/builder"
            className="mt-2 text-sm font-medium px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get started free
          </Link>
        </div>
      )}
    </nav>
  );
}
