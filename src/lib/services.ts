export type Service = {
  slug: string;
  name: string;
  title: string; // SEO title
  description: string; // meta description
  h1: string;
  intro: string;
  includes: string[];
  detail: string[]; // paragraphs
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "rv-detailing",
    name: "RV Detailing",
    title: "RV Detailing Omaha | Full Interior & Exterior Detail",
    description:
      "Full RV detailing in the Omaha metro — interior and exterior, mobile service at your home or storage lot. Transparent per-foot pricing.",
    h1: "RV Detailing in Omaha",
    intro:
      "Complete interior-and-exterior detailing for motorhomes, fifth-wheels, travel trailers, campers, and living-quarters horse trailers — done at your driveway, storage lot, or campground anywhere in the Omaha metro.",
    includes: [
      "Full hand wash with RV-safe soap",
      "Roof wash and inspection",
      "Black streak removal",
      "Wheels, tires, wheel wells",
      "Full interior vacuum and wipe-down",
      "Kitchen and bathroom sanitation",
      "Dry vapor steam on high-touch surfaces",
    ],
    detail: [
      "Detailing an RV is nothing like detailing a car. The surfaces are different (gel coat, Filon, rubber roofing, faux-wood veneers), the heights are different, and the interiors are homes — with mattresses, upholstery, and kitchens that need sanitation, not just a wipe.",
      "That's why we're RV-only. Every product in our kit, every process step, and every hour of our crew's training is aimed at one kind of vehicle.",
      "Our signature difference is dry vapor steam. Where other Omaha cleaners soak surfaces with chemicals, we sanitize interiors — including mattresses — with high-temperature dry vapor that kills mold, mildew, bacteria, and dust mites while leaving fabric and padding nearly dry.",
    ],
    faq: [
      {
        q: "Do I need to be home during the detail?",
        a: "No. As long as we can access the RV (driveway, storage lot, or curbside), you can go about your day. We'll text you before we start and when we finish.",
      },
      {
        q: "Do you need my water or electricity?",
        a: "No — our mobile rig is fully self-contained with its own soft water and power.",
      },
    ],
  },
  {
    slug: "rv-exterior-washing",
    name: "RV Exterior Washing",
    title: "RV Exterior Wash Omaha | Mobile, Self-Contained, Roof Included",
    description:
      "Mobile RV exterior washing in Omaha: hand wash, roof wash, black streak removal, wheels. $7/ft. We bring our own water and power.",
    h1: "RV Exterior Washing",
    intro:
      "A proper RV hand wash — roof included — using RV-safe products and our own soft water. No hard-water spots, no brushed-on swirls, no dish soap.",
    includes: [
      "Hand wash with pH-neutral RV soap",
      "Full roof wash (rubber TPO/EPDM or fiberglass)",
      "Black streak spot treatment",
      "Wheels, tires, and wheel wells",
      "Exterior glass and door jambs",
    ],
    detail: [
      "Nebraska is hard on fiberglass: intense summer UV, spring pollen, winter road salt, and limestone dust from rural roads. None of it rinses off with a garden hose — and leaving it on is how gel coat goes dull years early.",
      "We wash by hand with extension-friendly tools from the roofline down, always rinsing top-to-bottom so dirty water never dries on clean surfaces. Our rig carries softened water, so what's left behind dries spot-free.",
      "While we're up there, we actually look at your roof — cracked sealant caught early is a $50 fix; caught late it's a rotted subfloor. We flag anything we see, at no charge.",
    ],
    faq: [
      {
        q: "How often should an RV be washed?",
        a: "For a rig stored outside in the Omaha area, we recommend a wash every 6–8 weeks during the season, plus a storage-ready wash in the fall and a de-winterizing wash in spring.",
      },
      {
        q: "Can you wash the roof on a tall Class A?",
        a: "Yes. We use safe ladder setups and wash roofs on all rig types — it's the most important part of the wash, since roof grime is what causes the black streaks down your sides.",
      },
    ],
  },
  {
    slug: "rv-interior-cleaning",
    name: "RV Interior Cleaning",
    title: "RV Interior Cleaning Omaha | Deep Clean for Campers & Motorhomes",
    description:
      "Deep interior cleaning for RVs in Omaha: vacuum, surfaces, kitchen & bath sanitation, upholstery. Mobile service at your home or storage lot.",
    h1: "RV Interior Cleaning",
    intro:
      "Your RV is a home, and it gets cleaned like one — properly. Full vacuum, every surface, kitchen and bathroom sanitized, upholstery freshened, done where the rig sits.",
    includes: [
      "Full interior vacuum (including under cushions and slide-outs)",
      "All surfaces wiped with interior-safe products",
      "Kitchen: counters, sink, stovetop, microwave",
      "Bathroom: toilet, shower, sink sanitized",
      "Interior windows and mirrors",
      "Upholstery freshening",
    ],
    detail: [
      "RV interiors collect things house rooms don't: campfire smoke film on cabinets, tracked-in sand, food smells that circulate through a small closed space, and humidity that feeds mildew in hidden corners.",
      "We work top-to-bottom, room-by-room, with products chosen for RV materials — no harsh bleach smells left behind in a space you sleep in.",
      "Because we're already inside, we pay attention to the early warnings: musty odors, water staining at slide seals, delaminating panel edges. You'll hear about them before they're expensive.",
    ],
    faq: [
      {
        q: "Can you remove musty or mildew smells?",
        a: "Usually yes. Odor lives in fabric, mattresses, and hidden damp spots. Our dry vapor steam sanitation targets those sources directly — see our steam sanitization service.",
      },
      {
        q: "Do you clean the fridge and oven?",
        a: "We clean the fridge as part of every interior service (a closed fridge is the #1 odor source in a stored RV). Oven deep-cleaning is available as an add-on.",
      },
    ],
  },
  {
    slug: "rv-steam-sanitization",
    name: "Dry Vapor Steam Sanitization",
    title: "RV Steam Sanitizing Omaha | Dry Vapor Deep Sanitation",
    description:
      "The only dry vapor steam RV sanitizing service in the Omaha metro. Kills mold, mildew, bacteria, and dust mites — no chemicals, no soaking.",
    h1: "Dry Vapor Steam Sanitization",
    intro:
      "This is what no other cleaning company in the Omaha area offers for RVs: true dry vapor steam sanitation. High-temperature, low-moisture steam that kills mold, mildew, bacteria, viruses, and dust mites — with no chemical residue and almost no drying time.",
    includes: [
      "Dry vapor steam pass over all high-touch surfaces",
      "Kitchen and bathroom sanitation",
      "Upholstery and curtain treatment",
      "Vent covers and ducted areas",
      "Mattress and sleeping-area sanitation",
    ],
    detail: [
      "Dry vapor steam is superheated water vapor with very little actual moisture — typically under 5% water content. At 300°F+ at the nozzle it kills organisms on contact and lifts grime out of texture, then we extract it with microfiber.",
      "Why this matters for RVs specifically: an RV interior is a small, closed box with foam mattresses and bonded fabric surfaces — exactly where conventional wet cleaning does harm. Soak foam padding and you invite the very mold you're trying to kill. Dry vapor sanitizes without wetting the core.",
      "It's the right choice for allergy sufferers, anyone sensitive to chemical smells in a small space, and anyone who's bought a used RV and wants a genuinely sanitary reset before the first night's sleep in it.",
    ],
    faq: [
      {
        q: "Is dry vapor steam safe for RV interiors?",
        a: "Yes — it's used in hospitals and food-service settings. We use appropriate nozzle distances and passes for each surface: counters, upholstery, mattress covers, bathroom components.",
      },
      {
        q: "Will it get rid of the smell in my used camper?",
        a: "In most cases, dramatically. Dry vapor steam attacks the bacterial and mildew sources of odor rather than covering them with fragrance.",
      },
    ],
  },
  {
    slug: "rv-mattress-cleaning",
    name: "RV Mattress Steam Cleaning",
    title: "RV Mattress Cleaning Omaha | Dry Vapor Steam, Dust Mite Removal",
    description:
      "RV mattress cleaning in Omaha using dry vapor steam: kills dust mites, bacteria, and mold without soaking the foam. Unique in the Omaha metro.",
    h1: "RV Mattress Steam Cleaning",
    intro:
      "The mattress is the single dirtiest thing in most RVs — and the one thing nobody else cleans. We sanitize RV mattresses with dry vapor steam: dust mites, sweat, bacteria, and odors gone, foam dry within minutes.",
    includes: [
      "Both sides of the mattress steam-sanitized",
      "Pillow-top texture deep treatment",
      "Bed frame and platform cleaning",
      "Under-bed storage area vacuumed and wiped",
    ],
    detail: [
      "Every night a sleeper sheds skin cells and sweat; every night dust mites eat the former and thrive on the latter. In a house you flip and air a mattress; in an RV the mattress sits in a closed box, often in humid storage, for months. Used-RV buyers are often sleeping on years of someone else's mattress history.",
      "Traditional mattress cleaning can't fix this — steam-wet cleaning soaks the foam core, which then can't dry inside the closed coach. Dry vapor steam is the only method that sanitizes the surface and the upper layers of the mattress while leaving the foam essentially dry.",
      "If you've bought a used RV in the Omaha area, do this before your first night in it. If you own one, do it once or twice a season. Allergies, morning congestion, and that 'closed-up smell' in the bedroom all trace back to the same place.",
    ],
    faq: [
      {
        q: "How long does the mattress take to dry?",
        a: "Dry vapor steam leaves surfaces nearly dry to begin with; the mattress is typically fully dry within 30–60 minutes in a ventilated coach.",
      },
      {
        q: "Can you clean the sofa bed mattress and dinette cushions too?",
        a: "Yes — the same dry vapor steam process works on hide-a-bed mattresses, jackknife sofas, and dinette cushions.",
      },
    ],
  },
  {
    slug: "rv-storage-washing",
    name: "Storage-Ready & Seasonal Washing",
    title: "RV Storage Wash Omaha | Spring & Fall RV Cleaning Service",
    description:
      "Seasonal RV washing in Omaha: storage-ready fall wash before winter and de-winterizing spring wash. Standing appointments at your storage lot.",
    h1: "Storage-Ready & Seasonal RV Washing",
    intro:
      "Two washes a year protect your investment more than anything else you can do: a storage-ready wash in the fall, and a fresh-out-of-storage wash in spring. Both come to you.",
    includes: [
      "Fall: full wash, black streak removal, roof clean before storage",
      "Spring: de-winterizing wash and once-over",
      "Interior check and airing at either visit",
      "Optional interior steam sanitation after storage",
    ],
    detail: [
      "Putting an RV away dirty is the most expensive free decision most owners make. Road salt, bug remains, tannin stains, and bird droppings sit on the finish under snow and ice for five months — that's how permanent etching and gel coat damage happen.",
      "In spring, stored interiors need more than air: closed-up coaches grow mildew odors and dust-mite populations. Our spring service pairs the exterior wash with optional dry vapor steam sanitation so the first trip of the season starts fresh.",
      "We run standing seasonal appointments at storage lots across the Omaha metro — many customers never move their rig. We'll simply show up on schedule, wash, and text you a photo.",
    ],
    faq: [
      {
        q: "Can you service my storage lot?",
        a: "Almost certainly — we service lots across Omaha, Elkhorn, Millard, Papillion, and beyond. We can also set up a lot-wide program with your facility (see our service for storage facilities).",
      },
      {
        q: "When should the fall wash happen?",
        a: "Book October in the Omaha area — after the last trip but before temps drop below freezing.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
