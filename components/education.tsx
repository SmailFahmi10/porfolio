import { GraduationCap } from "lucide-react"
import { SectionHeading } from "./about"

const educationItems = [
  {
    institution: "I.E.S Claudio Moyano",
    degree: "FPS Desarrollo de Aplicaciones Web (DAW)",
    period: "Sep 2022 - May 2024",
    details: "MySQL, Spring Boot, JavaScript, Git, HTML",
  },
  {
    institution: "I.E.S Universidad Laboral",
    degree: "FPS Mecatronica Industrial",
    period: "Sep 2019 - Jun 2021",
    details: "PLC, SIMATIC STEP 7",
  },
  {
    institution: "I.E.S Poeta Claudio Rodriguez",
    degree: "Bachillerato, Ciencias Tecnologicas",
    period: "Sep 2017 - Jun 2019",
    details: null,
  },
  {
    institution: "Certificacion Profesional",
    degree: "Electrico y Electronico del Vehiculo TMVG0209",
    period: "Ene 2018 - Jul 2018",
    details: null,
  },
]

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="05" title="Educacion" />
        <div className="grid gap-6 md:grid-cols-2">
          {educationItems.map((item) => (
            <div
              key={item.degree}
              className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.degree}</h3>
                <p className="mt-1 text-sm text-primary">{item.institution}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{item.period}</p>
                {item.details && (
                  <p className="mt-2 text-sm text-muted-foreground">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
