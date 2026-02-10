import { ExternalLink, Github, Folder } from "lucide-react"
import { SectionHeading } from "./about"

const featuredProjects = [
  {
    title: "Plataforma E-Commerce & Delivery Full-Stack",
    description:
      "Solucion integral de comercio electronico desarrollada desde su concepcion hasta su despliegue. Incluye back-end seguro con Java Servlets y Spring Boot, front-end moderno con React + TypeScript, y arquitectura de microservicios con APIs RESTful optimizadas.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "Tailwind CSS", "SQL", "Microservicios", "REST APIs"],
    highlights: [
      "Arquitectura de microservicios escalable",
      "Interfaz responsive con shadcn/ui",
      "Clean Code y mejores practicas SQL",
    ],
    type: "featured" as const,
  },
  {
    title: "Sistema de Aplicaciones Corporativas",
    description:
      "Optimizacion y desarrollo continuo de servicios back-end corporativos aplicando Arquitectura Limpia y patrones de diseno. Reduccion significativa de la deuda tecnica mediante refactorizacion y entrega de nuevas funcionalidades.",
    technologies: ["Java", "Spring Boot", "Clean Architecture", "Microservicios", "SQL", "DevOps"],
    highlights: [
      "Arquitectura Limpia y patrones SOLID",
      "Soporte L2/L3 y despliegues coordinados",
      "Colaboracion con equipos DevOps",
    ],
    type: "featured" as const,
  },
]

const otherProjects = [
  {
    title: "Automatizacion PLC/SCADA Industrial",
    description:
      "Diseno e implementacion de sistemas de automatizacion con SIMATIC S7 para control de ventilacion y refrigeracion en entorno industrial.",
    technologies: ["PLC", "SCADA", "SIMATIC S7", "Automatizacion"],
  },
  {
    title: "Sistema de Monitoreo Solar PV",
    description:
      "Diagnosticos avanzados, registro de datos y analisis de rendimiento para optimizar la eficiencia de plantas solares fotovoltaicas.",
    technologies: ["Analisis de Datos", "Sistemas Electronicos", "Monitorizacion"],
  },
  {
    title: "Portfolio Web Personal",
    description:
      "Sitio web personal desarrollado con Next.js, React y Tailwind CSS para mostrar experiencia y proyectos profesionales.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "API REST con Spring Boot",
    description:
      "API RESTful siguiendo principios de Clean Architecture con documentacion, validacion de datos y manejo de errores robusto.",
    technologies: ["Java", "Spring Boot", "REST API", "JPA", "MySQL"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="03" title="Proyectos" />

        {/* Featured Projects */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.title} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-24">
          <h3 className="mb-8 text-center text-xl font-semibold text-foreground">
            Otros Proyectos Destacados
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherProjects.map((project) => (
              <OtherProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProject({
  project,
  reverse,
}: {
  project: (typeof featuredProjects)[number]
  reverse: boolean
}) {
  return (
    <div
      className={`group relative grid items-center gap-6 lg:grid-cols-12 ${
        reverse ? "lg:text-right" : ""
      }`}
    >
      {/* Info */}
      <div
        className={`relative z-10 lg:col-span-7 ${
          reverse ? "lg:col-start-6 lg:row-start-1" : ""
        }`}
      >
        <p className="mb-2 font-mono text-xs font-medium text-primary">Proyecto Destacado</p>
        <h3 className="mb-4 text-xl font-bold text-foreground lg:text-2xl">{project.title}</h3>

        <div className="rounded-xl border border-border bg-card p-5 shadow-lg">
          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        </div>

        {/* Highlights */}
        <ul
          className={`mt-4 flex flex-wrap gap-x-4 gap-y-1 ${
            reverse ? "lg:justify-end" : ""
          }`}
        >
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div
          className={`mt-4 flex flex-wrap gap-2 ${reverse ? "lg:justify-end" : ""}`}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Visual block */}
      <div
        className={`hidden overflow-hidden rounded-xl border border-border bg-secondary/50 lg:col-span-6 lg:row-start-1 lg:block ${
          reverse ? "lg:col-start-1" : "lg:col-start-7"
        }`}
      >
        <div className="flex h-72 items-center justify-center">
          <div className="space-y-3 p-8 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2 text-primary">
              <span className="inline-block h-3 w-3 rounded-full bg-primary/30" />
              <span className="inline-block h-3 w-3 rounded-full bg-primary/20" />
              <span className="inline-block h-3 w-3 rounded-full bg-primary/10" />
            </div>
            <p className="text-muted-foreground/60">
              <span className="text-primary/60">{'const'}</span>{' '}
              <span className="text-foreground/80">{'app'}</span>{' = '}
              <span className="text-primary/60">{'new'}</span>{' '}
              <span className="text-foreground/80">{'SpringApplication'}</span>{'();'}
            </p>
            <p className="text-muted-foreground/60">
              <span className="text-foreground/80">{'app'}</span>
              {'.'}
              <span className="text-primary/80">{'configure'}</span>
              {'(cleanArchitecture);'}
            </p>
            <p className="text-muted-foreground/60">
              <span className="text-foreground/80">{'app'}</span>
              {'.'}
              <span className="text-primary/80">{'deploy'}</span>
              {'(microservices);'}
            </p>
            <p className="mt-4 text-primary/40">
              {'// Ready for production'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function OtherProjectCard({
  project,
}: {
  project: (typeof otherProjects)[number]
}) {
  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-1">
      <div className="mb-4 flex items-center justify-between">
        <Folder className="h-9 w-9 text-primary" strokeWidth={1} />
        <div className="flex items-center gap-3">
          {"link" in project && project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Ver ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <h4 className="mb-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h4>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
