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
    <div className="min-h-screen text-gray-900 bg-transparent font-sans pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="pt-16 pb-12 px-6 text-center relative">
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-2xl border border-gray-200 flex shadow-xl">
            <button 
              onClick={() => setLang('en')}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${lang === 'en' ? 'bg-primary text-white shadow-lg italic' : 'text-gray-400 hover:text-gray-900'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLang('es')}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${lang === 'es' ? 'bg-primary text-white shadow-lg italic' : 'text-gray-400 hover:text-gray-900'}`}
            >
              Español
            </button>
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black italic font-headings uppercase tracking-tighter mb-4 text-gray-900"
        >
          {t.title}
        </motion.h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8 font-bold">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="bg-white text-primary border border-gray-100 shadow-md px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center">
            <span className="mr-2">🛡️</span> {t.secureWaiver}
          </span>
          <span className="bg-white text-secondary-dark border border-gray-100 shadow-md px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center">
            <span className="mr-2">🚀</span> {t.readyToJump}
          </span>
          <span className="bg-white text-accent border border-gray-100 shadow-md px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center">
            <span className="mr-2">👨‍👩‍👧‍👦</span> {t.familyFriendly}
          </span>
        </div>

        <div className="text-primary font-black uppercase tracking-[0.3em] text-sm italic">
           📍 {t.location}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* 2. WAIVER TYPE SELECTION */}
        <section className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl font-black mb-8 text-primary flex items-center italic uppercase tracking-tight">
             <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm not-italic mr-4">1</span>
             {t.selectType}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button 
              onClick={() => setWaiverType('family')}
              className={`text-left p-8 rounded-[2rem] border-2 transition-all relative group ${waiverType === 'family' ? 'border-primary bg-primary/5 shadow-inner' : 'border-gray-50 bg-gray-50 hover:border-gray-200 hover:bg-white hover:shadow-lg'}`}
            >
               <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</div>
               <h3 className="text-xl font-black mb-2 uppercase tracking-tight">{t.meAndKids}</h3>
               <p className="text-sm text-gray-500 leading-relaxed font-bold">{t.meAndKidsDesc}</p>
               {waiverType === 'family' && <span className="absolute top-6 right-6 text-primary font-black">✔</span>}
            </button>
            <button 
              onClick={() => setWaiverType('single')}
              className={`text-left p-8 rounded-[2rem] border-2 transition-all relative group ${waiverType === 'single' ? 'border-primary bg-primary/5 shadow-inner' : 'border-gray-50 bg-gray-50 hover:border-gray-200 hover:bg-white hover:shadow-lg'}`}
            >
               <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👤</div>
               <h3 className="text-xl font-black mb-2 uppercase tracking-tight">{t.justMe}</h3>
               <p className="text-sm text-gray-500 leading-relaxed font-bold">{t.justMeDesc}</p>
               {waiverType === 'single' && <span className="absolute top-6 right-6 text-primary font-black">✔</span>}
            </button>
          </div>
        </section>

        {/* 3. EMAIL INPUT */}
        <section className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-xl">
           <h2 className="text-2xl font-black mb-8 text-accent flex items-center italic uppercase tracking-tight">
             <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm not-italic mr-4 font-black">2</span>
             {t.enterEmail}
          </h2>
          <div className="max-w-md">
            <input 
              type="email" 
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 outline-none focus:border-primary focus:bg-white transition-all text-lg mb-4 shadow-sm"
            />
            <p className="text-sm text-gray-400 italic font-bold">
              {t.emailHelp}
            </p>
          </div>
        </section>

        {/* 4. ACTION BUTTONS */}
        <section className="flex flex-col sm:flex-row gap-6">
           <button 
             onClick={handleOpenWaiver}
             className="flex-1 bg-primary hover:bg-blue-600 text-white font-black uppercase py-6 rounded-[2rem] text-xl transition-all shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] italic"
           >
             {t.openWaiver} &rarr;
           </button>
           <button 
             onClick={handleOpenWaiver}
             className="flex-1 bg-white border-2 border-gray-200 hover:border-primary text-gray-900 font-black uppercase py-6 rounded-[2rem] text-xl transition-all hover:bg-gray-50 italic"
           >
             {t.startNew}
           </button>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-12">
           <h2 className="text-3xl font-black italic uppercase tracking-tighter text-center mb-12 text-gray-900">{t.howItWorks}</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[t.step1, t.step2, t.step3, t.step4].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 text-center relative overflow-hidden group shadow-lg hover:shadow-xl transition-all">
                   <div className="text-6xl font-black absolute -top-4 -right-2 opacity-5 text-primary group-hover:opacity-10 transition-opacity italic">{i + 1}</div>
                   <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-black italic shadow-md">{i + 1}</div>
                   <p className="font-black text-sm text-gray-700 leading-snug uppercase tracking-tight">{step}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 6. BEFORE YOU JUMP RULES */}
        <section className="bg-gray-900 border border-gray-800 rounded-[3rem] p-8 md:p-12 shadow-2xl">
           <h2 className="text-3xl font-black italic uppercase tracking-tighter text-accent mb-12 flex items-center">
             <span className="mr-4">⚠️</span> {t.rulesTitle}
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {[t.rule1, t.rule2, t.rule3, t.rule4, t.rule5, t.rule6].map((rule, i) => (
                <div key={i} className="flex items-start space-x-4">
                   <span className="text-accent text-xl mt-1">✔</span>
                   <p className="font-bold text-gray-300">{rule}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 7 & 8. HOURS & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-900">
           <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-black italic uppercase text-primary mb-8 underline decoration-primary/20 underline-offset-8">Grandville Hours</h3>
              <ul className="space-y-4 font-bold">
                 <li className="flex justify-between">
                    <span className="text-gray-400 uppercase text-xs tracking-widest">{t.monThu}</span>
                    <span>10 AM – 9 PM</span>
                 </li>
                 <li className="flex justify-between text-primary italic">
                    <span className="uppercase text-xs tracking-widest">{t.friSat}</span>
                    <span>10 AM – 10 PM</span>
                 </li>
                 <li className="flex justify-between">
                    <span className="text-gray-400 uppercase text-xs tracking-widest">{t.sun}</span>
                    <span>10 AM – 9 PM</span>
                 </li>
              </ul>
              <p className="text-[10px] text-gray-400 mt-6 uppercase font-black tracking-widest">{t.hoursNotice}</p>
           </div>

           <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-black italic uppercase text-accent mb-8 underline decoration-accent/20 underline-offset-8">Contact Info</h3>
              <div className="space-y-6 font-bold text-gray-700">
                 <div className="flex items-start space-x-4">
                    <span className="text-xl">📍</span>
                    <p>3668 Rivertown Pkwy SW<br/>Grandville MI 49418</p>
                 </div>
                 <div className="flex items-start space-x-4">
                    <span className="text-xl text-primary">📞</span>
                    <p>616-215-0999<br/>616-215-0998</p>
                 </div>
                 <div className="flex items-start space-x-4">
                    <span className="text-xl text-accent">✉️</span>
                    <p className="text-primary underline">InfoGV@soarnbounce.com</p>
                 </div>
              </div>
           </div>
        </div>

        {/* 9. DISCLAIMER */}
        <p className="text-center text-xs text-gray-400 max-w-2xl mx-auto px-6 italic font-medium">
          {t.disclaimer}
        </p>

      </div>
    </div>
  );
}
