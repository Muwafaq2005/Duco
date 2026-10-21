import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/site-data";

const NAV = [
  ["services", "Services"],
  ["paints", "Paints"],
  ["reviews", "Reviews"],
  ["contact", "Contact"],
] as const;

function NavLink({ id, label, className, onClick }: { id: string; label: string; className: string; onClick?: () => void }) {
  if (id === "paints") return <Link to="/paints" onClick={onClick} className={className}>{label}</Link>;
  return <Link to="/" hash={id} onClick={onClick} className={className}>{label}</Link>;
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-baseline gap-2 leading-none">
      <span className={`font-serif text-2xl font-semibold tracking-tight ${light ? "text-ink-foreground" : "text-foreground"}`}>DUCO</span>
      <span className={`text-[10px] font-semibold tracking-[0.3em] ${light ? "text-ink-foreground/70" : "text-muted-foreground"}`}>PAINT &amp; CO</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map(([id, label]) => (
            <NavLink key={id} id={id} label={label} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/" hash="contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90 sm:inline-block">Get a Quote</Link>
          <button className="p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-background px-5 pb-6 md:hidden" aria-label="Mobile">
          {NAV.map(([id, label]) => (
            <NavLink key={id} id={id} label={label} onClick={() => setOpen(false)} className="block border-b py-4 font-serif text-xl" />
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <Wordmark light />
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {NAV.map(([id, label]) => <NavLink key={id} id={id} label={label} className="text-sm text-ink-foreground/70 hover:text-ink-foreground" />)}
        </nav>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-ink-foreground/50 md:px-8">© {new Date().getFullYear()} {BUSINESS.name}, Vellore. All rights reserved.</p>
      </div>
    </footer>
  );
}
