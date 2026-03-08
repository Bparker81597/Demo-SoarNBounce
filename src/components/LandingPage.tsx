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
  { name: 'Main Court', desc: 'Wall-to-wall trampolines for maximum air.', color: 'primary' },
  { name: 'Foam Pit', desc: 'Test your tricks with a soft landing.', color: 'accent' },
  { name: 'Dodgeball', desc: 'High-flying team sports action.', color: 'secondary' },
  { name: 'Ninja Course', desc: 'Test your strength and agility.', color: 'primary' },
  { name: 'Kids Area', desc: 'Safe fun for our smallest jumpers.', color: 'accent' },
  { name: 'Climbing Area', desc: 'Reach new heights on our vertical walls.', color: 'secondary' },
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

// --- COMPONENT ---

export default function LandingPage() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-transparent text-white font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src={`${SITE_BASE}/images/hero-header.png`} 
             alt="Soar N Bounce" 
             class="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
             <span className="bg-primary/20 text-primary border border-primary/30 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] inline-block mb-8">
               📍 {t.locationBadge}
             </span>
             <h1 className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter leading-tight mb-6">
               {t.heroTitle.split('at')[0]} <br/> 
               <span className="text-primary italic">at</span> <span className="text-secondary">Soar N Bounce</span>
             </h1>
             <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
               {t.heroSubtitle}
             </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={`${SITE_BASE}/book`} className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white font-black uppercase py-5 px-10 rounded-2xl text-lg transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95">
              {t.bookBtn}
            </a>
            <a href={`${SITE_BASE}/waiver`} className="w-full sm:w-auto bg-secondary hover:bg-lime-500 text-black font-black uppercase py-5 px-10 rounded-2xl text-lg transition-all shadow-2xl shadow-secondary/30 hover:scale-105 active:scale-95">
              {t.waiverBtn}
            </a>
          </div>

          <div className="flex gap-8 justify-center mt-12 text-sm font-bold uppercase tracking-widest text-gray-500">
             <a href={`${SITE_BASE}/book`} className="hover:text-accent transition-colors underline underline-offset-8 decoration-accent/30">{t.partiesBtn}</a>
             <a href="#attractions" className="hover:text-primary transition-colors underline underline-offset-8 decoration-primary/30">{t.exploreBtn}</a>
          </div>
        </div>

        {/* Language Toggle Fixed Position or Top Right of Hero */}
        <div className="absolute top-8 right-8 z-50">
           <button 
             onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
             className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
           >
             🌐 {lang === 'en' ? 'Español' : 'English'}
           </button>
        </div>
      </section>

      {/* 2. QUICK ACTION GRID */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-24">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action, i) => (
              <a 
                key={i}
                href={action.link}
                className="group bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl hover:border-primary/50 transition-all hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">{action.icon}</div>
                <h3 className={`text-xl font-black uppercase tracking-tighter mb-2 text-${action.color}`}>{action.title}</h3>
                <p className="text-gray-500 text-sm font-medium">{action.desc}</p>
              </a>
            ))}
         </div>
      </section>

      {/* 3. TODAY’S INFO STRIP */}
      <section className="bg-white/5 border-y border-white/5 py-6 px-6 mb-24">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 text-xs font-black uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
               <span className="text-secondary">🕒</span>
               <span>{t.infoStrip.hours}</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-primary">📝</span>
               <span>{t.infoStrip.waiver}</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="text-accent">🧦</span>
               <span>{t.infoStrip.socks}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
               <span>📍 Grandville, MI</span>
            </div>
         </div>
      </section>

      {/* 4. ATTRACTIONS SECTION */}
      <section id="attractions" className="max-w-7xl mx-auto px-6 pb-32">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-4">
              Epic <span className="text-primary">Attractions</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ATTRACTIONS.map((item, i) => (
              <div key={i} className="group relative aspect-square rounded-[3rem] overflow-hidden bg-gray-900 border border-white/5 hover:border-primary/30 transition-all">
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                 <div className={`absolute inset-0 bg-${item.color}/10 group-hover:bg-${item.color}/20 transition-colors`}></div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-10 font-black italic text-4xl">{item.name.toUpperCase()}</div>
                 
                 <div className="absolute bottom-0 left-0 p-8 z-20">
                    <h3 className={`text-2xl font-black italic uppercase mb-2 text-${item.color}`}>{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-6 group-hover:text-white transition-colors">{item.desc}</p>
                    <button className="text-xs font-black uppercase tracking-widest border-b-2 border-white/20 pb-1 hover:border-white transition-all">Learn More</button>
                 </div>
              </div>
            ))}
         </div>
         <div className="mt-16 text-center">
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all">
               Explore All Attractions
            </button>
         </div>
      </section>

      {/* 5. BIRTHDAY PARTIES FEATURE */}
      <section className="bg-accent/5 py-32 px-6 relative overflow-hidden mb-32">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
         
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
               <h2 className="text-5xl md:text-7xl font-black italic font-headings uppercase tracking-tighter mb-8 leading-tight">
                 Ultimate <br/>
                 <span className="text-accent">Birthday Parties</span>
               </h2>
               <p className="text-2xl font-bold mb-10 text-gray-300 italic">The best celebration in Grandville!</p>
               
               <div className="space-y-6 mb-12">
                  {['Reserved party space', 'Jump time included', 'Family-friendly celebration', 'Add-ons available'].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                       <span className="bg-accent/20 text-accent p-2 rounded-lg font-black text-sm italic">✔</span>
                       <span className="text-lg font-bold">{benefit}</span>
                    </div>
                  ))}
               </div>

               <a href={`${SITE_BASE}/book`} className="inline-block bg-accent hover:bg-orange-600 text-white font-black uppercase py-6 px-12 rounded-[2rem] text-xl transition-all shadow-xl shadow-accent/20">
                 Plan a Party
               </a>
            </div>
            <div className="aspect-video bg-black/40 rounded-[4rem] border-8 border-white/5 shadow-2xl flex items-center justify-center text-accent/20 font-black italic text-4xl">
               🎉 PARTY IMAGE
            </div>
         </div>
      </section>

      {/* 6. HOW IT WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
         <h2 className="text-4xl md:text-5xl font-black italic font-headings uppercase tracking-tighter text-center mb-16">{t.howItWorks.title}</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[t.howItWorks.step1, t.howItWorks.step2, t.howItWorks.step3, t.howItWorks.step4].map((step, i) => (
              <div key={i} className="text-center group">
                 <div className="w-16 h-16 bg-primary/20 text-primary border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black italic group-hover:scale-110 transition-transform">
                   {i + 1}
                 </div>
                 <p className="font-black uppercase tracking-tighter text-lg">{step}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 7. HOURS + PRICING PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
         <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] shadow-2xl">
            <h3 className="text-3xl font-black italic font-headings uppercase tracking-tighter mb-10 text-secondary">Operating Hours</h3>
            <div className="space-y-6">
               <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Mon - Thu</span>
                  <span className="font-bold">10 AM – 9 PM</span>
               </div>
               <div className="flex justify-between border-b border-white/5 pb-4 font-bold text-secondary">
                  <span className="uppercase tracking-widest text-xs italic">Fri - Sat (Elite Hours)</span>
                  <span>10 AM – 10 PM</span>
               </div>
               <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Sunday</span>
                  <span className="font-bold">10 AM – 9 PM</span>
               </div>
            </div>
         </div>

         <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] shadow-2xl">
            <h3 className="text-3xl font-black italic font-headings uppercase tracking-tighter mb-10 text-primary">Jump Pricing</h3>
            <div className="space-y-4 mb-10">
               {PRICING_PREVIEW.map((item, i) => (
                 <div key={i} className="bg-black/20 p-6 rounded-2xl flex justify-between items-center border border-white/5">
                    <div>
                       <p className="font-black uppercase tracking-tight text-lg">{item.type}</p>
                       <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.duration}</p>
                    </div>
                    <div className="text-3xl font-black italic text-primary">{item.price}</div>
                 </div>
               ))}
               <p className="text-center text-[10px] text-gray-500 uppercase font-black tracking-widest pt-4">Jump Socks required for all participants ($3.50)</p>
            </div>
            <a href={`${SITE_BASE}/book`} className="block w-full text-center border-2 border-primary/30 hover:border-primary py-4 rounded-2xl font-black uppercase tracking-widest transition-all">
               View Full Pricing
            </a>
         </div>
      </section>

      {/* 8. WAIVER CALLOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
         <div className="bg-gradient-to-r from-secondary/20 to-primary/20 border border-white/10 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]"></div>
            <h2 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-8 relative z-10">Waiver Required</h2>
            <div className="max-w-2xl mx-auto space-y-4 mb-12 relative z-10 text-gray-300 font-bold">
               <p>Every jumper needs a valid waiver on file before participating.</p>
               <p className="text-sm text-gray-500 uppercase tracking-widest leading-relaxed">Adults 18+ must sign for themselves. Minors under 18 must be signed by a parent or legal guardian.</p>
            </div>
            <a href={`${SITE_BASE}/waiver`} className="relative z-10 inline-block bg-white text-black hover:bg-gray-100 font-black uppercase py-5 px-12 rounded-2xl text-lg transition-all shadow-xl">
               Complete Waiver
            </a>
         </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-32 px-6 text-center bg-primary relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10"></div>
         <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-12">{t.readyToJump}</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <a href={`${SITE_BASE}/book`} className="bg-black text-white hover:bg-gray-900 font-black uppercase py-6 px-16 rounded-[2rem] text-xl transition-all shadow-2xl">
                  Book Now
               </a>
               <a href={`${SITE_BASE}/waiver`} className="bg-white text-black hover:bg-gray-100 font-black uppercase py-6 px-16 rounded-[2rem] text-xl transition-all shadow-2xl">
                  Sign Waiver
               </a>
            </div>
         </div>
      </section>

      {/* 11. FOOTER (Branded) */}
      <footer className="bg-black pt-32 pb-12 px-6 border-t border-white/5">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div>
               <h3 className="text-2xl font-black italic font-headings text-secondary uppercase tracking-tighter mb-8">
                 SOAR <span className="text-primary">'N</span> BOUNCE
               </h3>
               <p className="text-gray-500 font-bold leading-relaxed max-w-xs">The ultimate indoor trampoline experience in Grandville, Michigan.</p>
            </div>
            <div>
               <h4 className="font-black uppercase tracking-widest text-xs text-primary mb-8">{t.footerLinks}</h4>
               <ul className="space-y-4 font-bold text-gray-400">
                  <li><a href={`${SITE_BASE}/book`} className="hover:text-white transition-colors">Book Jump</a></li>
                  <li><a href={`${SITE_BASE}/waiver`} className="hover:text-white transition-colors">Waiver</a></li>
                  <li><a href={`${SITE_BASE}/book`} className="hover:text-white transition-colors">Parties</a></li>
                  <li><a href="#attractions" className="hover:text-white transition-colors">Attractions</a></li>
               </ul>
            </div>
            <div>
               <h4 className="font-black uppercase tracking-widest text-xs text-secondary mb-8">Hours</h4>
               <ul className="space-y-2 text-sm font-bold text-gray-500">
                  <li className="flex justify-between"><span>Mon - Thu:</span> <span className="text-white">10AM - 9PM</span></li>
                  <li className="flex justify-between"><span>Fri - Sat:</span> <span class="text-white">10AM - 10PM</span></li>
                  <li className="flex justify-between"><span>Sunday:</span> <span class="text-white">10AM - 9PM</span></li>
               </ul>
            </div>
            <div>
               <h4 className="font-black uppercase tracking-widest text-xs text-accent mb-8">{t.footerContact}</h4>
               <div className="space-y-4 text-sm font-bold text-gray-500">
                  <p>3668 Rivertown Pkwy SW<br/>Grandville MI 49418</p>
                  <p className="text-white">616-215-0999</p>
                  <p className="text-primary">InfoGV@soarnbounce.com</p>
               </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            <p>&copy; 2026 SOAR N BOUNCE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-white">Privacy</a>
               <a href="#" className="hover:text-white">Terms</a>
               <a href="#" className="hover:text-white">Accessibility</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
