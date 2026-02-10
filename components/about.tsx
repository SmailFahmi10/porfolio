export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="01" title="Sobre mi" />
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground lg:col-span-3">
            <p>
              Soy un <span className="text-foreground font-medium">Desarrollador Backend</span> especializado en Java y Spring Boot,
              con experiencia construyendo microservicios escalables, APIs REST robustas y sistemas
              criticos en entornos corporativos.
            </p>
            <p>
              Trabajo con <span className="text-foreground font-medium">Arquitectura Limpia</span>, patrones de diseno y buenas
              practicas para crear software mantenible, seguro y de alto rendimiento. Tambien tengo
              experiencia fullstack con <span className="text-foreground font-medium">React + TypeScript</span>, lo que me permite
              entender el ciclo completo de desarrollo.
            </p>
            <p>
              Mi background en <span className="text-foreground font-medium">mecatronica y sistemas industriales</span> me aporta
              una mentalidad analitica, capacidad para resolver problemas complejos y experiencia
              trabajando con sistemas en tiempo real y alta disponibilidad.
            </p>
            <p>
              Actualmente busco oportunidades donde pueda aportar valor construyendo soluciones
              backend escalables, optimizando sistemas existentes y contribuyendo a equipos de
              ingenieria de alto nivel.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-sm font-semibold text-primary">Idiomas</h3>
              <ul className="space-y-3">
                <LanguageItem lang="Espanol" level="Nativo / Bilingue" pct={100} />
                <LanguageItem lang="Ingles" level="Profesional" pct={75} />
                <LanguageItem lang="Arabe (Darija)" level="Profesional" pct={70} />
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 font-mono text-sm font-semibold text-primary">Certificaciones</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Medalla de Oro en Mecatronica - CYLSkills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-12 flex items-center gap-3">
      <span className="font-mono text-sm text-primary">{number}.</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="ml-4 hidden h-px flex-1 bg-border sm:block" />
    </div>
  )
}

function LanguageItem({ lang, level, pct }: { lang: string; level: string; pct: number }) {
  return (
    <li>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{lang}</span>
        <span className="text-muted-foreground">{level}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </li>
  )
}

export { SectionHeading }
