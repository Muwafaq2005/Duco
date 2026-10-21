// Paint range data — edit freely to match your actual stock.
// Brand list: 30 regional + 8 international = 38 total.
// Products: ~3–4 per brand (placeholders — replace with real product lines).

export type PaintCategory = "Interior" | "Exterior" | "Wood & Metal" | "Automotive" | "Primer & Putty" | "Waterproofing";
export type PaintFinish = "Matt" | "Satin" | "Sheen" | "Gloss" | "Clear coat";

export type Brand = {
  id: string;
  name: string;
  initials: string;     // 2–3 letter abbreviation shown in the accent tile
  accentColor: string;  // oklch colour for the tile background
  tagline: string;      // one-line description
  origin: "regional" | "international";
  categories: PaintCategory[];
};

export type Paint = {
  id: string;
  name: string;
  brand: string;        // must match Brand.name exactly
  category: PaintCategory;
  finish: PaintFinish;
  swatch: string;       // oklch colour for the product swatch
  note: string;
};

export const CATEGORIES: PaintCategory[] = [
  "Interior", "Exterior", "Wood & Metal", "Automotive", "Primer & Putty", "Waterproofing",
];
export const FINISHES: PaintFinish[] = ["Matt", "Satin", "Sheen", "Gloss", "Clear coat"];

// ─── 38 Brands ────────────────────────────────────────────────────────────────
// Replace any name/tagline/colour to match your real brand list.

