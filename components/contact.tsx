import { Mail, Linkedin, Phone, MapPin } from "lucide-react"
import { SectionHeading } from "./about"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="06" title="Contacto" />
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-4 text-balance text-3xl font-bold text-foreground">
            {"Hablemos"}
          </h3>
          <p className="mb-10 text-pretty leading-relaxed text-muted-foreground">
            Estoy buscando nuevas oportunidades como Backend Developer.
            Si tienes un proyecto interesante o una posicion abierta,
            no dudes en contactarme.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:smailfahmi984@gmail.com"
              className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Mail className="h-5 w-5 text-primary" />
              smailfahmi984@gmail.com
            </a>
            <a
              href="tel:+34676249297"
              className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Phone className="h-5 w-5 text-primary" />
              676 249 297
            </a>
            <a
              href="https://www.linkedin.com/in/smailfahmicharnane"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              LinkedIn
            </a>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-sm font-medium text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              Alicante, Espana
            </div>
          </div>

          <a
            href="mailto:smailfahmi984@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  )
}
