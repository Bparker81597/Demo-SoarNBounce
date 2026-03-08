import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION OBJECTS (ADMIN UPDATABLE) ---

const PRICING_CONFIG = {
  general: {
    '60': 20,
    '90': 24,
    '120': 28,
    '180': 30
  },
  toddler: {
    '60': 15,
    '90': 18,
    '120': 21
  },
  party: {
    base: 250, // Includes up to 10 kids
    extraJumper: 15,
    duration: 120
  },
  socks: 3.50,
  group: {
    minJumpers: 15,
    discount: 0.15 // 15% off for large groups
  }
};

const OPERATING_HOURS = {
  monThu: { open: 10, close: 20 },
  friSat: { open: 10, close: 22 },
  sun: { open: 11, close: 19 }
};

const TRANSLATIONS: any = {
  en: {
    title: "Book Your Visit",
    subtitle: "Fast, family-friendly booking for the ultimate jump experience.",
    location: "Grandville, MI",
    step1: "1. Select Booking Type",
    step2: "2. Date & Time",
    step3: "3. Jumper Details",
    step4: "4. Contact Info",
    generalAdmission: "General Admission",
    generalAdmissionDesc: "Ages 6+. Full access to all attractions.",
    toddlerTime: "Toddler Time",
    toddlerTimeDesc: "Ages 5 and under. Safe, dedicated jump area.",
    birthdayParty: "Birthday Party",
    birthdayPartyDesc: "The ultimate celebration! Private table included.",
    groupEvent: "Group Event",
    groupEventDesc: "15+ jumpers. Perfect for schools & teams.",
    selectDuration: "Select Duration",
    selectTime: "Select Time Slot",
    jumpers: "Number of Jumpers",
    addSocks: "Need Jump Socks?",
    socksDesc: "Required for all jumpers ($3.50/pair)",
    summary: "Booking Summary",
    total: "Total Estimate",
    continue: "Continue to Checkout",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    notes: "Special Requests / Notes",
    minutes: "Minutes",
    waiverReminder: "Don't forget to sign your waiver online!",
    policy: "View Policies",
  },
  es: {
    title: "Reserva Tu Visita",
    subtitle: "Reserva rápida y familiar para la mejor experiencia de salto.",
    location: "Grandville, MI",
    step1: "1. Seleccionar Tipo",
    step2: "2. Fecha y Hora",
    step3: "3. Detalles de Saltadores",
    step4: "4. Info de Contacto",
    generalAdmission: "Entrada General",
    generalAdmissionDesc: "Mayores de 6 años. Acceso total.",
    toddlerTime: "Tiempo de Niños",
    toddlerTimeDesc: "Menores de 5 años. Área segura dedicada.",
    birthdayParty: "Fiesta de Cumpleaños",
    birthdayPartyDesc: "¡La mejor celebración! Mesa privada incluida.",
    groupEvent: "Evento de Grupo",
    groupEventDesc: "15+ saltadores. Ideal para escuelas y equipos.",
    selectDuration: "Seleccionar Duración",
    selectTime: "Seleccionar Horario",
    jumpers: "Número de Saltadores",
    addSocks: "¿Necesitas Calcetines?",
    socksDesc: "Obligatorio para todos ($3.50/par)",
    summary: "Resumen de Reserva",
    total: "Total Estimado",
    continue: "Continuar al Pago",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Teléfono",
    notes: "Notas / Pedidos Especiales",
    minutes: "Minutos",
    waiverReminder: "¡No olvides firmar la exención en línea!",
    policy: "Ver Políticas",
  }
};

// --- TYPES ---

type Language = 'en' | 'es';
type BookingType = 'general' | 'toddler' | 'party' | 'group';

