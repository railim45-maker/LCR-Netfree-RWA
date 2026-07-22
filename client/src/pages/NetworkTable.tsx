import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Sparkles, UserPlus } from "lucide-react";

interface NetworkMember {
  id: string;
  name: string;
  level: string;
  status: string;
  date: string;
  contribution: string;
}

export default function NetworkTable() {
  // Stato iniziale con alcuni nodi dimostrativi della rete sottostante
  const [members, setMembers] = useState<NetworkMember[]>([
    { id: "1", name: "Elena Rossi", level: "L1 - Radice", status: "Attivo", date: "2026-07-20", contribution: "Co-creatore LP" },
    { id: "2", name: "Marco Bianchini", level: "L1 - Radice", status: "Attivo", date: "2026-07-21", contribution: "Supporto NetFree" },
  ]);

  const [newName, setNewName] = useState("");
  const [newLevel, setNewLevel] = useState("L1 - Radice");
  const [newContribution, setNewContribution] = useState("Co-creatore LP");

  // Funzione per simulare l'inserimento dinamico di una nuova persona nella rete sottostante
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

    setMembers([newMember, ...members]);
    setNewName("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 max-w-7xl mx-auto space-y-8 pb-24">
      
      {/* Intestazione */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold w-fit">
          <Sparkles className="w-3.5 h-3.5" /> Area Riservata • Gestione Rete
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Tabella Autopopolante della Rete Sottostante</h1>
        <p className="text-muted-foreground text-sm max-w-2xl">
          Visualizzazione in tempo reale dei membri inseriti dai nodi della rete, sincronizzati con l'architettura frattale e l'economia del dono.
        </p>
      </div>

      {/* Sezione di Inserimento Rapido (per simulare o registrare nuovi nodi) */}
      <Card className="border-border bg-card/60 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-primary" /> Registra Nuovo Inserimento nella Sotto-Rete
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddMember} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-medium mb-1 text-muted-foreground">Nome e Cognome</label>
              <Input 
                type="text" 
                placeholder="es. Giulia Verdi" 
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
              Aggiungi alla Tabella
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Tabella Autopopolante */}
      <Card className="border-border bg-card/40 backdrop-blur-md overflow-hidden">
        <CardHeader className="border-b border-border/40">
          <CardTitle className="text-xl flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> Elenco Sotto-Nodi Connessi
            </span>
            <span className="text-xs font-mono font-normal text-muted-foreground bg-background/80 px-3 py-1 rounded-full border border-border">
              Totale Nodi: {members.length}
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
                {members.map((member) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
