import React from 'react';
import { Sparkles, ArrowRight, ExternalLink, ShieldCheck, Leaf, Globe, Play } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-28 pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE CON TUTTI I COLLEGAMENTI */}
      <header className="container max-w-5xl mx-auto px-6 pt-12 relative z-10">
        <div className="flex items-center justify-between px-6 py-4 rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-xs border border-amber-200/60 font-serif">✦</span>
            <span className="font-bold text-xs uppercase tracking-widest text-stone-600 font-serif">Il Giardino Luminoso • NetFree LCR</span>
          </div>
          <nav className="flex items-center gap-3 text-xs font-medium">
            <Link 
              href="/tokenizzazione"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 transition-colors font-serif font-semibold shadow-xs"
            >
              ✦ Tokenizzazione
            </Link>
            <Link 
              href="/netfree"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100 transition-colors font-serif font-semibold shadow-xs"
            >
              🌱 NetFree Deep Dive
            </Link>
          </nav>
        </div>
      </header>

      {/* IL RESTO DELLA HOME RIMANE INVARIATO */}
      <main className="container max-w-4xl mx-auto px-6 space-y-24 relative z-10">
        {/* ... (contenuto home) ... */}
      </main>

    </div>
  );
}
