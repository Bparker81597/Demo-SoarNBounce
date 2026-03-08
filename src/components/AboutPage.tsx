import React from 'react';
import { motion } from 'framer-motion';

const SITE_BASE = "/Demo-SoarNBounce";

// --- SUB-COMPONENTS ---

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden text-center">
    <div className="absolute inset-0 z-0">
      <img src={`${SITE_BASE}/images/hero-header.png`} alt="About Us Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/60 dark:bg-slate-950/70 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-[#020617] via-transparent to-slate-50 dark:to-[#020617]"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <motion.span 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="bg-slate-900 dark:bg-primary text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] inline-block mb-8 shadow-2xl italic"
      >
        Grandville, MI
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-10 text-slate-900 dark:text-white leading-none"
      >
        LITTLE SOMETHING <br/> <span className="text-primary text-4xl md:text-6xl not-italic underline decoration-orange-500/40 dark:decoration-orange-400/40 underline-offset-8">ABOUT US</span>
      </motion.h1>
      <div className="flex justify-center">
        <a href={`${SITE_BASE}/book`} className="bg-orange-500 hover:bg-orange-600 text-white font-black uppercase py-5 px-12 rounded-3xl tracking-widest transition-all shadow-2xl italic text-sm">
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

const MainFunSection = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[4rem] p-12 md:p-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2.5 h-full bg-primary"></div>
          <h2 className="text-4xl font-black italic font-headings uppercase tracking-tighter mb-8 text-slate-900 dark:text-white">LET'S JUST HAVE FUN</h2>
          <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-bold italic tracking-tight">
            <p>
              Located at the heart of family fun, our park is the perfect destination for creating unforgettable memories with your loved ones. Whether you’re bouncing high on trampolines, tackling thrilling obstacle courses, or enjoying active play together, there’s something for every member of the family.
            </p>
            <p>
              From kids to parents, our park offers a safe, exciting environment where everyone can enjoy the joy of movement and adventure. Soar and Bounce Trampoline and Adventure Park is your ultimate family-friendly spot to laugh, play, and make memories that will last a lifetime!
            </p>
          </div>
          <div className="mt-12">
            <a href={`${SITE_BASE}/book`} className="bg-primary hover:bg-blue-600 text-white font-black uppercase py-5 px-12 rounded-3xl tracking-widest transition-all shadow-xl italic text-sm">
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-[5rem] border-8 border-white dark:border-slate-800 shadow-2xl overflow-hidden relative rotate-2">
           <img src={`${SITE_BASE}/images/hero-header.png`} alt="Fun" className="w-full h-full object-cover opacity-90 dark:opacity-70" />
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-32 px-6 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-900 shadow-inner">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-6 text-slate-900 dark:text-white">PRICING</h2>
        <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Toddler */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-12 rounded-[4rem] shadow-xl">
          <h3 className="text-2xl font-black uppercase mb-10 text-primary dark:text-primary border-b border-slate-200 dark:border-slate-800 pb-6 italic">Toddler Admission <br/> <span className="text-slate-400 not-italic text-sm font-bold">(Ages 5 & Younger)</span></h3>
          <ul className="space-y-6 text-2xl font-black text-slate-800 dark:text-slate-200 italic tracking-tighter">
            <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>60 Minutes:</span> <span className="text-primary">$17</span></li>
            <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>90 Minutes:</span> <span className="text-primary">$21</span></li>
            <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>120 Minutes:</span> <span className="text-primary">$25</span></li>
            <li className="flex justify-between"><span>180 Minutes:</span> <span className="text-primary">$29</span></li>
          </ul>
        </div>
        {/* General */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-12 rounded-[4rem] shadow-xl">
          <h3 className="text-2xl font-black uppercase mb-10 text-orange-500 dark:text-orange-400 border-b border-slate-200 dark:border-slate-800 pb-6 italic">General Admission <br/> <span className="text-slate-400 not-italic text-sm font-bold">(Ages 6 & Older)</span></h3>
          <ul className="space-y-6 text-2xl font-black text-slate-800 dark:text-slate-200 italic tracking-tighter">
            <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>60 Minutes:</span> <span className="text-orange-500 dark:text-orange-400">$21</span></li>
            <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>90 Minutes:</span> <span className="text-orange-500 dark:text-orange-400">$25</span></li>
            <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>120 Minutes:</span> <span className="text-orange-500 dark:text-orange-400">$29</span></li>
            <li className="flex justify-between"><span>180 Minutes:</span> <span className="text-orange-500 dark:text-orange-400">$33</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-primary dark:bg-slate-900 border border-primary/20 dark:border-slate-800 p-12 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-primary/10 rounded-full -mr-16 -mt-16"></div>
         <h3 className="text-3xl md:text-4xl font-black italic uppercase text-white mb-4 tracking-widest">All Day Unlimited Pass $35</h3>
         <p className="text-white/70 dark:text-slate-500 font-black uppercase text-xs tracking-[0.3em]">(Include Go Kart & VR Warship)</p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">
         <span className="flex items-center gap-2"><span className="text-primary text-lg">●</span> Jump Socks Required $3.50/ Pair</span>
         <span className="flex items-center gap-2"><span className="text-orange-500 text-lg">●</span> Weight Limit 250lbs</span>
         <span className="flex items-center gap-2"><span className="text-emerald-500 text-lg">●</span> Waivers Required</span>
      </div>
    </div>
  </section>
);

