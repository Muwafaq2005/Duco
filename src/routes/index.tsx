import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { z } from "zod";
import { ArrowRight, ArrowUpRight, Check, Clock, Mail, MapPin, Menu, MessageCircle, Phone, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import homeImg from "@/assets/home.jpg";
import carImg from "@/assets/car.jpg";
import wallCrewImg from "@/assets/wall-crew.jpg";
import autoBoothImg from "@/assets/auto-booth.jpg";
import { BusinessMap } from "@/components/BusinessMap";
import { BUSINESS } from "@/lib/site-data";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { BRANDS_DATA } from "@/lib/paints";
import { getGoogleReviews, type ReviewsPayload } from "@/lib/reviews.functions";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

const reviewsQuery = queryOptions({ queryKey: ["google-reviews"], queryFn: () => getGoogleReviews(), staleTime: 60 * 60 * 1000 });

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DUCO PAINT & CO — Wall & Automobile Painting in Vellore" },
      { name: "description", content: "Wall painting and automobile painting in Vellore, Tamil Nadu. Home painting crews and a dust-controlled spray booth on Katpadi Road. Get a free quote." },
      { property: "og:title", content: "DUCO PAINT & CO — Wall & Automobile Painting in Vellore" },
      { property: "og:description", content: "Quality home and car painting on Katpadi Road, Vellore. Personal service and finishes you'll love." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(reviewsQuery),
  component: Index,
});

type Service = "Wall Painting" | "Automobile Painting";

