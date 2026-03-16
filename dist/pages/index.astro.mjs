/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_sWjgxE-L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D1c_zEE1.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { L as LOCATIONS } from '../chunks/locations_jlE7fCMg.mjs';
export { renderers } from '../renderers.mjs';

const SITE_BASE = "/Demo-SoarNBounce";
function LocationPicker({ locations }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredLocations = locations.filter(
    (loc) => loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || loc.city.toLowerCase().includes(searchTerm.toLowerCase()) || loc.state.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const openLocations = filteredLocations.filter((loc) => loc.status === "open");
  const comingSoonLocations = filteredLocations.filter((loc) => loc.status === "coming_soon");
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-transparent pt-24 pb-40 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "text-6xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-8 text-slate-900 dark:text-white leading-none",
          children: [
            "CHOOSE YOUR ",
            /* @__PURE__ */ jsx("br", {}),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-primary underline decoration-orange-500/30 underline-offset-8", children: "PARK" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-bold italic tracking-tight mb-12", children: "Find the Soar N Bounce nearest to you and jump into the fun." }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto relative group", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search by city or state...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "w-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[2rem] px-10 py-6 text-xl font-bold italic shadow-2xl focus:border-primary focus:outline-none transition-all group-hover:scale-[1.02] dark:text-white"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "absolute right-8 top-1/2 -translate-y-1/2 text-3xl", children: "🔍" })
      ] })
    ] }),
    openLocations.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-24", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black italic uppercase tracking-widest text-primary mb-12 border-l-8 border-primary pl-8", children: "Currently Open" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10", children: openLocations.map((loc) => /* @__PURE__ */ jsx(LocationCard, { loc }, loc.slug)) })
    ] }),
    comingSoonLocations.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black italic uppercase tracking-widest text-orange-500 mb-12 border-l-8 border-orange-500 pl-8", children: "Coming Soon" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10", children: comingSoonLocations.map((loc) => /* @__PURE__ */ jsx(LocationCard, { loc }, loc.slug)) })
    ] })
  ] }) });
}
function LocationCard({ loc }) {
  const isOpen = loc.status === "open";
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      whileHover: { y: -10 },
      className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group",
      children: /* @__PURE__ */ jsxs("div", { className: "p-10 flex flex-col h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: `inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 italic ${isOpen ? "bg-emerald-500 text-white" : "bg-orange-500 text-white"}`, children: isOpen ? "Now Open" : "Opening Soon" }),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-black italic uppercase text-slate-900 dark:text-white mb-2 leading-tight", children: loc.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] italic", children: [
            loc.city,
            ", ",
            loc.state
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-10 flex-1", children: [
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold text-sm italic", children: [
            /* @__PURE__ */ jsx("span", { children: "📍" }),
            " ",
            loc.address
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold text-sm italic", children: [
            /* @__PURE__ */ jsx("span", { children: "📞" }),
            " ",
            loc.phones[0]
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: isOpen ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${loc.slug}`, className: "bg-primary hover:bg-blue-600 text-white text-center font-black uppercase py-4 rounded-2xl transition-all shadow-lg italic tracking-widest text-xs", children: "View Park" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${loc.slug}/book`, className: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center font-black uppercase py-3 rounded-xl transition-all italic tracking-widest text-[9px]", children: "Tickets" }),
            /* @__PURE__ */ jsx("a", { href: `${SITE_BASE}/${loc.slug}/waiver`, className: "bg-orange-500 text-white text-center font-black uppercase py-3 rounded-xl transition-all italic tracking-widest text-[9px]", children: "Waiver" })
          ] })
        ] }) : /* @__PURE__ */ jsx("button", { className: "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed font-black uppercase py-4 rounded-2xl italic tracking-widest text-xs", children: "Coming Soon" }) })
      ] })
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Soar N Bounce | Trampoline & Adventure Park" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LocationPicker", LocationPicker, { "locations": LOCATIONS, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mymac/Demo-SoarNBounce/src/components/locations/LocationPicker", "client:component-export": "default" })} ` })}`;
}, "/Users/mymac/Demo-SoarNBounce/src/pages/index.astro", void 0);

const $$file = "/Users/mymac/Demo-SoarNBounce/src/pages/index.astro";
const $$url = "/Demo-SoarNBounce";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
