"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    id: "sublegados",
    logo: "/portfolio/sublegados-logo.png",
    label: "Proyecto de Desarrollo Integral",
    type: "Sistema Web",
    title: "SubLegados Tours",
    description:
      "Plataforma digital integral diseñada para formalizar el turismo comunitario en el Anillo de Cenotes de Yucatán. Conectamos turistas con guías con experiencia locales, integrando logística nativa de transporte en mototaxi.",
    features:
      "Sistema de reservas, procesador de pagos Mercado Pago, dashboards analíticos y sistema de reseñas.",
    techChips: ["Node.js", "Express", "PostgreSQL", "Supabase", "HTML/CSS/JS", "Chart.js", "Mercado Pago"],
    screenshots: [
      { src: "/portfolio/sublegados-landig-page-turista.png", alt: "Landing Page Turista" },
      { src: "/portfolio/sublegados-lamding-page-guia.png", alt: "Landing Page Guía" },
      { src: "/portfolio/sublegados-Login.png", alt: "Inicio de Sesión" },
      { src: "/portfolio/Sublegados-home-turista.png", alt: "Home Turista" },
      { src: "/portfolio/sublegados-tours-del-turista.png", alt: "Tours del Turista" },
      { src: "/portfolio/sublegados-apartadoguias-del-turista.png", alt: "Apartado Guías" },
      { src: "/portfolio/sublegados-home-guia.png", alt: "Home Guía" },
      { src: "/portfolio/sublegados-reseñas-guia.png", alt: "Reseñas Guía" },
    ],
  },
  {
    id: "heladeria",
    logo: null,
    label: "Proyecto de Desarrollo Integral",
    type: "E-commerce & Gestión en Tiempo Real",
    title: "Heladería Libertad",
    description:
      "Aplicación Web diseñada a la medida para un negocio local de postres y helados en Yucatán. Funciona como ecosistema dual: tienda virtual interactiva para clientes y centro de mando privado para gestionar la operación del negocio.",
    features:
      "Catálogo dinámico por categorías, carrito reactivo, ticket virtual en vivo estilo Uber Eats, pedidos agendados con calendario, panel de administración con alertas de sonido y control de semáforo en tiempo real.",
    techChips: ["Angular", "Supabase", "PostgreSQL", "WebSockets", "CSS Puro", "Vercel"],
    screenshots: [
      { src: "/portfolio2/heladeria-landing.png", alt: "Landing Page Principal" },
      { src: "/portfolio2/heladeria-galeria.png", alt: "Galería de Productos" },
      { src: "/portfolio2/heladeria-menu-pedidos.png", alt: "Menú de Pedidos" },
      { src: "/portfolio2/heladeria-catalogo.png", alt: "Catálogo por Categorías" },
      { src: "/portfolio2/heladeria-agendar-fecha.png", alt: "Agendar Fecha Especial" },
      { src: "/portfolio2/heladeria-calendario.png", alt: "Calendario de Reservas" },
      { src: "/portfolio2/heladeria-carrito.png", alt: "Carrito de Compras" },
      { src: "/portfolio2/heladeria-ticket-esperando.png", alt: "Ticket - Esperando Confirmación" },
      { src: "/portfolio2/heladeria-ticket-preparando.png", alt: "Ticket - Preparando Pedido" },
      { src: "/portfolio2/heladeria-ticket-listo.png", alt: "Ticket - Pedido Listo" },
      { src: "/portfolio2/heladeria-ticket-finalizado.png", alt: "Ticket - Compra Finalizada" },
    ],
  },
];

