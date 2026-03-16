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

export const LOCATIONS: LocationConfig[] = [
  {
    slug: "grandville",
    name: "Soar N Bounce Grandville",
    city: "Grandville",
    state: "MI",
    address: "3668 Rivertown Parkway, Grandville, MI 49418",
    phones: ["(616) 208-1111"],
    email: "grandville@soarnbounce.com",
    hours: {
      monThu: "10AM – 9PM",
      friSat: "10AM – 10PM",
      sun: "10AM – 9PM",
      note: "Weekend hours may be affected by private events."
    },
    pricing: {
      toddler: { "60": 17, "90": 21, "120": 25, "180": 29 },
      general: { "60": 21, "90": 25, "120": 29, "180": 33 },
      socksPrice: 3.50,
      unlimitedPass: 35,
      partyBase: 250
    },
    links: {
      booking: "https://lilypadpos.app/soarnbouncegr/onlinebooking/index.php",
      waiver: "https://lilypadpos.app/soarnbouncegr/onlinewaiver/waiver.php",
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
    address: "Opening Soon - Clarksville, IN",
    phones: ["Coming Soon"],
    email: "clarksville@soarnbounce.com",
    hours: {
      monThu: "TBD",
      friSat: "TBD",
      sun: "TBD"
    },
    pricing: {
      toddler: { "60": 17, "90": 21, "120": 25, "180": 29 },
      general: { "60": 21, "90": 25, "120": 29, "180": 33 },
      socksPrice: 3.50
    },
    links: {
      booking: "#",
      waiver: "#",
      parties: "#",
      info: "#"
    },
    status: "coming_soon"
  },
  {
    slug: "flint",
    name: "Soar N Bounce Flint",
    city: "Flint",
    state: "MI",
    address: "Opening Soon - Flint, MI",
    phones: ["Coming Soon"],
    email: "flint@soarnbounce.com",
    hours: {
      monThu: "TBD",
      friSat: "TBD",
      sun: "TBD"
    },
    pricing: {
      toddler: { "60": 17, "90": 21, "120": 25, "180": 29 },
      general: { "60": 21, "90": 25, "120": 29, "180": 33 },
      socksPrice: 3.50
    },
    links: {
      booking: "#",
      waiver: "#",
      parties: "#",
      info: "#"
    },
    status: "coming_soon"
  }
];
