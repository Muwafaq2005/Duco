// Editable business details — verified by the owner. Keep in sync with the Google listing.
export const BUSINESS = {
  name: "DUCO PAINT & CO",
  phone: "+91 98941 11094",
  whatsapp: "919894111094", // digits only, with country code
  email: "ducopaint@gmail.com",
  address: "No. 2/A, Katpadi Road, near Jos Alukkas, opposite Ramraj Cotton, Thottapalayam, Vellore, Tamil Nadu 632004",
  // Exact shop location from the Google Maps listing.
  lat: 12.9274608,
  lng: 79.1333724,
  mapsUrl:
    "https://www.google.com/maps/place/DUCO+PAINT+%26+CO+VELLORE/@12.9274608,79.1333724,17z/data=!4m6!3m5!1s0x3bad39ed824a31cf:0x58f90e5932a1c746!8m2!3d12.9274608!4d79.1333724!16s%2Fg%2F11p4yy042x",
  googleReviewsUrl:
    "https://www.google.com/maps/place/DUCO+PAINT+%26+CO+VELLORE/@12.9274608,79.1333724,17z/data=!4m8!3m7!1s0x3bad39ed824a31cf:0x58f90e5932a1c746!8m2!3d12.9274608!4d79.1333724!9m1!1b1!16s%2Fg%2F11p4yy042x",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=12.9274608,79.1333724",
  // Opening hours are NOT verified — set a string here only once confirmed, e.g. "Mon – Sat · 9:00 AM – 7:00 PM".
  hours: null as string | null,
};

// Paint brands. Names supplied by the owner are listed first and marked verified.
// Entries named "Brand slot …" are placeholders — replace the name (and set verified: true) as brands are confirmed.
export type Brand = { name: string; origin: string; verified: boolean };

export const INTERNATIONAL_BRANDS: Brand[] = [
  { name: "Asian Paints", origin: "India · Global", verified: true },
  { name: "Dulux", origin: "Global", verified: true },
  { name: "Berger Paints", origin: "India · Global", verified: true },
  { name: "Jotun", origin: "Norway", verified: true },
  { name: "Aditya Birla · Birla Opus", origin: "India", verified: true },
  { name: "ICI Autocolor", origin: "Global", verified: true },
  { name: "Asian Paints PPG", origin: "India · USA", verified: true },
  { name: "MRF Corp", origin: "India", verified: true },
];

export const REGIONAL_BRANDS: Brand[] = [
  { name: "Sheenlac", origin: "Tamil Nadu", verified: true },
  { name: "DUCO", origin: "India", verified: true },
  ...Array.from({ length: 28 }, (_, i) => ({
    name: `Brand slot ${String(i + 3).padStart(2, "0")}`,
    origin: "To be confirmed",
    verified: false,
  })),
];