export const BRANDS_DATA: Brand[] = [
  // ── Regional (30) ───────────────────────────────────────────────────────────
  {
    id: "asian-paints", name: "Asian Paints", initials: "AP",
    accentColor: "oklch(0.60 0.18 25)",
    tagline: "India's most trusted paint brand",
    origin: "regional",
    categories: ["Interior", "Exterior", "Wood & Metal", "Waterproofing", "Primer & Putty"],
  },
  {
    id: "berger-paints", name: "Berger Paints", initials: "BP",
    accentColor: "oklch(0.55 0.16 40)",
    tagline: "Celebrating colour & craft since 1923",
    origin: "regional",
    categories: ["Interior", "Exterior", "Wood & Metal", "Primer & Putty"],
  },
  {
    id: "kansai-nerolac", name: "Kansai Nerolac", initials: "KN",
    accentColor: "oklch(0.58 0.14 58)",
    tagline: "The healthy home paint",
    origin: "regional",
    categories: ["Interior", "Exterior", "Wood & Metal", "Automotive"],
  },
  {
    id: "indigo-paints", name: "Indigo Paints", initials: "IG",
    accentColor: "oklch(0.48 0.20 270)",
    tagline: "India's fastest growing paint company",
    origin: "regional",
    categories: ["Interior", "Exterior", "Primer & Putty"],
  },
  {
    id: "birla-opus", name: "Birla Opus", initials: "BO",
    accentColor: "oklch(0.58 0.14 158)",
    tagline: "Premium paints by Aditya Birla Group",
    origin: "regional",
    categories: ["Interior", "Exterior", "Waterproofing"],
  },
  {
    id: "jsw-paints", name: "JSW Paints", initials: "JW",
    accentColor: "oklch(0.50 0.16 220)",
    tagline: "Painting the future of India",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "sheenlac", name: "Sheenlac", initials: "SL",
    accentColor: "oklch(0.58 0.14 80)",
    tagline: "South India's favourite finish",
    origin: "regional",
    categories: ["Interior", "Wood & Metal"],
  },
  {
    id: "british-paints", name: "British Paints", initials: "BR",
    accentColor: "oklch(0.50 0.14 200)",
    tagline: "A heritage of quality coatings",
    origin: "regional",
    categories: ["Interior", "Exterior", "Wood & Metal"],
  },
  {
    id: "shalimar-paints", name: "Shalimar Paints", initials: "SH",
    accentColor: "oklch(0.56 0.16 340)",
    tagline: "Protecting beauty since 1902",
    origin: "regional",
    categories: ["Interior", "Exterior", "Wood & Metal"],
  },
  {
    id: "snowcem", name: "Snowcem", initials: "SC",
    accentColor: "oklch(0.50 0.10 210)",
    tagline: "The original cement-based exterior coat",
    origin: "regional",
    categories: ["Exterior", "Waterproofing", "Primer & Putty"],
  },
  {
    id: "mrf-corp", name: "MRF Corp", initials: "MR",
    accentColor: "oklch(0.48 0.14 32)",
    tagline: "Trusted for tyre and surface coatings",
    origin: "regional",
    categories: ["Wood & Metal", "Automotive"],
  },
  {
    id: "pidilite", name: "Pidilite (Dr. Fixit)", initials: "DF",
    accentColor: "oklch(0.55 0.16 130)",
    tagline: "India's leading waterproofing solutions",
    origin: "regional",
    categories: ["Waterproofing", "Primer & Putty"],
  },
  {
    id: "garware-paints", name: "Garware Paints", initials: "GW",
    accentColor: "oklch(0.50 0.14 250)",
    tagline: "Industrial-grade exterior performance",
    origin: "regional",
    categories: ["Exterior", "Waterproofing"],
  },
  {
    id: "surya-teja", name: "Surya Teja Paints", initials: "ST",
    accentColor: "oklch(0.62 0.18 52)",
    tagline: "Bright colours for bright homes",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "choksey", name: "Choksey Chemicals", initials: "CK",
    accentColor: "oklch(0.52 0.14 170)",
    tagline: "Specialist waterproofing chemistry",
    origin: "regional",
    categories: ["Waterproofing", "Primer & Putty"],
  },
  {
    id: "national-paints", name: "National Paints", initials: "NP",
    accentColor: "oklch(0.55 0.16 12)",
    tagline: "Reliable coatings for every surface",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "raj-lakshmi", name: "Raj Lakshmi Paints", initials: "RL",
    accentColor: "oklch(0.56 0.16 310)",
    tagline: "Premium paints at fair value",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "vipul-paints", name: "Vipul Paints", initials: "VP",
    accentColor: "oklch(0.54 0.14 190)",
    tagline: "Vibrant colours, lasting quality",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "vinayak-paints", name: "Vinayak Paints", initials: "VN",
    accentColor: "oklch(0.58 0.12 100)",
    tagline: "Home painting made simple",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "chamundi-paints", name: "Chamundi Paints", initials: "CP",
    accentColor: "oklch(0.52 0.18 280)",
    tagline: "South India's regional champion",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "sakariya-paints", name: "Sakariya Paints", initials: "SK",
    accentColor: "oklch(0.56 0.16 355)",
    tagline: "Colour for every corner",
    origin: "regional",
    categories: ["Interior", "Exterior", "Wood & Metal"],
  },
  {
    id: "pearl-paints", name: "Pearl Paints", initials: "PR",
    accentColor: "oklch(0.50 0.12 230)",
    tagline: "Luminous finishes for modern homes",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "rainbow-paints", name: "Rainbow Paints", initials: "RW",
    accentColor: "oklch(0.52 0.18 300)",
    tagline: "A spectrum of possibilities",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "anchor-paints", name: "Anchor Paints", initials: "AN",
    accentColor: "oklch(0.50 0.16 242)",
    tagline: "Anchored in quality",
    origin: "regional",
    categories: ["Interior", "Exterior", "Wood & Metal"],
  },
  {
    id: "magna-paints", name: "Magna Paints", initials: "MG",
    accentColor: "oklch(0.58 0.14 70)",
    tagline: "Magnify your living space",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "remi-paints", name: "Remi Paints", initials: "RM",
    accentColor: "oklch(0.52 0.16 22)",
    tagline: "Colour that speaks to you",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "virgo-paints", name: "Virgo Paints", initials: "VG",
    accentColor: "oklch(0.54 0.16 145)",
    tagline: "Pure precision in every coat",
    origin: "regional",
    categories: ["Interior", "Exterior"],
  },
  {
    id: "parekh-paints", name: "Parekh Paints", initials: "PK",
    accentColor: "oklch(0.52 0.12 260)",
    tagline: "Trusted family paints for decades",
    origin: "regional",
    categories: ["Interior", "Exterior", "Wood & Metal"],
  },
  {
    id: "jenson-nicholson", name: "Jenson & Nicholson", initials: "JN",
    accentColor: "oklch(0.46 0.14 350)",
    tagline: "A legacy of fine finishes",
    origin: "regional",
    categories: ["Interior", "Exterior", "Wood & Metal", "Primer & Putty"],
  },
  {
    id: "duco", name: "DUCO", initials: "DC",
    accentColor: "oklch(0.42 0.16 255)",
    tagline: "Our house brand — workshop-proven",
    origin: "regional",
    categories: ["Automotive", "Wood & Metal", "Primer & Putty"],
  },

  // ── International (8) ───────────────────────────────────────────────────────
  {
    id: "dulux", name: "Dulux (AkzoNobel)", initials: "DX",
    accentColor: "oklch(0.50 0.20 242)",
    tagline: "Let's colour — the world's favourite paint",
    origin: "international",
    categories: ["Interior", "Exterior", "Wood & Metal", "Primer & Putty"],
  },
  {
    id: "jotun", name: "Jotun", initials: "JT",
    accentColor: "oklch(0.50 0.20 155)",
    tagline: "Jotun protects and beautifies",
    origin: "international",
    categories: ["Interior", "Exterior", "Waterproofing"],
  },
  {
    id: "nippon-paint", name: "Nippon Paint", initials: "NI",
    accentColor: "oklch(0.55 0.20 15)",
    tagline: "Serving wonders — precision from Japan",
    origin: "international",
    categories: ["Interior", "Exterior", "Wood & Metal"],
  },
  {
    id: "sherwin-williams", name: "Sherwin-Williams", initials: "SW",
    accentColor: "oklch(0.48 0.14 38)",
    tagline: "Cover the earth — American precision",
    origin: "international",
    categories: ["Interior", "Exterior", "Wood & Metal"],
  },
  {
    id: "ppg-paints", name: "PPG Paints", initials: "PG",
    accentColor: "oklch(0.50 0.18 228)",
    tagline: "We protect and beautify the world",
    origin: "international",
    categories: ["Interior", "Exterior", "Automotive"],
  },
  {
    id: "sikkens", name: "Sikkens", initials: "SI",
    accentColor: "oklch(0.50 0.14 185)",
    tagline: "Refinishing excellence by AkzoNobel",
    origin: "international",
    categories: ["Automotive", "Wood & Metal"],
  },
  {
    id: "tikkurila", name: "Tikkurila", initials: "TK",
    accentColor: "oklch(0.52 0.14 202)",
    tagline: "Nordic quality for demanding climates",
    origin: "international",
    categories: ["Interior", "Exterior", "Wood & Metal"],
  },
  {
    id: "rust-oleum", name: "Rust-Oleum", initials: "RO",
    accentColor: "oklch(0.46 0.20 32)",
    tagline: "Stop rust in its tracks",
    origin: "international",
    categories: ["Wood & Metal", "Exterior"],
  },
];

