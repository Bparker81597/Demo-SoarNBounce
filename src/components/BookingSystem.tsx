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

// --- MAIN COMPONENT ---

export default function BookingSystem() {
  const [lang, setLang] = useState<Language>('en');
  const [bookingType, setBookingType] = useState<BookingType>('general');
  const [duration, setDuration] = useState<string>('90');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>('');
  const [jumpers, setJumpers] = useState<number>(1);
  const [needsSocks, setNeedsSocks] = useState<boolean>(true);
  const [sockPairs, setSockPairs] = useState<number>(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const t = TRANSLATIONS[lang];

  // Logic: Generate time slots based on operating hours
  const timeSlots = useMemo(() => {
    const d = new Date(date);
    const day = d.getDay();
    
    // Toddler Time specific hours: 10AM - 3PM
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

  // Logic: Generate duration options (5 min increments for Toddler)
  const durationOptions = useMemo(() => {
    if (bookingType === 'toddler') {
      const options = [];
      for (let m = 60; m <= 180; m += 5) {
        options.push(m.toString());
      }
      return options;
    }
    return ['60', '90', '120', '180'];
  }, [bookingType]);

  // Logic: Calculate Summary
  const totals = useMemo(() => {
    let subtotal = 0;
    if (bookingType === 'party') {
      subtotal = PRICING_CONFIG.party.base;
      if (jumpers > 10) {
        subtotal += (jumpers - 10) * PRICING_CONFIG.party.extraJumper;
      }
    } else {
      const priceKey = bookingType === 'toddler' ? 'toddler' : 'general';
      const pricingObj = (PRICING_CONFIG as any)[priceKey];
      
      // For toddler 5-min increments, we'll extrapolate the 60-min rate
      let perPerson = pricingObj[duration] || (pricingObj['60'] * (parseInt(duration) / 60));
      subtotal = perPerson * jumpers;
      
      if (bookingType === 'group' && jumpers >= PRICING_CONFIG.group.minJumpers) {
        subtotal = subtotal * (1 - PRICING_CONFIG.group.discount);
      }
    }

    const socksTotal = needsSocks ? (sockPairs * PRICING_CONFIG.socks) : 0;
    return {
      subtotal,
      socksTotal,
      total: subtotal + socksTotal
    };
  }, [bookingType, duration, jumpers, needsSocks, sockPairs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking Submitted! (Mock) - This is where we'd connect to Stripe/Backend.");
    console.log("Final Booking State:", { bookingType, duration, date, time, jumpers, needsSocks, sockPairs, formData, totals });
  };

  return (
    <div className="min-h-screen text-white bg-transparent font-sans pb-12">
      {/* 1. HERO / INTRO */}
      <section className="pt-12 pb-8 px-6 text-center">
        <div className="flex justify-center mb-6">
           <button 
             onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
             className="bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center space-x-2 transition-all"
           >
             <span>🌐 {lang === 'en' ? 'Español' : 'English'}</span>
           </button>
        </div>
        <h1 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-4">
          {t.title}
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          {t.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest">
           <span className="bg-primary/20 text-primary px-3 py-1 rounded-md">📍 {t.location}</span>
           <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-md">🕒 10AM - 9PM</span>
           <span className="bg-accent/20 text-accent px-3 py-1 rounded-md">📝 {t.waiverReminder}</span>
        </div>
        {bookingType === 'toddler' && (
          <div className="mt-4 animate-bounce inline-block bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full text-secondary text-xs font-bold uppercase tracking-widest">
            🐣 Toddler Time Special: 10AM - 3PM
          </div>
        )}
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN: BOOKING FLOW */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* STEP 1: TYPE */}
          <section className="animate-in slide-in-from-bottom duration-500">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-primary">
              <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3 font-black">1</span>
              {t.step1}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: 'general', title: t.generalAdmission, desc: t.generalAdmissionDesc, icon: '🚀', color: 'primary' },
                { id: 'toddler', title: t.toddlerTime, desc: t.toddlerTimeDesc, icon: '🐣', color: 'secondary' },
                { id: 'party', title: t.birthdayParty, desc: t.birthdayPartyDesc, icon: '🎂', color: 'accent' },
                { id: 'group', title: t.groupEvent, desc: t.groupEventDesc, icon: '⚽', color: 'primary' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setBookingType(type.id as BookingType);
                    if (type.id === 'party') setDuration('120');
                    else setDuration('90');
                    setTime('');
                  }}
                  className={`text-left p-6 rounded-3xl border-2 transition-all relative group ${
                    bookingType === type.id 
                    ? `border-${type.color} bg-${type.color}/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]` 
                    : 'border-white/5 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{type.icon}</div>
                  <h3 className="font-bold text-xl mb-1">{type.title}</h3>
                  <p className="text-gray-500 text-sm leading-tight">{type.desc}</p>
                  {bookingType === type.id && (
                    <div className={`absolute top-4 right-4 text-${type.color}`}>✔</div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* STEP 2: DATE & TIME */}
          <section className="animate-in slide-in-from-bottom duration-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-secondary">
              <span className="w-8 h-8 bg-secondary text-black rounded-full flex items-center justify-center text-sm mr-3 font-black">2</span>
              {t.step2}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 p-8 rounded-[2rem] border border-white/5">
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">Select Date</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-secondary transition-all outline-none"
                />
              </div>

              {bookingType !== 'party' ? (
                <div>
                  <label className="block text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">{t.selectDuration}</label>
                  <select 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-secondary transition-all outline-none appearance-none"
                  >
                    {durationOptions.map(opt => (
                      <option key={opt} value={opt}>{opt} {t.minutes}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">Party Duration</label>
                  <div className="px-4 py-3 bg-white/5 text-gray-400 rounded-xl border border-white/5">120 {t.minutes}</div>
                </div>
              )}

              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">{t.selectTime}</label>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-secondary transition-all outline-none appearance-none"
                >
                  <option value="">Select Time</option>
                  {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* STEP 3: JUMPERS & SOCKS */}
          <section className="animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-accent">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm mr-3 font-black">3</span>
              {t.step3}
            </h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                    <label className="block text-xs font-black uppercase text-gray-500 mb-4 tracking-widest">{t.jumpers}</label>
                    <div className="flex items-center space-x-6">
                      <button 
                        onClick={() => {
                          const newVal = Math.max(1, jumpers - 1);
                          setJumpers(newVal);
                          if (sockPairs > newVal) setSockPairs(newVal);
                        }}
                        className="w-12 h-12 rounded-full border-2 border-white/10 hover:border-accent text-2xl font-bold transition-all"
                      >-</button>
                      <span className="text-4xl font-black italic text-accent">{jumpers}</span>
                      <button 
                        onClick={() => setJumpers(jumpers + 1)}
                        className="w-12 h-12 rounded-full border-2 border-white/10 hover:border-accent text-2xl font-bold transition-all"
                      >+</button>
                    </div>
                </div>

                <div className="flex-1 bg-black/30 p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-bold text-sm">{t.addSocks}</label>
                      <button 
                        onClick={() => setNeedsSocks(!needsSocks)}
                        className={`w-12 h-6 rounded-full transition-all relative ${needsSocks ? 'bg-secondary' : 'bg-white/10'}`}
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${needsSocks ? 'left-7' : 'left-1'}`}></div>
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">{t.socksDesc}</p>
                    
                    <AnimatePresence>
                      {needsSocks && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <label className="block text-[10px] font-black uppercase text-gray-500 mb-2 tracking-widest">Pairs Needed</label>
                          <select 
                            value={sockPairs}
                            onChange={(e) => setSockPairs(parseInt(e.target.value))}
                            className="w-full bg-black border border-white/20 rounded-lg px-3 py-2 text-sm outline-none focus:border-secondary transition-all"
                          >
                            {[...Array(jumpers)].map((_, i) => (
                              <option key={i+1} value={i+1}>{i+1} Pair{i > 0 ? 's' : ''}</option>
                            ))}
                          </select>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
              </div>
            </div>
          </section>


          {/* STEP 4: CONTACT INFO */}
          <section>
             <h2 className="text-2xl font-bold mb-6 flex items-center text-white/50">
              <span className="w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center text-sm mr-3 font-black">4</span>
              {t.step4}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-8 rounded-[2rem] border border-white/5">
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">{t.firstName}</label>
                <input required name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">{t.lastName}</label>
                <input required name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">{t.email}</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">{t.phone}</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">{t.notes}</label>
                <textarea name="notes" value={formData.notes} onChange={handleInputChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary h-24" />
              </div>
            </form>
          </section>

        </div>

        {/* RIGHT COLUMN: SUMMARY STICKY */}
        <div className="lg:col-span-4">
           <div className="sticky top-24 space-y-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                 <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 border-b border-white/10 pb-4">
                    {t.summary}
                 </h3>
                 
                 <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                       <span className="text-gray-500 text-sm font-bold uppercase">{t.step1}</span>
                       <span className="font-bold text-primary">{t[bookingType + 'Admission'] || t[bookingType + 'Time'] || t[bookingType + 'Party'] || t[bookingType + 'Event']}</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-gray-500 text-sm font-bold uppercase">{t.step2}</span>
                       <span className="font-bold">{date} @ {time || '--:--'}</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-gray-500 text-sm font-bold uppercase">Duration</span>
                       <span className="font-bold">{duration} {t.minutes}</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-gray-500 text-sm font-bold uppercase">{t.jumpers}</span>
                       <span className="font-bold">x{jumpers}</span>
                    </div>
                 </div>

                 <div className="space-y-3 mb-8 pt-6 border-t border-white/5">
                    <div className="flex justify-between text-gray-400">
                       <span>Subtotal</span>
                       <span>${totals.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                       <span>Socks</span>
                       <span>${totals.socksTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-2xl font-black italic text-secondary pt-2">
                       <span>{t.total}*</span>
                       <span>${totals.total.toFixed(2)}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-2">* Tax calculated at checkout.</p>
                 </div>

                 <button 
                   onClick={handleSubmit}
                   className="w-full bg-primary hover:bg-blue-600 text-white font-black uppercase py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                 >
                    {t.continue} &rarr;
                 </button>

                 <div className="mt-6 text-center">
                    <a href="#" className="text-gray-500 text-xs font-bold uppercase hover:text-white transition-colors">{t.policy}</a>
                 </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 p-6 rounded-3xl">
                 <p className="text-accent text-sm font-bold flex items-center">
                    <span className="mr-2">🔥</span>
                    Grandville Special: Book Friday Night and save 20% on socks!
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
