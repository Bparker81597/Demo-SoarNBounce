import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const TRANSLATIONS = {
  en: {
    title: "Book Your Jump",
    subtitle: "Select your ticket type, duration, and time to guarantee your spot.",
    step1: "1. Ticket Type",
    step2: "2. Date & Time",
    step3: "3. Jumper Details",
    step4: "4. Review & Pay",
    general: "General Admission",
    toddler: "Toddler (5 & Under)",
    party: "Birthday Party",
    group: "Group Event",
    next: "Next Step",
    prev: "Back",
    bookNow: "Complete Booking",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    notes: "Special Requests / Notes",
    minutes: "Minutes",
    waiverReminder: "Don't forget to sign your waiver online!",
    total: "Total Amount"
  },
  es: {
    title: "Reserve su Salto",
    subtitle: "Seleccione su tipo de entrada, duración y hora para garantizar su lugar.",
    step1: "1. Tipo de Entrada",
    step2: "2. Fecha y Hora",
    step3: "3. Detalles de Saltadores",
    step4: "4. Revisar y Pagar",
    general: "Entrada General",
    toddler: "Niños (5 o menos)",
    party: "Fiesta de Cumpleaños",
    group: "Evento de Grupo",
    next: "Siguiente",
    prev: "Atrás",
    bookNow: "Completar Reserva",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Teléfono",
    notes: "Notas / Pedidos Especiales",
    minutes: "Minutos",
    waiverReminder: "¡No olvides firmar la exención en línea!",
    total: "Monto Total"
  }
};
function BookingSystem({ location }) {
  const [lang, setLang] = useState("en");
  const [step, setStep] = useState(1);
  const [type, setType] = useState("general");
  const [duration, setDuration] = useState("90");
  const [date, setDate] = useState((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
  const [time, setTime] = useState("");
  const [jumpers, setJumpers] = useState(1);
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
  const currentPrice = useMemo(() => {
    const pricing = type === "toddler" ? location.pricing.toddler : location.pricing.general;
    return (pricing[duration] || 0) * jumpers;
  }, [type, duration, jumpers, location]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen text-slate-900 dark:text-slate-100 bg-transparent font-sans pb-20 transition-colors duration-500", children: /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 px-6 text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-6 text-slate-900 dark:text-white leading-none", children: t.title }),
    /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-bold italic tracking-tight", children: [
      t.subtitle,
      " ",
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsxs("span", { className: "text-primary uppercase tracking-widest text-xs not-italic font-black", children: [
        "Location: ",
        location.name
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[4rem] p-10 md:p-20 shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-16", children: [1, 2, 3, 4].map((s) => /* @__PURE__ */ jsx("div", { className: `px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${step === s ? "bg-primary text-white italic shadow-lg scale-110" : "bg-slate-100 dark:bg-slate-800 text-slate-400"}`, children: t[`step${s}`] }, s)) }),
      step === 1 && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "space-y-12", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: ["general", "toddler", "party", "group"].map((bt) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setType(bt),
            className: `p-10 rounded-[2.5rem] border-2 transition-all text-left group ${type === bt ? "border-primary bg-primary/5 shadow-xl" : "border-slate-100 dark:border-slate-800 hover:border-slate-300"}`,
            children: [
              /* @__PURE__ */ jsx("p", { className: `text-2xl font-black italic uppercase mb-2 ${type === bt ? "text-primary" : "text-slate-900 dark:text-white"}`, children: t[bt] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 font-bold uppercase tracking-widest", children: "Select Category" })
            ]
          },
          bt
        )) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8 italic text-center", children: "Select Duration" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4", children: Object.keys(location.pricing.general).map((d) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setDuration(d),
              className: `px-10 py-5 rounded-2xl font-black italic text-xl transition-all ${duration === d ? "bg-primary text-white shadow-xl scale-105" : "bg-slate-50 dark:bg-slate-800 text-slate-400"}`,
              children: [
                d,
                " ",
                t.minutes
              ]
            },
            d
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-10 flex justify-center", children: /* @__PURE__ */ jsx("button", { onClick: () => setStep(2), className: "bg-primary hover:bg-blue-600 text-white font-black uppercase py-6 px-16 rounded-[2rem] text-xl transition-all shadow-2xl italic tracking-tight", children: t.next }) })
      ] }),
      step > 1 && /* @__PURE__ */ jsxs("div", { className: "text-center py-20", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 font-black uppercase tracking-widest mb-4 italic", children: t.total }),
        /* @__PURE__ */ jsxs("h2", { className: "text-8xl font-black italic text-primary tracking-tighter mb-10", children: [
          "$",
          currentPrice
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-6", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setStep(1), className: "text-slate-400 font-black uppercase italic hover:text-primary transition-colors", children: t.prev }),
          /* @__PURE__ */ jsx("button", { onClick: () => alert("Booking Redirecting to: " + location.links.booking), className: "bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase italic shadow-xl", children: t.bookNow })
        ] })
      ] })
    ] })
  ] }) });
}

export { BookingSystem as B };