// ─── Paint Products (~3–4 per brand) ─────────────────────────────────────────
// Placeholder data — confirm actual product names and finishes with your stock.

const p = (
  brand: string, name: string,
  category: PaintCategory, finish: PaintFinish,
  swatch: string, note: string,
): Paint => ({
  id: `${brand}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  brand, name, category, finish, swatch, note,
});

export const PAINTS: Paint[] = [
  // Asian Paints
  p("Asian Paints","Royale Luxury Emulsion","Interior","Sheen","oklch(0.86 0.05 150)","Smooth, washable finish for living spaces"),
  p("Asian Paints","Apcolite Premium Emulsion","Interior","Matt","oklch(0.90 0.03 80)","Everyday interior walls on a budget"),
  p("Asian Paints","Apex Ultima","Exterior","Sheen","oklch(0.78 0.06 60)","Weather-resistant exterior protection"),
  p("Asian Paints","Damp Proof","Waterproofing","Matt","oklch(0.82 0.02 230)","Roof and wall waterproof coating"),

  // Berger Paints
  p("Berger Paints","Silk Glamor","Interior","Sheen","oklch(0.83 0.06 20)","Rich silky finish for interiors"),
  p("Berger Paints","WeatherCoat Long Life","Exterior","Matt","oklch(0.76 0.04 170)","Durable all-season exterior emulsion"),
  p("Berger Paints","Luxol Hi-Gloss Enamel","Wood & Metal","Gloss","oklch(0.55 0.10 30)","Glossy enamel for doors and grilles"),

  // Kansai Nerolac
  p("Kansai Nerolac","Excel Matt","Interior","Matt","oklch(0.88 0.03 120)","Low-VOC, healthy home interior coat"),
  p("Kansai Nerolac","Excel Mica Marble","Exterior","Sheen","oklch(0.79 0.05 80)","Textured exterior elegance"),
  p("Kansai Nerolac","Nerolac Auto Enamel","Automotive","Gloss","oklch(0.45 0.12 25)","OEM-grade automotive colour coat"),

  // Indigo Paints
  p("Indigo Paints","Emulsion Exterior","Exterior","Sheen","oklch(0.80 0.05 130)","100% acrylic weather-proof exterior"),
  p("Indigo Paints","Interior Emulsion","Interior","Matt","oklch(0.89 0.03 90)","Bright whites and vivid pastels"),
  p("Indigo Paints","Exterior Primer","Primer & Putty","Matt","oklch(0.93 0.01 100)","Alkali-resistant exterior primer"),

  // Birla Opus
  p("Birla Opus","Style Emulsion","Interior","Satin","oklch(0.87 0.05 300)","Modern satin interior colours"),
  p("Birla Opus","One Pure Elegance","Exterior","Sheen","oklch(0.79 0.05 90)","Elegant exterior sheen finish"),
  p("Birla Opus","AquaSeal Pro","Waterproofing","Matt","oklch(0.82 0.02 200)","Crystal-clear waterproofing membrane"),

  // JSW Paints
  p("JSW Paints","Steelium Interior","Interior","Matt","oklch(0.88 0.04 180)","Modern interiors with a clean look"),
  p("JSW Paints","Steelium Exterior","Exterior","Sheen","oklch(0.80 0.05 200)","All-weather exterior finish"),
  p("JSW Paints","Steelium Primer","Primer & Putty","Matt","oklch(0.94 0.01 200)","Ready primer for smooth walls"),

  // Sheenlac
  p("Sheenlac","Interior Emulsion","Interior","Matt","oklch(0.90 0.04 120)","Local favourite for home interiors"),
  p("Sheenlac","Wood Stain","Wood & Metal","Satin","oklch(0.50 0.08 55)","Brings out natural wood grain beautifully"),
  p("Sheenlac","PU Gloss","Wood & Metal","Gloss","oklch(0.60 0.10 70)","High-durability polyurethane finish"),

  // British Paints
  p("British Paints","Heritage Emulsion","Interior","Satin","oklch(0.85 0.04 200)","Rich colour emulsion with lasting depth"),
  p("British Paints","All Weather Exterior","Exterior","Sheen","oklch(0.78 0.05 160)","All-season weather protection"),
  p("British Paints","Enamel Gloss","Wood & Metal","Gloss","oklch(0.65 0.09 35)","Tough gloss for metal surfaces"),

  // Shalimar Paints
  p("Shalimar Paints","Superlac Premium Emulsion","Interior","Sheen","oklch(0.84 0.05 280)","Premium sheen for elegant rooms"),
  p("Shalimar Paints","Vogue Exterior","Exterior","Matt","oklch(0.77 0.04 140)","Matte exterior with UV protection"),
  p("Shalimar Paints","Granoply Enamel","Wood & Metal","Gloss","oklch(0.60 0.10 50)","Industrial-grade gloss enamel"),

  // Snowcem
  p("Snowcem","Cement Paint","Exterior","Matt","oklch(0.88 0.02 90)","Classic cement-based exterior coat"),
  p("Snowcem","Waterproof Coat","Waterproofing","Matt","oklch(0.85 0.02 200)","Breathable waterproofing base layer"),
  p("Snowcem","Wall Primer","Primer & Putty","Matt","oklch(0.92 0.01 90)","Alkali-resistant wall primer"),

  // MRF Corp
  p("MRF Corp","Vapocure PU Gloss","Wood & Metal","Gloss","oklch(0.60 0.08 60)","Tough polyurethane finish for wood"),
  p("MRF Corp","Vapocure Auto PU","Automotive","Gloss","oklch(0.45 0.10 30)","Automotive refinishing PU topcoat"),
  p("MRF Corp","Zinga Primer","Primer & Putty","Matt","oklch(0.70 0.04 90)","Zinc-rich anti-corrosion primer"),

  // Pidilite (Dr. Fixit)
  p("Pidilite (Dr. Fixit)","Pidifin 2K","Waterproofing","Matt","oklch(0.80 0.02 160)","Two-component crystalline waterproofing"),
  p("Pidilite (Dr. Fixit)","Roff Tileflex","Waterproofing","Matt","oklch(0.75 0.02 140)","Flexible waterproof tile coat"),
  p("Pidilite (Dr. Fixit)","Dr. Fixit Fastflex","Waterproofing","Matt","oklch(0.82 0.02 180)","Fast-cure elastomeric membrane"),

  // Garware Paints
  p("Garware Paints","Exterior Shield","Exterior","Sheen","oklch(0.78 0.04 160)","Industrial-grade exterior coating"),
  p("Garware Paints","Waterbase Coat","Waterproofing","Matt","oklch(0.82 0.02 200)","Breathable waterproof base coat"),
  p("Garware Paints","Roof Seal","Waterproofing","Matt","oklch(0.80 0.02 220)","Elastomeric roof waterproofing system"),

  // Surya Teja Paints
  p("Surya Teja Paints","Interior Luxury","Interior","Satin","oklch(0.86 0.05 60)","Vibrant satin interior finish"),
  p("Surya Teja Paints","Exterior Plus","Exterior","Sheen","oklch(0.79 0.05 80)","Monsoon-proof exterior coat"),
  p("Surya Teja Paints","Wall Putty","Primer & Putty","Matt","oklch(0.93 0.01 80)","Smooth polymer wall putty"),

  // Choksey Chemicals
  p("Choksey Chemicals","Chokseal Crystalline","Waterproofing","Matt","oklch(0.80 0.02 170)","Crystalline waterproofing admixture"),
  p("Choksey Chemicals","Chokcoat Elastomeric","Waterproofing","Matt","oklch(0.78 0.02 180)","Flexible elastomeric waterproof coat"),
  p("Choksey Chemicals","Chokprimer Universal","Primer & Putty","Matt","oklch(0.90 0.01 100)","Universal multi-surface primer"),

  // National Paints
  p("National Paints","Interior Sheen","Interior","Sheen","oklch(0.85 0.04 330)","Smooth sheen for bedrooms and halls"),
  p("National Paints","Exterior Coat","Exterior","Matt","oklch(0.77 0.04 160)","Durable matte exterior emulsion"),
  p("National Paints","Primer Base","Primer & Putty","Matt","oklch(0.93 0.01 90)","Multi-surface ready-to-use primer"),

  // Raj Lakshmi Paints
  p("Raj Lakshmi Paints","Premium Interior","Interior","Satin","oklch(0.86 0.05 310)","Silky satin for bedrooms and halls"),
  p("Raj Lakshmi Paints","Exterior Guard","Exterior","Sheen","oklch(0.78 0.04 140)","Weather-guard sheen coat"),
  p("Raj Lakshmi Paints","Wall Putty","Primer & Putty","Matt","oklch(0.94 0.01 90)","Fine white polymer wall putty"),

  // Vipul Paints
  p("Vipul Paints","Vivid Interior","Interior","Matt","oklch(0.88 0.04 190)","True-colour matt interior coat"),
  p("Vipul Paints","Weather Guard","Exterior","Sheen","oklch(0.79 0.05 190)","Monsoon-tough exterior protection"),
  p("Vipul Paints","Wall Primer","Primer & Putty","Matt","oklch(0.92 0.01 180)","Smooth sealing wall primer"),

  // Vinayak Paints
  p("Vinayak Paints","Home Emulsion","Interior","Matt","oklch(0.89 0.03 100)","Everyday home interior coat"),
  p("Vinayak Paints","Exterior Emulsion","Exterior","Sheen","oklch(0.80 0.04 100)","Reliable exterior protection"),
  p("Vinayak Paints","Eco Primer","Primer & Putty","Matt","oklch(0.93 0.01 100)","Eco-friendly ready-mix primer"),

  // Chamundi Paints
  p("Chamundi Paints","Interior Matt","Interior","Matt","oklch(0.88 0.04 280)","Smooth interior matt coat"),
  p("Chamundi Paints","Exterior Shield","Exterior","Sheen","oklch(0.79 0.05 280)","South India all-weather sheen coat"),
  p("Chamundi Paints","Base Putty","Primer & Putty","Matt","oklch(0.93 0.01 280)","Surface-levelling white putty"),

  // Sakariya Paints
  p("Sakariya Paints","Interior Premium","Interior","Satin","oklch(0.86 0.05 355)","Premium satin for bedrooms"),
  p("Sakariya Paints","Exterior Premium","Exterior","Sheen","oklch(0.79 0.05 355)","UV-resistant exterior sheen"),
  p("Sakariya Paints","Metal Enamel","Wood & Metal","Gloss","oklch(0.60 0.10 355)","Quick-dry gloss enamel for metal"),

  // Pearl Paints
  p("Pearl Paints","Pearlescent Interior","Interior","Satin","oklch(0.87 0.05 220)","Lustrous pearlescent satin finish"),
  p("Pearl Paints","Pearl Exterior","Exterior","Sheen","oklch(0.80 0.04 220)","Elegant pearl sheen exterior coat"),
  p("Pearl Paints","Wall Seal","Primer & Putty","Matt","oklch(0.93 0.01 220)","Deep-penetrating wall sealer"),

  // Rainbow Paints
  p("Rainbow Paints","Spectrum Interior","Interior","Matt","oklch(0.88 0.04 300)","Wide colour spectrum interior coat"),
  p("Rainbow Paints","Spectrum Exterior","Exterior","Matt","oklch(0.78 0.04 300)","Colourfast matte exterior emulsion"),
  p("Rainbow Paints","Rainbow Enamel","Wood & Metal","Gloss","oklch(0.60 0.10 300)","Tough gloss for ironwork and grilles"),

  // Anchor Paints
  p("Anchor Paints","Anchor Interior","Interior","Matt","oklch(0.88 0.04 240)","Reliable quality interior matt coat"),
  p("Anchor Paints","Anchor Exterior","Exterior","Sheen","oklch(0.79 0.05 240)","Weather-anchored exterior protection"),
  p("Anchor Paints","Anchor Enamel","Wood & Metal","Gloss","oklch(0.60 0.10 240)","Durable gloss enamel coat"),

  // Magna Paints
  p("Magna Paints","Magna Interior","Interior","Satin","oklch(0.87 0.05 70)","Silky satin interior coat"),
  p("Magna Paints","Magna Exterior","Exterior","Sheen","oklch(0.79 0.05 70)","All-weather exterior finish"),
  p("Magna Paints","Magna Putty","Primer & Putty","Matt","oklch(0.94 0.01 70)","Smooth acrylic wall putty"),

  // Remi Paints
  p("Remi Paints","Remi Interior","Interior","Matt","oklch(0.88 0.04 20)","Affordable quality interior coat"),
  p("Remi Paints","Remi Exterior","Exterior","Sheen","oklch(0.79 0.05 20)","Monsoon-proof exterior emulsion"),
  p("Remi Paints","Remi Primer","Primer & Putty","Matt","oklch(0.93 0.01 20)","Ready-to-use wall primer"),

  // Virgo Paints
  p("Virgo Paints","Virgo Interior","Interior","Matt","oklch(0.88 0.04 145)","Pure finish for home interiors"),
  p("Virgo Paints","Virgo Exterior","Exterior","Sheen","oklch(0.79 0.05 145)","Precision exterior weather coat"),
  p("Virgo Paints","Virgo Enamel","Wood & Metal","Gloss","oklch(0.60 0.10 145)","Gloss enamel for trim and doors"),

  // Parekh Paints
  p("Parekh Paints","Parekh Emulsion","Interior","Satin","oklch(0.86 0.04 260)","Family-trusted satin emulsion"),
  p("Parekh Paints","Parekh Exterior","Exterior","Sheen","oklch(0.79 0.04 260)","Long-life exterior coat"),
  p("Parekh Paints","Parekh Enamel","Wood & Metal","Gloss","oklch(0.60 0.09 260)","Hard gloss for gates and grilles"),

  // Jenson & Nicholson
  p("Jenson & Nicholson","J&N Acrylic Interior","Interior","Matt","oklch(0.88 0.04 350)","Heritage-quality interior matt"),
  p("Jenson & Nicholson","J&N Exterior Emulsion","Exterior","Sheen","oklch(0.79 0.05 350)","Classic long-life exterior emulsion"),
  p("Jenson & Nicholson","J&N Synthetic Enamel","Wood & Metal","Gloss","oklch(0.60 0.10 350)","Timeless synthetic gloss enamel"),

  // DUCO (house brand)
  p("DUCO","Auto Primer Surfacer","Automotive","Matt","oklch(0.70 0.01 250)","Smooth base coat before colour"),
  p("DUCO","Synthetic Enamel","Wood & Metal","Gloss","oklch(0.65 0.12 150)","Classic high-gloss enamel"),
  p("DUCO","2K Clear Coat","Automotive","Clear coat","oklch(0.95 0.01 230)","Deep mirror-like protective finish"),

  // Dulux (AkzoNobel)
  p("Dulux (AkzoNobel)","Velvet Touch","Interior","Satin","oklch(0.84 0.05 200)","Soft velvety look, easy to clean"),
  p("Dulux (AkzoNobel)","Weathershield Max","Exterior","Sheen","oklch(0.80 0.05 110)","Long-lasting colour against sun and rain"),
  p("Dulux (AkzoNobel)","Dulux Gloss","Wood & Metal","Gloss","oklch(0.60 0.09 200)","Premium gloss for wood and metal"),

  // Jotun
  p("Jotun","Fenomastic My Home","Interior","Matt","oklch(0.88 0.04 250)","Low-odour, family-friendly interior coat"),
  p("Jotun","Jotashield","Exterior","Sheen","oklch(0.80 0.03 140)","Premium high-build exterior shield"),
  p("Jotun","Jotaplast Max","Waterproofing","Matt","oklch(0.82 0.02 160)","Flexible elastomeric waterproof coat"),

  // Nippon Paint
  p("Nippon Paint","Vinilex 5000","Interior","Matt","oklch(0.89 0.03 15)","Japanese precision interior coat"),
  p("Nippon Paint","Weathergard","Exterior","Sheen","oklch(0.80 0.05 15)","All-weather exterior emulsion"),
  p("Nippon Paint","Wood Care","Wood & Metal","Satin","oklch(0.55 0.08 55)","Natural satin wood finish"),

  // Sherwin-Williams
  p("Sherwin-Williams","Duration Interior","Interior","Satin","oklch(0.85 0.05 40)","Premium washable satin interior"),
  p("Sherwin-Williams","Emerald Exterior","Exterior","Satin","oklch(0.79 0.06 40)","Self-cleaning exterior satin coat"),
  p("Sherwin-Williams","ProMar Enamel","Wood & Metal","Gloss","oklch(0.60 0.09 40)","Professional gloss enamel"),

  // PPG Paints
  p("PPG Paints","Timeless Interior","Interior","Matt","oklch(0.88 0.04 230)","Premium one-coat coverage interior"),
  p("PPG Paints","PPG Exterior","Exterior","Sheen","oklch(0.79 0.05 230)","Durable exterior weather protection"),
  p("PPG Paints","Deltron Basecoat","Automotive","Gloss","oklch(0.35 0.08 260)","Precise colour matching for panels"),

  // Sikkens
  p("Sikkens","Autocryl LV","Automotive","Gloss","oklch(0.42 0.12 25)","Low-VOC automotive topcoat"),
  p("Sikkens","Autoclear LV","Automotive","Clear coat","oklch(0.95 0.01 220)","Crystal-clear automotive clear coat"),
  p("Sikkens","Rubbol Gloss","Wood & Metal","Gloss","oklch(0.60 0.09 185)","Premium alkyd gloss for wood"),

  // Tikkurila
  p("Tikkurila","Harmony Interior","Interior","Matt","oklch(0.88 0.04 200)","Nordic allergen-labelled interior coat"),
  p("Tikkurila","Facade Guard","Exterior","Sheen","oklch(0.79 0.05 200)","Nordic exterior for harsh climates"),
  p("Tikkurila","Otex Primer","Wood & Metal","Matt","oklch(0.70 0.04 200)","Adhesion primer for difficult surfaces"),

  // Rust-Oleum
  p("Rust-Oleum","Stops Rust Enamel","Wood & Metal","Gloss","oklch(0.55 0.12 30)","Oil-based rust-stopping enamel"),
  p("Rust-Oleum","EpoxyShield Coat","Exterior","Gloss","oklch(0.60 0.08 30)","Epoxy floor and exterior wall coat"),
  p("Rust-Oleum","Latex Primer","Primer & Putty","Matt","oklch(0.88 0.02 30)","All-surface rust-inhibiting latex primer"),
];

// ─── Derived exports ──────────────────────────────────────────────────────────

/** Flat list of brand names — kept for backward-compat with existing code */
export const BRANDS = BRANDS_DATA.map((b) => b.name);

/** Filter brand cards by search query */
export function filterBrands(brands: Brand[], query: string): Brand[] {
  const s = query.trim().toLowerCase();
  if (!s) return brands;
  return brands.filter(
    (b) => b.name.toLowerCase().includes(s) || b.tagline.toLowerCase().includes(s),
  );
}

/** Filter individual paint products */
export function filterPaints(
  list: Paint[], q: string, category: string, brand: string, finish: string,
) {
  const s = q.trim().toLowerCase();
  return list.filter(
    (x) =>
      (!s || `${x.name} ${x.brand} ${x.category} ${x.note}`.toLowerCase().includes(s)) &&
      (!category || x.category === category) &&
      (!brand || x.brand === brand) &&
      (!finish || x.finish === finish),
  );
}
