import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- CONFIGURATION / DATA OBJECTS ---

const SITE_BASE = "/Demo-SoarNBounce";

const QUICK_ACTIONS = [
  { id: 'book', title: 'Book Jump Time', desc: 'Secure your spot and skip the line.', icon: '🎟️', link: `${SITE_BASE}/book`, color: 'primary' },
  { id: 'waiver', title: 'Sign Waiver', desc: 'Required for all jumpers before entry.', icon: '✍️', link: `${SITE_BASE}/waiver`, color: 'secondary' },
  { id: 'parties', title: 'Birthday Parties', desc: 'The ultimate celebration destination.', icon: '🎂', link: `${SITE_BASE}/book`, color: 'accent' },
  { id: 'hours', title: 'Hours & Pricing', desc: 'Check our latest rates and schedule.', icon: '⏰', link: `${SITE_BASE}/book`, color: 'primary' },
];

const ATTRACTIONS = [
  { 
    name: 'Main Court', 
    desc: 'The ultimate wall-to-wall trampoline experience for all skill levels.', 
    color: 'primary',
    img: 'https://images.unsplash.com/photo-1518112391480-981ef0f2cbb6?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    name: 'Dodgeball', 
    desc: 'Take the classic game to new heights with trampoline team challenges.', 
    color: 'orange-500',
    img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    name: 'Ninja Course', 
    desc: 'Test your strength, balance, and speed on our elite obstacle course.', 
    color: 'emerald-500',
    img: 'https://images.unsplash.com/photo-1594737625785-a6cbd9da23c9?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    name: 'Foam Pit', 
    desc: 'Perfect your biggest flips and tricks with a safe, soft landing.', 
    color: 'primary',
    img: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    name: 'Go-Karts', 
    desc: 'High-speed racing action on our professionally designed track.', 
    color: 'orange-500',
    img: 'https://images.unsplash.com/photo-1531303435785-3853ba035cda?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    name: 'Virtual Reality', 
    desc: 'Step into a new dimension with our immersive VR Warship experience.', 
    color: 'emerald-500',
    img: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800' 
  },
];

