export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Smail Fahmi Charnane &mdash; Backend Developer
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {"Construido con Next.js & Tailwind CSS"}
        </p>
      </div>
    </footer>
  )
}
