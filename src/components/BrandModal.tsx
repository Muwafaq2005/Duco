import { useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import type { Brand, Paint } from "@/lib/paints";
import { BUSINESS } from "@/lib/site-data";

interface BrandModalProps {
  brand: Brand;
  products: Paint[];
  onClose: () => void;
}

export function BrandModal({ brand, products, onClose }: BrandModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const waMsg = `Hi DUCO Paints, I'd like to know more about ${brand.name} paints.`;
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(waMsg)}`;

  return (
    /* Backdrop */
    <div
      id="brand-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${brand.name} brand details`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: "oklch(0.27 0.025 200 / 0.65)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop blur layer (separate so content isn't blurred) */}
      <div className="fixed inset-0 -z-10 backdrop-blur-sm" aria-hidden />

      {/* Modal panel */}
      <div
        id={`brand-modal-${brand.id}`}
        className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto rounded-3xl bg-card shadow-2xl"
        style={{ scrollbarGutter: "stable" }}
      >
        {/* ── Header ────────────────────────────────────────────────── */}
        <div
          className="sticky top-0 z-10 flex items-start gap-5 rounded-t-3xl border-b p-6"
          style={{
            background: `color-mix(in oklab, ${brand.accentColor} 12%, var(--card))`,
          }}
        >
          {/* Accent tile */}
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-md"
            style={{ background: brand.accentColor }}
            aria-hidden
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              {brand.initials}
            </span>
          </div>

          {/* Brand info */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-serif text-2xl font-light leading-tight">{brand.name}</h2>
              {brand.origin === "international" && (
                <span className="rounded-full border border-foreground/20 px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                  International
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{brand.tagline}</p>

            {/* Category chips */}
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {brand.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close brand details"
            className="shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ── Products ──────────────────────────────────────────────── */}
        <div className="p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {products.length} Products
          </p>

          {products.length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2">
              {products.map((paint) => (
                <li
                  key={paint.id}
                  className="overflow-hidden rounded-xl border border-border/70 bg-background"
                >
                  {/* Swatch strip */}
                  <div className="h-14 w-full" style={{ background: paint.swatch }} aria-hidden />
                  <div className="p-3.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {paint.category} · {paint.finish}
                    </p>
                    <h4 className="mt-0.5 font-serif text-[14px] font-semibold leading-snug">
                      {paint.name}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {paint.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-2xl border border-dashed p-8 text-center text-sm text-muted-foreground">
              Product details coming soon — ask us for the full range.
            </p>
          )}

          {/* ── WhatsApp CTA ─────────────────────────────────────────── */}
          <div className="mt-7 flex flex-wrap items-center gap-4 rounded-2xl border border-sage bg-sage/15 p-5">
            <div className="flex-1">
              <p className="font-semibold">Interested in {brand.name}?</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Chat with us on WhatsApp for pricing, availability and samples.
              </p>
            </div>
            <a
              id={`brand-modal-wa-${brand.id}`}
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sage px-5 py-3 font-semibold text-ink transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
