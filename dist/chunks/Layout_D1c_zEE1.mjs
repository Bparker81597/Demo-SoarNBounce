import { b as createAstro, c as createComponent, a as renderTemplate, r as renderComponent, d as renderSlot, e as renderHead, f as addAttribute } from './astro/server_sWjgxE-L.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                              */

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      setIsDark(isCurrentlyDark);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => observer.disconnect();
  }, []);
  const toggleTheme = () => {
    const nextTheme = !isDark ? "dark" : "light";
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", nextTheme);
    console.log("Theme toggled to:", nextTheme);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:scale-110 active:scale-95 transition-all text-xl flex items-center justify-center min-w-[50px] min-h-[50px]",
      "aria-label": "Toggle Theme",
      type: "button",
      children: /* @__PURE__ */ jsx("span", { className: "transition-transform duration-300 transform group-active:scale-90", children: isDark ? "☀️" : "🌙" })
    }
  );
}

function LanguageSwitcher() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);
  const toggleLang = () => {
    const newLang = lang === "en" ? "es" : "en";
    setLang(newLang);
    localStorage.setItem("preferred-lang", newLang);
    window.dispatchEvent(new CustomEvent("lang-changed", { detail: newLang }));
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleLang,
      className: "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-sm border border-slate-200 dark:border-slate-700 active:scale-95",
      "aria-label": "Toggle Language",
      children: lang === "en" ? "ESPAÑOL" : "ENGLISH"
    }
  );
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://Bparker81597.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", `</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700;800&family=Poppins:wght@600;700&display=swap" rel="stylesheet"><script>
      const getTheme = () => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      };
    
      const theme = getTheme();
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    <\/script>`, `</head> <body class="font-sans antialiased text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-[#020617] transition-colors duration-500"> <!-- Desktop Navigation --> <header class="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 hidden md:block shadow-sm"> <nav class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"> <a href="/Demo-SoarNBounce/" class="text-2xl font-headings font-black italic text-primary tracking-tighter">
SOAR <span class="text-orange-500 dark:text-orange-400">'N</span> BOUNCE
</a> <div className="hidden md:flex items-center space-x-8 text-slate-600 dark:text-slate-400"> <a href="/Demo-SoarNBounce/" class="hover:text-primary dark:hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">Home</a> <a href="/Demo-SoarNBounce/about" class="hover:text-primary dark:hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">About</a> <a href="/Demo-SoarNBounce/#attractions" class="hover:text-primary dark:hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">Attractions</a> <a href="/Demo-SoarNBounce/#parties" class="hover:text-primary dark:hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">Parties</a> <a href="/Demo-SoarNBounce/#pricing" class="hover:text-primary dark:hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">Pricing</a> <a href="/Demo-SoarNBounce/waiver" class="hover:text-primary dark:hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">Waiver</a> </div> <div class="flex items-center space-x-4"> `, " ", ' <a href="/Demo-SoarNBounce/book" class="bg-primary hover:bg-blue-600 text-white px-8 py-2.5 rounded-full font-black transition-all shadow-lg shadow-primary/20 italic uppercase text-xs tracking-widest">\nBook Now\n</a> </div> </nav> </header> <!-- Sticky CTAs --> <div class="fixed right-6 bottom-24 z-40 flex flex-col space-y-4 hidden md:flex"> <a href="/Demo-SoarNBounce/book" class="bg-primary hover:scale-110 transition-transform p-4 rounded-2xl shadow-2xl group relative text-white"> <span class="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-black uppercase tracking-widest">Book Jump</span>\n\u{1F680}\n</a> <a href="/Demo-SoarNBounce/parties" class="bg-orange-500 hover:scale-110 transition-transform p-4 rounded-2xl shadow-2xl group relative text-white"> <span class="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-black uppercase tracking-widest">Book Party</span>\n\u{1F382}\n</a> <a href="/Demo-SoarNBounce/waiver" class="bg-emerald-500 hover:scale-110 transition-transform p-4 rounded-2xl shadow-2xl group relative text-white"> <span class="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-black uppercase tracking-widest">Sign Waiver</span>\n\u270D\uFE0F\n</a> </div> <main class="pb-24 md:pb-0 md:pt-20"> ', ' </main> <!-- Mobile Navigation --> <nav class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 md:hidden z-50 flex justify-around items-center py-4 px-2 shadow-[0_-4px_30px_rgba(0,0,0,0.1)]"> <a href="/Demo-SoarNBounce/" class="flex flex-col items-center space-y-1"> <span class="text-xl opacity-70 dark:opacity-100">\u{1F3E0}</span> <span class="text-[9px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-tighter">Home</span> </a> <a href="/Demo-SoarNBounce/book" class="flex flex-col items-center space-y-1"> <span class="text-xl">\u{1F39F}\uFE0F</span> <span class="text-[9px] uppercase font-black text-primary tracking-tighter">Book</span> </a> <div class="flex flex-col items-center justify-center -mt-4 bg-white dark:bg-slate-900 p-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-800 gap-2 px-3 py-4"> ', " ", ` </div> <a href="/Demo-SoarNBounce/#pricing" class="flex flex-col items-center space-y-1"> <span class="text-xl opacity-70 dark:opacity-100">\u23F0</span> <span class="text-[9px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-tighter">Hours</span> </a> <a href="/Demo-SoarNBounce/waiver" class="flex flex-col items-center space-y-1"> <span class="text-xl opacity-70 dark:opacity-100">\u{1F58A}\uFE0F</span> <span class="text-[9px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-tighter">Waiver</span> </a> </nav> <footer class="bg-white dark:bg-slate-950 py-20 px-6 mt-12 border-t border-slate-200 dark:border-slate-900"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-slate-600 dark:text-slate-400"> <div> <h3 class="text-2xl font-headings font-black text-primary mb-8 italic tracking-tighter uppercase">SOAR <span class="text-orange-500">'N</span> BOUNCE</h3> <p class="max-w-sm font-bold leading-relaxed text-sm">The ultimate trampoline park for high-energy fun and unforgettable birthday celebrations in Grandville, MI.</p> </div> <div> <h4 class="font-black text-[10px] mb-8 text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">Quick Hours</h4> <ul class="space-y-4 font-bold text-sm"> <li class="flex justify-between border-b border-slate-100 dark:border-slate-900 pb-2"><span>Mon - Thu:</span> <span class="text-slate-900 dark:text-slate-200">10AM - 8PM</span></li> <li class="flex justify-between text-primary italic border-b border-slate-100 dark:border-slate-900 pb-2"><span>Fri - Sat:</span> <span class="text-slate-900 dark:text-slate-200 uppercase tracking-tighter">10AM - 10PM</span></li> <li class="flex justify-between"><span>Sun:</span> <span class="text-slate-900 dark:text-slate-200">11AM - 7PM</span></li> </ul> </div> <div> <h4 class="font-black text-[10px] mb-8 text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">The Location</h4> <p class="font-black leading-relaxed mb-6 text-slate-900 dark:text-slate-200 text-lg tracking-tight">
3668 Rivertown Pkwy SW<br>
Grandville, MI 49418
</p> <a href="https://maps.google.com" target="_blank" class="text-primary hover:text-blue-600 transition-colors font-black italic uppercase text-xs tracking-[0.2em] flex items-center gap-2">
Open in Google Maps <span class="text-lg">\u2192</span> </a> </div> </div> <div class="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400"> <p>&copy; 2026 Soar N Bounce. All rights reserved.</p> <div class="flex space-x-6 mt-4 md:mt-0"> <a href="#" class="hover:text-primary transition-colors">Facebook</a> <a href="#" class="hover:text-primary transition-colors">Instagram</a> <a href="#" class="hover:text-primary transition-colors">TikTok</a> </div> </div> </footer> </body></html>`])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "LanguageSwitcher", LanguageSwitcher, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mymac/Demo-SoarNBounce/src/components/LanguageSwitcher", "client:component-export": "default" }), renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mymac/Demo-SoarNBounce/src/components/ThemeToggle", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "LanguageSwitcher", LanguageSwitcher, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mymac/Demo-SoarNBounce/src/components/LanguageSwitcher", "client:component-export": "default" }), renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mymac/Demo-SoarNBounce/src/components/ThemeToggle", "client:component-export": "default" }));
}, "/Users/mymac/Demo-SoarNBounce/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
