import type { Brand } from "@/lib/paints";
import { PAINTS } from "@/lib/paints";

interface BrandCardProps {
  brand: Brand;
  onClick: (brand: Brand) => void;
}

export function BrandCard({ brand, onClick }: BrandCardProps) {
  const productCount = PAINTS.filter((p) => p.brand === brand.name).length;

  return (
    <button
      id={`brand-card-${brand.id}`}
      onClick={() => onClick(brand)}
      className="group w-full overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {/* Accent header tile */}
      <div
        className="relative flex h-32 items-center justify-center overflow-hidden"
        style={{ background: brand.accentColor }}
      >
        {/* Decorative background circles */}
        <span
          className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20"
          style={{ background: "white" }}
          aria-hidden
        />
        <span
          className="absolute -bottom-8 -left-4 h-20 w-20 rounded-full opacity-10"
          style={{ background: "white" }}
          aria-hidden
        />

        {/* Initials */}
        <span className="relative font-serif text-4xl font-bold tracking-tight text-white drop-shadow-sm">
          {brand.initials}
        </span>

        {/* International badge */}
        {brand.origin === "international" && (
          <span className="absolute right-2.5 top-2.5 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            Intl
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-4">
        <h3 className="font-serif text-[15px] font-semibold leading-tight">{brand.name}</h3>
        <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{brand.tagline}</p>

        {/* Category chips */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {brand.categories.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
            >
              {cat}
            </span>
          ))}
          {brand.categories.length > 3 && (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
              +{brand.categories.length - 3}
            </span>
          )}
        </div>

        {/* Product count */}
        <p className="mt-3 text-xs text-muted-foreground">
          {productCount} product{productCount !== 1 ? "s" : ""}
        </p>
      </div>
    </button>
  );
}
