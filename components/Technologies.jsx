"use client";

import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    name: "Lenguajes",
    techs: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored", tooltip: "Lenguaje base de la web moderna" },
      { name: "Python", icon: "devicon-python-plain colored", tooltip: "Ideal para backend, IA y automatización" },
      { name: "C#", icon: "devicon-csharp-plain colored", tooltip: "Potencia empresarial con el ecosistema .NET" },
      { name: "Dart", icon: "devicon-dart-plain colored", tooltip: "Lenguaje oficial de Flutter" },
      { name: "Java", icon: "devicon-java-plain colored", tooltip: "Aplicaciones robustas y multiplataforma" },
      { name: "C++", icon: "devicon-cplusplus-plain colored", tooltip: "Alto rendimiento y control total" },
    ],
  },
  {
    name: "Frontend & Frameworks",
    techs: [
      { name: "React", icon: "devicon-react-original colored", tooltip: "Interfaces dinámicas y reutilizables", featured: true },
      { name: "Next.js", icon: "devicon-nextjs-plain colored", tooltip: "Apps web ultrarrápidas con SEO integrado", featured: true },
      { name: "Angular", icon: "devicon-angularjs-plain colored", tooltip: "Framework empresarial de Google" },
      { name: "HTML5", icon: "devicon-html5-plain colored", tooltip: "Estructura semántica de toda la web" },
      { name: "CSS3", icon: "devicon-css3-plain colored", tooltip: "Estilos avanzados y diseño responsivo" },
      { name: "Flutter", icon: "devicon-flutter-plain colored", tooltip: "Apps móviles nativas desde un solo código", featured: true },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored", tooltip: "JavaScript del lado del servidor", featured: true },
      { name: "Express.js", icon: "devicon-express-original colored", tooltip: "APIs rápidas y minimalistas" },
      { name: ".NET", icon: "devicon-dotnetcore-plain colored", tooltip: "Plataforma empresarial de Microsoft", featured: true },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored", tooltip: "APIs modernas y ultrarrápidas con Python" },
    ],
  },
  {
    name: "Bases de Datos & BaaS",
    techs: [
      { name: "MySQL", icon: "devicon-mysql-plain colored", tooltip: "La base de datos relacional más popular" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", tooltip: "BD relacional avanzada y de código abierto" },
      { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored", tooltip: "Solución empresarial de Microsoft" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", tooltip: "Base de datos NoSQL flexible y escalable" },
      { name: "Supabase", icon: "devicon-supabase-plain colored", tooltip: "Backend como servicio con PostgreSQL" },
      { name: "Firebase", icon: "devicon-firebase-plain colored", tooltip: "Plataforma de Google para apps en tiempo real" },
    ],
  },
  {
    name: "Despliegue & Cloud",
    techs: [
      { name: "Vercel", icon: "devicon-vercel-plain colored", tooltip: "Despliegue instantáneo para apps Next.js", featured: true },
      { name: "Netlify", icon: "devicon-netlify-plain colored", tooltip: "Hosting moderno con CI/CD integrado", featured: true },
      { name: "Git", icon: "devicon-git-plain colored", tooltip: "Control de versiones profesional" },
      { name: "GitHub", icon: "devicon-github-original colored", tooltip: "Colaboración y repositorios en la nube" },
      { name: "Google Cloud", icon: "devicon-googlecloud-plain colored", tooltip: "Infraestructura potente para empresas grandes" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored", tooltip: "La nube más grande del mundo para escalar sin límites" },
    ],
  },
  {
    name: "Diseño & UX",
    techs: [
      { name: "Figma", icon: "devicon-figma-plain colored", tooltip: "Diseño colaborativo de interfaces", featured: true },
      { name: "Canva", icon: "devicon-canva-plain colored", tooltip: "Diseño gráfico rápido y profesional" },
      { name: "Android Studio", icon: "devicon-androidstudio-plain colored", tooltip: "IDE oficial para desarrollo Android" },
      { name: "VS Code", icon: "devicon-vscode-plain colored", tooltip: "Editor de código más usado del mundo" },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 lg:py-32 bg-white relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-brand/20 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block font-montserrat font-semibold text-green-brand text-sm uppercase tracking-[3px] mb-4">
            Nuestro Stack
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[42px] text-navy leading-tight">
            Tecnologías que Dominamos
          </h2>
          <div className="section-title-underline mt-5" />
          <p className="mt-6 text-gray-text text-lg max-w-2xl mx-auto leading-relaxed">
            Trabajamos con las herramientas más modernas y probadas de la
            industria adaptando el ecosistema según tu proyecto.
          </p>
        </AnimatedSection>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <AnimatedSection key={catIndex} delay={catIndex * 100}>
              <div className="bg-gray-bg/50 rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Category Title */}
                <h3 className="font-montserrat font-bold text-navy-medium text-xl lg:text-2xl mb-8 flex items-center gap-4">
                  <span className="w-10 h-1 bg-gradient-to-r from-green-brand to-green-brand/40 rounded-full" />
                  {category.name}
                </h3>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 lg:gap-6">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="tech-icon group relative bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-default hover:border-green-brand/30 hover:bg-blue-soft/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Tooltip - solo escritorio */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-navy text-white text-[11px] px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 shadow-lg hidden lg:block">
                        {tech.tooltip}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-navy" />
                      </div>

                      <div className={`${tech.featured ? "w-[72px] h-[72px]" : "w-16 h-16"} flex items-center justify-center mb-1`}>
                        <i
                          className={`${tech.icon} ${tech.featured ? "text-[56px]" : "text-[48px]"} tech-grayscale drop-shadow-sm group-hover:scale-110 transition-all duration-300`}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-montserrat text-sm text-navy font-semibold text-center mt-auto">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
