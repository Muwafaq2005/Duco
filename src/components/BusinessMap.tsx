import { ArrowUpRight, Navigation } from "lucide-react";

type BusinessMapProps = {
  lat: number;
  lng: number;
  businessName: string;
  address: string;
  /** Height utility class, e.g. "h-80" — defaults to a responsive height. */
  heightClassName?: string;
  /** Link to the Google Maps business listing. */
  mapsUrl: string;
  /** Link that opens turn-by-turn directions. */
  directionsUrl: string;
};

/**
 * Interactive Google Map for the shop, using the keyless Google Maps embed
 * (no API key required, works for every visitor without sign-in).
 */
export function BusinessMap({
  lat,
  lng,
  businessName,
  address,
  heightClassName = "h-72 sm:h-80 lg:h-full lg:min-h-[26rem]",
  mapsUrl,
  directionsUrl,
}: BusinessMapProps) {
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
  return (
    <div className="flex flex-col border bg-card">
      <div className={`relative w-full overflow-hidden ${heightClassName}`}>
        <iframe
          title={`Map showing the location of ${businessName}, ${address}`}
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-col gap-3 border-t p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{businessName}</span>
          <br />
          {address}
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Navigation className="h-4 w-4" /> Get Directions
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
          >
            Open in Google Maps <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
