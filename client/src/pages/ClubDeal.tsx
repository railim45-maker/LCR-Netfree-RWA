import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PlayCircle, Sparkles } from "lucide-react";

export default function ClubDeal() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", profileType: "investor", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 space-y-12 max-w-7xl mx-auto pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Selezione Liquidity Provider & Tokenizzazione RWA</h1>
        <p className="text-muted-foreground max-w-3xl">
          Partecipazione attiva e coordinata dei Liquidity Provider nelle operazioni di economia nativa donativa e asset reali, senza esposizioni debitorie o leve finanziarie esterne.
        </p>
      </div>

      {/* Sezione Video Sintesi Tokenizzazione RWA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-card/40 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-md">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Approfondimento Tecnico
          </div>
          <h2 className="text-2xl font-bold">La Sintesi della Tokenizzazione RWA</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Scopri come connettere i beni reali e tangibili alle nuove strutture di valore protetto, garantendo flussi trasparenti all'interno dell'ecosistema.
          </p>
        </div>
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-border bg-black/40 flex items-center justify-center relative">
          {/* Sostituisci il src con il link del secondo video quando disponibile, oppure mantedi il placeholder */}
          <div className="text-center p-6 space-y-2">
            <PlayCircle className="w-10 h-10 text-primary mx-auto opacity-80" />
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Video Sintesi RWA</p>
            <p className="text-sm font-medium">In fase di sincronizzazione</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Rendimento Semestrale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-2xl font-bold text-green-500">1,25% Semestrale</div>
            <p className="text-sm text-muted-foreground">
              Parametro di yield programmato sulle attività di supporto alla liquidità e RWA.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Ruolo del Liquidity Provider</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-2xl font-bold">Flussi Nativi Donativi</div>
            <p className="text-sm text-muted-foreground">
              Infrastruttura di partecipazione basata sul Libro Mastro e priva di esposizioni debitorie.
            </p>
          </CardContent>
        </Card>
      </div>

      <div id="interesse" className="mt-12 max-w-2xl mx-auto bg-card border border-border rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Candidati come Liquidity Provider</h2>
        {submitted ? (
          <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-center">
            Candidatura registrata con successo. Il team esaminerà il profilo.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome e Cognome</label>
              <input 
                type="text" 
                required
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-foreground"
                value={formData.fullName}
                onChange={e => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-foreground"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Profilo</label>
              <select 
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-foreground"
                value={formData.profileType}
                onChange={e => setFormData({...formData, profileType: e.target.value})}
              >
                <option value="investor">Liquidity Provider</option>
                <option value="partner">Partner Strategico</option>
                <option value="network">Membro Network</option>
                <option value="general">Altro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Messaggio (Opzionale)</label>
              <textarea 
                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-foreground"
                rows={3}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <Button type="submit" className="w-full">Invia Candidatura LP</Button>
          </form>
        )}
      </div>
    </div>
  );
}
