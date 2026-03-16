/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_sWjgxE-L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D1c_zEE1.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const SITE_BASE = "/Demo-SoarNBounce";
const TRANSLATIONS = {
  en: {
    heroBadge: "Grandville, MI",
    heroTitle: "LITTLE SOMETHING ABOUT US",
    heroBtn: "Contact Us",
    funTitle: "LET'S JUST HAVE FUN",
    funP1: "Located at the heart of family fun, our park is the perfect destination for creating unforgettable memories with your loved ones. Whether you’re bouncing high on trampolines, tackling thrilling obstacle courses, or enjoying active play together, there’s something for every member of the family.",
    funP2: "From kids to parents, our park offers a safe, exciting environment where everyone can enjoy the joy of movement and adventure. Soar and Bounce Trampoline and Adventure Park is your ultimate family-friendly spot to laugh, play, and make memories that will last a lifetime!",
    funBtn: "Buy Tickets",
    pricingTitle: "PRICING",
    toddlerTitle: "Toddler Admission",
    toddlerSub: "(Ages 5 & Younger)",
    generalTitle: "General Admission",
    generalSub: "(Ages 6 & Older)",
    unlimitedPass: "All Day Unlimited Pass $35",
    unlimitedSub: "(Include Go Kart & VR Warship)",
    socksRequired: "Jump Socks Required $3.50/ Pair",
    weightLimit: "Weight Limit 250lbs",
    waiversRequired: "Waivers Required",
    findUsTitle: "FIND US",
    findUsSub: "Hours may vary during holidays and school vacations. Give us a call for the latest!",
    addressTitle: "The Address",
    getHereTitle: "How to Get Here",
    mallEntrance: "Mall Entrance",
    mallEntranceDesc: "Located on the second floor - directly across from Dicks Sporting Goods!",
    mainEntrance: "Main Entrance",
    mainEntranceDesc: "Park in lot C1-C5 and look for the vibrant green building!",
    hoursTitle: "HOURS OF OPERATION",
    hoursNotice: "*WEEKEND OPENING HOURS CAN BE AFFECTED BY SCHEDULED PRIVATE EVENTS.",
    partyTitle: "NO SETUP. NO CLEAN UP. NO HASSLE, JUST FUN!",
    partySub: "BIRTHDAY PARTIES!",
    partyIncluded: "What’s Included:",
    partyInfo: "Important Info:",
    partyBtn: "Book Party Now",
    comingSoon: "COMING SOON",
    seeYouSoon: "SEE YOU SOON!",
    bookNow: "Book Now",
    signWaiver: "Sign Waiver"
  },
  es: {
    heroBadge: "Grandville, MI",
    heroTitle: "ALGO SOBRE NOSOTROS",
    heroBtn: "Contáctenos",
    funTitle: "VAMOS A DIVERTIRNOS",
    funP1: "Ubicado en el corazón de la diversión familiar, nuestro parque es el destino perfecto para crear recuerdos inolvidables con sus seres queridos. Ya sea que esté saltando alto en trampolines, abordando emocionantes pistas de obstáculos o disfrutando del juego activo juntos, hay algo para cada miembro de la familia.",
    funP2: "Desde niños hasta padres, nuestro parque ofrece un ambiente seguro y emocionante donde todos pueden disfrutar del placer del movimiento y la aventura. ¡Soar and Bounce Trampoline and Adventure Park es su lugar familiar definitivo para reír, jugar y crear recuerdos que durarán toda la vida!",
    funBtn: "Comprar Entradas",
    pricingTitle: "PRECIOS",
    toddlerTitle: "Entrada de Niños",
    toddlerSub: "(5 años o menos)",
    generalTitle: "Entrada General",
    generalSub: "(6 años o más)",
    unlimitedPass: "Pase Ilimitado de Todo el Día $35",
    unlimitedSub: "(Incluye Go Kart y VR Warship)",
    socksRequired: "Calcetines de Salto Requeridos $3.50/ Par",
    weightLimit: "Límite de peso 250 lbs",
    waiversRequired: "Exenciones Requeridas",
    findUsTitle: "ENCUÉNTRANOS",
    findUsSub: "Los horarios pueden variar durante días festivos y vacaciones escolares. ¡Llámenos para lo último!",
    addressTitle: "La Dirección",
    getHereTitle: "Cómo Llegar",
    mallEntrance: "Entrada del Centro Comercial",
    mallEntranceDesc: "¡Ubicado en el segundo piso, directamente frente a Dicks Sporting Goods!",
    mainEntrance: "Entrada Principal",
    mainEntranceDesc: "¡Estacione en el lote C1-C5 y busque el vibrante edificio verde!",
    hoursTitle: "HORARIO DE OPERACIÓN",
    hoursNotice: "*LOS HORARIOS DE FIN DE SEMANA PUEDEN VERSE AFECTADOS POR EVENTOS PRIVADOS PROGRAMADOS.",
    partyTitle: "SIN MONTAJE. SIN LIMPIEZA. ¡SIN PROBLEMAS, SOLO DIVERSIÓN!",
    partySub: "¡FIESTAS DE CUMPLEAÑOS!",
    partyIncluded: "Qué está incluido:",
    partyInfo: "Información Importante:",
    partyBtn: "Reservar Fiesta Ahora",
    comingSoon: "PRÓXIMAMENTE",
    seeYouSoon: "¡NOS VEMOS PRONTO!",
    bookNow: "Reservar Ahora",
    signWaiver: "Firmar Exención"
  }
};
const HeroSection = ({ t }) => /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 px-6 overflow-hidden text-center", children: [
  /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
    /* @__PURE__ */ jsx("img", { src: `${SITE_BASE}/images/hero-header.png`, alt: "About Us Hero", className: "w-full h-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/60 dark:bg-slate-950/70 backdrop-blur-[2px]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white dark:from-[#020617] via-transparent to-slate-50 dark:to-[#020617]" })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      motion.span,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "bg-slate-900 dark:bg-primary text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] inline-block mb-8 shadow-2xl italic",
        children: t.heroBadge
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.h1,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-10 text-slate-900 dark:text-white leading-none",
        children: [
          t.heroTitle.split("ABOUT")[0],
          " ",
          /* @__PURE__ */ jsx("br", {}),
          " ",
          /* @__PURE__ */ jsxs("span", { className: "text-primary text-4xl md:text-6xl not-italic underline decoration-orange-500/40 dark:decoration-orange-400/40 underline-offset-8", children: [
            "ABOUT ",
            t.heroTitle.split("ABOUT")[1]
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/book`, className: "bg-orange-500 hover:bg-orange-600 text-white font-black uppercase py-5 px-12 rounded-3xl tracking-widest transition-all shadow-2xl italic text-sm", children: t.heroBtn }) })
  ] })
] });
const MainFunSection = ({ t }) => /* @__PURE__ */ jsx("section", { className: "py-32 px-6 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center", children: [
  /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[4rem] p-12 md:p-16 shadow-xl relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-2.5 h-full bg-primary" }),
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-black italic font-headings uppercase tracking-tighter mb-8 text-slate-900 dark:text-white", children: t.funTitle }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-bold italic tracking-tight", children: [
      /* @__PURE__ */ jsx("p", { children: t.funP1 }),
      /* @__PURE__ */ jsx("p", { children: t.funP2 })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/book`, className: "bg-primary hover:bg-blue-600 text-white font-black uppercase py-5 px-12 rounded-3xl tracking-widest transition-all shadow-xl italic text-sm", children: t.funBtn }) })
  ] }) }),
  /* @__PURE__ */ jsx("div", { className: "order-1 lg:order-2", children: /* @__PURE__ */ jsxs("div", { className: "aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-[5rem] border-8 border-white dark:border-slate-800 shadow-2xl overflow-hidden relative rotate-2", children: [
    /* @__PURE__ */ jsx("img", { src: `${SITE_BASE}/images/hero-header.png`, alt: "Fun", className: "w-full h-full object-cover opacity-90 dark:opacity-70" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" })
  ] }) })
] }) });
const PricingSection = ({ t }) => /* @__PURE__ */ jsx("section", { className: "py-32 px-6 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-900 shadow-inner", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center mb-24", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-6 text-slate-900 dark:text-white", children: t.pricingTitle }),
    /* @__PURE__ */ jsx("div", { className: "w-24 h-2 bg-primary mx-auto rounded-full" })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-12 rounded-[4rem] shadow-xl", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-black uppercase mb-10 text-primary dark:text-primary border-b border-slate-200 dark:border-slate-800 pb-6 italic", children: [
        t.toddlerTitle,
        " ",
        /* @__PURE__ */ jsx("br", {}),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-slate-400 not-italic text-sm font-bold", children: t.toddlerSub })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-6 text-2xl font-black text-slate-800 dark:text-slate-200 italic tracking-tighter", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
          /* @__PURE__ */ jsx("span", { children: "60 Minutes:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "$17" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
          /* @__PURE__ */ jsx("span", { children: "90 Minutes:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "$21" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
          /* @__PURE__ */ jsx("span", { children: "120 Minutes:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "$25" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: "180 Minutes:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "$29" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-12 rounded-[4rem] shadow-xl", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-black uppercase mb-10 text-orange-500 dark:text-orange-400 border-b border-slate-200 dark:border-slate-800 pb-6 italic", children: [
        t.generalTitle,
        " ",
        /* @__PURE__ */ jsx("br", {}),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-slate-400 not-italic text-sm font-bold", children: t.generalSub })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-6 text-2xl font-black text-slate-800 dark:text-slate-200 italic tracking-tighter", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
          /* @__PURE__ */ jsx("span", { children: "60 Minutes:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-orange-500 dark:text-orange-400", children: "$21" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
          /* @__PURE__ */ jsx("span", { children: "90 Minutes:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-orange-500 dark:text-orange-400", children: "$25" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
          /* @__PURE__ */ jsx("span", { children: "120 Minutes:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-orange-500 dark:text-orange-400", children: "$29" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: "180 Minutes:" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-orange-500 dark:text-orange-400", children: "$33" })
        ] })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "mt-16 max-w-3xl mx-auto bg-primary dark:bg-slate-900 border border-primary/20 dark:border-slate-800 p-12 rounded-[4rem] text-center shadow-2xl relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-primary/10 rounded-full -mr-16 -mt-16" }),
    /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-black italic uppercase text-white mb-4 tracking-widest", children: t.unlimitedPass }),
    /* @__PURE__ */ jsx("p", { className: "text-white/70 dark:text-slate-500 font-black uppercase text-xs tracking-[0.3em]", children: t.unlimitedSub })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic", children: [
    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary text-lg", children: "●" }),
      " ",
      t.socksRequired
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-orange-500 text-lg", children: "●" }),
      " ",
      t.weightLimit
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-emerald-500 text-lg", children: "●" }),
      " ",
      t.waiversRequired
    ] })
  ] })
] }) });
const LocationHoursSection = ({ t }) => /* @__PURE__ */ jsx("section", { className: "py-32 px-6 max-w-7xl mx-auto text-slate-900 dark:text-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-24", children: [
  /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-5xl font-black italic font-headings uppercase tracking-tighter mb-10 text-slate-900 dark:text-white leading-none", children: t.findUsTitle }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 font-bold mb-16 italic text-xl", children: t.findUsSub }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs font-black uppercase text-slate-400 mb-6 tracking-[0.4em] italic", children: t.addressTitle }),
        /* @__PURE__ */ jsxs("p", { className: "text-4xl font-black text-slate-900 dark:text-white tracking-tighter italic uppercase", children: [
          "3668 Rivertown Parkway, ",
          /* @__PURE__ */ jsx("br", {}),
          " Grandville, MI"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs font-black uppercase text-slate-400 mb-8 tracking-[0.4em] italic", children: t.getHereTitle }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl", children: [
            /* @__PURE__ */ jsx("p", { className: "font-black text-primary uppercase mb-4 italic tracking-tight text-xl", children: t.mallEntrance }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 font-bold leading-relaxed", children: t.mallEntranceDesc })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl", children: [
            /* @__PURE__ */ jsx("p", { className: "font-black text-orange-500 dark:text-orange-400 uppercase mb-4 italic tracking-tight text-xl", children: t.mainEntrance }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 font-bold leading-relaxed", children: t.mainEntranceDesc })
          ] })
        ] })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 md:p-16 rounded-[4rem] shadow-2xl h-fit", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-3xl font-black italic font-headings uppercase tracking-tighter mb-12 text-primary underline decoration-orange-500/20 underline-offset-8", children: t.hoursTitle }),
    /* @__PURE__ */ jsxs("ul", { className: "space-y-6 text-2xl font-black text-slate-800 dark:text-slate-200 italic tracking-tighter", children: [
      /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Monday:" }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "10AM - 9PM" })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Tuesday:" }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "10AM - 9PM" })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Wednesday:" }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "10AM - 9PM" })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4", children: [
        /* @__PURE__ */ jsx("span", { children: "Thursday:" }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "10AM - 9PM" })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4 text-primary", children: [
        /* @__PURE__ */ jsx("span", { children: "Friday:" }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "10AM - 10PM" })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4 text-primary", children: [
        /* @__PURE__ */ jsx("span", { children: "Saturday:" }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "10AM - 10PM" })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "flex justify-between pb-2", children: [
        /* @__PURE__ */ jsx("span", { children: "Sunday:" }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "10AM - 9PM" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 font-black uppercase tracking-widest mt-12 text-center italic leading-relaxed", children: t.hoursNotice })
  ] })
] }) });
const PartySection = ({ t }) => /* @__PURE__ */ jsxs("section", { className: "py-32 px-6 bg-slate-900 dark:bg-slate-950 border-y border-slate-800 relative overflow-hidden", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent)]" }),
  /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center relative z-10 text-white", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl", children: t.partyTitle }),
    /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-4xl font-black uppercase mb-20 tracking-widest text-orange-500 italic", children: t.partySub }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[4rem] shadow-2xl", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xl font-black uppercase text-orange-500 mb-10 italic tracking-widest underline underline-offset-8 decoration-white/20", children: t.partyIncluded }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-5 font-bold text-lg text-white/90 italic tracking-tight", children: (t.partyIncluded.includes(":") ? ["1-Hour Jump Pass & Jump Socks", "40 Minutes in a Private Party Room", "Pizza, Ice Cream Cups, Water, Plates, Napkins & Utensils", "Birthday Child Jumps for Free", "SnB T-Shirt for Birthday Child", "20 Credit Arcade Card for each Child", "1 Free VR Warship for each Child", "1 Free Go Kart for each Child"] : ["1 hora de salto y calcetines SnB", "40 minutos en salón privado", "Pizza, helado, agua, platos y servilletas", "Cumpleañero salta gratis", "Camiseta SnB para el cumpleañero", "Tarjeta de arcade de 20 créditos", "1 VR Warship gratis por niño", "1 Go Kart gratis por niño"]).map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-orange-500 font-black text-xl italic", children: "✔" }),
          " ",
          item
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[4rem] shadow-2xl", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xl font-black uppercase text-orange-500 mb-10 italic tracking-widest underline underline-offset-8 decoration-white/20", children: t.partyInfo }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-5 text-sm font-bold text-white/70 leading-relaxed uppercase tracking-wider", children: (t.partyInfo.includes(":") ? [
          "Deposits are non-refundable & non-transferable.",
          "All guests must sign a waiver.",
          "Free rescheduling up to 24h before.",
          "Additional Jumpers: $22 per jumper.",
          "Weekend Pizza orders due by Wednesday.",
          "Please arrive 10-15 minutes early.",
          "No piñatas or confetti allowed."
        ] : [
          "Los depósitos no son reembolsables ni transferibles.",
          "Todos los invitados deben firmar exención.",
          "Reprogramación gratuita hasta 24h antes.",
          "Saltadores adicionales: $22 por persona.",
          "Pedidos de pizza de fin de semana para el miércoles.",
          "Por favor llegue 10-15 minutos antes.",
          "No se permiten piñatas ni confeti."
        ]).map((item, i) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-orange-500 italic mr-2", children: "●" }),
          " ",
          item
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/book`, className: "inline-block bg-orange-500 hover:bg-orange-600 text-white font-black uppercase py-7 px-20 rounded-[2.5rem] text-2xl transition-all shadow-2xl shadow-orange-500/40 hover:scale-105 active:scale-95 italic tracking-tight", children: t.partyBtn })
  ] })
] });
const ComingSoonSection = ({ t }) => /* @__PURE__ */ jsxs("section", { className: "py-32 px-6 max-w-7xl mx-auto text-center", children: [
  /* @__PURE__ */ jsx("h2", { className: "text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-20 text-slate-900 dark:text-white underline decoration-primary/20 underline-offset-8", children: t.comingSoon }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8", children: ["Clarksville, IN", "Flint, MI", "Kalamazoo, MI", "Burnsville, MN", "Matteson, IL", "Peoria, IL", "Portage, IN", "South Bend, IN", "Elkhart, lN", "Springfield, VA", "Racine, WI", "Bloomfield, NJ", "Westbury, NY", "Memphis, TN"].map((loc, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[3rem] flex flex-col justify-center items-center group hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-500", children: [
    /* @__PURE__ */ jsx("span", { className: "text-primary opacity-40 mb-3 font-black italic text-[10px] tracking-[0.3em]", children: "NEW HUB" }),
    /* @__PURE__ */ jsx("p", { className: "font-black uppercase tracking-tighter text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors text-lg italic", children: loc })
  ] }, i)) })
] });
function AboutPage() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-lang");
    if (savedLang) setLang(savedLang);
    const handleLangChange = (e) => {
      setLang(e.detail);
    };
    window.addEventListener("lang-changed", handleLangChange);
    return () => window.removeEventListener("lang-changed", handleLangChange);
  }, []);
  const t = TRANSLATIONS[lang];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen text-slate-900 dark:text-white bg-transparent font-sans pb-20", children: [
    /* @__PURE__ */ jsx(HeroSection, { t }),
    /* @__PURE__ */ jsx(MainFunSection, { t }),
    /* @__PURE__ */ jsx(PricingSection, { t }),
    /* @__PURE__ */ jsx(LocationHoursSection, { t }),
    /* @__PURE__ */ jsx(PartySection, { t }),
    /* @__PURE__ */ jsx(ComingSoonSection, { t }),
    /* @__PURE__ */ jsxs("section", { className: "py-40 px-6 text-center bg-primary relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/10" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-6xl md:text-9xl font-black italic font-headings uppercase tracking-tighter mb-16 text-white drop-shadow-2xl leading-none", children: t.seeYouSoon }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-8 justify-center items-center", children: [
          /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/book`, className: "w-full sm:w-auto bg-slate-950 text-white hover:bg-black font-black uppercase py-7 px-20 rounded-[2.5rem] text-3xl transition-all shadow-2xl shadow-black/40 italic tracking-tight hover:scale-105", children: t.bookNow }),
          /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/waiver`, className: "w-full sm:w-auto bg-white text-primary hover:bg-slate-50 font-black uppercase py-7 px-20 rounded-[2.5rem] text-3xl transition-all shadow-2xl italic tracking-tight hover:scale-105", children: t.signWaiver })
        ] })
      ] })
    ] })
  ] });
}

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | Soar N Bounce Grandville" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutPage", AboutPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mymac/Demo-SoarNBounce/src/components/AboutPage", "client:component-export": "default" })} ` })}`;
}, "/Users/mymac/Demo-SoarNBounce/src/pages/about.astro", void 0);

const $$file = "/Users/mymac/Demo-SoarNBounce/src/pages/about.astro";
const $$url = "/Demo-SoarNBounce/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
