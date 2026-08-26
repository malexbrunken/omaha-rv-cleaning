export type Town = {
  slug: string;
  name: string;
  county: string;
  headline: string;
  intro: string;
  local: string[]; // genuinely local paragraphs
  anchors: string[]; // nearby campgrounds / storage / landmarks
  nearby: string[]; // slugs of adjacent towns for internal links
};

export const towns: Town[] = [
  {
    slug: "omaha",
    name: "Omaha",
    county: "Douglas County",
    headline: "RV Cleaning in Omaha, NE",
    intro:
      "We're Omaha's only RV-only cleaning company. Cars, trucks, and boats aren't our business — RVs, campers, and trailers are all we clean, and we come to your driveway, storage lot, or campground.",
    local: [
      "Omaha RV owners fight two enemies every year: summer sun that bakes gel coat on the west side of driveways, and spring road grime off Dodge, Maple, and I-680. A regular exterior wash schedule is the cheapest insurance against permanent oxidation.",
      "Our dry vapor steam interior sanitation is something no other Omaha cleaning service offers — it kills mold, mildew, dust mites, and bacteria in mattresses and upholstery without soaking the interior, which matters in Nebraska humidity.",
    ],
    anchors: [
      "Greasewood RV Park (west Omaha)",
      "West Omaha / NE Lincoln KOA Holiday",
      "Numerous RV storage lots along Hwy 275 and I-80",
    ],
    nearby: ["elkhorn", "millard", "bennington", "papillion", "la-vista"],
  },
  {
    slug: "elkhorn",
    name: "Elkhorn",
    county: "Douglas County",
    headline: "RV Cleaning in Elkhorn, NE",
    intro:
      "Elkhorn is one of the fastest-growing parts of the Omaha metro, and its newer subdivisions are full of fifth-wheels, travel trailers, and toy haulers. We clean them where they sit.",
    local: [
      "Many Elkhorn neighborhoods have HOA rules about visible RV storage, so units spend most of the season at nearby storage lots. We service storage lots directly — you don't need to move your rig.",
      "Gravel from the Platte River valley and construction traffic along Highway 64 is hard on finishes. Our wash process includes a full roof wash, which is where most Elkhorn-bound units quietly accumulate damage.",
    ],
    anchors: ["Elkhorn-area RV storage facilities", "Close to Greasewood RV Park and Standing Bear Lake"],
    nearby: ["omaha", "waterloo", "valley", "bennington"],
  },
  {
    slug: "valley",
    name: "Valley",
    county: "Douglas County",
    headline: "RV Cleaning in Valley, NE",
    intro:
      "Valley sits at the heart of Omaha's lakes and horse country. We clean horse trailers with living quarters, campers, and motorhomes throughout the Valley area.",
    local: [
      "Living-quarters horse trailers are a specialty. Our dry vapor steam process sanitizes mattress areas, pads, and upholstery in LQ interiors — sweat, dust, and dander come out without flooding foam padding with water.",
      "Lake users around Valley — Candlewood, or the Sand and Gravel pits — bring back more than memories: algae spray, fish smell, and damp interiors. Steam sanitation handles all three.",
    ],
    anchors: ["Heartland Equestrian corridor", "Lake Candlewood area", "Hwy 275 & Hwy 64 crossroads"],
    nearby: ["waterloo", "elkhorn", "omaha", "bennington"],
  },
  {
    slug: "waterloo",
    name: "Waterloo",
    county: "Douglas County",
    headline: "RV Cleaning in Waterloo, NE",
    intro:
      "Waterloo is horse country — eventing barns, trail riding, and living-quarters trailers everywhere. We're the local crew that actually understands how to clean them.",
    local: [
      "Horse-trailer living quarters get dirty in ways house trailers don't: shavings dust, saddle oil, and grime tracked in from the barn. Our steam process lifts it out of fabric and crevices, not just the visible surfaces.",
      "Waterloo's proximity to the Elkhorn River means mud and high spring pollen — both of which settle into slide seals and awnings. Ask us to include a seal-and-awning detail.",
    ],
    anchors: ["Elkhorn River access", "Area equestrian facilities and boarding barns"],
    nearby: ["valley", "elkhorn", "omaha"],
  },
  {
    slug: "bennington",
    name: "Bennington",
    county: "Douglas County",
    headline: "RV Cleaning in Bennington, NE",
    intro:
      "Bennington's acreages and new developments are prime RV territory — big driveways, big rigs. We clean them right where they're parked.",
    local: [
      "New construction traffic on Highway 36 and 144 coats everything in limestone dust. That dust is mildly alkaline and dulls gel coat if it sits — a seasonal wash schedule keeps it from etching in.",
      "Many Bennington properties have well water with high mineral content; our self-contained mobile rig brings its own soft water so you get no hard-water spots on your finish.",
    ],
    anchors: ["Acreage properties along Hwy 36", "Short hop to Standing Bear and Cunningham Lakes"],
    nearby: ["omaha", "elkhorn", "valley"],
  },
  {
    slug: "gretna",
    name: "Gretna",
    county: "Sarpy County",
    headline: "RV Cleaning in Gretna, NE",
    intro:
      "Gretna is booming, and its families camp — Mahoney State Park is practically in the backyard. Pre-trip cleans and post-trip deep cleans are our most-booked Gretna services.",
    local: [
      "Because Mahoney and Louisville State Recreation Areas are so close, Gretna rigs log a lot of short trips — and every short trip brings home a little more campfire smoke, s'mores residue, and sandbox sand. Regular interior steaming keeps it from compounding.",
      "Sarpy County's mix of farm fields and new subdivisions means tree sap in spring and harvest dust in fall. Both come off safely with our hand-wash process.",
    ],
    anchors: ["Eugene T. Mahoney State Park (10 min)", "Louisville SRA", "Holy Family Shrine corridor on I-80"],
    nearby: ["omaha", "papillion", "la-vista", "ashland"],
  },
  {
    slug: "papillion",
    name: "Papillion",
    county: "Sarpy County",
    headline: "RV Cleaning in Papillion, NE",
    intro:
      "Papillion's growth means a lot of first-time RV owners — and first-timers are often surprised how fast a new rig gets dirty. We make it easy.",
    local: [
      "New rigs deserve protection early: the first year of sun on fresh gel coat is when oxidation starts. A wash-and-wax schedule in year one saves expensive correction work later.",
      "We regularly clean trailers stored at Papillion-area storage facilities, including those along Highway 370 and 84th Street. Book with a neighbor and split the trip.",
    ],
    anchors: ["Werner Park area", "Hwy 370 & 84th St storage lots"],
    nearby: ["omaha", "gretna", "la-vista"],
  },
  {
    slug: "la-vista",
    name: "La Vista",
    county: "Sarpy County",
    headline: "RV Cleaning in La Vista, NE",
    intro:
      "La Vista sits right on the I-80 corridor — Omaha's main route west to every campground in Nebraska. All that highway means all that road film. We remove it.",
    local: [
      "I-80 road film (diesel soot + winter salt spray) is the single most common reason La Vista RV owners call us. It bonds to fiberglass within weeks and needs proper RV-safe wash products, not dish soap.",
      "Smaller driveways in La Vista often mean storage units; our mobile setup is fully self-contained — no power or water needed on site.",
    ],
    anchors: ["I-80 & 72nd/84th corridors", "Close to Omaha's south-side storage lots"],
    nearby: ["omaha", "papillion", "gretna"],
  },
  {
    slug: "millard",
    name: "Millard",
    county: "Douglas County",
    headline: "RV Cleaning in Millard (West Omaha), NE",
    intro:
      "Millard's established west-Omaha neighborhoods are full of long-time RV owners — and rigs that have earned some serious care.",
    local: [
      "Older rigs that lived through the era of rough Omaha winters often need black-streak removal and oxidation correction before they look right again. Our Showroom Detail is built exactly for this.",
      "We service the RV storage lots around Millard — Q Street, 144th to 180th — with standing seasonal appointments so your rig never goes unwashed between trips.",
    ],
    anchors: ["Q Street corridor storage", "Zorinsky Lake area"],
    nearby: ["omaha", "elkhorn", "gretna"],
  },
  {
    slug: "ashland",
    name: "Ashland",
    county: "Saunders County",
    headline: "RV Cleaning in Ashland, NE",
    intro:
      "Ashland is the gateway to Mahoney State Park and the Lakeside Campground — we clean campers before you arrive and after you get home.",
    local: [
      "Campers at Mahoney's Lakeside Campground: book a pre-trip Full Clean so you roll in fresh, and a post-trip deep clean with steam sanitation so the rig doesn't sit damp and closed-up for two weeks after.",
      "Ashland's river-valley air is humid — stored interiors here are more prone to mildew smell. Dry vapor steam kills it at the source instead of masking it with fragrance.",
    ],
    anchors: ["Eugene T. Mahoney State Park", "Lakeside Campground", "Platte River corridor"],
    nearby: ["gretna", "omaha", "valley"],
  },
];

export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug);
