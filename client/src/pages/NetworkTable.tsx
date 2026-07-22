import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Sparkles, UserPlus, Layers } from "lucide-react";

interface NetworkMember {
  id: string;
  name: string;
  level: string;
  status: string;
  date: string;
  contribution: string;
}

export default function NetworkTable() {
  // 1. Tabella di Esempio / Didattica
  const exampleMembers: NetworkMember[] = [
    { id: "ex-1", name: "Esempio Nodo Alpha", level: "L1 - Radice", status: "Simulato", date: "2026-07-22", contribution: "Co-creatore LP" },
    { id: "ex-2", name: "Esempio Nodo Beta", level: "L2 - Sacrale", status: "Simulato", date: "2026-07-22", contribution: "Supporto NetFree" },
  ];

  // 2. Tabella del Contatore Personale (Dati reali della rete sottostante)
  const [personalMembers, setPersonalMembers] = useState<NetworkMember[]>([
    { id: "1", name: "Elena Rossi", level: "L1 - Radice", status: "Attivo", date: "2026-07-20", contribution: "Co-creatore LP" },
  ]);

  const [newName, setNewName] = useState("");
  const [newLevel, setNewLevel] = useState("L1 - Radice");
  const [newContribution, setNewContribution] = useState("Co-creatore LP");

  // Funzione per registrare un nuovo inserimento nella propria rete sottostante
  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newMember: NetworkMember = {
      id: Date.now().toString(),
      name: newName,
      level: newLevel,
      status: "Attivo",
      date: new Date().toISOString().split('T')[0],
      contribution: newContribution,
    };

    setPersonalMembers([newMember, ...personalMembers]);
    setNewName("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 max-w-7xl mx-auto space-y-10 pb-24">
      
      {/* Intestazione */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold w-fit">
          <Sparkles className="w-3.5 h-3.5" /> Area Riservata • Monitoraggio Rete
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Registro e Contatore della Rete</h1>
        <p className="text-muted-foreground text-sm max-w-2xl">
          Gestione dei flussi relazionali: consulta il modello dimostrativo o inserisci i dati reali della tua rete sottostante.
        </p>
      </div>

      {/* SEZIONE 1: TABELLA DI ESEMPIO / DIDATTICA */}
      <Card className="border-border bg-card/40 backdrop-blur-md overflow-hidden border-dashed">
        <CardHeader className="border-b border-border/40 bg-background/30">
          <CardTitle className="text-lg flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" /> 1. Modello di Esempio (Dimostrativo)
            </span>
            <span className="text-xs font-mono font-normal text-muted-foreground bg-background/80 px-3 py-1 rounded-full border border-border">
              Guida Strutturale
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/40 text-xs font-mono text-muted-foreground bg-background/20">
                  <th className="p-4">Nome Membro</th>
                  <th className="p-4">Frequenza Rete</th>
                  <th className="p-4">Ruolo / Attività</th>
                  <th className="p-4">Data Riferimento</th>
                  <th className="p-4">Stato</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-sm">
                {exampleMembers.map((member) => (
                  <tr key={member.id} className="opacity-75">
                    <td className="p-4 font-medium">{member.name}</td>
                    <td className="p-4 text-muted-foreground">{member.level}</td>
                    <td className="p-4">
                      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {member.contribution}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground font-mono text-xs">{member.date}</td>
                    <td className="p-4 text-xs text-muted-foreground">{member.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* SEZIONE 2: CONTATORE E REGISTRO PERSONALE */}
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold tracking-tight">2. Contatore Personale della Sotto-Rete</h2>
          <p className="text-muted-foreground text-xs">
            Inserisci i dati delle persone connesse alla tua rete: il contatore si aggiornerà in tempo reale.
          </p>
        </div>

        {/* Modulo di Inserimento */}
        <Card className="border-border bg-card/60 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-primary" /> Registra Nuovo Inserimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddMember} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-medium mb-1 text-muted-foreground">Nome e Cognome</label>
                <Input 
                  type="text" 
                  placeholder="es. Mario Rossi" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)} 
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 text-muted-foreground">Frequenza / Livello</label>
                <select 
                  value={newLevel} 
                  onChange={(e) => setNewLevel(e.target.value)}
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground"
                >
                  <option value="L1 - Radice">L1 - Radice</option>
                  <option value="L2 - Sacrale">L2 - Sacrale</option>
                  <option value="L3 - Plesso">L3 - Plesso</option>
                  <option value="L4 - Cuore">L4 - Cuore</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 text-muted-foreground">Ruolo / Contributo</label>
                <select 
                  value={newContribution} 
                  onChange={(e) => setNewContribution(e.target.value)}
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground"
                >
                  <option value="Co-creatore LP">Co-creatore LP</option>
                  <option value="Supporto NetFree">Supporto NetFree</option>
                  <option value="Nodo Attivo">Nodo Attivo</option>
                </select>
              </div>
              <Button type="submit" className="bg-primary text-primary-foreground font-semibold">
                Registra nel Contatore
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tabella Reale Autopopolante */}
        <Card className="border-border bg-card/40 backdrop-blur-md overflow-hidden">
          <CardHeader className="border-b border-border/40">
            <CardTitle className="text-xl flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" /> Elenco Attivo Sotto-Nodi
              </span>
              <span className="text-xs font-mono font-normal text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Totale Nodi Personali: {personalMembers.length}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/40 text-xs font-mono text-muted-foreground bg-background/20">
                    <th className="p-4">Nome Membro</th>
                    <th className="p-4">Frequenza Rete</th>
                    <th className="p-4">Ruolo / Attività</th>
                    <th className="p-4">Data Inserimento</th>
                    <th className="p-4">Stato</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-sm">
                  {personalMembers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-muted-foreground text-xs italic">
                        Nessun nodo registrato nella tua sotto-rete. Utilizza il modulo sopra per aggiungere il primo inserimento.
                      </td>
                    </tr>
                  ) : (
                    personalMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-card/60 transition-colors">
                        <td className="p-4 font-medium">{member.name}</td>
                        <td className="p-4 text-muted-foreground">{member.level}</td>
                        <td className="p-4">
                          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            {member.contribution}
                          </span>
                        </td>
                        <td className="p-4 text-muted-foreground font-mono text-xs">{member.date}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 text-xs text-green-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            {member.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
