import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/_core/hooks/useAuth";
import { Link } from "wouter";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-x-hidden">
      <div className="eco-future-bg" />

      {/* Navbar Istituzionale e Familiare */}
      <header className="border-b border-slate-200 bg-white/85 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center bg-emerald-800 text-white rounded-2xl shadow-sm font-bold">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900">LCR-NETFREE</span>
              <span className="text-[9px] font-mono tracking-widest text-emerald-700 font-semibold uppercase">Ecosistema & Co-Creazione</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/network">
              <Button variant="ghost" size="sm" className="text-xs font-mono">Protocollo</Button>
            </Link>
            <Link href="/investor-dashboard">
              <Button variant="outline" size="sm" className="text-xs font-mono">Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section: Maslow Risolto */}
      <section className="max-w-5xl mx-auto px-4 pt-24 pb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-mono mb-8 tracking-widest uppercase font-semibold">
          🛡️ Stabilità, Innovazione e Unione della Comunità
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
          Smettere di vendere il tempo per denaro <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-700">
            e fondare l'abbondanza sulla natura e la tecnologia
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg font-light leading-relaxed mb-10">
          Un'infrastruttura solida per le istituzioni e un clima di calda familiarità per le persone. Le necessità primarie sono protette dalla cooperazione, liberando le giornate per dedicarle al benessere, alla crescita personale e alla passione pura. Lavoro manuale e di concetto tornano ad avere il loro valore originario, slegati dal ricatto della sopravvivenza.
        </p>
      </section>

      {/* Sezione Video Ufficiali: NetFree & Blotix (Tokenizzazione) */}
      <section className="max-w-6xl mx-auto px-4 py-12 relative z-10 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Video 1: NetFree */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Pilastro 1: NetFree</span>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></div>
            </div>
            <h4 className="font-bold text-base text-slate-900">Il Progetto LCR-NetFree in Video</h4>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
              <iframe src="https://drive.google.com/file/d/18CXVsJ6I6v5g3xt9g-XNSDspLNAkGJRp/preview" className="w-full h-full border-0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>

          {/* Video 2: Blotix & DeFi */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Pilastro 2: Blotix RWA</span>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse"></div>
            </div>
            <h4 className="font-bold text-base text-slate-900">Tokenizzazione Asset e Integrazione DeFi</h4>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
              <iframe src="https://drive.google.com/file/d/1QplkjrVC4tpLOmJ130FUdOLBvb_CMQyf/preview" className="w-full h-full border-0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* Sezione Pilastri */}
      <section className="max-w-6xl mx-auto px-4 py-16 relative z-10 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-slate-200 shadow-xs">
            <CardHeader>
              <CardTitle className="text-emerald-800 font-mono text-sm uppercase">01. Economia del Dono</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 text-sm font-light">
              Il valore circola liberamente attraverso la rete, slegando l'attività umana dal ricatto della sopravvivenza e valorizzando le attitudini di ciascuno.
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-xs">
            <CardHeader>
              <CardTitle className="text-emerald-800 font-mono text-sm uppercase">02. Tecnologia & Natura</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 text-sm font-light">
              Architetture digitali al servizio della terra, dell'efficientamento e della rigenerazione delle risorse reali.
            </CardContent>
          </Card>

          <Card className="bg-white border-slate-200 shadow-xs">
            <CardHeader>
              <CardTitle className="text-emerald-800 font-mono text-sm uppercase">03. Solidità Istituzionale</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 text-sm font-light">
              Rigore, trasparenza e conformità progettati per offrire alle istituzioni e ai partner la massima sicurezza e stabilità di lungo periodo.
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-slate-200 text-[11px] text-slate-500 font-mono tracking-wide bg-white">
        LCR-NetFree • Solidità Istituzionale, Innovazione Naturale e Famiglia
      </footer>
    </div>
  );
}
