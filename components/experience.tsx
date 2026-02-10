import { SectionHeading } from "./about"

const experiences = [
  {
    company: "Serbatic",
    role: "Software Development & Maintenance (Backend Focus)",
    period: "Jul 2024 - Presente",
    location: "Zamora",
    bullets: [
      "Construccion y optimizacion de servicios back-end con Java Spring Boot, aplicando Arquitectura Limpia y patrones de diseno.",
      "Mejora de la escalabilidad y mantenibilidad mediante refactorizacion y entrega de nuevas funcionalidades, reduciendo la deuda tecnica.",
      "Soporte L2/L3, resolviendo incidentes complejos, coordinando despliegues y garantizando la disponibilidad continua del servicio.",
      "Colaboracion con los equipos de DevOps e Ingenieria para disenar e implementar mejoras en aplicaciones corporativas.",
    ],
    technologies: ["Java", "Spring Boot", "Microservicios", "APIs RESTful", "SQL"],
  },
  {
    company: "Serbatic",
    role: "Junior Software Developer",
    period: "Feb 2024 - Jun 2024",
    location: "Zamora",
    bullets: [
      "Lidere el desarrollo integral de una solucion de comercio electronico, desde su concepcion hasta su despliegue.",
      "Construccion de servicios back-end seguros con Java Servlets y Spring Boot, aplicando Clean Code y mejores practicas de SQL.",
      "Desarrollo de interfaces modernas de front-end con React + TypeScript, utilizando hooks personalizados, shadcn/ui y Tailwind CSS.",
      "Diseno y optimizacion de Microservicios y APIs RESTful, mejorando el rendimiento y la integracion.",
    ],
    technologies: ["Java", "Spring Boot", "Servlets", "React", "TypeScript", "SQL", "Microservicios"],
  },
  {
    company: "Tymr",
    role: "Solar PV Maintenance Technician",
    period: "Jun 2022 - Feb 2023",
    location: "Zamora",
    bullets: [
      "Diagnosticos avanzados y resolucion de problemas en sistemas electronicos distribuidos.",
      "Instalacion, configuracion y puesta en marcha de seguidores solares y sistemas conectados a la red.",
      "Registro de datos y analisis de rendimiento para optimizar la eficiencia.",
    ],
    technologies: ["Sistemas Electronicos", "Analisis de Datos", "Integracion de Sistemas"],
  },
  {
    company: "Cobadu",
    role: "Industrial Installation Technician",
    period: "Jul 2021 - May 2022",
    location: "Zamora",
    bullets: [
      "Diseno e implementacion de sistemas de automatizacion PLC/SCADA (SIMATIC S7).",
      "Desarrollo de sistemas de control en tiempo real para ventilacion y refrigeracion.",
      "Mantenimiento preventivo y correctivo en equipos criticos.",
    ],
    technologies: ["PLC", "SCADA", "SIMATIC S7", "Automatizacion"],
  },
  {
    company: "Audens Food",
    role: "Industrial Maintenance Technician",
    period: "Ene 2021 - Jun 2021",
    location: "Espana",
    bullets: [
      "Diagnostico y reparacion de circuitos electricos, sistemas hidraulicos y componentes mecanicos.",
      "Confiabilidad operacional abordando fallos tecnicos e implementando soluciones sostenibles.",
    ],
    technologies: ["Electrica", "Hidraulica", "Mecanica", "Neumatica"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" title="Experiencia" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-0 hidden w-px bg-border md:left-[140px] md:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <ExperienceCard key={`${exp.company}-${exp.role}`} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  company,
  role,
  period,
  bullets,
  technologies,
}: {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  technologies: string[]
}) {
  return (
    <div className="group relative grid gap-4 md:grid-cols-[140px_1fr]">
      {/* Period */}
      <div className="pt-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {period}
      </div>

      {/* Timeline dot */}
      <div className="absolute top-2 left-[-5px] hidden h-2.5 w-2.5 rounded-full border-2 border-primary bg-background md:left-[136px] md:block" />

      {/* Content */}
      <div className="rounded-xl border border-transparent p-5 transition-all group-hover:border-border group-hover:bg-card">
        <h3 className="text-lg font-semibold text-foreground">
          {role}
        </h3>
        <p className="mt-1 font-mono text-sm text-primary">{company}</p>

        <ul className="mt-4 space-y-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
