import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TRANSLATIONS = {
  en: {
    title: "Online Waiver",
    subtitle: "Complete your waiver before arriving to speed up your check-in.",
    familyTitle: "Family Waiver",
    familyDesc: "Sign for yourself and your minor children.",
    singleTitle: "Single Adult",
    singleDesc: "Sign for yourself only (18+).",
    emailLabel: "Your Email",
    emailPlaceholder: "Enter the email used for booking",
    startBtn: "Open Official Waiver",
    disclaimer: "By clicking above, you will be redirected to our secure third-party waiver system. Every participant needs a signed waiver on file."
  },
  es: {
    title: "Exención en Línea",
    subtitle: "Complete su exención antes de llegar para acelerar su registro.",
    familyTitle: "Exención Familiar",
    familyDesc: "Firme por usted y sus hijos menores.",
    singleTitle: "Adulto Individual",
    singleDesc: "Firme solo por usted (18+).",
    emailLabel: "Su Correo",
    emailPlaceholder: "Ingrese el correo usado para la reserva",
    startBtn: "Abrir Exención Oficial",
    disclaimer: "Al hacer clic arriba, será redirigido a nuestro sistema seguro de exenciones. Cada participante necesita una exención firmada."
  }
};
function WaiverSystem({ location }) {
  const [lang, setLang] = useState("en");
  const [waiverType, setWaiverType] = useState("family");
  const [email, setEmail] = useState("");
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
  const handleOpenWaiver = () => {
    window.open(location.links.waiver, "_blank");
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen text-slate-900 dark:text-slate-100 bg-transparent font-sans pb-20 transition-colors duration-500", children: /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 px-6 text-center relative", children: [
    /* @__PURE__ */ jsx(
      motion.h1,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "text-6xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-6 text-slate-900 dark:text-white leading-none",
        children: t.title
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-bold italic tracking-tight", children: [
      t.subtitle,
      " ",
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsxs("span", { className: "text-primary uppercase tracking-widest text-xs not-italic font-black", children: [
        "Location: ",
        location.name
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setWaiverType("family"),
          className: `p-10 rounded-[3.5rem] border-2 text-left transition-all ${waiverType === "family" ? "border-primary bg-primary/5 shadow-2xl scale-105" : "border-slate-100 dark:border-slate-800 hover:border-slate-200"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl mb-6 block", children: "👨‍👩‍👧‍👦" }),
            /* @__PURE__ */ jsx("h3", { className: `text-2xl font-black uppercase italic mb-2 ${waiverType === "family" ? "text-primary" : "text-slate-900 dark:text-white"}`, children: t.familyTitle }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 font-bold italic", children: t.familyDesc })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setWaiverType("single"),
          className: `p-10 rounded-[3.5rem] border-2 text-left transition-all ${waiverType === "single" ? "border-primary bg-primary/5 shadow-2xl scale-105" : "border-slate-100 dark:border-slate-800 hover:border-slate-200"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl mb-6 block", children: "👤" }),
            /* @__PURE__ */ jsx("h3", { className: `text-2xl font-black uppercase italic mb-2 ${waiverType === "single" ? "text-primary" : "text-slate-900 dark:text-white"}`, children: t.singleTitle }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 font-bold italic", children: t.singleDesc })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-left mb-10", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 ml-4 italic", children: t.emailLabel }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: t.emailPlaceholder,
            className: "w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-950 rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold transition-all outline-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleOpenWaiver,
          className: "w-full bg-primary hover:bg-blue-600 text-white font-black uppercase py-6 rounded-2xl text-xl transition-all shadow-xl shadow-primary/20 italic tracking-tight hover:scale-[1.02] active:scale-95",
          children: t.startBtn
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-slate-400 dark:text-slate-600 max-w-3xl mx-auto px-10 italic font-bold leading-relaxed pt-10", children: t.disclaimer })
  ] }) });
}

export { WaiverSystem as W };