const PRICING_PREVIEW = [
  { type: 'Toddler (5 & Under)', price: '$15', duration: '60 Mins' },
  { type: 'General Admission', price: '$20', duration: '60 Mins' },
];

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
    readyToJump: "¿Listo para Saltar?",
    footerContact: "Contáctenos",
    footerLinks: "Enlaces Rápidos",
  }
};

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-transparent text-slate-800 dark:text-slate-200 font-sans overflow-x-hidden transition-colors duration-500">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src={`${SITE_BASE}/images/hero-header.png`} 
             alt="Soar N Bounce" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/70 backdrop-blur-[1px]"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#020617] via-transparent to-white/10 dark:to-slate-900/20"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
             <span className="bg-slate-900 dark:bg-primary text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.3em] inline-block mb-10 shadow-2xl italic">
               📍 {t.locationBadge}
             </span>
             <h1 className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter leading-[0.9] mb-8 text-slate-900 dark:text-white">
               {t.heroTitle.split('at')[0]} <br/> 
               <span className="text-primary italic underline decoration-orange-500/40 dark:decoration-orange-400/40 underline-offset-8">at</span> <span className="text-orange-500 dark:text-orange-400">Soar N Bounce</span>
             </h1>
             <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-14 font-bold leading-relaxed">
               {t.heroSubtitle}
             </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={`${SITE_BASE}/book`} className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white font-black uppercase py-6 px-14 rounded-3xl text-xl transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 italic tracking-tight">
              {t.bookBtn}
            </a>
            <a href={`${SITE_BASE}/waiver`} className="w-full sm:w-auto bg-slate-900 dark:bg-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-900 font-black uppercase py-6 px-14 rounded-3xl text-xl transition-all shadow-2xl hover:scale-105 active:scale-95 italic tracking-tight">
              {t.waiverBtn}
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK ACTION GRID */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-32">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {QUICK_ACTIONS.map((action, i) => (
              <a 
                key={i}
                href={action.link}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 flex flex-col items-center text-center"
              >
                <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-500">{action.icon}</div>
                <h3 className={`text-xl font-black uppercase tracking-tighter mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors`}>{action.title}</h3>
                <p className="text-slate-400 dark:text-slate-500 text-sm font-bold leading-relaxed">{action.desc}</p>
              </a>
            ))}
         </div>
      </section>

      {/* 3. TODAY’S INFO STRIP */}
      <section className="bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-900 py-12 px-6 mb-32 shadow-sm">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600">
            <div className="flex items-center gap-4">
               <span className="text-secondary text-2xl">🕒</span>
               <span className="text-slate-900 dark:text-slate-300 tracking-widest">{t.infoStrip.hours}</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-primary text-2xl">📝</span>
               <span className="text-slate-900 dark:text-slate-300 tracking-widest">{t.infoStrip.waiver}</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-orange-500 dark:text-orange-400 text-2xl">🧦</span>
               <span className="text-slate-900 dark:text-slate-300 tracking-widest">{t.infoStrip.socks}</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-2xl">📍</span>
               <span className="text-slate-900 dark:text-slate-300 tracking-widest uppercase">Grandville, MI</span>
            </div>
         </div>
      </section>

      {/* 4. ATTRACTIONS SECTION */}
      <section id="attractions" className="max-w-7xl mx-auto px-6 pb-40">
         <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-8 text-slate-900 dark:text-white leading-none">
              Grandville <br/> <span className="text-primary italic underline decoration-orange-500/30 dark:decoration-orange-400/30 underline-offset-8">Attractions</span>
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
                    <a href={`${SITE_BASE}/book`} className={`inline-block w-fit text-[10px] font-black uppercase tracking-[0.3em] py-4 px-10 rounded-full border-2 border-slate-100 dark:border-slate-800 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all text-slate-500 dark:text-slate-400 italic`}>
                       Book Now
                    </a>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 5. BIRTHDAY PARTIES FEATURE */}
      <section className="bg-white dark:bg-slate-950 py-40 px-6 relative overflow-hidden mb-40 border-y border-slate-200 dark:border-slate-900">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
               <h2 className="text-6xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-10 leading-[0.9] text-slate-900 dark:text-white">
                 Ultimate <br/>
                 <span className="text-primary italic underline decoration-orange-500/30 underline-offset-8">Birthday Parties</span>
               </h2>
               <p className="text-2xl font-bold mb-12 text-slate-500 dark:text-slate-400 italic">The best celebration in Grandville!</p>
               
               <div className="space-y-8 mb-16">
                  {['Reserved party space', 'Jump time included', 'Family-friendly celebration', 'Add-ons available'].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-6">
                       <span className="bg-primary text-white p-3 rounded-2xl font-black text-xs italic shadow-xl">✔</span>
                       <span className="text-xl font-bold text-slate-700 dark:text-slate-300">{benefit}</span>
                    </div>
                  ))}
               </div>

               <a href={`${SITE_BASE}/book`} className="inline-block bg-primary hover:bg-blue-600 text-white font-black uppercase py-7 px-16 rounded-3xl text-xl transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 italic tracking-tight">
                 Plan a Party
               </a>
            </div>
            <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-[5rem] border-8 border-white dark:border-slate-800 shadow-2xl flex items-center justify-center text-primary/5 dark:text-white/5 font-black italic text-4xl overflow-hidden relative">
               <img src={`${SITE_BASE}/images/hero-header.png`} alt="Party" className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-50" />
               <span className="relative z-10 uppercase tracking-widest drop-shadow-2xl">🎉 PARTY TIME</span>
            </div>
         </div>
      </section>

      {/* 6. HOW IT WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
         <h2 className="text-4xl md:text-5xl font-black italic font-headings uppercase tracking-tighter text-center mb-24 text-slate-900 dark:text-white leading-none">Simple Step-By-Step</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {[t.howItWorks.step1, t.howItWorks.step2, t.howItWorks.step3, t.howItWorks.step4].map((step, i) => (
              <div key={i} className="text-center group">
                 <div className="w-24 h-24 bg-white dark:bg-slate-900 text-primary border border-slate-200 dark:border-slate-800 shadow-2xl rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 text-4xl font-black italic group-hover:bg-primary group-hover:text-white transition-all group-hover:-rotate-12 duration-500">
                   {i + 1}
                 </div>
                 <p className="font-black uppercase tracking-tighter text-xl text-slate-700 dark:text-slate-200 leading-tight">{step}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 7. HOURS + PRICING PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 pb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 text-slate-800 dark:text-slate-200">
         <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-16 md:p-20 rounded-[4rem] shadow-xl">
            <h3 className="text-4xl font-black italic font-headings uppercase tracking-tighter mb-16 text-primary dark:text-white underline decoration-orange-500/20 underline-offset-8">Open Hours</h3>
            <div className="space-y-10">
               <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
                  <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-xs">Mon - Thu</span>
                  <span className="font-black text-xl italic tracking-tight">10 AM – 9 PM</span>
               </div>
               <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-6 font-black text-primary italic">
                  <span className="uppercase tracking-widest text-xs">Fri - Sat (Elite)</span>
                  <span className="text-xl tracking-tight">10 AM – 10 PM</span>
               </div>
               <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
                  <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-xs">Sunday</span>
                  <span className="font-black text-xl italic tracking-tight">10 AM – 9 PM</span>
               </div>
            </div>
         </div>

         <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-16 md:p-20 rounded-[4rem] shadow-xl">
            <h3 className="text-4xl font-black italic font-headings uppercase tracking-tighter mb-16 text-orange-500 dark:text-white underline decoration-primary/20 underline-offset-8">Jump Pricing</h3>
            <div className="space-y-6 mb-16">
               {PRICING_PREVIEW.map((item, i) => (
                 <div key={i} className="bg-slate-50 dark:bg-slate-950 p-10 rounded-[2.5rem] flex justify-between items-center border border-slate-100 dark:border-slate-800 group hover:bg-white dark:hover:bg-slate-800 hover:border-orange-500 transition-all duration-500">
                    <div>
                       <p className="font-black uppercase tracking-tight text-2xl text-slate-900 dark:text-white italic">{item.type}</p>
                       <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest mt-2">{item.duration}</p>
                    </div>
                    <div className="text-5xl font-black italic text-orange-500 tabular-nums">{item.price}</div>
                 </div>
               ))}
               <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest pt-8 italic leading-relaxed">Jump Socks required for all participants ($3.50)</p>
            </div>
            <a href={`${SITE_BASE}/book`} className="block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-black dark:hover:bg-slate-100 py-6 rounded-3xl font-black uppercase tracking-[0.3em] transition-all shadow-2xl italic text-sm">
               View Full Rates
            </a>
         </div>
      </section>

      {/* 8. WAIVER CALLOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
         <div className="bg-[#020617] border border-slate-800 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.1),transparent)]"></div>
            <h2 className="text-4xl md:text-9xl font-black italic font-headings uppercase tracking-tighter mb-12 text-white relative z-10 leading-none">Waiver Required</h2>
            <div className="max-w-3xl mx-auto space-y-8 mb-20 relative z-10 text-slate-300 font-bold">
               <p className="text-3xl italic tracking-tight text-white/90">Safety is our top priority.</p>
               <p className="text-sm text-slate-500 uppercase tracking-[0.4em] leading-loose font-black italic">Every jumper needs a valid waiver on file before participating. <br/> Adults 18+ must sign for themselves. <br/> Minors under 18 must be signed by a parent or legal guardian.</p>
            </div>
            <a href={`${SITE_BASE}/waiver`} className="relative z-10 inline-block bg-orange-500 hover:bg-orange-600 text-white font-black uppercase py-7 px-20 rounded-[3rem] text-2xl transition-all shadow-2xl shadow-orange-500/30 hover:scale-105 active:scale-95 italic tracking-tight">
               Sign Your Waiver
            </a>
         </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-48 px-6 text-center bg-primary relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10"></div>
         <div className="relative z-10">
            <h2 className="text-7xl md:text-[12rem] font-black italic font-headings uppercase tracking-tighter mb-20 text-white drop-shadow-xl leading-none">Ready to Jump?</h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
               <a href={`${SITE_BASE}/book`} className="w-full sm:w-auto bg-slate-950 text-white hover:bg-black font-black uppercase py-8 px-24 rounded-[3rem] text-3xl transition-all shadow-2xl shadow-black/40 italic tracking-tight hover:scale-105">
                  Book Now
               </a>
               <a href={`${SITE_BASE}/waiver`} className="w-full sm:w-auto bg-white text-primary hover:bg-slate-50 font-black uppercase py-8 px-24 rounded-[3rem] text-3xl transition-all shadow-2xl italic tracking-tight hover:scale-105">
                  Sign Waiver
               </a>
            </div>
         </div>
      </section>

      {/* 11. FOOTER (Branded) */}
      <footer className="bg-white dark:bg-slate-950 pt-32 pb-12 px-6 border-t border-slate-200 dark:border-slate-900">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div>
               <h3 className="text-2xl font-black italic font-headings text-primary uppercase tracking-tighter mb-8">
                 SOAR <span className="text-orange-500">'N</span> BOUNCE
               </h3>
               <p className="text-slate-500 font-bold leading-relaxed max-w-xs text-sm">The ultimate indoor trampoline experience in Grandville, Michigan.</p>
            </div>
            <div>
               <h4 className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-8 tracking-[0.3em]">Links</h4>
               <ul className="space-y-4 font-bold text-slate-600 dark:text-slate-400 text-sm">
                  <li><a href={`${SITE_BASE}/book`} className="hover:text-primary transition-colors">Book Jump</a></li>
                  <li><a href={`${SITE_BASE}/waiver`} className="hover:text-primary transition-colors">Waiver</a></li>
                  <li><a href={`${SITE_BASE}/book`} className="hover:text-primary transition-colors">Parties</a></li>
                  <li><a href="#attractions" className="hover:text-primary transition-colors">Attractions</a></li>
               </ul>
            </div>
            <div>
               <h4 className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-8 tracking-[0.3em]">Hours</h4>
               <ul className="space-y-2 text-sm font-bold text-slate-500">
                  <li className="flex justify-between"><span>Mon - Thu:</span> <span className="text-slate-900 dark:text-slate-200">10AM - 9PM</span></li>
                  <li className="flex justify-between"><span>Fri - Sat:</span> <span className="text-slate-900 dark:text-slate-200 uppercase tracking-tighter">10AM - 10PM</span></li>
                  <li className="flex justify-between"><span>Sunday:</span> <span className="text-slate-900 dark:text-slate-200">10AM - 9PM</span></li>
               </ul>
            </div>
            <div>
               <h4 className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-8 tracking-[0.3em]">Contact</h4>
               <div className="space-y-4 text-sm font-bold text-slate-500">
                  <p>3668 Rivertown Pkwy SW<br/>Grandville MI 49418</p>
                  <p className="text-slate-900 dark:text-slate-200 font-black">616-215-0999</p>
                  <p className="text-primary underline">InfoGV@soarnbounce.com</p>
               </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto pt-12 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <p>&copy; 2026 SOAR N BOUNCE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-primary transition-colors">Privacy</a>
               <a href="#" className="hover:text-primary transition-colors">Terms</a>
               <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
