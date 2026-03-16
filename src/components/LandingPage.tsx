import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { LocationConfig } from '../data/locations';

// --- CONFIGURATION / DATA OBJECTS ---

const SITE_BASE = "/Demo-SoarNBounce";

const ATTRACTIONS = [
  { name: "Ninja Course", desc: "Test your strength and agility on our multi-level warrior course.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Extreme Dodgeball", desc: "Trampoline-to-trampoline high-flying dodgeball action.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Performance Trampolines", desc: "Wall-to-wall bounce zones for maximum airtime.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Foam Pit", desc: "Practice your flips and land safely in our massive foam cubes.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Battle Beam", desc: "Challenge your friends and see who can stay on the beam.", img: `${SITE_BASE}/images/hero-header.png` },
  { name: "Climbing Walls", desc: "Reach new heights on our vertical adventure obstacles.", img: `${SITE_BASE}/images/hero-header.png` }
];

const PRICING_PREVIEW = [
  { type: "General Jump", duration: "60 Minutes", price: "$21" },
  { type: "General Jump", duration: "90 Minutes", price: "$25" },
  { type: "General Jump", duration: "120 Minutes", price: "$29" }
];

// --- TRANSLATIONS CONFIG ---
const TRANSLATIONS: any = {
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
      socks: "Jump Socks Required",
    },
    howItWorks: {
      title: "How It Works",
      step1: "Book your jump time",
      step2: "Sign your waiver",
      step3: "Arrive ready to jump",
      step4: "Enjoy the park",
    },
    attractionsTitle: "Park Attractions",
    partyTitle: "Ultimate Birthday Parties",
    partySubtitle: "The best celebration in town!",
    partyBenefits: ['Reserved party space', 'Jump time included', 'Family-friendly celebration', 'Add-ons available'],
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
    footerLinks: "Quick Links",
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
      socks: "Calcetines Requeridos",
    },
    howItWorks: {
      title: "Cómo Funciona",
      step1: "Reserve su tiempo",
      step2: "Firme su exención",
      step3: "Llegue listo para saltar",
      step4: "Disfrute del parque",
    },
    attractionsTitle: "Atracciones del Parque",
    partyTitle: "Fiestas de Cumpleaños Increíbles",
    partySubtitle: "¡La mejor celebración en la ciudad!",
    partyBenefits: ['Espacio reservado para la fiesta', 'Tiempo de salto incluido', 'Celebración familiar', 'Complementos disponibles'],
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
    footerLinks: "Enlaces Rápidos",
  }
};

