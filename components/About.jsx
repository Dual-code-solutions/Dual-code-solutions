"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    label: "Innovación constante",
    description: "Usamos las últimas herramientas y frameworks del mercado para tu beneficio.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: "Trabajo colaborativo",
    description: "Trabajamos en equipo contigo para alcanzar resultados excepcionales.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    label: "Calidad del código",
    description: "Software limpio, fácil de mantener y libre de errores críticos.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    label: "Orientación al cliente",
    description: "Tu visión es nuestra prioridad en cada etapa del proyecto.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: "Aprendizaje continuo",
    description: "Siempre actualizándonos con las tecnologías más recientes del mercado.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-gray-bg relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block font-montserrat font-semibold text-green-brand text-sm uppercase tracking-[3px] mb-4">
            Sobre nosotros
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight">
            ¿Quiénes somos?
          </h2>
          <div className="section-title-underline mt-5" />
        </AnimatedSection>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left - Text */}
          <AnimatedSection direction="left">
            <p className="text-gray-text text-lg leading-relaxed mb-3">
              <span className="font-montserrat font-bold text-navy text-xl block mb-3">Desarrolladores de Software Multiplataforma | Especialistas en Soluciones Digitales</span>
            </p>
            <p className="text-gray-text text-[15px] leading-relaxed mb-10">
              Nos mantenemos a la vanguardia de las últimas tecnologías,
              actualmente cursando la carrera de Desarrollo de
              Software Multiplataforma. Combinamos formación
              técnica con pasión por crear productos digitales de alto impacto
              que resuelven problemas reales.
            </p>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-7 shadow-sm mb-6 border-l-4 border-green-brand hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-green-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-navy text-xl mb-2">
                    Nuestra Misión
                  </h3>
                  <p className="text-gray-text text-[15px] leading-relaxed">
                    Impulsar el crecimiento de empresas nuevas, pequeñas,
                    medianas y grandes mediante software escalable, accesible
                    y de alto impacto, aplicando las mejores prácticas del
                    desarrollo moderno.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border-l-4 border-navy-medium hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-navy-medium/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-navy-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-navy text-xl mb-2">
                    Nuestra Visión
                  </h3>
                  <p className="text-gray-text text-[15px] leading-relaxed">
                    Convertirnos en el aliado tecnológico número uno en
                    Yucatán y México para emprendedores y empresas que buscan
                    transformar sus ideas en realidades digitales de impacto.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Image */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-green-brand/20 to-navy-medium/20 rounded-3xl blur-xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white/50">
                <Image
                  src="/foto-equipo-original.jpeg"
                  alt="Equipo Dual Code Solutions"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                    <p className="text-white font-montserrat font-bold text-xl mb-1">
                      Nuestro Equipo
                    </p>
                    <p className="text-white/80 text-sm font-inter">
                      Desarrolladores de Software Multiplataforma •
                      Especialistas en Soluciones Digitales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/80 hover:border-green-brand/30 hover:shadow-[0_12px_40px_rgba(13,27,62,0.1)] transition-all duration-300 hover:-translate-y-3 cursor-default h-full">
                <div className="w-14 h-14 mx-auto bg-green-brand/10 rounded-xl flex items-center justify-center text-green-brand mb-4 group-hover:bg-green-brand group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {value.icon}
                </div>
                <p className="font-montserrat font-bold text-navy text-sm mb-2">
                  {value.label}
                </p>
                <p className="text-gray-text text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
