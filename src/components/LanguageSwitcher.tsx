import React, { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-lang') as 'en' | 'es';
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    setLang(newLang);
    localStorage.setItem('preferred-lang', newLang);
    // Dispatch a custom event so other components can listen
    window.dispatchEvent(new CustomEvent('lang-changed', { detail: newLang }));
    // Also reload or just let components react
    // For this demo, we'll use the event system
  };

  return (
    <button
      onClick={toggleLang}
      className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-sm border border-slate-200 dark:border-slate-700 active:scale-95"
      aria-label="Toggle Language"
    >
      {lang === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
    </button>
  );
}
