import React from 'react';
import { motion } from 'framer-motion';

const SITE_BASE = "/Demo-SoarNBounce";

// --- SUB-COMPONENTS ---

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden text-center">
    <div className="absolute inset-0 z-0">
      <img src={`${SITE_BASE}/images/hero-header.png`} alt="About Us Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#f8f9fa]"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <motion.span 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="bg-primary text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] inline-block mb-6 shadow-lg italic"
      >
        Grandville, MI
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-6 text-gray-900"
      >
        LITTLE SOMETHING <br/> <span className="text-primary text-4xl md:text-6xl not-italic underline decoration-accent/30 underline-offset-8">ABOUT US</span>
      </motion.h1>
      <div className="flex justify-center">
        <a href={`${SITE_BASE}/book`} className="bg-accent hover:bg-orange-600 text-white font-black uppercase py-4 px-10 rounded-full tracking-widest transition-all shadow-xl italic">
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

const MainFunSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <div className="bg-white border border-gray-100 rounded-[3rem] p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
          <h2 className="text-4xl font-black italic font-headings uppercase tracking-tighter mb-8 text-gray-900">LET'S JUST HAVE FUN</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-bold italic">
            <p>
              Located at the heart of family fun, our park is the perfect destination for creating unforgettable memories with your loved ones. Whether you’re bouncing high on trampolines, tackling thrilling obstacle courses, or enjoying active play together, there’s something for every member of the family. From kids to parents, our park offers a safe, exciting environment where everyone can enjoy the joy of movement and adventure. Soar and Bounce Trampoline and Adventure Park is your ultimate family-friendly spot to laugh, play, and make memories that will last a lifetime!
            </p>
          </div>
          <div className="mt-10">
            <a href={`${SITE_BASE}/book`} className="bg-primary hover:bg-blue-600 text-white font-black uppercase py-4 px-10 rounded-full tracking-widest transition-all shadow-lg italic">
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <div className="aspect-video bg-white rounded-[4rem] border-8 border-gray-50 shadow-2xl overflow-hidden relative">
           <img src={`${SITE_BASE}/images/hero-header.png`} alt="Fun" className="w-full h-full object-cover opacity-80" />
           <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-[1px]">
              <span className="text-white font-black italic text-4xl uppercase tracking-widest drop-shadow-2xl">High Energy</span>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-24 px-6 bg-white border-y border-gray-100 shadow-inner">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-4 text-gray-900">GENERAL ADMISSION PRICING</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Toddler */}
        <div className="bg-gray-50 border border-gray-100 p-10 rounded-[3rem] shadow-lg">
          <h3 className="text-2xl font-black uppercase mb-8 text-primary border-b border-gray-200 pb-4">Toddler Admission (Ages 5 & Younger)</h3>
          <ul className="space-y-4 text-xl font-bold text-gray-700">
            <li className="flex justify-between"><span>60 Minutes:</span> <span className="text-primary">$17</span></li>
            <li className="flex justify-between"><span>90 Minutes:</span> <span className="text-primary">$21</span></li>
            <li className="flex justify-between"><span>120 Minutes:</span> <span className="text-primary">$25</span></li>
            <li className="flex justify-between"><span>180 Minutes:</span> <span className="text-primary">$29</span></li>
          </ul>
        </div>
        {/* General */}
        <div className="bg-gray-50 border border-gray-100 p-10 rounded-[3rem] shadow-lg">
          <h3 className="text-2xl font-black uppercase mb-8 text-accent border-b border-gray-200 pb-4">General Admission (Ages 6 & Older)</h3>
          <ul className="space-y-4 text-xl font-bold text-gray-700">
            <li className="flex justify-between"><span>60 Minutes:</span> <span className="text-accent">$21</span></li>
            <li className="flex justify-between"><span>90 Minutes:</span> <span className="text-accent">$25</span></li>
            <li className="flex justify-between"><span>120 Minutes:</span> <span className="text-accent">$29</span></li>
            <li className="flex justify-between"><span>180 Minutes:</span> <span className="text-accent">$33</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 max-w-2xl mx-auto bg-primary/5 border border-primary/10 p-10 rounded-[3rem] text-center shadow-md">
         <h3 className="text-3xl font-black italic uppercase text-primary mb-4 tracking-widest underline underline-offset-8 decoration-accent/30">All Day Unlimited Pass $35</h3>
         <p className="text-gray-400 font-black uppercase text-xs tracking-widest">(Include Go Kart & VR Warship)</p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest text-gray-400 italic">
         <span>*Jump Socks are Required $3.50/ Pair</span>
         <span>*Weight Limit 250lbs</span>
         <span>*Waivers Required</span>
      </div>
    </div>
  </section>
);

const LocationHoursSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto text-gray-900">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-black italic font-headings uppercase tracking-tighter mb-8 text-gray-900">LOCATION & HOURS!</h2>
        <p className="text-gray-500 font-bold mb-12 italic">Our hours may vary during holidays and school vacations! To ensure you have the most current information, please give us a call!</p>
        
        <div className="space-y-12">
          <div>
            <h4 className="text-xl font-black uppercase text-primary mb-4 tracking-widest underline decoration-accent/30 underline-offset-8 italic">Address:</h4>
            <p className="text-2xl font-bold text-gray-700">3668 Rivertown Parkway, Grandville, MI</p>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase text-primary mb-6 tracking-widest underline decoration-accent/30 underline-offset-8 italic">How to Get Here:</h4>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                <p className="font-black text-primary uppercase mb-3 italic tracking-tight">Mall Entrance:</p>
                <p className="text-gray-500 font-bold leading-relaxed">You can access us directly from the Rivertown Crossings Mall! Our Mall entrance is located on the second floor - across from Dicks Sporting Goods!</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                <p className="font-black text-accent uppercase mb-3 italic tracking-tight">Main Entrance:</p>
                <p className="text-gray-500 font-bold leading-relaxed">For the main entrance, park in lot C1-C5 and you will see us! Look for the green building!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 p-12 rounded-[3.5rem] shadow-2xl h-fit">
        <h3 className="text-3xl font-black italic font-headings uppercase tracking-tighter mb-10 text-primary underline decoration-accent/20 underline-offset-8">HOURS OF OPERATION:</h3>
        <ul className="space-y-4 text-xl font-bold text-gray-700">
          <li className="flex justify-between border-b border-gray-50 pb-2"><span>Monday:</span> <span>10AM to 9PM</span></li>
          <li className="flex justify-between border-b border-gray-50 pb-2"><span>Tuesday:</span> <span>10AM to 9PM</span></li>
          <li className="flex justify-between border-b border-gray-50 pb-2"><span>Wednesday:</span> <span>10AM to 9PM</span></li>
          <li className="flex justify-between border-b border-gray-50 pb-2"><span>Thursday:</span> <span>10AM to 9PM</span></li>
          <li className="flex justify-between border-b border-gray-50 pb-2 font-black text-primary italic"><span>Friday:</span> <span>10AM to 10PM</span></li>
          <li className="flex justify-between border-b border-gray-50 pb-2 font-black text-primary italic"><span>Saturday:</span> <span>10AM to 10PM</span></li>
          <li className="flex justify-between pb-2"><span>Sunday:</span> <span>10AM to 9PM</span></li>
        </ul>
        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-10 text-center italic">*PLEASE NOTE THAT OUR WEEKEND OPENING HOURS CAN BE AFFECTED BY SCHEDULED PRIVATE EVENTS.</p>
      </div>
    </div>
  </section>
);

