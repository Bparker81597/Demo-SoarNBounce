export type LocationConfig = {
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phones: string[];
  email: string;
  hours: {
    monThu: string;
    friSat: string;
    sun: string;
    note?: string;
  };
  pricing: {
    toddler: Record<string, number>;
    general: Record<string, number>;
    socksPrice: number;
    unlimitedPass?: number;
    partyBase?: number;
  };
  links: {
    booking: string;
    waiver: string;
    parties: string;
    info: string;
  };
  status: "open" | "coming_soon";
};

const DEFAULT_PRICING = {
  toddler: { "60": 17, "90": 21, "120": 25, "180": 29 },
  general: { "60": 21, "90": 25, "120": 29, "180": 33 },
  socksPrice: 3.50,
  unlimitedPass: 35,
  partyBase: 250
};

const DEFAULT_HOURS = {
  monThu: "10AM – 9PM",
  friSat: "10AM – 10PM",
  sun: "10AM – 9PM",
  note: "Standard hours. Subject to change for holidays."
};

export const LOCATIONS: LocationConfig[] = [
  {
    slug: "grandville",
    name: "Soar N Bounce Grandville",
    city: "Grandville",
    state: "MI",
    address: "3668 Rivertown Pkwy SW, Grandville, MI 49418",
    phones: ["(616) 215-0999"],
    email: "grandville@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: {
      booking: "https://lilypadpos.app/soarnbouncegr/onlinebooking/index.php",
      waiver: "https://lilypadpos.app/soarnbouncegr/onlinewaiver/waiver.php",
      parties: "#parties",
      info: "#attractions"
    },
    status: "open"
  },
  {
    slug: "muskegon",
    name: "Soar N Bounce Muskegon",
    city: "Muskegon",
    state: "MI",
    address: "5580 Harvey Street, Muskegon, MI 49444",
    phones: ["(231) 221-2388"],
    email: "muskegon@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: {
      booking: "https://lilypadpos.app/soarnbouncemk/onlinebooking/index.php",
      waiver: "https://lilypadpos.app/soarnbouncemk/onlinewaiver/waiver.php",
      parties: "#parties",
      info: "#attractions"
    },
    status: "open"
  },
  {
    slug: "temple",
    name: "Soar N Bounce Temple",
    city: "Temple",
    state: "PA",
    address: "5370 Allentown Pike, Temple, PA 19560",
    phones: ["(610) 403-9188"],
    email: "temple@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: {
      booking: "https://lilypadpos.app/soarnbouncete/onlinebooking/index.php",
      waiver: "https://lilypadpos.app/soarnbouncete/onlinewaiver/waiver.php",
      parties: "#parties",
      info: "#attractions"
    },
    status: "open"
  },
  {
    slug: "davenport",
    name: "Soar N Bounce Davenport",
    city: "Davenport",
    state: "IA",
    address: "902 W Kimberly Rd, Davenport, IA 52806",
    phones: ["(563) 217-1617"],
    email: "davenport@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: {
      booking: "https://lilypadpos.app/soarnbouncedv/onlinebooking/index.php",
      waiver: "https://lilypadpos.app/soarnbouncedv/onlinewaiver/waiver.php",
      parties: "#parties",
      info: "#attractions"
    },
    status: "open"
  },
  {
    slug: "clarksville",
    name: "Soar N Bounce Clarksville",
    city: "Clarksville",
    state: "IN",
    address: "945 E Lewis and Clark Pkwy, Clarksville, IN 47129",
    phones: ["(812) 269-5689"],
    email: "clarksville@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "flint",
    name: "Soar N Bounce Flint",
    city: "Flint",
    state: "MI",
    address: "Coming Soon to Flint, MI",
    phones: ["(800) SOAR-NOW"],
    email: "flint@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "kalamazoo",
    name: "Soar N Bounce Kalamazoo",
    city: "Kalamazoo",
    state: "MI",
    address: "Coming Soon to Kalamazoo, MI",
    phones: ["(800) SOAR-NOW"],
    email: "kalamazoo@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "burnsville",
    name: "Soar N Bounce Burnsville",
    city: "Burnsville",
    state: "MN",
    address: "Coming Soon to Burnsville, MN",
    phones: ["(800) SOAR-NOW"],
    email: "burnsville@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "matteson",
    name: "Soar N Bounce Matteson",
    city: "Matteson",
    state: "IL",
    address: "Coming Soon to Matteson, IL",
    phones: ["(800) SOAR-NOW"],
    email: "matteson@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "peoria",
    name: "Soar N Bounce Peoria",
    city: "Peoria",
    state: "IL",
    address: "Coming Soon to Peoria, IL",
    phones: ["(800) SOAR-NOW"],
    email: "peoria@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "portage",
    name: "Soar N Bounce Portage",
    city: "Portage",
    state: "IN",
    address: "Coming Soon to Portage, IN",
    phones: ["(800) SOAR-NOW"],
    email: "portage@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "south-bend",
    name: "Soar N Bounce South Bend",
    city: "South Bend",
    state: "IN",
    address: "Coming Soon to South Bend, IN",
    phones: ["(800) SOAR-NOW"],
    email: "southbend@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "elkhart",
    name: "Soar N Bounce Elkhart",
    city: "Elkhart",
    state: "IN",
    address: "Coming Soon to Elkhart, IN",
    phones: ["(800) SOAR-NOW"],
    email: "elkhart@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "springfield",
    name: "Soar N Bounce Springfield",
    city: "Springfield",
    state: "VA",
    address: "Coming Soon to Springfield, VA",
    phones: ["(800) SOAR-NOW"],
    email: "springfield@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "racine",
    name: "Soar N Bounce Racine",
    city: "Racine",
    state: "WI",
    address: "Coming Soon to Racine, WI",
    phones: ["(800) SOAR-NOW"],
    email: "racine@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "bloomfield",
    name: "Soar N Bounce Bloomfield",
    city: "Bloomfield",
    state: "NJ",
    address: "Coming Soon to Bloomfield, NJ",
    phones: ["(800) SOAR-NOW"],
    email: "bloomfield@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "westbury",
    name: "Soar N Bounce Westbury",
    city: "Westbury",
    state: "NY",
    address: "Coming Soon to Westbury, NY",
    phones: ["(800) SOAR-NOW"],
    email: "westbury@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  },
  {
    slug: "memphis",
    name: "Soar N Bounce Memphis",
    city: "Memphis",
    state: "TN",
    address: "Coming Soon to Memphis, TN",
    phones: ["(800) SOAR-NOW"],
    email: "memphis@soarnbounce.com",
    hours: DEFAULT_HOURS,
    pricing: DEFAULT_PRICING,
    links: { booking: "#", waiver: "#", parties: "#", info: "#" },
    status: "coming_soon"
  }
];
