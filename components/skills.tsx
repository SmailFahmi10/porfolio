import { SectionHeading } from "./about"

const skillCategories = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Microservicios", "APIs RESTful", "Java Servlets", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Arquitectura & Patrones",
    skills: ["Clean Architecture", "Patrones de Diseno", "Clean Code", "SOLID", "MVC"],
  },
  {
    title: "Herramientas & DevOps",
    skills: ["Git", "MySQL", "REST APIs", "Despliegue CI/CD", "Testing"],
  },
  {
    title: "Industrial / Embedded",
    skills: ["PLC Programming", "SCADA", "SIMATIC S7", "Automatizacion", "Sistemas en Tiempo Real"],
  },
  {
    title: "Soft Skills",
    skills: ["Trabajo en equipo", "Resolucion de problemas", "Mejora del rendimiento", "Comunicacion"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="04" title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-primary">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