const PartySection = () => (
  <section className="py-24 px-6 bg-accent border-y border-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-black/5"></div>
    <div className="max-w-7xl mx-auto text-center relative z-10 text-white">
      <h2 className="text-3xl md:text-5xl font-black italic font-headings uppercase tracking-tighter mb-4 leading-tight drop-shadow-lg">NO SETUP. NO CLEAN UP. NO HASSLE, JUST FUN! BIRTHDAY PARTIES!</h2>
      <h3 className="text-2xl font-black uppercase mb-16 tracking-widest opacity-90 italic">BOOK YOUR PARTY AT SOAR N BOUNCE TODAY!</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[3.5rem] shadow-xl">
          <h4 className="text-xl font-black uppercase text-white mb-8 italic tracking-widest underline underline-offset-8 decoration-white/30">What’s Included in Every Party:</h4>
          <ul className="space-y-4 font-bold text-white/90">
            {['1-Hour Jump Pass & Jump Socks', '40 Minutes in a Private Party Room', 'Pizza, Ice Cream Cups, Water, Plates, Napkins & Utensils', 'Birthday Child Jumps for Free', 'SnB T-Shirt for Birthday Child', '20 Credit Arcade Card for each Child', '1 Free VR Warship for each Child', '1 Free Go Kart for each Child'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-white font-black">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[3.5rem] shadow-xl">
          <h4 className="text-xl font-black uppercase text-white mb-8 italic tracking-widest underline underline-offset-8 decoration-white/30">Important Party Info:</h4>
          <ul className="space-y-4 text-sm font-bold text-white/80 leading-relaxed">
            <li><span className="text-white uppercase font-black">Deposits:</span> All deposits are non-refundable and non-transferable.</li>
            <li><span className="text-white uppercase font-black">Waivers:</span> All guests, including non-jumpers, must sign a waiver.</li>
            <li><span className="text-white uppercase font-black">Rescheduling:</span> Free up to 24h before. $50 fee if within 12h.</li>
            <li><span className="text-white uppercase font-black">Additional Jumpers:</span> $22 per jumper.</li>
            <li><span className="text-white uppercase font-black">Pizza Orders:</span> Must be placed by Wednesday for weekend events.</li>
            <li><span className="text-white uppercase font-black">Arrival:</span> Please arrive 10-15 minutes early.</li>
            <li><span className="text-white uppercase font-black">Restrictions:</span> No piñatas or confetti allowed.</li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <a href={`${SITE_BASE}/book`} className="inline-block bg-white text-accent hover:bg-gray-100 font-black uppercase py-6 px-16 rounded-full text-xl transition-all shadow-2xl hover:scale-105 active:scale-95 italic">
          Book Now
        </a>
      </div>
    </div>
  </section>
);

const ComingSoonSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-16 text-primary underline decoration-accent/20 underline-offset-8">COMING SOON</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {['Clarksville, IN', 'Flint, MI', 'Kalamazoo, MI', 'Burnsville, MN', 'Matteson, IL', 'Peoria, IL', 'Portage, IN', 'South Bend, IN', 'Elkhart, lN', 'Springfield, VA', 'Racine, WI', 'Bloomfield, NJ', 'Westbury, NY', 'Memphis, TN'].map((loc, i) => (
        <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl flex flex-col justify-center items-center group hover:border-primary shadow-lg hover:shadow-2xl transition-all">
           <span className="text-primary opacity-40 mb-2 font-black italic text-[10px] tracking-widest">NEW LOCATION</span>
           <p className="font-black uppercase tracking-tight text-gray-700 group-hover:text-primary transition-colors">{loc}</p>
        </div>
      ))}
    </div>
  </section>
);


// --- MAIN PAGE COMPONENT ---

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white bg-transparent font-sans">
      <HeroSection />
      <MainFunSection />
      <PricingSection />
      <LocationHoursSection />
      <PartySection />
      <ComingSoonSection />
      
      {/* FINAL CALL TO ACTION */}
      <section className="py-32 px-6 text-center bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-12">SEE YOU SOON!</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={`${SITE_BASE}/book`} className="bg-black text-white hover:bg-gray-900 font-black uppercase py-6 px-16 rounded-[2rem] text-xl transition-all shadow-2xl">
              Book Jump Time
            </a>
            <a href={`${SITE_BASE}/waiver`} className="bg-white text-black hover:bg-gray-100 font-black uppercase py-6 px-16 rounded-[2rem] text-xl transition-all shadow-2xl">
              Sign Waiver
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