const LocationHoursSection = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto text-slate-900 dark:text-slate-100">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div>
        <h2 className="text-5xl font-black italic font-headings uppercase tracking-tighter mb-10 text-slate-900 dark:text-white leading-none">FIND US</h2>
        <p className="text-slate-500 dark:text-slate-400 font-bold mb-16 italic text-xl">Hours may vary during holidays and school vacations. Give us a call for the latest!</p>
        
        <div className="space-y-16">
          <div>
            <h4 className="text-xs font-black uppercase text-slate-400 mb-6 tracking-[0.4em] italic">The Address</h4>
            <p className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter italic uppercase">3668 Rivertown Parkway, <br/> Grandville, MI</p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase text-slate-400 mb-8 tracking-[0.4em] italic">How to Get Here</h4>
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl">
                <p className="font-black text-primary uppercase mb-4 italic tracking-tight text-xl">Mall Entrance</p>
                <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed">Located on the second floor - directly across from Dicks Sporting Goods!</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl">
                <p className="font-black text-orange-500 dark:text-orange-400 uppercase mb-4 italic tracking-tight text-xl">Main Entrance</p>
                <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed">Park in lot C1-C5 and look for the vibrant green building!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 md:p-16 rounded-[4rem] shadow-2xl h-fit">
        <h3 className="text-3xl font-black italic font-headings uppercase tracking-tighter mb-12 text-primary underline decoration-orange-500/20 underline-offset-8">HOURS OF OPERATION</h3>
        <ul className="space-y-6 text-2xl font-black text-slate-800 dark:text-slate-200 italic tracking-tighter">
          <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>Monday:</span> <span>10AM - 9PM</span></li>
          <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>Tuesday:</span> <span>10AM - 9PM</span></li>
          <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>Wednesday:</span> <span>10AM - 9PM</span></li>
          <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4"><span>Thursday:</span> <span>10AM - 9PM</span></li>
          <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4 text-primary"><span>Friday:</span> <span>10AM - 10PM</span></li>
          <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-4 text-primary"><span>Saturday:</span> <span>10AM - 10PM</span></li>
          <li className="flex justify-between pb-2"><span>Sunday:</span> <span>10AM - 9PM</span></li>
        </ul>
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-12 text-center italic leading-relaxed">*WEEKEND OPENING HOURS CAN BE AFFECTED <br/> BY SCHEDULED PRIVATE EVENTS.</p>
      </div>
    </div>
  </section>
);

