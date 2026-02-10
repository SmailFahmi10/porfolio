import { Mail, Linkedin, MapPin, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 font-mono text-sm text-primary">{"Hola, soy"}</p>
          <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Smail Fahmi Charnane
          </h1>
          <h2 className="mb-6 text-balance text-xl font-semibold text-muted-foreground md:text-2xl">
            Backend Developer
          </h2>
          <p className="mb-8 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Especializado en{" "}
            <span className="font-semibold text-foreground">Java</span> y{" "}
            <span className="font-semibold text-foreground">Spring Boot</span>,
            construyendo microservicios escalables, APIs REST robustas y sistemas
            en entornos corporativos. Experiencia fullstack con{" "}
            <span className="font-semibold text-foreground">React + TypeScript</span>.
          </p>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Alicante, Espana</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:smailfahmi984@gmail.com" className="transition-colors hover:text-primary">
                smailfahmi984@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>676 249 297</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/smailfahmicharnane"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:smailfahmi984@gmail.com"
              className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              Contactar
            </a>
          </div>
        </div>

        {/* Right Column - Terminal visual */}
        <div className="hidden items-center justify-center lg:flex">
          <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-chart-4/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">smail@dev ~</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-primary">{"$"}</span> cat about.json
              </p>
              <div className="mt-3 text-muted-foreground">
                <p>{"{"}</p>
                <p className="ml-4">
                  <span className="text-primary">{'"name"'}</span>: <span className="text-foreground">{'"Smail Fahmi"'}</span>,
                </p>
                <p className="ml-4">
                  <span className="text-primary">{'"role"'}</span>: <span className="text-foreground">{'"Backend Developer"'}</span>,
                </p>
                <p className="ml-4">
                  <span className="text-primary">{'"stack"'}</span>: [
                </p>
                <p className="ml-8">
                  <span className="text-foreground">{'"Java"'}</span>,{" "}
                  <span className="text-foreground">{'"Spring Boot"'}</span>,
                </p>
                <p className="ml-8">
                  <span className="text-foreground">{'"React"'}</span>,{" "}
                  <span className="text-foreground">{'"TypeScript"'}</span>
                </p>
                <p className="ml-4">],</p>
                <p className="ml-4">
                  <span className="text-primary">{'"experience"'}</span>: <span className="text-foreground">{'"2+ years"'}</span>,
                </p>
                <p className="ml-4">
                  <span className="text-primary">{'"available"'}</span>: <span className="text-primary">true</span>
                </p>
                <p>{"}"}</p>
              </div>
              <p className="mt-3 text-muted-foreground">
                <span className="text-primary">{"$"}</span>{" "}
                <span className="inline-block h-4 w-2 animate-pulse bg-primary" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
