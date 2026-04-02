"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xbdpkjeg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20 text-white">
          <span className="inline-block font-montserrat font-semibold text-green-brand text-sm uppercase tracking-[3px] mb-4">
            Empecemos
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight">
            Contáctanos
          </h2>
          <div className="w-16 h-[3px] bg-green-brand mx-auto mt-6 mb-6 rounded-full" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            ¿Listo para llevar tu proyecto al siguiente nivel? Escríbenos y te
            responderemos en menos de 24 horas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="flex flex-col gap-6">
            <div className="bg-[#12234e] rounded-3xl p-8 lg:p-10 border border-white/5 shadow-2xl h-full flex flex-col justify-between">
              <div className="space-y-8">
                <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                  Información de contacto
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed mb-10">
                  Estamos disponibles para agendar una reunión por Google Meet o resolver tus
                  dudas directamente por WhatsApp o correo.
                </p>

                {/* Email */}
                <a href="mailto:serviciodualcodesolutions.devs@gmail.com" className="flex items-start gap-5 group cursor-pointer block hover:bg-white/5 p-3 -m-3 rounded-2xl transition-colors">
                  <div className="w-14 h-14 bg-white/5 rounded-[1.25rem] flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-green-brand group-hover:border-green-brand transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-brand group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="pt-2">
                    <p className="font-montserrat font-bold text-white mb-1">
                      Correo electrónico
                    </p>
                    <span className="text-white/70 group-hover:text-green-brand text-[15px] transition-colors break-all">
                      serviciodualcodesolutions.devs@gmail.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp - Ventas */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-14 h-14 bg-white/5 rounded-[1.25rem] flex items-center justify-center shrink-0 border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px] text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.559 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <p className="font-montserrat font-bold text-white">
                      WhatsApp <span className="text-green-brand font-semibold text-sm">(Ventas)</span>
                    </p>
                  </div>

                  {/* Línea 1 */}
                  <a
                    href="https://wa.me/529999062620?text=Hola,%20vengo%20de%20la%20web%20de%20Dual%20Code%20Solutions%20y%20me%20interesa%20un%20proyecto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 ml-[4.5rem] group hover:bg-white/5 p-2 -m-2 rounded-xl transition-colors"
                  >
                    <div className="w-8 h-8 bg-[#25D366]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <span className="text-white/70 group-hover:text-[#25D366] text-[15px] transition-colors">
                      +52 999 906 2620
                    </span>
                  </a>

                  {/* Línea 2 */}
                  <a
                    href="https://wa.me/529994969520?text=Hola,%20vengo%20de%20la%20web%20de%20Dual%20Code%20Solutions%20y%20me%20interesa%20un%20proyecto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 ml-[4.5rem] group hover:bg-white/5 p-2 -m-2 rounded-xl transition-colors"
                  >
                    <div className="w-8 h-8 bg-[#25D366]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <span className="text-white/70 group-hover:text-[#25D366] text-[15px] transition-colors">
                      +52 999 496 9520
                    </span>
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white/5 rounded-[1.25rem] flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-green-brand group-hover:border-green-brand transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-brand group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="pt-2">
                    <p className="font-montserrat font-bold text-white mb-1">
                      Ubicación
                    </p>
                    <p className="text-white/70 text-[15px]">
                      Mérida, Yucatán, México
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 w-full h-48 rounded-2xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119230.13458694806!2d-89.70428574751493!3d20.980138923086915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715cbf3f8e5f%3A0x6b2e1bfef125638c!2zTcOpcmlkYSwgWXVjLg!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Mérida"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative border border-gray-100 h-full">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-20 h-20 bg-green-brand/10 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl text-navy mb-3">
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className="text-gray-text text-[15px] leading-relaxed max-w-sm mb-8">
                    Hemos recibido tu solicitud. Nuestro equipo te contactará en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="bg-navy hover:bg-navy-medium text-white font-montserrat font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-montserrat font-bold text-navy text-[13px] uppercase tracking-wider mb-2"
                    >
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-gray-bg border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-brand text-navy text-[15px] outline-none placeholder:text-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-montserrat font-bold text-navy text-[13px] uppercase tracking-wider mb-2"
                      >
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="tu@correo.com"
                        className="w-full bg-gray-bg border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-brand text-navy text-[15px] outline-none placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-montserrat font-bold text-navy text-[13px] uppercase tracking-wider mb-2"
                      >
                        WhatsApp <span className="text-gray-text font-normal lowercase tracking-normal">(opcional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+52 999 000 0000"
                        className="w-full bg-gray-bg border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-brand text-navy text-[15px] outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block font-montserrat font-bold text-navy text-[13px] uppercase tracking-wider mb-2"
                    >
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-gray-bg border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-brand text-navy text-[15px] outline-none mb-1 cursor-pointer"
                    >
                      <option value="" disabled defaultValue>
                        Selecciona una opción...
                      </option>
                      <optgroup label="─ Nuestros Servicios ─">
                        <option value="web">Desarrollo Web</option>
                        <option value="backend">APIs &amp; Backend</option>
                        <option value="uiux">Diseño UI/UX</option>
                        <option value="consultoria">Consultoría TI</option>
                        <option value="deploy">Despliegue</option>
                        <option value="movil">Desarrollo Móvil</option>
                        <option value="indexacion">Indexación</option>
                        <option value="dominios">Gestión de Dominios</option>
                      </optgroup>
                      <optgroup label="─ Tipo de Producto ─">
                        <option value="landing">Landing Page</option>
                        <option value="app-web-movil">App Web y Móvil</option>
                        <option value="app-web-completa">App Web Completa</option>
                        <option value="app-movil-completa">App Móvil Completa</option>
                      </optgroup>
                      <option value="other">Otro / Tengo una idea general</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-montserrat font-bold text-navy text-[13px] uppercase tracking-wider mb-2"
                    >
                      Cuéntanos tu proyecto <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      placeholder="Describe un poco qué tienes en mente, objetivos principales, y si tienes algún presupuesto estimado..."
                      className="w-full bg-gray-bg border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-brand text-navy text-[15px] outline-none placeholder:text-gray-400 resize-none"
                    ></textarea>
                  </div>

                  {formStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      <p className="text-red-600 text-sm font-medium">
                        Hubo un error al enviar. Intenta de nuevo o contáctanos por WhatsApp.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="mt-2 w-full bg-green-brand hover:bg-green-hover text-white font-montserrat font-bold text-base py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(60,181,74,0.35)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {formStatus === "sending" ? (
                      <>
                        <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[13px] text-gray-text mt-3">
                    Tu información está segura y protegida.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
