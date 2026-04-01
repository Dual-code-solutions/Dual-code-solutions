"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "bg-navy/90 backdrop-blur-md"
      }`}
      style={{ height: "100px" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
        {/* Logo + Name */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="flex items-center gap-3 shrink-0 group"
        >
          <Image
            src="/logo-dual-code.png"
            alt="Dual Code Solutions"
            width={120}
            height={120}
            className="h-[60px] sm:h-[75px] w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-transform group-hover:scale-105"
          />
          <span className="font-montserrat font-bold text-white text-xl hidden sm:block drop-shadow-sm">
            Dual Code Solutions
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-montserrat text-white/80 hover:text-white text-[14px] font-medium transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-brand transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
            className="ml-3 bg-green-brand hover:bg-green-hover text-white font-montserrat font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_4px_15px_rgba(60,181,74,0.4)]"
          >
            ¡Cotiza tu proyecto!
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-[100px] left-0 w-full bg-navy/98 backdrop-blur-xl shadow-xl transition-all duration-300 overflow-hidden border-t border-white/5 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-montserrat text-white/80 hover:text-white py-3.5 text-base font-medium border-b border-white/8 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
            className="mt-5 bg-green-brand hover:bg-green-hover text-white font-montserrat font-bold text-center py-3.5 rounded-xl transition-all duration-200"
          >
            ¡Cotiza tu proyecto!
          </a>
        </div>
      </div>
    </nav>
  );
}
