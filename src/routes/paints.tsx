import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { BrandCard } from "@/components/BrandCard";
import { BrandModal } from "@/components/BrandModal";
import { BRANDS_DATA, PAINTS, filterBrands, type Brand } from "@/lib/paints";

export const Route = createFileRoute("/paints")({
  head: () => ({
    meta: [
      { title: "Paint Brands — DUCO PAINT & CO Vellore" },
      { name: "description", content: "Browse all 38 paint brands at DUCO PAINT & CO, Vellore — regional leaders and international names for walls, wood, metal and automotive finishes." },
      { property: "og:title", content: "Paint Brands — DUCO PAINT & CO Vellore" },
      { property: "og:description", content: "Search and explore 38 paint brands — from Asian Paints to Jotun — at DUCO PAINT & CO on Katpadi Road, Vellore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PaintsPage,
});

function PaintsPage() {
  const [query, setQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const filtered = useMemo(() => filterBrands(BRANDS_DATA, query), [query]);

  const brandProducts = useMemo(
    () => (selectedBrand ? PAINTS.filter((p) => p.brand === selectedBrand.name) : []),
    [selectedBrand],
  );

  const intlCount = BRANDS_DATA.filter((b) => b.origin === "international").length;
  const regionalCount = BRANDS_DATA.length - intlCount;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-20">

        {/* ── Page header ─────────────────────────────────────────────── */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Our paint range
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl font-light leading-tight md:text-6xl">
          {BRANDS_DATA.length} brands. Every finish you need.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          {regionalCount} regional and {intlCount} international brands — for interior walls, exteriors, wood, metal and automotive. Not sure which? <a href="/#contact" className="font-semibold text-primary hover:underline">Ask us</a> — we'll help you choose.
        </p>

        {/* ── Search ──────────────────────────────────────────────────── */}
        <div className="mt-10 flex max-w-lg items-center gap-3 rounded-2xl border border-border/70 bg-card p-2 pl-5 shadow-soft">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
          <input
            id="brand-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search brands…"
            aria-label="Search paint brands"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="rounded-xl p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* ── Result count ─────────────────────────────────────────────── */}
        <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">
          {filtered.length === BRANDS_DATA.length
            ? `All ${BRANDS_DATA.length} brands`
            : `${filtered.length} brand${filtered.length !== 1 ? "s" : ""} found`}
        </p>

        {/* ── Brand grid ──────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((brand) => (
              <li key={brand.id}>
                <BrandCard brand={brand} onClick={setSelectedBrand} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed p-14 text-center">
            <p className="font-serif text-xl text-muted-foreground">No brands match "{query}"</p>
            <button
              onClick={() => setQuery("")}
              className="mt-4 text-sm font-semibold text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </main>

      <SiteFooter />

      {/* ── Brand detail modal ───────────────────────────────────────── */}
      {selectedBrand && (
        <BrandModal
          brand={selectedBrand}
          products={brandProducts}
          onClose={() => setSelectedBrand(null)}
        />
      )}
    </div>
  );
}
