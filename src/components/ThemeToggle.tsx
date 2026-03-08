import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsDark(document.documentElement.classList.contains('dark'));

    // Use MutationObserver to watch for class changes on <html>
    // This ensures all toggle buttons stay in sync regardless of which one is clicked
    const observer = new MutationObserver(() => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      setIsDark(isCurrentlyDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark ? 'dark' : 'light';
    
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', nextTheme);
    console.log('Theme toggled to:', nextTheme); // Debug log
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:scale-110 active:scale-95 transition-all text-xl flex items-center justify-center min-w-[50px] min-h-[50px]"
      aria-label="Toggle Theme"
      type="button"
    >
      <span className="transition-transform duration-300 transform group-active:scale-90">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
