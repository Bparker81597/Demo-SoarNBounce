import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { LocationConfig } from '../data/locations';

interface Props {
  locations: LocationConfig[];
}

const SITE_BASE = "/Demo-SoarNBounce";

export default function LocationPicker({ locations }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openLocations = filteredLocations.filter(loc => loc.status === 'open');
  const comingSoonLocations = filteredLocations.filter(loc => loc.status === 'coming_soon');

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-8 text-slate-900 dark:text-white leading-none"
          >
            CHOOSE YOUR <br/> <span className="text-primary underline decoration-orange-500/30 underline-offset-8">PARK</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-bold italic tracking-tight mb-12">
            Find the Soar N Bounce nearest to you and jump into the fun.
          </p>

          {/* SEARCH BOX */}
          <div className="max-w-2xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search by city or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[2rem] px-10 py-6 text-xl font-bold italic shadow-2xl focus:border-primary focus:outline-none transition-all group-hover:scale-[1.02] dark:text-white"
            />
            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-3xl">🔍</span>
          </div>
        </div>

        {/* OPEN LOCATIONS */}
        {openLocations.length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-black italic uppercase tracking-widest text-primary mb-12 border-l-8 border-primary pl-8">Currently Open</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {openLocations.map((loc) => (
                <LocationCard key={loc.slug} loc={loc} />
              ))}
            </div>
          </div>
        )}

        {/* COMING SOON */}
        {comingSoonLocations.length > 0 && (
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-widest text-orange-500 mb-12 border-l-8 border-orange-500 pl-8">Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {comingSoonLocations.map((loc) => (
                <LocationCard key={loc.slug} loc={loc} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function LocationCard({ loc }: { loc: LocationConfig }) {
  const isOpen = loc.status === 'open';
  
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
    >
      <div className="p-10 flex flex-col h-full">
        <div className="mb-8">
          <div className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 italic ${isOpen ? 'bg-emerald-500 text-white' : 'bg-orange-500 text-white'}`}>
            {isOpen ? 'Now Open' : 'Opening Soon'}
          </div>
          <h3 className="text-3xl font-black italic uppercase text-slate-900 dark:text-white mb-2 leading-tight">{loc.name}</h3>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] italic">{loc.city}, {loc.state}</p>
        </div>

        <div className="space-y-4 mb-10 flex-1">
          <p className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold text-sm italic">
            <span>📍</span> {loc.address}
          </p>
          <p className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold text-sm italic">
            <span>📞</span> {loc.phones[0]}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a href={`${SITE_BASE}/${loc.slug}`} className={`text-center font-black uppercase py-4 rounded-2xl transition-all shadow-lg italic tracking-widest text-xs ${isOpen ? 'bg-primary hover:bg-blue-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
            {isOpen ? 'View Park' : 'Preview Park'}
          </a>
          
          <div className="grid grid-cols-2 gap-3">
            {isOpen ? (
              <>
                <a href={`${SITE_BASE}/${loc.slug}/book`} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center font-black uppercase py-3 rounded-xl transition-all italic tracking-widest text-[9px]">
                  Tickets
                </a>
                <a href={`${SITE_BASE}/${loc.slug}/waiver`} className="bg-orange-500 text-white text-center font-black uppercase py-3 rounded-xl transition-all italic tracking-widest text-[9px]">
                  Waiver
                </a>
              </>
            ) : (
              <div className="col-span-2 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 text-center font-black uppercase py-3 rounded-xl italic tracking-widest text-[9px]">
                Coming Soon
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
