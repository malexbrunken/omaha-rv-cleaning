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

export const packages: Package[] = [
  {
    name: "Exterior Wash",
    price: "$7/ft",
    priceNote: "≈ $170–$280 for a 24–40 ft RV",
    blurb:
      "Hand wash, roof wash, wheels, and windows. The regular upkeep your fiberglass needs.",
    features: [
      "Hand wash with RV-safe soap",
      "Roof wash (rubber & fiberglass)",
      "Wheels, tires & wheel wells",
      "All exterior glass & door jambs",
    ],
  },
  {
    name: "Full Clean",
    popular: true,
    price: "$12/ft",
    priceNote: "≈ $290–$480 for a 24–40 ft RV",
    blurb:
      "Exterior wash plus a full interior detail — vacuum, surfaces, kitchen and bath, and dry vapor steam sanitizing.",
    features: [
      "Everything in the Exterior Wash",
      "Full interior vacuum & wipe-down",
      "Kitchen & bathroom sanitize",
      "Dry vapor steam on high-touch surfaces",
    ],
  },
  {
    name: "Showroom Detail",
    price: "$18–$22/ft",
    priceNote: "by quote",
    blurb:
      "Our most thorough service: oxidation removal, polish & wax, deep interior extraction, and full steam sanitation.",
    features: [
      "Everything in the Full Clean",
      "Black streak & oxidation removal",
      "Polish and protective wax",
      "Deep interior extraction & UV protectant",
      "Dry vapor steam mattress sanitation",
    ],
  },
] as const;

export const addons: { name: string; note?: string }[] = [
  { name: "Dry Vapor Steam Mattress Cleaning", note: "per mattress" },
  { name: "Interior Deep Sanitize (full coach)" },
  { name: "Black Streak Removal" },
  { name: "Roof Treatment & Inspection" },
  { name: "Storage-Ready Wash (fall / spring)" },
] as const;
