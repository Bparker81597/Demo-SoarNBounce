import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- TRANSLATIONS CONFIG ---
const TRANSLATIONS: any = {
  en: {
    title: "Online Waiver",
    subtitle: "Complete your waiver before arriving for faster check-in.",
    location: "Grandville, MI",
    secureWaiver: "Secure Waiver",
    readyToJump: "Ready to Jump",
    familyFriendly: "Family Friendly",
    selectType: "1. Select Waiver Type",
    meAndKids: "Me and my kids",
    meAndKidsDesc: "Parent or guardian signing for themselves and minors.",
    justMe: "Just me",
    justMeDesc: "Adult (18+) signing for themselves only.",
    enterEmail: "2. Enter Your Email",
    emailPlaceholder: "email@example.com",
    emailHelp: "The waiver system uses this email to find or start your record.",
    openWaiver: "Open Secure Waiver",
    startNew: "Start New Waiver",
    howItWorks: "How It Works",
    step1: "Choose waiver type",
    step2: "Enter your email",
    step3: "Continue to the secure portal",
    step4: "Complete and sign before visiting",
    rulesTitle: "Before You Jump",
    rule1: "Adults 18+ must complete their own waiver",
    rule2: "Minors under 18 must be signed by a parent or guardian",
    rule3: "Waivers are required before participating",
    rule4: "Jump socks are required for all participants",
    rule5: "Supervising parents must wear socks on platforms",
    rule6: "Maximum weight limit: 250 lbs",
    hoursTitle: "Grandville Hours",
    hoursNotice: "*Weekend hours may be affected by private events.",
    contactTitle: "Contact Information",
    disclaimer: "This page is a branded front-end experience. Final waiver completion and signatures occur in the official Soar N Bounce waiver system powered by LilYPad.",
    monThu: "Monday – Thursday",
    friSat: "Friday – Saturday",
    sun: "Sunday",
  },
  es: {
    title: "Exención en Línea",
    subtitle: "Complete su exención antes de llegar para un registro más rápido.",
    location: "Grandville, MI",
    secureWaiver: "Exención Segura",
    readyToJump: "Listo para Saltar",
    familyFriendly: "Familiar",
    selectType: "1. Seleccione el Tipo de Exención",
    meAndKids: "Yo y mis hijos",
    meAndKidsDesc: "Padre o tutor firmando para sí mismo y para menores.",
    justMe: "Solo yo",
    justMeDesc: "Adulto (18+) firmando solo para sí mismo.",
    enterEmail: "2. Ingrese su Correo",
    emailPlaceholder: "correo@ejemplo.com",
    emailHelp: "El sistema utiliza este correo para buscar o iniciar su registro.",
    openWaiver: "Abrir Exención Segura",
    startNew: "Iniciar Nueva Exención",
    howItWorks: "Cómo Funciona",
    step1: "Elija el tipo de exención",
    step2: "Ingrese su correo electrónico",
    step3: "Continúe al portal seguro",
    step4: "Complete y firme antes de visitar",
    rulesTitle: "Antes de Saltar",
    rule1: "Adultos (18+) deben completar su propia exención",
    rule2: "Menores de 18 deben ser firmados por un padre o tutor",
    rule3: "Se requieren exenciones antes de participar",
    rule4: "Se requieren calcetines de salto para todos",
    rule5: "Padres supervisores deben usar calcetines en plataformas",
    rule6: "Límite de peso máximo: 250 lbs",
    hoursTitle: "Horarios de Grandville",
    hoursNotice: "*Los horarios de fin de semana pueden variar por eventos privados.",
    contactTitle: "Información de Contacto",
    disclaimer: "Esta página es una experiencia frontal de marca. La finalización de la exención y las firmas ocurren en el sistema oficial de Soar N Bounce operado por LilYPad.",
    monThu: "Lunes – Jueves",
    friSat: "Viernes – Sábado",
    sun: "Domingo",
  }
};

const WAIVER_URL = "https://lilypadpos.app/soarnbouncegr/onlinewaiver/waiver.php";

