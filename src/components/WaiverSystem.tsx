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
    <div className="min-h-screen text-white bg-transparent font-sans pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="pt-16 pb-12 px-6 text-center relative">
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 p-1 rounded-2xl border border-white/10 flex">
            <button 
              onClick={() => setLang('en')}
              className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${lang === 'en' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLang('es')}
              className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${lang === 'es' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              Español
            </button>
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black italic font-headings uppercase tracking-tighter mb-4"
        >
          {t.title}
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center">
            <span className="mr-2">🛡️</span> {t.secureWaiver}
          </span>
          <span className="bg-secondary/20 text-secondary border border-secondary/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center">
            <span className="mr-2">🚀</span> {t.readyToJump}
          </span>
          <span className="bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center">
            <span className="mr-2">👨‍👩‍👧‍👦</span> {t.familyFriendly}
          </span>
        </div>

        <div className="text-secondary font-bold uppercase tracking-[0.3em] text-sm">
           📍 {t.location}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* 2. WAIVER TYPE SELECTION */}
        <section className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
          <h2 className="text-2xl font-bold mb-8 text-primary flex items-center italic">
             <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm not-italic mr-4">1</span>
             {t.selectType}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button 
              onClick={() => setWaiverType('family')}
              className={`text-left p-8 rounded-[2rem] border-2 transition-all relative group ${waiverType === 'family' ? 'border-primary bg-primary/10' : 'border-white/5 bg-black/20 hover:border-white/20'}`}
            >
               <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</div>
               <h3 className="text-xl font-bold mb-2">{t.meAndKids}</h3>
               <p className="text-sm text-gray-500 leading-relaxed">{t.meAndKidsDesc}</p>
               {waiverType === 'family' && <span className="absolute top-6 right-6 text-primary">✔</span>}
            </button>
            <button 
              onClick={() => setWaiverType('single')}
              className={`text-left p-8 rounded-[2rem] border-2 transition-all relative group ${waiverType === 'single' ? 'border-primary bg-primary/10' : 'border-white/5 bg-black/20 hover:border-white/20'}`}
            >
               <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👤</div>
               <h3 className="text-xl font-bold mb-2">{t.justMe}</h3>
               <p className="text-sm text-gray-500 leading-relaxed">{t.justMeDesc}</p>
               {waiverType === 'single' && <span className="absolute top-6 right-6 text-primary">✔</span>}
            </button>
          </div>
        </section>

        {/* 3. EMAIL INPUT */}
        <section className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
           <h2 className="text-2xl font-bold mb-8 text-secondary flex items-center italic">
             <span className="bg-secondary text-black w-8 h-8 rounded-full flex items-center justify-center text-sm not-italic mr-4 font-black">2</span>
             {t.enterEmail}
          </h2>
          <div className="max-w-md">
            <input 
              type="email" 
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-secondary transition-all text-lg mb-4"
            />
            <p className="text-sm text-gray-500 italic">
              {t.emailHelp}
            </p>
          </div>
        </section>

        {/* 4. ACTION BUTTONS */}
        <section className="flex flex-col sm:flex-row gap-6">
           <button 
             onClick={handleOpenWaiver}
             className="flex-1 bg-primary hover:bg-blue-600 text-white font-black uppercase py-6 rounded-[2rem] text-xl transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
           >
             {t.openWaiver} &rarr;
           </button>
           <button 
             onClick={handleOpenWaiver}
             className="flex-1 border-2 border-white/20 hover:border-white text-white font-black uppercase py-6 rounded-[2rem] text-xl transition-all hover:bg-white/5"
           >
             {t.startNew}
           </button>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-12">
           <h2 className="text-3xl font-black italic uppercase tracking-tighter text-center mb-12">{t.howItWorks}</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[t.step1, t.step2, t.step3, t.step4].map((step, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center relative overflow-hidden group">
                   <div className="text-6xl font-black absolute -top-4 -right-2 opacity-5 text-white group-hover:opacity-10 transition-opacity">{i + 1}</div>
                   <div className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{i + 1}</div>
                   <p className="font-bold text-sm text-gray-300 leading-snug">{step}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 6. BEFORE YOU JUMP RULES */}
        <section className="bg-accent/5 border border-accent/20 rounded-[3rem] p-8 md:p-12">
           <h2 className="text-3xl font-black italic uppercase tracking-tighter text-accent mb-12 flex items-center">
             <span className="mr-4">⚠️</span> {t.rulesTitle}
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {[t.rule1, t.rule2, t.rule3, t.rule4, t.rule5, t.rule6].map((rule, i) => (
                <div key={i} className="flex items-start space-x-4">
                   <span className="text-accent text-xl mt-1">✔</span>
                   <p className="font-bold text-gray-200">{rule}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 7 & 8. HOURS & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-black italic uppercase text-secondary mb-8 underline decoration-secondary/30 underline-offset-8">{t.hoursTitle}</h3>
              <ul className="space-y-4">
                 <li className="flex justify-between font-bold">
                    <span className="text-gray-400">{t.monThu}</span>
                    <span>10 AM – 9 PM</span>
                 </li>
                 <li className="flex justify-between font-bold text-secondary">
                    <span>{t.friSat}</span>
                    <span>10 AM – 10 PM</span>
                 </li>
                 <li className="flex justify-between font-bold">
                    <span className="text-gray-400">{t.sun}</span>
                    <span>10 AM – 9 PM</span>
                 </li>
              </ul>
              <p className="text-[10px] text-gray-500 mt-6 uppercase font-bold tracking-widest">{t.hoursNotice}</p>
           </div>

           <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-black italic uppercase text-primary mb-8 underline decoration-primary/30 underline-offset-8">{t.contactTitle}</h3>
              <div className="space-y-6 font-bold text-gray-200">
                 <div className="flex items-start space-x-4">
                    <span className="text-xl">📍</span>
                    <p>3668 Rivertown Pkwy SW<br/>Grandville MI 49418</p>
                 </div>
                 <div className="flex items-start space-x-4">
                    <span className="text-xl">📞</span>
                    <p>616-215-0999<br/>616-215-0998</p>
                 </div>
                 <div className="flex items-start space-x-4 text-primary">
                    <span className="text-xl">✉️</span>
                    <p>InfoGV@soarnbounce.com</p>
                 </div>
              </div>
           </div>
        </div>

        {/* 9. DISCLAIMER */}
        <p className="text-center text-xs text-gray-600 max-w-2xl mx-auto px-6 italic">
          {t.disclaimer}
        </p>

      </div>
    </div>
  );
}
