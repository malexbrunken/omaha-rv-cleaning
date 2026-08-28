export const site = {
  name: "Omaha RV Cleaning Co.",
  shortName: "Omaha RV Cleaning",
  domain: "omaharvcleaning.com",
  url: "https://omaharvcleaning.com",
  tagline: "Omaha's RV-only cleaning specialists. We come to you.",
  // TODO: replace with the real business phone number before launch
  phone: "(402) 555-0199",
  phoneHref: "tel:+14025550199",
  email: "hello@omaharvcleaning.com",
  city: "Omaha",
  state: "NE",
  description:
    "RV, camper, and trailer cleaning specialists serving the Omaha metro — inside and out. Dry vapor steam sanitizing, mattress cleaning, exterior washing, and full detailing. We come to you.",
  areas: [
    "Omaha",
    "Elkhorn",
    "Valley",
    "Waterloo",
    "Bennington",
    "Gretna",
    "Papillion",
    "La Vista",
    "Millard",
    "Ashland",
  ],
  hours: "7 days a week, 8am–6pm",
} as const;

type Package = {
  name: string;
  popular?: boolean;
  price: string;
  priceNote: string;
  blurb: string;
  features: string[];
};

// Priced to match the Omaha market benchmark (DriveGlo: $12/ft exterior, $30/ft full detail).
export const packages: Package[] = [
  {
    name: "Exterior Wash",
    price: "$12/ft",
    priceNote: "≈ $290–$480 for a 24–40 ft RV",
    blurb:
      "Full exterior detail: foam bath hand wash, roof, wheels, windows — finished with a protective spray wax.",
    features: [
      "Full exterior foam bath & hand wash",
      "Roof rinse & wash",
      "Wheels, tires & wheel wells degreased & dressed",
      "Exterior window cleaning",
      "Storage bays wiped down",
      "Spray wax protective finish",
    ],
  },
  {
    name: "The Signature",
    popular: true,
    price: "$30/ft",
    priceNote: "≈ $720–$1,200 for a 24–40 ft RV",
    blurb:
      "Complete interior and exterior detail — plus our dry vapor steam sanitation, including mattresses. The full reset.",
    features: [
      "Everything in the Exterior Wash",
      "Full interior vacuum — floors, carpets & upholstery",
      "Kitchen deep clean (counters, fridge, microwave)",
      "Bathroom sanitation (shower, toilet, sink)",
      "Cockpit & dash detailed",
      "Dry vapor steam sanitize — surfaces, upholstery & mattress",
    ],
  },
] as const;

export const addons: { name: string; note?: string }[] = [
  { name: "Dry Vapor Steam Mattress Clean", note: "per mattress" },
  { name: "Extra Steam Sanitization (full coach)" },
  { name: "Black Streak Removal (heavy cases)" },
  { name: "Slide-out Roof & Topper Wash" },
  { name: "Storage-Ready Winter Prep Wash" },
] as const;