export default function WaiverSystem() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [waiverType, setWaiverType] = useState<'family' | 'single'>('family');
  const [email, setEmail] = useState('');

  const t = TRANSLATIONS[lang];

  const handleOpenWaiver = () => {
    window.open(WAIVER_URL, '_blank');
  };

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 bg-transparent font-sans pb-20 transition-colors duration-500">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 px-6 text-center relative">
        <div className="flex justify-center mb-10">
          <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex shadow-2xl">
            <button 
              onClick={() => setLang('en')}
              className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${lang === 'en' ? 'bg-primary text-white shadow-lg italic' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLang('es')}
              className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${lang === 'es' ? 'bg-primary text-white shadow-lg italic' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Español
            </button>
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-6 text-slate-900 dark:text-white leading-none"
        >
          {t.title}
        </motion.h1>
        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-bold italic tracking-tight">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <span className="bg-white dark:bg-slate-900 text-primary border border-slate-100 dark:border-slate-800 shadow-xl px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center italic">
            <span className="mr-3 text-xl">🛡️</span> {t.secureWaiver}
          </span>
          <span className="bg-white dark:bg-slate-900 text-secondary border border-slate-100 dark:border-slate-800 shadow-xl px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center italic">
            <span className="mr-3 text-xl">🚀</span> {t.readyToJump}
          </span>
          <span className="bg-white dark:bg-slate-900 text-orange-500 dark:text-orange-400 border border-slate-100 dark:border-slate-800 shadow-xl px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center italic">
            <span className="mr-3 text-xl">👨‍👩‍👧‍👦</span> {t.familyFriendly}
          </span>
        </div>

        <div className="text-primary dark:text-primary font-black uppercase tracking-[0.4em] text-sm italic">
           📍 {t.location}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* 2. WAIVER TYPE SELECTION */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[4rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl font-black mb-12 text-slate-900 dark:text-white flex items-center italic uppercase tracking-tight">
             <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm not-italic mr-5 shadow-lg shadow-primary/20">1</span>
             {t.selectType}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button 
              onClick={() => setWaiverType('family')}
              className={`text-left p-10 rounded-[3rem] border-2 transition-all relative group ${waiverType === 'family' ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-inner' : 'border-slate-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-slate-200 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl'}`}
            >
               <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</div>
               <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-slate-900 dark:text-white italic">{t.meAndKids}</h3>
               <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed">{t.meAndKidsDesc}</p>
               {waiverType === 'family' && <span className="absolute top-8 right-8 text-primary text-2xl font-black">✔</span>}
            </button>
            <button 
              onClick={() => setWaiverType('single')}
              className={`text-left p-10 rounded-[3rem] border-2 transition-all relative group ${waiverType === 'single' ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-inner' : 'border-slate-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-slate-200 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl'}`}
            >
               <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">👤</div>
               <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-slate-900 dark:text-white italic">{t.justMe}</h3>
               <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed">{t.justMeDesc}</p>
               {waiverType === 'single' && <span className="absolute top-8 right-8 text-primary text-2xl font-black">✔</span>}
            </button>
          </div>
        </section>

        {/* 3. EMAIL INPUT */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[4rem] p-10 md:p-16 shadow-2xl">
           <h2 className="text-3xl font-black mb-12 text-slate-900 dark:text-white flex items-center italic uppercase tracking-tight">
             <span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm not-italic mr-5 font-black shadow-lg shadow-orange-500/20">2</span>
             {t.enterEmail}
          </h2>
          <div className="max-w-xl">
            <input 
              type="email" 
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl px-8 py-6 text-slate-900 dark:text-white outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-900 transition-all text-xl mb-6 shadow-sm font-bold placeholder:text-slate-300 dark:placeholder:text-slate-700"
            />
            <p className="text-slate-400 dark:text-slate-500 italic font-bold text-lg leading-relaxed">
              {t.emailHelp}
            </p>
          </div>
        </section>

        {/* 4. ACTION BUTTONS */}
        <section className="flex flex-col sm:flex-row gap-8">
           <button 
             onClick={handleOpenWaiver}
             className="flex-1 bg-primary hover:bg-blue-600 text-white font-black uppercase py-8 rounded-[2.5rem] text-2xl transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 italic tracking-tight"
           >
             {t.openWaiver} &rarr;
           </button>
           <button 
             onClick={handleOpenWaiver}
             className="flex-1 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 hover:border-primary dark:hover:border-primary text-slate-900 dark:text-white font-black uppercase py-8 rounded-[2.5rem] text-2xl transition-all hover:shadow-2xl italic tracking-tight"
           >
             {t.startNew}
           </button>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-20">
           <h2 className="text-4xl font-black italic uppercase tracking-tighter text-center mb-16 text-slate-900 dark:text-white leading-none">{t.howItWorks}</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[t.step1, t.step2, t.step3, t.step4].map((step, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 text-center relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all">
                   <div className="text-7xl font-black absolute -top-6 -right-4 opacity-[0.03] dark:opacity-[0.05] text-primary group-hover:opacity-10 transition-opacity italic">{i + 1}</div>
                   <div className="bg-primary text-white w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 font-black italic shadow-xl shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform">{i + 1}</div>
                   <p className="font-black text-slate-700 dark:text-slate-300 leading-snug uppercase tracking-tight text-sm italic">{step}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 6. BEFORE YOU JUMP RULES */}
        <section className="bg-slate-900 dark:bg-slate-950 border border-slate-800 rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px]"></div>
           <h2 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter text-orange-500 mb-16 flex items-center leading-none">
             <span className="mr-6 text-5xl">⚠️</span> {t.rulesTitle}
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16 relative z-10">
              {[t.rule1, t.rule2, t.rule3, t.rule4, t.rule5, t.rule6].map((rule, i) => (
                <div key={i} className="flex items-start space-x-5 group">
                   <span className="text-orange-500 font-black text-2xl mt-0.5 group-hover:scale-125 transition-transform italic">✔</span>
                   <p className="font-bold text-white/90 text-lg leading-tight tracking-tight italic uppercase">{rule}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 7 & 8. HOURS & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-900 dark:text-slate-100">
           <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
              <h3 className="text-3xl font-black italic uppercase text-primary mb-10 underline decoration-orange-500/30 underline-offset-8">Grandville Hours</h3>
              <ul className="space-y-6 font-black text-xl italic tracking-tighter">
                 <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="text-slate-400 uppercase text-[10px] tracking-[0.3em] font-black italic">{t.monThu}</span>
                    <span>10 AM – 9 PM</span>
                 </li>
                 <li className="flex justify-between text-primary italic border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="uppercase text-[10px] tracking-[0.3em] font-black italic">{t.friSat}</span>
                    <span>10 AM – 10 PM</span>
                 </li>
                 <li className="flex justify-between pb-2">
                    <span className="text-slate-400 uppercase text-[10px] tracking-[0.3em] font-black italic">{t.sun}</span>
                    <span>10 AM – 9 PM</span>
                 </li>
              </ul>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-10 uppercase font-black tracking-[0.2em] italic text-center">{t.hoursNotice}</p>
           </div>

           <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
              <h3 className="text-3xl font-black italic uppercase text-orange-500 mb-10 underline decoration-primary/30 underline-offset-8">Contact Info</h3>
              <div className="space-y-10 font-bold text-slate-700 dark:text-slate-300">
                 <div className="flex items-start space-x-6">
                    <span className="text-3xl bg-slate-50 dark:bg-slate-950 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">📍</span>
                    <p className="text-xl font-black tracking-tight leading-snug italic uppercase">3668 Rivertown Pkwy SW<br/>Grandville MI 49418</p>
                 </div>
                 <div className="flex items-start space-x-6">
                    <span className="text-3xl bg-slate-50 dark:bg-slate-950 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">📞</span>
                    <p className="text-xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter italic">616-215-0999<br/>616-215-0998</p>
                 </div>
                 <div className="flex items-start space-x-6">
                    <span className="text-3xl bg-slate-50 dark:bg-slate-950 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">✉️</span>
                    <p className="text-primary underline font-black italic text-lg tracking-tight">InfoGV@soarnbounce.com</p>
                 </div>
              </div>
           </div>
        </div>

        {/* 9. DISCLAIMER */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-600 max-w-3xl mx-auto px-10 italic font-bold leading-relaxed pt-10">
          {t.disclaimer}
        </p>

      </div>
    </div>
  );
}