export default function BookingSystem() {
  const [lang, setLang] = useState<Language>('en');
  const [bookingType, setBookingType] = useState<BookingType>('general');
  const [duration, setDuration] = useState<string>('90');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>('');
  const [jumpers, setJumpers] = useState<number>(1);
  const [needsSocks, setNeedsSocks] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const t = TRANSLATIONS[lang];

  // Logic: Generate time slots
  const timeSlots = useMemo(() => {
    const d = new Date(date);
    const day = d.getDay();
    if (bookingType === 'toddler') {
      const slots = [];
      for (let h = 10; h < 15; h++) {
        slots.push(`${h}:00 AM`);
        slots.push(`${h}:30 AM`);
      }
      return slots;
    }
    let hours = OPERATING_HOURS.monThu;
    if (day === 0) hours = OPERATING_HOURS.sun;
    else if (day === 5 || day === 6) hours = OPERATING_HOURS.friSat;
    const slots = [];
    for (let h = hours.open; h < hours.close; h++) {
      const ampm = h >= 12 ? 'PM' : 'AM';
      const displayH = h > 12 ? h - 12 : h;
      slots.push(`${displayH}:00 ${ampm}`);
      slots.push(`${displayH}:30 ${ampm}`);
    }
    return slots;
  }, [date, bookingType]);

  const durationOptions = useMemo(() => {
    if (bookingType === 'toddler') {
      const options = [];
      for (let m = 60; m <= 180; m += 5) { options.push(m.toString()); }
      return options;
    }
    return ['60', '90', '120', '180'];
  }, [bookingType]);

  const totals = useMemo(() => {
    let subtotal = 0;
    if (bookingType === 'party') {
      subtotal = PRICING_CONFIG.party.base;
      if (jumpers > 10) subtotal += (jumpers - 10) * PRICING_CONFIG.party.extraJumper;
    } else {
      const priceKey = bookingType === 'toddler' ? 'toddler' : 'general';
      const pricingObj = (PRICING_CONFIG as any)[priceKey];
      let perPerson = pricingObj[duration] || (pricingObj['60'] * (parseInt(duration) / 60));
      subtotal = perPerson * jumpers;
      if (bookingType === 'group' && jumpers >= PRICING_CONFIG.group.minJumpers) subtotal *= (1 - PRICING_CONFIG.group.discount);
    }
    const socksTotal = needsSocks ? (jumpers * PRICING_CONFIG.socks) : 0;
    return { subtotal, socksTotal, total: subtotal + socksTotal };
  }, [bookingType, duration, jumpers, needsSocks]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking Submitted! (Mock)");
  };

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 bg-transparent font-sans pb-20 transition-colors duration-500">
      
      {/* 1. HERO / INTRO */}
      <section className="pt-24 pb-16 px-6 text-center">
        <div className="flex justify-center mb-10">
           <button 
             onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
             className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-3 text-slate-800 dark:text-white italic"
           >
             🌐 {lang === 'en' ? 'Español' : 'English'}
           </button>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-6 text-slate-900 dark:text-white leading-none">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-bold italic tracking-tight">
          {t.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-black uppercase tracking-widest italic">
           <span className="bg-white dark:bg-slate-900 text-primary border border-slate-100 dark:border-slate-800 shadow-xl px-6 py-3 rounded-2xl flex items-center italic tracking-widest">📍 {t.location}</span>
           <span className="bg-white dark:bg-slate-900 text-secondary border border-slate-100 dark:border-slate-800 shadow-xl px-6 py-3 rounded-2xl flex items-center italic tracking-widest">🕒 10AM - 9PM</span>
           <span className="bg-white dark:bg-slate-900 text-orange-500 dark:text-orange-400 border border-slate-100 dark:border-slate-800 shadow-xl px-6 py-3 rounded-2xl flex items-center italic tracking-widest">📝 {t.waiverReminder}</span>
        </div>
        {bookingType === 'toddler' && (
          <div className="mt-10 animate-bounce inline-block bg-primary text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl italic">
            🐣 Toddler Time Special: 10AM - 3PM
          </div>
        )}
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT COLUMN: BOOKING FLOW */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* STEP 1: TYPE */}
          <section>
            <h2 className="text-3xl font-black mb-10 flex items-center text-primary uppercase tracking-tight italic">
              <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-5 not-italic shadow-lg shadow-primary/20">1</span>
              {t.step1}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { id: 'general', title: t.generalAdmission, desc: t.generalAdmissionDesc, icon: '🚀', color: 'primary' },
                { id: 'toddler', title: t.toddlerTime, desc: t.toddlerTimeDesc, icon: '🐣', color: 'emerald-500' },
                { id: 'party', title: t.birthdayParty, desc: t.birthdayPartyDesc, icon: '🎂', color: 'orange-500' },
                { id: 'group', title: t.groupEvent, desc: t.groupEventDesc, icon: '⚽', color: 'primary' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => { setBookingType(type.id as BookingType); setTime(''); }}
                  className={`text-left p-10 rounded-[3.5rem] border-2 transition-all relative group shadow-xl ${
                    bookingType === type.id 
                    ? `border-primary bg-primary/5 dark:bg-primary/10 shadow-inner` 
                    : 'border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-2xl'
                  }`}
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{type.icon}</div>
                  <h3 className="font-black text-2xl mb-2 uppercase tracking-tight text-slate-900 dark:text-white italic">{type.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed">{type.desc}</p>
                  {bookingType === type.id && ( <div className="absolute top-8 right-8 text-primary text-2xl font-black">✔</div> )}
                </button>
              ))}
            </div>
          </section>

          {/* STEP 2: DATE & TIME */}
          <section>
            <h2 className="text-3xl font-black mb-10 flex items-center text-secondary uppercase tracking-tight italic">
              <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-sm mr-5 not-italic shadow-lg">2</span>
              {t.step2}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.3em] italic">Select Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-900 transition-all font-black" />
              </div>
              {bookingType !== 'party' ? (
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.3em] italic">{t.selectDuration}</label>
                  <select value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-900 transition-all font-black cursor-pointer appearance-none" >
                    {durationOptions.map(opt => <option key={opt} value={opt}>{opt} {t.minutes}</option>)}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.3em] italic">Party Duration</label>
                  <div className="px-6 py-4 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl border border-slate-200 dark:border-slate-700 font-black">120 {t.minutes}</div>
                </div>
              )}
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.3em] italic">{t.selectTime}</label>
                <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-900 transition-all font-black cursor-pointer appearance-none" >
                  <option value="">Select Time</option>
                  {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* STEP 3: JUMPERS & SOCKS */}
          <section>
            <h2 className="text-3xl font-black mb-10 flex items-center text-orange-500 uppercase tracking-tight italic">
              <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm mr-5 not-italic shadow-lg shadow-orange-500/20">3</span>
              {t.step3}
            </h2>
            <div className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-16">
              <div className="flex-1">
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-8 tracking-[0.3em] italic">{t.jumpers}</label>
                  <div className="flex items-center space-x-10">
                    <button onClick={() => setJumpers(Math.max(1, jumpers - 1))} className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 hover:border-primary text-3xl font-black transition-all flex items-center justify-center italic">-</button>
                    <span className="text-6xl font-black italic text-slate-900 dark:text-white tabular-nums">{jumpers}</span>
                    <button onClick={() => setJumpers(jumpers + 1)} className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 hover:border-primary text-3xl font-black transition-all flex items-center justify-center italic">+</button>
                  </div>
              </div>
              <div className="flex-1 bg-slate-50 dark:bg-slate-950 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-inner">
                  <div className="flex items-center justify-between mb-6">
                    <label className="font-black uppercase tracking-tight text-slate-900 dark:text-white italic">{t.addSocks}</label>
                    <button onClick={() => setNeedsSocks(!needsSocks)} className={`w-16 h-8 rounded-full transition-all relative ${needsSocks ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-slate-200 dark:bg-slate-800'}`}>
                      <div className={`absolute top-1.5 w-5 h-5 bg-white rounded-full transition-all shadow-md ${needsSocks ? 'left-9' : 'left-2'}`}></div>
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-bold mb-0 leading-relaxed italic">{t.socksDesc}</p>
              </div>
            </div>
          </section>

          {/* STEP 4: CONTACT INFO */}
          <section>
             <h2 className="text-3xl font-black mb-10 flex items-center text-slate-300 dark:text-slate-700 uppercase tracking-tight italic">
              <span className="w-10 h-10 bg-slate-200 dark:bg-slate-800 text-white rounded-full flex items-center justify-center text-sm mr-5 not-italic">4</span>
              {t.step4}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-slate-900 p-12 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-xl">
              {['firstName', 'lastName', 'email', 'phone'].map((field) => (
                <div key={field}>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.3em] italic">{t[field]}</label>
                  <input required name={field} value={(formData as any)[field]} onChange={handleInputChange} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-900 transition-all font-bold italic" />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.3em] italic">{t.notes}</label>
                <textarea name="notes" value={formData.notes} onChange={handleInputChange} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-primary focus:bg-white dark:focus:bg-slate-900 transition-all font-bold italic h-32" />
              </div>
            </form>
          </section>
        </div>

        {/* RIGHT COLUMN: SUMMARY STICKY */}
        <div className="lg:col-span-4">
           <div className="sticky top-24 space-y-8">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                 <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-10 border-b border-slate-50 dark:border-slate-800 pb-8 text-slate-900 dark:text-white leading-none">
                    {t.summary}
                 </h3>
                 <div className="space-y-6 mb-12">
                    {[
                      { label: t.step1, val: t[bookingType + 'Admission'] || t[bookingType + 'Time'] || t[bookingType + 'Party'] || t[bookingType + 'Event'], color: 'primary' },
                      { label: t.step2, val: `${date} @ ${time || '--:--'}`, color: 'slate-700 dark:text-slate-300' },
                      { label: 'Duration', val: `${duration} ${t.minutes}`, color: 'slate-700 dark:text-slate-300' },
                      { label: t.jumpers, val: `x${jumpers}`, color: 'orange-500 dark:text-orange-400', size: 'text-2xl font-black' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                         <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] italic">{item.label}</span>
                         <span className={`${item.size || 'text-sm font-black italic uppercase'} text-${item.color} text-right`}>{item.val}</span>
                      </div>
                    ))}
                 </div>
                 <div className="space-y-5 mb-12 pt-10 border-t border-slate-50 dark:border-slate-800">
                    <div className="flex justify-between text-slate-500 font-bold text-sm italic"><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between text-slate-500 font-bold text-sm italic"><span>Socks</span><span>${totals.socksTotal.toFixed(2)}</span></div>
                    <div className="flex justify-between text-4xl font-black italic text-slate-900 dark:text-white pt-6 tracking-tighter">
                       <span>TOTAL*</span>
                       <span className="text-primary underline decoration-orange-500 dark:decoration-orange-400 decoration-4 underline-offset-8">${totals.total.toFixed(2)}</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-6 uppercase font-black tracking-[0.2em] text-center italic">* Tax calculated at checkout.</p>
                 </div>
                 <button onClick={handleSubmit} className="w-full bg-primary hover:bg-blue-600 text-white font-black uppercase py-7 rounded-[2.5rem] transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 italic text-xl tracking-tight" >
                    {t.continue} &rarr;
                 </button>
                 <div className="mt-10 text-center">
                    <a href="#" className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] hover:text-primary transition-colors italic">{t.policy}</a>
                 </div>
              </div>
              <div className="bg-orange-500 text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform"></div>
                 <p className="text-lg font-black italic uppercase leading-tight flex items-start">
                    <span className="mr-4 text-4xl group-hover:rotate-12 transition-transform">🔥</span>
                    <span>Grandville Special: <br/> <span className="text-white/80 text-sm">Book Friday Night and save 20% on socks!</span></span>
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
