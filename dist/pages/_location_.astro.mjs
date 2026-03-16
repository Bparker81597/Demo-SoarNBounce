/* empty css                                      */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_sWjgxE-L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D1c_zEE1.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { L as LOCATIONS } from '../chunks/locations_jlE7fCMg.mjs';
export { renderers } from '../renderers.mjs';

const SITE_BASE = "/Demo-SoarNBounce";
const ATTRACTIONS = [
  { name: "Ninja Course", desc: "Test your strength and agility on our multi-level warrior course.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Extreme Dodgeball", desc: "Trampoline-to-trampoline high-flying dodgeball action.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Performance Trampolines", desc: "Wall-to-wall bounce zones for maximum airtime.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Foam Pit", desc: "Practice your flips and land safely in our massive foam cubes.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Battle Beam", desc: "Challenge your friends and see who can stay on the beam.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Climbing Walls", desc: "Reach new heights on our vertical adventure obstacles.", img: `${SITE_BASE}/images/hero-header.png` }
];
const TRANSLATIONS = {
  en: {
    heroTitle: "Jump Into the Fun at Soar N Bounce",
    heroSubtitle: "Book your visit, sign your waiver, plan a party, and explore attractions — all in one place.",
    bookBtn: "Book Jump Time",
    waiverBtn: "Sign Waiver",
    partiesBtn: "View Parties",
    exploreBtn: "Explore Attractions",
    locationBadge: "Grandville, MI",
    quickActionsTitle: "Get Started Fast",
    infoStrip: {
      hours: "Today: 10AM - 9PM",
      waiver: "Waiver Required",
      socks: "Jump Socks Required"
    },
    howItWorks: {
      title: "How It Works",
      step1: "Book your jump time",
      step2: "Sign your waiver",
      step3: "Arrive ready to jump",
      step4: "Enjoy the park"
    },
    attractionsTitle: "Park Attractions",
    partyTitle: "Ultimate Birthday Parties",
    partySubtitle: "The best celebration in town!",
    partyBenefits: ["Reserved party space", "Jump time included", "Family-friendly celebration", "Add-ons available"],
    waiverTitle: "Waiver Required",
    waiverSafety: "Safety is our top priority.",
    waiverDetails: "Every jumper needs a valid waiver on file before participating. Adults 18+ must sign for themselves. Minors under 18 must be signed by a parent or legal guardian.",
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      { q: "What should I wear?", a: "Wear comfortable athletic clothing. Jump socks are required for all participants." },
      { q: "Do I need to book in advance?", a: "We highly recommend booking online to guarantee your jump time, especially on weekends." },
      { q: "Are there age restrictions?", a: "We have areas for all ages! Toddlers 5 and under have their own dedicated jump time and area." },
      { q: "Can I bring outside food?", a: "Outside food is only permitted for reserved birthday parties with a cake or cupcakes." }
    ],
    readyToJump: "Ready to Jump?",
    footerContact: "Contact Us",
    footerLinks: "Quick Links"
  },
  es: {
    heroTitle: "Salta a la Diversión en Soar N Bounce",
    heroSubtitle: "Reserve su visita, firme su exención, planee una fiesta y explore las atracciones, todo en un solo lugar.",
    bookBtn: "Reservar Tiempo",
    waiverBtn: "Firmar Exención",
    partiesBtn: "Ver Fiestas",
    exploreBtn: "Explorar Atracciones",
    locationBadge: "Grandville, MI",
    quickActionsTitle: "Empiece Rápido",
    infoStrip: {
      hours: "Hoy: 10AM - 9PM",
      waiver: "Exención Requerida",
      socks: "Calcetines Requeridos"
    },
    howItWorks: {
      title: "Cómo Funciona",
      step1: "Reserve su tiempo",
      step2: "Firme su exención",
      step3: "Llegue listo para saltar",
      step4: "Disfrute del parque"
    },
    attractionsTitle: "Atracciones del Parque",
    partyTitle: "Fiestas de Cumpleaños Increíbles",
    partySubtitle: "¡La mejor celebración en la ciudad!",
    partyBenefits: ["Espacio reservado para la fiesta", "Tiempo de salto incluido", "Celebración familiar", "Complementos disponibles"],
    waiverTitle: "Exención Requerida",
    waiverSafety: "La seguridad es nuestra prioridad.",
    waiverDetails: "Cada saltador necesita una exención válida antes de participar. Los adultos (18+) deben firmar por sí mismos. Los menores deben ser firmados por un padre o tutor.",
    faqTitle: "Preguntas Frecuentes",
    faqItems: [
      { q: "¿Qué debo usar?", a: "Use ropa deportiva cómoda. Se requieren calcetines de salto para todos los participantes." },
      { q: "¿Necesito reservar con anticipación?", a: "Recomendamos encarecidamente reservar en línea para garantizar su tiempo, especialmente los fines de semana." },
      { q: "¿Hay restricciones de edad?", a: "¡Tenemos áreas para todas las edades! Los niños de 5 años o menos tienen su propio tiempo y área dedicada." },
      { q: "¿Puedo traer comida externa?", a: "Solo se permite comida externa para fiestas de cumpleaños reservadas (pastel o cupcakes)." }
    ],
    readyToJump: "¿Listo para Saltar?",
    footerContact: "Contáctenos",
    footerLinks: "Enlaces Rápidos"
  }
};
function LandingPage({ location }) {
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
  const isComingSoon = location.status === "coming_soon";
  return /* @__PURE__ */ jsxs("div", { className: "bg-transparent text-slate-800 dark:text-slate-200 font-sans overflow-x-hidden transition-colors duration-500", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center pt-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-1000" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/grid.svg')] opacity-20" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center max-w-5xl mx-auto px-6", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            className: "mb-6",
            children: /* @__PURE__ */ jsxs("span", { className: "bg-slate-900 dark:bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] inline-block shadow-2xl italic", children: [
              location.city,
              ", ",
              location.state
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "text-6xl md:text-[10rem] font-black italic font-headings uppercase tracking-tighter mb-8 leading-[0.85] text-slate-900 dark:text-white drop-shadow-2xl",
            children: [
              t.heroTitle.split(" ").slice(0, 3).join(" "),
              " ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-primary underline decoration-orange-500/30 underline-offset-[15px]", children: t.heroTitle.split(" ").slice(3).join(" ") })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "text-xl md:text-3xl text-slate-500 dark:text-slate-400 font-bold mb-16 max-w-3xl mx-auto italic tracking-tight leading-relaxed",
            children: t.heroSubtitle
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
            children: isComingSoon ? /* @__PURE__ */ jsx("button", { disabled: true, className: "w-full sm:w-auto bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-black uppercase py-6 px-14 rounded-3xl text-xl italic tracking-tight cursor-not-allowed", children: "Opening Soon" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${location.slug}/book`, className: "w-full sm:w-auto bg-primary hover:bg-blue-600 text-white font-black uppercase py-6 px-14 rounded-3xl text-xl transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 italic tracking-tight", children: t.bookBtn }),
              /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${location.slug}/waiver`, className: "w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 font-black uppercase py-6 px-14 rounded-3xl text-xl transition-all shadow-xl hover:bg-slate-50 dark:hover:bg-slate-800 italic tracking-tight", children: t.waiverBtn })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 py-10 relative z-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center md:border-r border-slate-100 dark:border-slate-900", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 italic", children: "Current Hours" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl font-black italic text-slate-900 dark:text-white uppercase", children: isComingSoon ? "Coming Soon" : location.hours.monThu })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center md:border-r border-slate-100 dark:border-slate-900", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 italic", children: "Safety Check" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl font-black italic text-primary uppercase", children: t.infoStrip.waiver })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 italic", children: "Gear Required" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl font-black italic text-orange-500 uppercase", children: t.infoStrip.socks })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "attractions", className: "max-w-7xl mx-auto px-6 py-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-24", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-8 text-slate-900 dark:text-white leading-none", children: [
          t.attractionsTitle.split(" ")[0],
          " ",
          /* @__PURE__ */ jsx("br", {}),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary italic underline decoration-orange-500/30 dark:decoration-orange-400/30 underline-offset-8", children: t.attractionsTitle.split(" ")[1] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-24 h-2 bg-primary mx-auto rounded-full" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12", children: ATTRACTIONS.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "group flex flex-col bg-white dark:bg-slate-900 rounded-[4rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-2xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "aspect-[4/3] overflow-hidden relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900/10 dark:bg-slate-950/40 group-hover:bg-transparent transition-colors z-10" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: item.img,
              alt: item.name,
              className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: `absolute top-8 left-8 z-20 bg-slate-900 dark:bg-primary text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl italic`, children: "Must See" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-12 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: `text-3xl font-black italic uppercase mb-4 text-slate-900 dark:text-white`, children: item.name }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 text-sm font-bold leading-relaxed mb-10 flex-1", children: item.desc }),
          /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${location.slug}/book`, className: `inline-block w-fit text-[10px] font-black uppercase tracking-[0.3em] py-4 px-10 rounded-full border-2 border-slate-100 dark:border-slate-800 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all text-slate-500 dark:text-slate-400 italic`, children: t.bookBtn })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "parties", className: "bg-white dark:bg-slate-950 py-40 px-6 relative overflow-hidden mb-40 border-y border-slate-200 dark:border-slate-900", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-96 -mt-96" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-6xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-10 leading-[0.9] text-slate-900 dark:text-white", children: [
            t.partyTitle.split(" ")[0],
            " ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-primary italic underline decoration-orange-500/30 underline-offset-8", children: t.partyTitle.split(" ").slice(1).join(" ") })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold mb-12 text-slate-500 dark:text-slate-400 italic", children: t.partySubtitle }),
          /* @__PURE__ */ jsx("div", { className: "space-y-8 mb-16", children: t.partyBenefits.map((benefit, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-primary text-white p-3 rounded-2xl font-black text-xs italic shadow-xl", children: "✔" }),
            /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-slate-700 dark:text-slate-300", children: benefit })
          ] }, i)) }),
          /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${location.slug}/book`, className: "inline-block bg-primary hover:bg-blue-600 text-white font-black uppercase py-7 px-16 rounded-3xl text-xl transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 italic tracking-tight", children: t.bookBtn })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "aspect-square bg-slate-50 dark:bg-slate-900 rounded-[5rem] border-8 border-white dark:border-slate-800 shadow-2xl flex items-center justify-center text-primary/5 dark:text-white/5 font-black italic text-4xl overflow-hidden relative", children: [
          /* @__PURE__ */ jsx("img", { src: `${SITE_BASE}/images/hero-header.png`, alt: "Party", className: "absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-50" }),
          /* @__PURE__ */ jsx("span", { className: "relative z-10 uppercase tracking-widest drop-shadow-2xl", children: "🎉 PARTY TIME" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "pricing", className: "max-w-7xl mx-auto px-6 pb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 text-slate-800 dark:text-slate-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-16 md:p-20 rounded-[4rem] shadow-xl", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-black italic font-headings uppercase tracking-tighter mb-16 text-primary dark:text-white underline decoration-orange-500/20 underline-offset-8", children: "Open Hours" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-xs", children: "Mon - Thu" }),
            /* @__PURE__ */ jsx("span", { className: "font-black text-xl italic tracking-tight", children: isComingSoon ? "TBD" : location.hours.monThu })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b border-slate-100 dark:border-slate-900 pb-6 font-black text-primary italic", children: [
            /* @__PURE__ */ jsx("span", { className: "uppercase tracking-widest text-xs", children: "Fri - Sat (Elite)" }),
            /* @__PURE__ */ jsx("span", { className: "text-xl tracking-tight", children: isComingSoon ? "TBD" : location.hours.friSat })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b border-slate-100 dark:border-slate-800 pb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-xs", children: "Sunday" }),
            /* @__PURE__ */ jsx("span", { className: "font-black text-xl italic tracking-tight", children: isComingSoon ? "TBD" : location.hours.sun })
          ] })
        ] }),
        location.hours.note && /* @__PURE__ */ jsxs("p", { className: "mt-10 text-[10px] text-slate-400 font-black uppercase tracking-widest italic leading-relaxed text-center", children: [
          "* ",
          location.hours.note
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-16 md:p-20 rounded-[4rem] shadow-xl", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-black italic font-headings uppercase tracking-tighter mb-16 text-orange-500 dark:text-white underline decoration-primary/20 underline-offset-8", children: "Jump Pricing" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 mb-16", children: [
          Object.entries(location.pricing.general).map(([duration, price], i) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 dark:bg-slate-950 p-10 rounded-[2.5rem] flex justify-between items-center border border-slate-100 dark:border-slate-800 group hover:bg-white dark:hover:bg-slate-800 hover:border-orange-500 transition-all duration-500", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-black uppercase tracking-tight text-2xl text-slate-900 dark:text-white italic", children: "General Jump" }),
              /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest mt-2", children: [
                duration,
                " Minutes"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-5xl font-black italic text-orange-500 tabular-nums", children: [
              "$",
              price
            ] })
          ] }, i)),
          /* @__PURE__ */ jsxs("p", { className: "text-center text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest pt-8 italic leading-relaxed", children: [
            t.infoStrip.socks,
            " ($",
            location.pricing.socksPrice,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${location.slug}/book`, className: "block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-black dark:hover:bg-slate-100 py-6 rounded-3xl font-black uppercase tracking-[0.3em] transition-all shadow-2xl italic text-sm", children: "View All Rates" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-6 pb-40", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#020617] border border-slate-800 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.1),transparent)]" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-9xl font-black italic font-headings uppercase tracking-tighter mb-12 text-white relative z-10 leading-none", children: t.waiverTitle }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-8 mb-20 relative z-10 text-slate-300 font-bold", children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl italic tracking-tight text-white/90", children: t.waiverSafety }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 uppercase tracking-[0.4em] leading-loose font-black italic", children: t.waiverDetails })
      ] }),
      isComingSoon ? /* @__PURE__ */ jsx("button", { disabled: true, className: "relative z-10 inline-block bg-slate-800 text-slate-600 font-black uppercase py-7 px-20 rounded-[3rem] text-2xl italic tracking-tight cursor-not-allowed", children: "Available Soon" }) : /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${location.slug}/waiver`, className: "relative z-10 inline-block bg-orange-500 hover:bg-orange-600 text-white font-black uppercase py-7 px-20 rounded-[3rem] text-2xl transition-all shadow-2xl shadow-orange-500/30 hover:scale-105 active:scale-95 italic tracking-tight", children: t.waiverBtn })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-6 pb-40", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-black italic font-headings uppercase tracking-tighter text-center mb-24 text-slate-900 dark:text-white leading-none", children: t.faqTitle }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: t.faqItems.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-black uppercase tracking-tighter text-primary mb-6 italic", children: item.q }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 font-bold leading-relaxed", children: item.a })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-6 pb-40 text-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 dark:bg-slate-900/50 p-20 rounded-[4rem] border border-slate-100 dark:border-slate-800", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-black italic uppercase text-slate-900 dark:text-white mb-10 tracking-widest", children: [
        "Connect with ",
        location.city
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic", children: "Address" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-black italic text-slate-900 dark:text-white uppercase", children: location.address })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic", children: "Phone" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-black italic text-primary uppercase", children: location.phones[0] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic", children: "Email" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-black italic text-orange-500 uppercase lowercase", children: location.email })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-48 px-6 text-center bg-primary relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/10" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-7xl md:text-[12rem] font-black italic font-headings uppercase tracking-tighter mb-20 text-white drop-shadow-xl leading-none", children: t.readyToJump }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-8 justify-center items-center", children: isComingSoon ? /* @__PURE__ */ jsx("button", { disabled: true, className: "w-full sm:w-auto bg-slate-950 text-slate-600 font-black uppercase py-8 px-24 rounded-[3rem] text-3xl italic tracking-tight cursor-not-allowed", children: "Available Soon" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${location.slug}/book`, className: "w-full sm:w-auto bg-slate-950 text-white hover:bg-black font-black uppercase py-8 px-24 rounded-[3rem] text-3xl transition-all shadow-2xl shadow-black/40 italic tracking-tight hover:scale-105", children: t.bookBtn }),
          /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${location.slug}/waiver`, className: "w-full sm:w-auto bg-white text-primary hover:bg-slate-50 font-black uppercase py-8 px-24 rounded-[3rem] text-3xl transition-all shadow-2xl italic tracking-tight hover:scale-105", children: t.waiverBtn })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary p-3 rounded-2xl rotate-12", children: /* @__PURE__ */ jsx("span", { className: "text-white text-2xl font-black italic", children: "S" }) }),
        /* @__PURE__ */ jsxs("span", { className: "font-black italic text-2xl tracking-tighter uppercase text-slate-900 dark:text-white", children: [
          "Soar ",
          /* @__PURE__ */ jsx("span", { className: "text-orange-500", children: "N" }),
          " Bounce"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400 italic", children: [
        /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/`, className: "hover:text-primary transition-colors", children: "Select Location" }),
        /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/about`, className: "hover:text-primary transition-colors", children: "About Us" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "Terms" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "Privacy" })
      ] })
    ] }) })
  ] });
}

const $$Astro = createAstro("https://Bparker81597.github.io");
function getStaticPaths() {
  return LOCATIONS.map((loc) => ({
    params: { location: loc.slug },
    props: { locationConfig: loc }
  }));
}
const $$location = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$location;
  const { locationConfig } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${locationConfig.name} | Jump Into the Fun` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingPage", LandingPage, { "location": locationConfig, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mymac/Demo-SoarNBounce/src/components/LandingPage", "client:component-export": "default" })} ` })}`;
}, "/Users/mymac/Demo-SoarNBounce/src/pages/[location].astro", void 0);

const $$file = "/Users/mymac/Demo-SoarNBounce/src/pages/[location].astro";
const $$url = "/Demo-SoarNBounce/[location]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$location,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
