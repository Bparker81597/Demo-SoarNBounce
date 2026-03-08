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

    const socksTotal = needsSocks ? (jumpers * PRICING_CONFIG.socks) : 0;
    return {
      subtotal,
      socksTotal,
      total: subtotal + socksTotal
    };
  }, [bookingType, duration, jumpers, needsSocks]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking Submitted! (Mock) - This is where we'd connect to Stripe/Backend.");
    console.log("Final Booking State:", { bookingType, duration, date, time, jumpers, needsSocks, formData, totals });
  };

  return (
    <div className="min-h-screen text-gray-900 bg-transparent font-sans pb-12">
      {/* 1. HERO / INTRO */}
      <section className="pt-12 pb-8 px-6 text-center">
        <div className="flex justify-center mb-6">
           <button 
             onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
             className="bg-white border border-gray-200 shadow-xl px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center gap-2 text-gray-900"
           >
             <span>🌐 {lang === 'en' ? 'Español' : 'English'}</span>
           </button>
        </div>
        <h1 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-4 text-gray-900">
          {t.title}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto mb-6 font-bold">
          {t.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-widest">
           <span className="bg-white text-primary border border-gray-100 shadow-md px-4 py-2 rounded-full flex items-center italic">📍 {t.location}</span>
           <span className="bg-white text-secondary-dark border border-gray-100 shadow-md px-4 py-2 rounded-full flex items-center italic">🕒 10AM - 9PM</span>
           <span className="bg-white text-accent border border-gray-100 shadow-md px-4 py-2 rounded-full flex items-center italic">📝 {t.waiverReminder}</span>
        </div>
        {bookingType === 'toddler' && (
          <div className="mt-6 animate-bounce inline-block bg-primary text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg italic">
            🐣 Toddler Time Special: 10AM - 3PM
          </div>
        )}
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN: BOOKING FLOW */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* STEP 1: TYPE */}
          <section className="animate-in slide-in-from-bottom duration-500">
            <h2 className="text-2xl font-black mb-6 flex items-center text-primary uppercase tracking-tight italic">
              <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3 not-italic">1</span>
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
                  className={`text-left p-8 rounded-[2.5rem] border-2 transition-all relative group shadow-lg ${
                    bookingType === type.id 
                    ? `border-primary bg-primary/5` 
                    : 'border-white bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{type.icon}</div>
                  <h3 className="font-black text-xl mb-1 uppercase tracking-tight text-gray-900">{type.title}</h3>
                  <p className="text-gray-500 text-sm leading-tight font-bold">{type.desc}</p>
                  {bookingType === type.id && (
                    <div className={`absolute top-6 right-6 text-primary font-black`}>✔</div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* STEP 2: DATE & TIME */}
          <section className="animate-in slide-in-from-bottom duration-700">
            <h2 className="text-2xl font-black mb-6 flex items-center text-secondary-dark uppercase tracking-tight italic">
              <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm mr-3 not-italic">2</span>
              {t.step2}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <div>
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Select Date</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary focus:bg-white transition-all outline-none font-bold"
                />
              </div>

              {bookingType !== 'party' ? (
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">{t.selectDuration}</label>
                  <select 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary focus:bg-white transition-all outline-none appearance-none font-bold cursor-pointer"
                  >
                    {durationOptions.map(opt => (
                      <option key={opt} value={opt}>{opt} {t.minutes}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Party Duration</label>
                  <div className="px-4 py-3 bg-gray-100 text-gray-500 rounded-xl border border-gray-200 font-bold">120 {t.minutes}</div>
                </div>
              )}

              <div>
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">{t.selectTime}</label>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary focus:bg-white transition-all outline-none appearance-none font-bold cursor-pointer"
                >
                  <option value="">Select Time</option>
                  {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* STEP 3: JUMPERS & SOCKS */}
          <section className="animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-2xl font-black mb-6 flex items-center text-accent uppercase tracking-tight italic">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm mr-3 not-italic">3</span>
              {t.step3}
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-12">
                <div className="flex-1">
                    <label className="block text-[10px] font-black uppercase text-gray-400 mb-6 tracking-widest">{t.jumpers}</label>
                    <div className="flex items-center space-x-8">
                      <button 
                        onClick={() => {
                          const newVal = Math.max(1, jumpers - 1);
                          setJumpers(newVal);
                        }}
                        className="w-14 h-14 rounded-full border-2 border-gray-200 hover:border-accent text-2xl font-black transition-all flex items-center justify-center"
                      >-</button>
                      <span className="text-5xl font-black italic text-accent tabular-nums">{jumpers}</span>
                      <button 
                        onClick={() => setJumpers(jumpers + 1)}
                        className="w-14 h-14 rounded-full border-2 border-gray-200 hover:border-accent text-2xl font-black transition-all flex items-center justify-center"
                      >+</button>
                    </div>
                </div>

                <div className="flex-1 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <label className="font-black uppercase tracking-tight text-gray-900">{t.addSocks}</label>
                      <button 
                        onClick={() => setNeedsSocks(!needsSocks)}
                        className={`w-14 h-7 rounded-full transition-all relative ${needsSocks ? 'bg-primary' : 'bg-gray-200'}`}
                      >
                        <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all shadow-md ${needsSocks ? 'left-8' : 'left-1'}`}></div>
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 font-bold mb-0 leading-relaxed">{t.socksDesc}</p>
                </div>
              </div>
            </div>
          </section>


          {/* STEP 4: CONTACT INFO */}
          <section>
             <h2 className="text-2xl font-black mb-6 flex items-center text-gray-300 uppercase tracking-tight italic">
              <span className="w-8 h-8 bg-gray-200 text-white rounded-full flex items-center justify-center text-sm mr-3 not-italic">4</span>
              {t.step4}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl">
              <div>
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">{t.firstName}</label>
                <input required name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">{t.lastName}</label>
                <input required name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">{t.email}</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white transition-all font-bold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">{t.phone}</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white transition-all font-bold" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">{t.notes}</label>
                <textarea name="notes" value={formData.notes} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-primary focus:bg-white transition-all font-bold h-24" />
              </div>
            </form>
          </section>

        </div>

        {/* RIGHT COLUMN: SUMMARY STICKY */}
        <div className="lg:col-span-4">
           <div className="sticky top-24 space-y-6">
              <div className="bg-white border border-gray-100 p-10 rounded-[3rem] shadow-2xl">
                 <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 border-b border-gray-50 pb-6 text-gray-900">
                    {t.summary}
                 </h3>
                 
                 <div className="space-y-5 mb-10">
                    <div className="flex justify-between items-center">
                       <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{t.step1}</span>
                       <span className="font-black text-primary uppercase text-sm tracking-tight">{t[bookingType + 'Admission'] || t[bookingType + 'Time'] || t[bookingType + 'Party'] || t[bookingType + 'Event']}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{t.step2}</span>
                       <span className="font-bold text-gray-700 text-sm">{date} @ {time || '--:--'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Duration</span>
                       <span className="font-bold text-gray-700 text-sm">{duration} {t.minutes}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{t.jumpers}</span>
                       <span className="font-black text-accent text-lg">x{jumpers}</span>
                    </div>
                 </div>

                 <div className="space-y-4 mb-10 pt-8 border-t border-gray-50">
                    <div className="flex justify-between text-gray-500 font-bold text-sm">
                       <span>Subtotal</span>
                       <span>${totals.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 font-bold text-sm">
                       <span>Socks</span>
                       <span>${totals.socksTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-3xl font-black italic text-gray-900 pt-4">
                       <span>{t.total}*</span>
                       <span className="text-primary underline decoration-accent/30 decoration-4 underline-offset-8">${totals.total.toFixed(2)}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-4 uppercase font-black tracking-widest text-center">* Tax calculated at checkout.</p>
                 </div>

                 <button 
                   onClick={handleSubmit}
                   className="w-full bg-primary hover:bg-blue-600 text-white font-black uppercase py-6 rounded-2xl transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] italic text-lg"
                 >
                    {t.continue} &rarr;
                 </button>

                 <div className="mt-8 text-center">
                    <a href="#" className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors italic">{t.policy}</a>
                 </div>
              </div>

              <div className="bg-accent text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                 <p className="text-sm font-black italic uppercase leading-relaxed flex items-start">
                    <span className="mr-3 text-2xl">🔥</span>
                    <span>Grandville Special: Book Friday Night and save 20% on socks!</span>
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