function ProjectCard({ project }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(13,27,62,0.06)] overflow-hidden mb-16 border border-white/50 relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-navy-light/5 rounded-full blur-[100px]" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Image Gallery */}
        <div className="relative bg-[#0b1429] p-7 lg:p-10 border-r border-[#1a2b53]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4 bg-[#1a2b53] rounded-2xl p-2.5 pr-4 shadow-inner">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  width={48}
                  height={48}
                  className="rounded-[10px] bg-white p-1"
                />
              ) : (
                <div className="w-12 h-12 rounded-[10px] bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white text-xl font-bold">
                  🍦
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-green-brand/90 font-montserrat font-bold text-[11px] uppercase tracking-wider">
                  {project.label}
                </span>
                <span className="text-white/80 font-inter text-sm">
                  {project.type}
                </span>
              </div>
            </div>
          </div>

          {/* Main Screenshot */}
          <div className="w-full bg-[#1e293b] rounded-xl overflow-hidden shadow-2xl mb-6 relative">
            <div className="bg-[#111827] h-8 flex items-center px-4 gap-2 border-b border-[#374151]">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#eab308]" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            </div>
            <div className="relative aspect-[16/10] w-full group cursor-pointer">
              <Image
                src={project.screenshots[activeImg].src}
                alt={project.screenshots[activeImg].alt}
                fill
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-4 portfolio-carousel scrollbar-hide snap-x">
            {project.screenshots.map((ss, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`shrink-0 snap-center w-[100px] h-[64px] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeImg === i
                    ? "border-green-brand shadow-[0_0_15px_rgba(60,181,74,0.3)] scale-105"
                    : "border-transparent opacity-50 hover:opacity-100 bg-[#1e293b]"
                }`}
              >
                <Image
                  src={ss.src}
                  alt="Thumbnail"
                  width={100}
                  height={64}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right - Info */}
        <div className="p-8 lg:p-12 xl:p-14 flex flex-col justify-center relative bg-white">
          <span className="inline-flex items-center gap-2 bg-blue-soft/60 text-navy-medium font-montserrat font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full w-fit mb-6 border border-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
            {project.label}
          </span>

          <h3 className="font-montserrat font-bold text-3xl sm:text-4xl text-navy mb-6 tracking-tight">
            {project.title}
          </h3>

          <p className="text-gray-text text-[16px] leading-[1.8] mb-8">
            {project.description}
            <br /><br />
            <span className="font-medium text-navy/80">
              Características clave:
            </span>{" "}
            {project.features}
          </p>

          {/* Tech Stack */}
          <div>
            <span className="font-montserrat font-bold text-xs text-navy/50 uppercase tracking-widest block mb-4">
              Stack Tecnológico
            </span>
            <div className="flex flex-wrap gap-2.5">
              {project.techChips.map((tech, i) => (
                <span
                  key={i}
                  className="bg-navy/5 border border-navy/10 text-navy-medium font-inter font-semibold text-sm px-4 py-2 rounded-xl hover:bg-green-brand/10 hover:border-green-brand/30 hover:text-green-brand transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 lg:py-32 bg-gray-bg relative">
      <div className="absolute top-[20%] right-0 w-[40%] h-[40%] bg-green-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-24">
          <span className="inline-block font-montserrat font-semibold text-green-brand text-sm uppercase tracking-[3px] mb-4">
            Casos de Éxito
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight">
            Nuestro Portafolio
          </h2>
          <div className="section-title-underline mt-5" />
          <p className="mt-6 text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Proyectos reales construidos con código limpio, arquitectura escalable y
            enfoque en la experiencia del usuario.
          </p>
        </AnimatedSection>

        {/* Projects */}
        {projects.map((project) => (
          <AnimatedSection key={project.id}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}

        {/* Bottom Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Coming Soon */}
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-sm border border-dashed border-navy/20 h-full flex flex-col items-center justify-center text-center group hover:bg-gray-bg/50 transition-colors duration-300">
              <div className="w-20 h-20 bg-blue-soft rounded-[1.25rem] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-navy-medium stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-navy mb-3">
                Próximos Proyectos
              </h3>
              <p className="text-gray-text text-[15px] leading-relaxed max-w-sm">
                Estamos cocinando nuevas soluciones innovadoras que muy pronto
                estarán desplegadas y disponibles aquí.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={300}>
            <div className="bg-gradient-to-br from-navy to-[#0F2356] rounded-3xl p-10 lg:p-12 shadow-[0_20px_40px_rgba(13,27,62,0.2)] h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}/>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-brand/20 rounded-full blur-[50px] group-hover:bg-green-brand/30 transition-colors duration-500" />

              <div className="relative z-10 w-full">
                <div className="w-20 h-20 bg-green-brand/15 rounded-[1.25rem] flex items-center justify-center mb-6 mx-auto border border-green-brand/20 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-4 tracking-tight drop-shadow-md">
                  ¿Tienes una idea?
                </h3>
                <p className="text-white/80 text-[16px] leading-relaxed mb-8 max-w-sm mx-auto">
                  Sé el primero en trabajar con nuestro equipo. Transformamos
                  esbozos en aplicaciones reales.
                </p>
                <a
                  href="#contacto"
                  className="bg-green-brand hover:bg-green-hover text-white font-montserrat font-bold text-[15px] px-8 py-4.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(60,181,74,0.4)] inline-flex items-center gap-2.5 w-full sm:w-auto"
                >
                  Iniciar Proyecto
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
