"use client";

import Image from "next/image";

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at center 35%, #1B3A7A 0%, #0D1B3E 70%)",
      }}
    >
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 circuit-pattern circuit-lines opacity-40" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-green-brand/8 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-navy-light/15 rounded-full blur-[130px] animate-float" />
      <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] bg-green-brand/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-[90px] pb-24 sm:pb-32">
        {/* Logo with glow background */}
        <div className="mb-5 animate-fade-in-up">
          <div className="relative inline-block group">
            <Image
              src="/Logo-sin-texto.png"
              alt="Dual Code Solutions Logo Principal"
              width={400}
              height={400}
              className="mx-auto h-[180px] sm:h-[240px] lg:h-[300px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1
          className="font-montserrat font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] mb-5 animate-fade-in-up leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          style={{ animationDelay: "0.2s" }}
        >
          Dual Code Solutions
        </h1>

        {/* Decorative line */}
        <div
          className="w-24 h-1 bg-gradient-to-r from-green-brand to-green-brand/40 mx-auto mb-6 rounded-full animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        />

        {/* Slogan */}
        <p
          className="font-inter text-white/75 text-lg sm:text-xl lg:text-2xl max-w-[700px] mx-auto mb-12 animate-fade-in-up leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          Transformamos tus ideas en soluciones digitales escalables que impulsan
          tu negocio.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#servicios"
            onClick={(e) => handleScroll(e, "#servicios")}
            className="bg-green-brand hover:bg-green-hover text-white font-montserrat font-bold text-base px-10 py-4.5 rounded-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(60,181,74,0.4)] inline-flex items-center justify-center gap-2.5"
          >
            Ver nuestros servicios
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleScroll(e, "#contacto")}
            className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70 font-montserrat font-bold text-base px-10 py-4.5 rounded-xl transition-all duration-300 hover:scale-[1.04] inline-flex items-center justify-center backdrop-blur-sm"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#servicios"
        onClick={(e) => handleScroll(e, "#servicios")}
        className="absolute bottom-10 left-1/2 animate-bounce-arrow"
        aria-label="Scroll down"
      >
        <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white/60 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </a>
    </section>
  );
}