function Index() {
  const [service, setService] = useState<Service>("Wall Painting");
  const quote = (s: Service) => {
    setService(s);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Services onQuote={quote} />
        <PaintsPreview />
        <Reviews />
        <Contact service={service} setService={setService} />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-calm relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 md:px-8 lg:grid-cols-12 lg:pb-24 lg:pt-16">
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-10 bg-primary" /> Homes · Vehicles · Since day one
          </p>
          <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            A fresh coat.<br />
            <em className="font-normal text-primary">A whole new</em><br />feeling.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Thoughtfully finished walls and beautifully renewed vehicles. Quality painting, personal service, and finishes you'll love coming back to.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-ink-foreground transition-colors hover:bg-ink/85">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-6 py-3.5 font-semibold transition-colors hover:bg-foreground hover:text-background">
              Get a Free Quote
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 border-t pt-6">
            {[["4.8★", "Google rating"], ["2", "Specialist teams"], ["Vellore", "Katpadi Road"]].map(([v, l]) => (
              <div key={l}><dt className="font-serif text-3xl">{v}</dt><dd className="mt-1 text-xs text-muted-foreground">{l}</dd></div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <figure className="relative">
              <img src={homeImg} alt="Freshly painted Indian living room with terracotta accent wall" width={1200} height={1504} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
              <figcaption className="absolute bottom-3 left-3 right-3 rounded-2xl bg-background/90 backdrop-blur p-3 sm:p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">01 · On-site crews</span>
                <p className="font-serif text-lg leading-tight sm:text-xl">Wall Painting</p>
              </figcaption>
            </figure>
            <figure className="relative mt-12 sm:mt-20">
              <img src={carImg} alt="Glossy burgundy car in a professional spray booth" width={1200} height={1504} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
              <figcaption className="absolute bottom-3 left-3 right-3 rounded-2xl bg-ink/85 backdrop-blur p-3 text-ink-foreground sm:p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand">02 · Spray booth</span>
                <p className="font-serif text-lg leading-tight sm:text-xl">Automobile Painting</p>
              </figcaption>
            </figure>
          </div>
          {/* swatch strip */}
          <div className="absolute -left-3 top-6 hidden flex-col shadow-sm sm:flex lg:-left-8" aria-hidden>
            {["bg-primary", "bg-sand", "bg-sage", "bg-accent"].map((c) => (
              <span key={c} className={`h-10 w-10 rounded-full ${c} border-2 border-background`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ onQuote }: { onQuote: (s: Service) => void }) {
  const items = [
    {
      key: "Wall Painting" as Service, num: "01", tag: "Residential · On-site crews", title: "Make your space feel new again.", img: wallCrewImg,
      alt: "Painter rolling fresh paint on an apartment wall",
      body: "Interior and exterior painting carried out by our own trained crews. We help you choose colours that suit your light and lifestyle, prepare surfaces dust-free, protect your furniture, and leave your home clean and refreshed.",
      points: ["Interior & exterior walls", "Colour consultation", "Dust-free surface preparation", "Furniture & floor protection"],
      cta: "Get a Wall Painting Quote",
    },
    {
      key: "Automobile Painting" as Service, num: "02", tag: "Workshop · Dust-controlled booth", title: "Bring back that just-painted feeling.", img: autoBoothImg,
      alt: "Technician spray painting a car panel inside a paint booth",
      body: "Our dedicated spray booth workshop keeps dust out and colour true. From a single panel to a full-body repaint, we restore scratches and dents and finish with a deep, mirror-like clear coat.",
      points: ["Full-body repainting", "Panel colour refresh & matching", "Scratch & dent restoration", "Mirror-finish clear coat"],
      cta: "Get an Auto Painting Quote",
    },
  ];
  return (
    <section id="services" className="border-t bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our painting services</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl font-light leading-tight md:text-5xl">Two crafts. One standard of care.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Separate, specialised teams — so your home and your vehicle each get the right people, tools and environment.</p>
        </div>
        <div className="space-y-20">
          {items.map((it, i) => (
            <article key={it.key} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className={`relative lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <img src={it.img} alt={it.alt} loading="lazy" width={1408} height={1008} className="aspect-[7/5] w-full rounded-3xl object-cover shadow-soft" />
                <span className="absolute -top-5 left-5 rounded-full bg-primary px-4 py-1 font-serif text-2xl text-primary-foreground">{it.num}</span>
              </div>
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{it.key} — {it.tag}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{it.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{it.body}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {it.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>
                  ))}
                </ul>
                <button onClick={() => onQuote(it.key)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-ink-foreground transition-colors hover:bg-ink/85">
                  {it.cta} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{8,15}$/, "Please enter a valid phone number"),
  details: z.string().trim().max(1000, "Please keep details under 1000 characters").optional(),
});

function Contact({ service, setService }: { service: Service; setService: (s: Service) => void }) {
  const [form, setForm] = useState({ name: "", phone: "", details: "" });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; details?: string }>({});
  const [sent, setSent] = useState(false);
  const waMsg = `Hi DUCO Paints, I'd like a quote for ${service.toLowerCase()}.${form.details ? ` ${form.details}` : ""}`;
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(waMsg.slice(0, 1000))}`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: { name?: string; phone?: string; details?: string } = {};
      r.error.issues.forEach((i) => ((errs as Record<string, string>)[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };
  const field = "mt-2 w-full rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring";

  return (
    <section id="contact" className="border-t py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contact · Get a quote</p>
          <h2 className="mt-3 font-serif text-4xl font-light leading-tight md:text-5xl">Visit Our Katpadi Road Workshop</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left side - Contact info cards and map */}
          <div className="space-y-6 lg:col-span-7">
            {/* Contact Info Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Address Card */}
              <div className="rounded-2xl border bg-card p-6 shadow-soft">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{BUSINESS.name}, {BUSINESS.address}</p>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              {BUSINESS.hours && (
                <div className="rounded-2xl border bg-card p-6 shadow-soft">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">Office Timings</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{BUSINESS.hours}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Phone Card */}
              <div className="rounded-2xl border bg-card p-6 shadow-soft">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Direct Helpline</h3>
                    <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="mt-2 block text-sm font-medium text-primary hover:underline">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card — spans full row when hours card is absent */}
              <div className={`rounded-2xl border bg-card p-6 shadow-soft${!BUSINESS.hours ? " sm:col-span-2" : ""}`}>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email Address</h3>
                    <a href={`mailto:${BUSINESS.email}`} className="mt-2 block break-all text-sm font-medium text-primary hover:underline">
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border bg-card p-4">
              <BusinessMap
                lat={BUSINESS.lat}
                lng={BUSINESS.lng}
                businessName={BUSINESS.name}
                address={BUSINESS.address}
                mapsUrl={BUSINESS.mapsUrl}
                directionsUrl={BUSINESS.directionsUrl}
                heightClassName="h-80"
              />
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-2xl border border-sage bg-sage/15 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage">
                  <MessageCircle className="h-6 w-6 text-ink" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold">WhatsApp Enquiry Desk</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Quick responses · Share photos · Get instant quotes</p>
                  <a href={waUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 font-semibold text-ink transition-opacity hover:opacity-90">
                    <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-5">
            {sent ? (
              <div className="flex h-full flex-col justify-center rounded-3xl border bg-card p-8" role="status">
                <span className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground"><Check className="h-6 w-6" /></span>
                <h3 className="mt-6 font-serif text-3xl">Almost done, {form.name.split(" ")[0]}!</h3>
                <p className="mt-3 text-muted-foreground">Your <strong className="text-foreground">{service}</strong> request is ready. Send it to us on WhatsApp — or call <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="font-semibold text-foreground hover:underline">{BUSINESS.phone}</a> — and we'll take it from there.</p>
                <a href={waUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-sage px-5 py-3 font-semibold text-ink transition-opacity hover:opacity-90">
                  <MessageCircle className="h-5 w-5" /> Send on WhatsApp
                </a>
                <button onClick={() => { setSent(false); setForm({ name: "", phone: "", details: "" }); }} className="mt-8 self-start text-sm font-semibold text-primary hover:underline">Start another request</button>
              </div>
            ) : (
              <div className="sticky top-20">
                <form onSubmit={submit} noValidate className="rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
                  <h3 className="font-serif text-2xl">Request a Callback</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Fill in your details and we'll reach out shortly.</p>

                  <fieldset className="mt-6">
                    <legend className="text-sm font-semibold">What would you like painted?</legend>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {(["Wall Painting", "Automobile Painting"] as Service[]).map((s) => (
                        <label key={s} className={`cursor-pointer rounded-xl border p-3 text-sm font-semibold transition-colors ${service === s ? "border-primary bg-primary/10" : "hover:bg-muted"}`}>
                          <input type="radio" name="service" value={s} checked={service === s} onChange={() => setService(s)} className="sr-only" />
                          {s}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="mt-5">
                    <label htmlFor="name" className="text-sm font-semibold">Full Name</label>
                    <input id="name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} className={field} />
                    {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                  </div>
                  <div className="mt-5">
                    <label htmlFor="phone" className="text-sm font-semibold">Phone Number</label>
                    <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} aria-invalid={!!errors.phone} className={field} placeholder="+91" />
                    {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
                  </div>
                  <div className="mt-5">
                    <label htmlFor="details" className="text-sm font-semibold">Project Details <span className="font-normal text-muted-foreground">(optional)</span></label>
                    <textarea id="details" rows={3} maxLength={1000} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className={field}
                      placeholder={service === "Wall Painting" ? "e.g. 2BHK interior, 3 rooms, need colour advice" : "e.g. Hyundai i20, scratch on rear door"} />
                    {errors.details && <p className="mt-1 text-sm text-destructive">{errors.details}</p>}
                  </div>
                  <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    Request a Callback <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


function BrandChip({ brand }: { brand: (typeof BRANDS_DATA)[number] }) {
  return (
    <span
      className="inline-flex shrink-0 flex-col items-center justify-center gap-1 rounded-2xl px-5 py-3 text-center"
      style={{ background: brand.accentColor }}
    >
      <span className="font-serif text-lg font-bold leading-none tracking-tight text-white">
        {brand.initials}
      </span>
      <span className="max-w-[9rem] truncate text-[10px] font-semibold leading-tight text-white/85">
        {brand.name}
      </span>
      {brand.origin === "international" && (
        <span className="rounded-full bg-white/20 px-1.5 py-px text-[8px] font-bold uppercase tracking-widest text-white">
          Intl
        </span>
      )}
    </span>
  );
}

function PaintsPreview() {
  const row1 = BRANDS_DATA.slice(0, 19);
  const row2 = BRANDS_DATA.slice(19);

  return (
    <section id="paints" className="border-t py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our paint range</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl font-light leading-tight md:text-5xl">
              The right paint makes all the difference.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            {BRANDS_DATA.length} brands — regional favourites and global leaders — for walls, wood, metal and vehicles.
          </p>
        </div>

        {/* Marquee strip — two rows, opposite directions, pause on hover */}
        <div
          className="relative mt-12 space-y-3 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          {/* Row 1 — scrolls left */}
          <div className="flex gap-3 marquee-track-left">
            {[...row1, ...row1].map((brand, i) => (
              <BrandChip key={`r1-${brand.id}-${i}`} brand={brand} />
            ))}
          </div>
          {/* Row 2 — scrolls right */}
          <div className="flex gap-3 marquee-track-right">
            {[...row2, ...row2].map((brand, i) => (
              <BrandChip key={`r2-${brand.id}-${i}`} brand={brand} />
            ))}
          </div>
        </div>

        <Link
          to="/paints"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-ink-foreground transition-colors hover:bg-ink/85"
        >
          Browse all {BRANDS_DATA.length} brands <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Stars({ value = 5, size = "h-4 w-4" }: { value?: number; size?: string }) {
  return (
    <span className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`${size} ${i < Math.round(value) ? "fill-star text-star" : "text-ink-foreground/30"}`} />)}
    </span>
  );
}

function Reviews() {
  const { data } = useSuspenseQuery(reviewsQuery);
  return <ReviewsView data={data} />;
}

function ReviewsView({ data }: { data: ReviewsPayload }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (!emblaApi || paused) return;
    const t = window.setInterval(() => emblaApi.scrollNext(), 6000);
    return () => window.clearInterval(t);
  }, [emblaApi, paused]);
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" className="bg-ink py-20 text-ink-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand">Google reviews</p>
          <h2 className="mt-3 font-serif text-4xl font-light leading-tight md:text-5xl">Good work speaks for itself.</h2>
          <div className="mt-8 rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-6">
            <div className="flex items-end gap-3">
              <span className="font-serif text-6xl leading-none">{data.rating.toFixed(1)}</span>
              <div className="pb-1"><Stars value={data.rating} size="h-5 w-5" /><p className="mt-1 text-xs text-ink-foreground/60">{data.count} reviews on Google</p></div>
            </div>
            <a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sand hover:underline">Read all reviews on Google <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="min-w-0 lg:col-span-8">
          {data.reviews.length === 0 ? (
            <div className="flex h-full items-center rounded-3xl border border-ink-foreground/15 p-8 text-ink-foreground/70">
              Customer reviews couldn't be loaded right now — read them directly on our Google listing.
            </div>
          ) : (
            <>
              <div ref={emblaRef} className="overflow-hidden" aria-roledescription="carousel" aria-label="Google reviews"
                onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                <div className="flex gap-4">
                  {data.reviews.map((r, i) => (
                    <figure key={i} className="flex min-w-0 flex-[0_0_86%] flex-col rounded-3xl bg-background p-7 text-foreground sm:flex-[0_0_60%] md:flex-[0_0_calc(50%_-_0.5rem)]">
                      <Stars value={r.rating} />
                      <blockquote className="mt-5 line-clamp-[8] flex-1 font-serif text-lg leading-relaxed">"{r.text}"</blockquote>
                      <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                        {r.photo ? <img src={r.photo} alt="" referrerPolicy="no-referrer" className="h-10 w-10 rounded-full" /> : <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">{r.author[0]}</span>}
                        <span>
                          {r.profileUrl ? <a href={r.profileUrl} target="_blank" rel="noreferrer" className="block text-sm font-semibold hover:underline">{r.author}</a> : <span className="block text-sm font-semibold">{r.author}</span>}
                          <span className="text-xs text-muted-foreground">{r.when} · Google</span>
                        </span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button aria-label="Previous review" onClick={prev} className="rounded-full border border-ink-foreground/30 p-3 hover:bg-ink-foreground/10"><ChevronLeft className="h-5 w-5" /></button>
                <button aria-label="Next review" onClick={next} className="rounded-full border border-ink-foreground/30 p-3 hover:bg-ink-foreground/10"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
