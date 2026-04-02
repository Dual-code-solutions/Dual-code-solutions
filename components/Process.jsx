"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Consultoría inicial",
    description: "Escuchamos tus necesidades, objetivos y presupuesto para entender tu proyecto a fondo.",
    gradient: "from-blue-500",
  },
  {
    number: "2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Diseño y prototipado",
    description: "Creamos un diseño inicial estático y visual para que veas exactamente cómo lucirá y funcionará lo que necesitas, antes de programar.",
    gradient: "from-purple-500",
  },
  {
    number: "3",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Desarrollo ágil",
    description: "Programamos con sprints (entregas cortas) para que recibas avances frecuentes y transparentes de tu proyecto.",
    gradient: "from-pink-500",
  },
  {
    number: "4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Pruebas y QA",
    description: "Realizamos pruebas exhaustivas de funcionalidad, seguridad y rendimiento antes de cualquier lanzamiento.",
    gradient: "from-orange-500",
  },
  {
    number: "5",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Despliegue",
    description: "Publicamos tu producto en la plataforma que elijas con configuración óptima y lista para el mundo.",
    gradient: "from-green-brand",
  },
  {
    number: "6",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Garantía y soporte",
    description: "El primer mes tienes garantía total de funcionamiento: si algo falla, lo corregimos sin costo. Después, manejamos planes de actualización muy accesibles para que tu web siga creciendo.",
    gradient: "from-teal-500",
  },
];

export default function Process() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="proceso" className="py-24 lg:py-32 bg-gray-bg relative">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="inline-block font-montserrat font-semibold text-green-brand text-sm uppercase tracking-[3px] mb-4">
            Cómo trabajamos
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight">
            Nuestro Proceso
          </h2>
          <div className="section-title-underline mt-5" />
          <p className="mt-6 text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Un método claro y transparente para llevar tu proyecto del concepto
            al lanzamiento exitoso.
          </p>
        </AnimatedSection>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const isHovered = hovered === index;
            const isNext = hovered !== null && hovered + 1 === index;

            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  className={`bg-white rounded-[2rem] p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col relative overflow-hidden group hover:-translate-y-2 ${
                    isNext
                      ? "border-green-brand/40 shadow-md ring-1 ring-green-brand/20"
                      : "border-gray-100"
                  }`}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Accent Gradient Line at Top */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.gradient} to-white opacity-40 group-hover:opacity-100 transition-opacity`} />

                  {/* Header: Icon and Number */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-navy-medium group-hover:bg-green-brand group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Arrow pointing to next */}
                      {isHovered && index < steps.length - 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-brand animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      )}
                      <span className="font-montserrat font-black text-5xl text-gray-100 group-hover:text-green-brand/15 transition-colors pointer-events-none select-none">
                        0{step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-montserrat font-bold text-navy-medium text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-text text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
