import React from 'react';
import { motion } from 'framer-motion';

const SITE_BASE = "/Demo-SoarNBounce";

// --- SUB-COMPONENTS ---

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden text-center">
    <div className="absolute inset-0 z-0 opacity-30">
      <img src={`${SITE_BASE}/images/hero-header.png`} alt="About Us Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <motion.span 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="bg-primary/20 text-primary border border-primary/30 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] inline-block mb-6"
      >
        Grandville, MI
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-6"
      >
        Discover <span className="text-secondary">Soar N Bounce</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto"
      >
        A family-focused adventure park built for active movement, high-energy play, and making memories that last a lifetime.
      </motion.p>
    </div>
  </section>
);

const StorySection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
          <h2 className="text-4xl font-black italic font-headings uppercase tracking-tighter mb-8">Our <span className="text-primary">Story</span></h2>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-medium">
            <p>
              Located in the heart of the Rivertown Crossings Mall, Soar N Bounce began with a simple vision: to create a space where exercise and entertainment coexist perfectly. What started as a trampoline park has evolved into a comprehensive Adventure Park designed for families who crave more.
            </p>
            <p>
              We’ve grown from wall-to-wall bouncing into an all-access hub featuring everything from obstacle courses to high-tech VR experiences. Every addition to our park is chosen with one goal in mind—bringing the Grandville community together through active, healthy fun.
            </p>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <div className="aspect-square bg-gray-900 rounded-[4rem] border-8 border-white/5 flex items-center justify-center text-primary/20 text-4xl font-black italic rotate-2 shadow-2xl overflow-hidden">
           <img src={`${SITE_BASE}/images/hero-header.png`} alt="Our Story" className="w-full h-full object-cover opacity-50 scale-110" />
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-24 px-6 bg-white/5 border-y border-white/5">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-4">What Makes Us <span className="text-secondary">Different</span></h2>
      <p className="text-gray-500 font-bold uppercase tracking-widest text-sm italic">The Soar N Bounce Experience</p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: 'Exciting Attractions', desc: 'From Ninja Courses to VR, we offer more than just bouncing.', icon: '⚡', color: 'primary' },
        { title: 'Safety First', desc: 'Our environment is fully supervised and built to the highest safety standards.', icon: '🛡️', color: 'secondary' },
        { title: 'Easy Celebrations', desc: 'Stress-free birthday parties with dedicated hosts and private tables.', icon: '🎂', color: 'accent' },
        { title: 'Fun For All', desc: 'Whether you’re a toddler or a teen, there’s an adventure waiting for you.', icon: '👨‍👩‍👧‍👦', color: 'primary' },
      ].map((feature, i) => (
        <div key={i} className="group bg-black/40 border border-white/10 p-10 rounded-[3rem] hover:border-secondary/50 transition-all hover:-translate-y-2">
          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
          <h3 className={`text-xl font-black uppercase mb-4 text-${feature.color}`}>{feature.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed font-bold">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const MissionSection = () => (
  <section className="py-32 px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="text-primary text-2xl mb-8 font-black uppercase tracking-[0.5em]">Our Mission</div>
      <h2 className="text-4xl md:text-6xl font-black italic font-headings leading-tight mb-12">
        To provide a <span className="text-secondary">dynamic space</span> where movement creates joy and every visit builds <span className="text-accent">unforgettable memories</span> for our community.
      </h2>
      <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
    </div>
  </section>
);

const AttractionsPreview = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-4">Adventure <span className="text-primary">Awaits</span></h2>
        <p className="text-gray-400 font-bold">Explore a variety of zones designed to test your limits and maximize your fun.</p>
      </div>
      <a href={`${SITE_BASE}/book`} className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black uppercase px-10 py-4 rounded-full tracking-widest transition-all">
        Explore Attractions
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {['Trampoline Courts', 'Foam Pits', 'Dodgeball', 'Ninja Courses', 'Kids Zones'].map((item, i) => (
        <div key={i} className="aspect-[3/4] bg-gray-900 border border-white/5 rounded-[2rem] p-6 flex flex-col justify-end group hover:border-primary/50 transition-all">
          <p className="text-lg font-black uppercase tracking-tighter group-hover:text-primary transition-colors">{item}</p>
        </div>
      ))}
    </div>
  </section>
);

const PartyCTA = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="bg-accent/10 border border-accent/20 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-2xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-black italic font-headings uppercase tracking-tighter mb-6 leading-tight">Host Your <br/> <span className="text-accent">Big Day</span> With Us</h2>
        <p className="text-xl text-gray-300 font-bold mb-10 italic">We handle the setup, the cleanup, and the fun. You just bring the guests!</p>
        <a href={`${SITE_BASE}/book`} className="inline-block bg-accent hover:bg-orange-600 text-white font-black uppercase py-5 px-12 rounded-2xl text-lg transition-all shadow-xl shadow-accent/20 hover:scale-105 active:scale-95">
          Plan a Party
        </a>
      </div>
    </div>
  </section>
);

const CommunitySection = () => (
  <section className="py-24 px-6 text-center max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-black italic font-headings uppercase tracking-tighter mb-8 text-secondary">A Park for the Community</h2>
    <p className="text-lg text-gray-400 font-medium leading-relaxed mb-12">
      Soar N Bounce is more than just a business in Grandville—it's a gathering place. We are dedicated to providing a safe, welcoming environment where friends meet, families bond, and local teams celebrate their wins. Everyone belongs at our park.
    </p>
    <div className="flex justify-center gap-12 text-4xl opacity-50 grayscale hover:grayscale-0 transition-all">
      <span>🤝</span>
      <span>🏡</span>
      <span>❤️</span>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 px-6 text-center bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative z-10">
      <h2 className="text-5xl md:text-8xl font-black italic font-headings uppercase tracking-tighter mb-12">Ready to Jump?</h2>
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
);

// --- MAIN PAGE COMPONENT ---

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white bg-transparent font-sans">
      <HeroSection />
      <StorySection />
      <FeaturesSection />
      <MissionSection />
      <AttractionsPreview />
      <PartyCTA />
      <CommunitySection />
      <FinalCTA />
    </div>
  );
}
