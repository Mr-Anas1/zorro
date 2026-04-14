"use client"
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  Cake, 
  Menu,
  X,
  ArrowRight,
  Instagram,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // High-Contrast Palette
  const primaryColor = "#083288"; // Deep Royal Blue
  const stageColor = "#FDF8F1";   // Off-white stage
  const stickerCyan = "#00F2FF"; 
  const stickerLime = "#D9F99D";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#061e52] text-slate-900 font-sans selection:bg-blue-200 overflow-x-hidden">
      
      {/* Editorial Nav */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 py-3 shadow-xl' : 'py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${isScrolled ? 'bg-[#083288] text-white' : 'bg-white text-[#083288]'}`}>Z</div>
            <span className={`font-black tracking-tighter text-lg ${isScrolled ? 'text-[#083288]' : 'text-white'}`}>ZORRO</span>
          </div>
          
          <div className="hidden md:flex gap-10 items-center">
            {['Story', 'Gallery', 'Services', 'Visit'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className={`text-[10px] font-black uppercase tracking-[0.2em] transition-opacity hover:opacity-50 ${isScrolled ? 'text-[#083288]' : 'text-white'}`}>
                {link}
              </a>
            ))}
            <button className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border-2 transition-all ${isScrolled ? 'border-[#083288] text-[#083288] hover:bg-[#083288] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#083288]'}`}>
              Order Now
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
            <Menu className={isScrolled ? 'text-[#083288]' : 'text-white'} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[#083288] flex flex-col items-center justify-center">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32}/></button>
            {['Story', 'Gallery', 'Services', 'Visit'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-6xl font-black text-white italic mb-6 hover:line-through transition-all">{link}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Stage - Inspired by Reference Layout */}
       <section className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-10">
        
        {/* Scalloped Stage Frame */}
        <div className="relative w-full max-w-[1400px] min-h-[85vh] rounded-[40px] overflow-hidden flex flex-col items-center justify-center" style={{ backgroundColor: stageColor }}>
          
          {/* Top Wavy Edge */}
          <div className="absolute top-0 left-0 w-full h-12 bg-[#083288]" style={{ maskImage: 'radial-gradient(circle at 50% 100%, transparent 15px, white 16px)', maskSize: '40px 100%', maskRepeat: 'repeat-x' }}></div>
          
          {/* Bottom Wavy Edge */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-[#083288]" style={{ maskImage: 'radial-gradient(circle at 50% 0%, transparent 15px, white 16px)', maskSize: '40px 100%', maskRepeat: 'repeat-x' }}></div>

          {/* BACKGROUND TYPOGRAPHY: MASSIVE & BOLD */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden py-20">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              className="text-[22vw] leading-[0.8] font-black tracking-tighter text-[#083288] flex flex-col items-center"
            >
              <span className="block scale-y-125">ZORRO</span>
              <span className="block scale-y-125 -mt-[2vw]">DESSERTS</span>
            </motion.h1>
          </div>

          <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center">
            {/* CALL TO ACTION BUTTON */}
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="mt-12 bg-white px-10 py-5 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center gap-4 group border border-slate-100 relative z-30"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#083288]">Experience Art</span>
              <div className="w-8 h-8 rounded-full bg-[#083288] flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                <ArrowRight size={14} />
              </div>
            </motion.button>
          </div>

          {/* VINTAGE REVOLVING STAMP (Bottom Left) */}
          <div className="absolute bottom-16 left-16 hidden lg:block z-20">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full border-2 border-[#083288] border-dashed flex items-center justify-center"
            >
              <div className="text-[8px] font-black uppercase tracking-tighter text-center leading-tight text-[#083288]">
                AUTHENTIC CRAFT<br/>ESTABLISHED 2024<br/>THE DAILY BAKE
              </div>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center text-[#083288]">
              <Cake size={24} />
            </div>
          </div>

          {/* TAGLINE (Top Right) */}
          <div className="absolute top-20 right-10 hidden md:block z-20 text-right">
            <p className="text-[#083288] font-black text-xs uppercase tracking-[0.5em] opacity-40">Teppakulam • Madurai</p>
          </div>

        </div>
      </section>

      {/* Modern Grid Sections */}
      <section id="gallery" className="py-24 bg-[#083288] text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none">SIGNATURE<br/>COLLECTION</h2>
            <div className="text-right">
              <p className="text-white/60 text-lg max-w-sm mb-6">A curated sensory journey through fine ingredients and master craftsmanship.</p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-white pb-2 hover:opacity-50 transition-all">
                Full Catalogue <ChevronRight size={14}/>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Blueberry Velvet", img: "https://images.unsplash.com/photo-1535141123063-3bb61093134c?auto=format&fit=crop&q=80&w=600" },
              { name: "Pistachio Macaron", img: "https://images.unsplash.com/photo-1569864358642-9d1619702661?auto=format&fit=crop&q=80&w=600" },
              { name: "Sea Salt Cookie", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600" },
              { name: "Chocolate Decadence", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600" },
              { name: "Berry Tart", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=600" },
              { name: "Butter Croissant", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808f?auto=format&fit=crop&q=80&w=600" }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -20 }} className="group relative">
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden bg-white/10">
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Creation No. {i+1}</span>
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter mt-1">{item.name}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#083288] transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Visit Us */}
      <section id="visit" className="py-24 px-6 bg-[#FDF8F1]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#083288] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Visit the Atelier</span>
            <h2 className="text-6xl md:text-8xl font-black text-[#083288] tracking-tighter mb-12">TEPPAKULAM<br/>MADURAI</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <MapPin className="text-[#083288] shrink-0" size={24} />
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">Address</h4>
                  <p className="text-xl font-bold text-[#083288]">West Street, Teppakulam,<br/>Madurai, Tamil Nadu 625009</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Clock className="text-[#083288] shrink-0" size={24} />
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">Service Hours</h4>
                  <p className="text-xl font-bold text-[#083288]">10:00 AM — 10:30 PM DAILY</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-[60px] overflow-hidden bg-[#083288]/5 flex items-center justify-center border-4 border-[#083288]/10 group">
             <div className="absolute inset-0 bg-[#083288] opacity-0 group-hover:opacity-10 transition-opacity"></div>
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#083288] rotate-90 whitespace-nowrap">MAP LOCATION LOADING</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#083288] text-white pt-32 pb-12 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
            <div className="text-8xl md:text-[12rem] font-black tracking-tighter italic leading-none opacity-20 -ml-2">
              ZORRO
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:line-through font-black uppercase text-sm tracking-widest italic">Instagram</a>
              <a href="#" className="hover:line-through font-black uppercase text-sm tracking-widest italic">Facebook</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10 text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">
            <p>© 2024 ZORRO DESSERTS MADURAI</p>
            <p>Crafting Excellence Daily</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
