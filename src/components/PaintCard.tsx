import type { Paint } from "@/lib/paints";

export function PaintCard({ paint }: { paint: Paint }) {
  return (
    <li className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-transform hover:-translate-y-1">
      <div className="h-24 w-full" style={{ background: paint.swatch }} aria-hidden />
      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{paint.brand}</p>
        <h3 className="mt-1 font-serif text-lg leading-tight">{paint.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{paint.note}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{paint.category}</span>
          <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">{paint.finish}</span>
        </div>
      </div>
    </li>
  );
}
