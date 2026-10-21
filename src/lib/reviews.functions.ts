import { createServerFn } from "@tanstack/react-start";

export type GoogleReview = {
  author: string;
  photo: string | null;
  profileUrl: string | null;
  rating: number;
  text: string;
  when: string;
};
export type ReviewsPayload = {
  rating: number;
  count: number;
  reviews: GoogleReview[];
  error: string | null;
};

const PLACE_ID = "ChIJzzFKgu05rTsRRsehMlkO-Vg";
const FALLBACK: ReviewsPayload = { rating: 4.8, count: 186, reviews: [], error: null };
const TTL = 6 * 60 * 60 * 1000;
let cache: { at: number; data: ReviewsPayload } | null = null;

// Public, read-only. Fixed place ID (no user input) and cached for 6 hours to bound Google usage.
export const getGoogleReviews = createServerFn({ method: "GET" }).handler(async (): Promise<ReviewsPayload> => {
  if (cache && Date.now() - cache.at < TTL) return cache.data;
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
  if (!lovableKey || !mapsKey) return { ...FALLBACK, error: "Reviews are unavailable right now." };
  try {
    const res = await fetch(`https://connector-gateway.lovable.dev/google_maps/places/v1/places/${PLACE_ID}?languageCode=en`, {
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": mapsKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
    });
    if (!res.ok) {
      console.error(`Google reviews failed [${res.status}]: ${await res.text()}`);
      return { ...FALLBACK, error: "Reviews are unavailable right now." };
    }
    const j = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
      reviews?: Array<{
        rating?: number;
        relativePublishTimeDescription?: string;
        text?: { text?: string };
        originalText?: { text?: string };
        authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
      }>;
    };
    const data: ReviewsPayload = {
      rating: j.rating ?? FALLBACK.rating,
      count: j.userRatingCount ?? FALLBACK.count,
      reviews: (j.reviews ?? [])
        .map((r) => ({
          author: r.authorAttribution?.displayName ?? "Google user",
          photo: r.authorAttribution?.photoUri ?? null,
          profileUrl: r.authorAttribution?.uri ?? null,
          rating: r.rating ?? 5,
          text: r.text?.text ?? r.originalText?.text ?? "",
          when: r.relativePublishTimeDescription ?? "",
        }))
        .filter((r) => r.text.trim().length > 0 && r.rating >= 4)
        .sort((a, b) => b.rating - a.rating),
      error: null,
    };
    cache = { at: Date.now(), data };
    return data;
  } catch (e) {
    console.error("Google reviews error", e);
    return { ...FALLBACK, error: "Reviews are unavailable right now." };
  }
});