const PartySection = () => (
  <section className="py-32 px-6 bg-slate-900 dark:bg-slate-950 border-y border-slate-800 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent)]"></div>
    <div className="max-w-7xl mx-auto text-center relative z-10 text-white">
      <h2 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-6 leading-tight drop-shadow-2xl">NO SETUP. NO CLEAN UP. <br/> NO HASSLE, JUST FUN!</h2>
      <h3 className="text-2xl md:text-4xl font-black uppercase mb-20 tracking-widest text-orange-500 italic">BIRTHDAY PARTIES!</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mb-20">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[4rem] shadow-2xl">
          <h4 className="text-xl font-black uppercase text-orange-500 mb-10 italic tracking-widest underline underline-offset-8 decoration-white/20">What’s Included:</h4>
          <ul className="space-y-5 font-bold text-lg text-white/90 italic tracking-tight">
            {['1-Hour Jump Pass & Jump Socks', '40 Minutes in a Private Party Room', 'Pizza, Ice Cream Cups, Water, Plates, Napkins & Utensils', 'Birthday Child Jumps for Free', 'SnB T-Shirt for Birthday Child', '20 Credit Arcade Card for each Child', '1 Free VR Warship for each Child', '1 Free Go Kart for each Child'].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="text-orange-500 font-black text-xl italic">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[4rem] shadow-2xl">
          <h4 className="text-xl font-black uppercase text-orange-500 mb-10 italic tracking-widest underline underline-offset-8 decoration-white/20">Important Info:</h4>
          <ul className="space-y-5 text-sm font-bold text-white/70 leading-relaxed uppercase tracking-wider">
            <li><span className="text-orange-500 italic mr-2">●</span> Deposits are non-refundable & non-transferable.</li>
            <li><span className="text-orange-500 italic mr-2">●</span> All guests must sign a waiver.</li>
            <li><span className="text-orange-500 italic mr-2">●</span> Free rescheduling up to 24h before.</li>
            <li><span className="text-orange-500 italic mr-2">●</span> Additional Jumpers: $22 per jumper.</li>
            <li><span className="text-orange-500 italic mr-2">●</span> Weekend Pizza orders due by Wednesday.</li>
            <li><span className="text-orange-500 italic mr-2">●</span> Please arrive 10-15 minutes early.</li>
            <li><span className="text-orange-500 italic mr-2">●</span> No piñatas or confetti allowed.</li>
          </ul>
        </div>
      </div>

      <a href={`${SITE_BASE}/book`} className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black uppercase py-7 px-20 rounded-[2.5rem] text-2xl transition-all shadow-2xl shadow-orange-500/40 hover:scale-105 active:scale-95 italic tracking-tight">
        Book Party Now
      </a>
    </div>
  </section>
);

const ComingSoonSection = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto text-center">
    <h2 className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-20 text-slate-900 dark:text-white underline decoration-primary/20 underline-offset-8">COMING SOON</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {['Clarksville, IN', 'Flint, MI', 'Kalamazoo, MI', 'Burnsville, MN', 'Matteson, IL', 'Peoria, IL', 'Portage, IN', 'South Bend, IN', 'Elkhart, lN', 'Springfield, VA', 'Racine, WI', 'Bloomfield, NJ', 'Westbury, NY', 'Memphis, TN'].map((loc, i) => (
        <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[3rem] flex flex-col justify-center items-center group hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-500">
           <span className="text-primary opacity-40 mb-3 font-black italic text-[10px] tracking-[0.3em]">NEW HUB</span>
           <p className="font-black uppercase tracking-tighter text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors text-lg italic">{loc}</p>
        </div>
      ))}
    </div>
  </section>
);

// --- MAIN PAGE COMPONENT ---

export default function AboutPage() {
  return (
    <div className="min-h-screen text-slate-900 dark:text-white bg-transparent font-sans pb-20">
      <HeroSection />
      <MainFunSection />
      <PricingSection />
      <LocationHoursSection />
      <PartySection />
      <ComingSoonSection />
      
      {/* FINAL CALL TO ACTION */}
      <section className="py-40 px-6 text-center bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-black italic font-headings uppercase tracking-tighter mb-16 text-white drop-shadow-2xl leading-none">SEE YOU SOON!</h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href={`${SITE_BASE}/book`} className="w-full sm:w-auto bg-slate-950 text-white hover:bg-black font-black uppercase py-7 px-20 rounded-[2.5rem] text-3xl transition-all shadow-2xl shadow-black/40 italic tracking-tight hover:scale-105">
              Book Now
            </a>
            <a href={`${SITE_BASE}/waiver`} className="w-full sm:w-auto bg-white text-primary hover:bg-slate-50 font-black uppercase py-7 px-20 rounded-[2.5rem] text-3xl transition-all shadow-2xl italic tracking-tight hover:scale-105">
              Sign Waiver
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