export default function LandingPage({ location }: { location: LocationConfig }) {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  useEffect(() => {
    // Initial load
    const savedLang = localStorage.getItem('preferred-lang') as 'en' | 'es';
    if (savedLang) setLang(savedLang);

    // Listen for changes
    const handleLangChange = (e: any) => {
      setLang(e.detail);
    };

    window.addEventListener('lang-changed', handleLangChange);
    return () => window.removeEventListener('lang-changed', handleLangChange);
  }, []);

  const t = TRANSLATIONS[lang];
  const isComingSoon = location.status === 'coming_soon';

  return (
    <div className="bg-transparent text-slate-800 dark:text-slate-200 font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
           <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="bg-slate-900 dark:bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] inline-block shadow-2xl italic">
               {location.city}, {location.state}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[10rem] font-black italic font-headings uppercase tracking-tighter mb-8 leading-[0.85] text-slate-900 dark:text-white drop-shadow-2xl"
          >
            {t.heroTitle.split(' ').slice(0, 3).join(' ')} <br/>
            <span className="text-primary underline decoration-orange-500/30 underline-offset-[15px]">{t.heroTitle.split(' ').slice(3).join(' ')}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 font-bold mb-16 max-w-3xl mx-auto italic tracking-tight leading-relaxed"
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {isComingSoon ? (
               <button disabled className="w-full sm:w-auto bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-black uppercase py-6 px-14 rounded-3xl text-xl italic tracking-tight cursor-not-allowed">
                  Opening Soon
               </button>
            ) : (
               <>
                  <a href={`${SITE_BASE}/${location.slug}/book`} className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white font-black uppercase py-6 px-14 rounded-3xl text-xl transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 italic tracking-tight">
                    {t.bookBtn}
                  </a>
                  <a href={`${SITE_BASE}/${location.slug}/waiver`} className="w-full sm:w-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 font-black uppercase py-6 px-14 rounded-3xl text-xl transition-all shadow-xl hover:bg-slate-50 dark:hover:bg-slate-800 italic tracking-tight">
                    {t.waiverBtn}
                  </a>
               </>
            )}
          </motion.div>
        </div>
      </section>

      {/* 2. INFO STRIP */}
      <div className="bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 py-10 relative z-20">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            <div className="text-center md:border-r border-slate-100 dark:border-slate-900">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Current Hours</p>
               <p className="text-xl font-black italic text-slate-900 dark:text-white uppercase">{isComingSoon ? 'Coming Soon' : location.hours.monThu}</p>
            </div>
            <div className="text-center md:border-r border-slate-100 dark:border-slate-900">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Safety Check</p>
               <p className="text-xl font-black italic text-primary uppercase">{t.infoStrip.waiver}</p>
            </div>
            <div className="text-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Gear Required</p>
               <p className="text-xl font-black italic text-orange-500 uppercase">{t.infoStrip.socks}</p>
            </div>
         </div>
      </div>

      {/* 3. ATTRACTIONS SECTION */}
      <section id="attractions" className="max-w-7xl mx-auto px-6 py-40">
         <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-8 text-slate-900 dark:text-white leading-none">
              {t.attractionsTitle.split(' ')[0]} <br/> <span className="text-primary italic underline decoration-orange-500/30 dark:decoration-orange-400/30 underline-offset-8">{t.attractionsTitle.split(' ')[1]}</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ATTRACTIONS.map((item, i) => (
              <div key={i} className="group flex flex-col bg-white dark:bg-slate-900 rounded-[4rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-2xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4">
                 <div className="aspect-[4/3] overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/40 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className={`absolute top-8 left-8 z-20 bg-slate-900 dark:bg-primary text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl italic`}>
                       Must See
                    </div>
                 </div>
                 
                 <div className="p-12 flex flex-col flex-1">
                    <h3 className={`text-3xl font-black italic uppercase mb-4 text-slate-900 dark:text-white`}>{item.name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-bold leading-relaxed mb-10 flex-1">{item.desc}</p>
                    <a href={`${SITE_BASE}/${location.slug}/book`} className={`inline-block w-fit text-[10px] font-black uppercase tracking-[0.3em] py-4 px-10 rounded-full border-2 border-slate-100 dark:border-slate-800 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all text-slate-500 dark:text-slate-400 italic`}>
                       {t.bookBtn}
                    </a>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 4. BIRTHDAY PARTIES FEATURE */}
      <section id="parties" className="bg-white dark:bg-slate-950 py-40 px-6 relative overflow-hidden mb-40 border-y border-slate-200 dark:border-slate-900">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
               <h2 className="text-6xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-10 leading-[0.9] text-slate-900 dark:text-white">
                 {t.partyTitle.split(' ')[0]} <br/>
                 <span className="text-primary italic underline decoration-orange-500/30 underline-offset-8">{t.partyTitle.split(' ').slice(1).join(' ')}</span>
               </h2>
               <p className="text-2xl font-bold mb-12 text-slate-500 dark:text-slate-400 italic">{t.partySubtitle}</p>
               
               <div className="space-y-8 mb-16">
                  {t.partyBenefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-center gap-6">
                       <span className="bg-primary text-white p-3 rounded-2xl font-black text-xs italic shadow-xl">✔</span>
                       <span className="text-xl font-bold text-slate-700 dark:text-slate-300">{benefit}</span>
                    </div>
                  ))}
               </div>

               <a href={`${SITE_BASE}/${location.slug}/book`} className="inline-block bg-primary hover:bg-blue-600 text-white font-black uppercase py-7 px-16 rounded-3xl text-xl transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 italic tracking-tight">
                 {t.bookBtn}
               </a>
            </div>
            <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-[5rem] border-8 border-white dark:border-slate-800 shadow-2xl flex items-center justify-center text-primary/5 dark:text-white/5 font-black italic text-4xl overflow-hidden relative">
               <img src={`${SITE_BASE}/images/hero-header.png`} alt="Party" className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-50" />
               <span className="relative z-10 uppercase tracking-widest drop-shadow-2xl">🎉 PARTY TIME</span>
            </div>
         </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 pb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 text-slate-800 dark:text-slate-200">
         <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-16 md:p-20 rounded-[4rem] shadow-xl">
            <h3 className="text-4xl font-black italic font-headings uppercase tracking-tighter mb-16 text-primary dark:text-white underline decoration-orange-500/20 underline-offset-8">Open Hours</h3>
            <div className="space-y-10">
               <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
                  <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-xs">Mon - Thu</span>
                  <span className="font-black text-xl italic tracking-tight">{isComingSoon ? 'TBD' : location.hours.monThu}</span>
               </div>
               <div className="flex justify-between border-b border-slate-100 dark:border-slate-900 pb-6 font-black text-primary italic">
                  <span className="uppercase tracking-widest text-xs">Fri - Sat (Elite)</span>
                  <span className="text-xl tracking-tight">{isComingSoon ? 'TBD' : location.hours.friSat}</span>
               </div>
               <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
                  <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-xs">Sunday</span>
                  <span className="font-black text-xl italic tracking-tight">{isComingSoon ? 'TBD' : location.hours.sun}</span>
               </div>
            </div>
            {location.hours.note && (
               <p className="mt-10 text-[10px] text-slate-400 font-black uppercase tracking-widest italic leading-relaxed text-center">
                  * {location.hours.note}
               </p>
            )}
         </div>

         <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-16 md:p-20 rounded-[4rem] shadow-xl">
            <h3 className="text-4xl font-black italic font-headings uppercase tracking-tighter mb-16 text-orange-500 dark:text-white underline decoration-primary/20 underline-offset-8">Jump Pricing</h3>
            <div className="space-y-6 mb-16">
               {Object.entries(location.pricing.general).map(([duration, price], i) => (
                 <div key={i} className="bg-slate-50 dark:bg-slate-950 p-10 rounded-[2.5rem] flex justify-between items-center border border-slate-100 dark:border-slate-800 group hover:bg-white dark:hover:bg-slate-800 hover:border-orange-500 transition-all duration-500">
                    <div>
                       <p className="font-black uppercase tracking-tight text-2xl text-slate-900 dark:text-white italic">General Jump</p>
                       <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest mt-2">{duration} Minutes</p>
                    </div>
                    <div className="text-5xl font-black italic text-orange-500 tabular-nums">${price}</div>
                 </div>
               ))}
               <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest pt-8 italic leading-relaxed">{t.infoStrip.socks} (${location.pricing.socksPrice})</p>
            </div>
            <a href={`${SITE_BASE}/${location.slug}/book`} className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-black dark:hover:bg-slate-100 py-6 rounded-3xl font-black uppercase tracking-[0.3em] transition-all shadow-2xl italic text-sm">
               View All Rates
            </a>
         </div>
      </section>

      {/* 6. WAIVER SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
         <div className="bg-[#020617] border border-slate-800 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.1),transparent)]"></div>
            <h2 className="text-4xl md:text-9xl font-black italic font-headings uppercase tracking-tighter mb-12 text-white relative z-10 leading-none">{t.waiverTitle}</h2>
            <div className="max-w-3xl mx-auto space-y-8 mb-20 relative z-10 text-slate-300 font-bold">
               <p className="text-3xl italic tracking-tight text-white/90">{t.waiverSafety}</p>
               <p className="text-sm text-slate-500 uppercase tracking-[0.4em] leading-loose font-black italic">{t.waiverDetails}</p>
            </div>
            {isComingSoon ? (
               <button disabled className="relative z-10 inline-block bg-slate-800 text-slate-600 font-black uppercase py-7 px-20 rounded-[3rem] text-2xl italic tracking-tight cursor-not-allowed">
                  Available Soon
               </button>
            ) : (
               <a href={`${SITE_BASE}/${location.slug}/waiver`} className="relative z-10 inline-block bg-orange-500 hover:bg-orange-600 text-white font-black uppercase py-7 px-20 rounded-[3rem] text-2xl transition-all shadow-2xl shadow-orange-500/30 hover:scale-105 active:scale-95 italic tracking-tight">
                  {t.waiverBtn}
               </a>
            )}
         </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
         <h2 className="text-4xl md:text-5xl font-black italic font-headings uppercase tracking-tighter text-center mb-24 text-slate-900 dark:text-white leading-none">{t.faqTitle}</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t.faqItems.map((item: any, i: number) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl">
                 <h3 className="text-xl font-black uppercase tracking-tighter text-primary mb-6 italic">{item.q}</h3>
                 <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed">{item.a}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 8. CONTACT INFO */}
      <section className="max-w-7xl mx-auto px-6 pb-40 text-center">
         <div className="bg-slate-50 dark:bg-slate-900/50 p-20 rounded-[4rem] border border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-black italic uppercase text-slate-900 dark:text-white mb-10 tracking-widest">Connect with {location.city}</h2>
            <div className="flex flex-wrap justify-center gap-16">
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">Address</p>
                  <p className="text-xl font-black italic text-slate-900 dark:text-white uppercase">{location.address}</p>
               </div>
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">Phone</p>
                  <p className="text-xl font-black italic text-primary uppercase">{location.phones[0]}</p>
               </div>
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">Email</p>
                  <p className="text-xl font-black italic text-orange-500 uppercase lowercase">{location.email}</p>
               </div>
            </div>
         </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-48 px-6 text-center bg-primary relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10"></div>
         <div className="relative z-10">
            <h2 className="text-7xl md:text-[12rem] font-black italic font-headings uppercase tracking-tighter mb-20 text-white drop-shadow-xl leading-none">{t.readyToJump}</h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
               {isComingSoon ? (
                  <button disabled className="w-full sm:w-auto bg-slate-950 text-slate-600 font-black uppercase py-8 px-24 rounded-[3rem] text-3xl italic tracking-tight cursor-not-allowed">
                     Available Soon
                  </button>
               ) : (
                  <>
                     <a href={`${SITE_BASE}/${location.slug}/book`} className="w-full sm:w-auto bg-slate-950 text-white hover:bg-black font-black uppercase py-8 px-24 rounded-[3rem] text-3xl transition-all shadow-2xl shadow-black/40 italic tracking-tight hover:scale-105">
                        {t.bookBtn}
                     </a>
                     <a href={`${SITE_BASE}/${location.slug}/waiver`} className="w-full sm:w-auto bg-white text-primary hover:bg-slate-50 font-black uppercase py-8 px-24 rounded-[3rem] text-3xl transition-all shadow-2xl italic tracking-tight hover:scale-105">
                        {t.waiverBtn}
                     </a>
                  </>
               )}
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-20 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
               <div className="bg-primary p-3 rounded-2xl rotate-12">
                  <span className="text-white text-2xl font-black italic">S</span>
               </div>
               <span className="font-black italic text-2xl tracking-tighter uppercase text-slate-900 dark:text-white">Soar <span className="text-orange-500">N</span> Bounce</span>
            </div>
            
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
               <a href={`${SITE_BASE}/`} className="hover:text-primary transition-colors">Select Location</a>
               <a href={`${SITE_BASE}/about`} className="hover:text-primary transition-colors">About Us</a>
               <a href="#" className="hover:text-primary transition-colors">Terms</a>
               <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
