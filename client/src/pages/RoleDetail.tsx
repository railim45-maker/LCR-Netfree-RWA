import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Sparkles, Shield, Award, Users, FileText, Coins, TrendingUp } from "lucide-react";

const roleData: Record<string, { title: string; subtitle: string; description: string; benefits: string[]; steps: string[] }> = {
  base: {
    title: "Proprietario (Protocollo Base)",
    subtitle: "Tokenizzazione standard di beni reali e immobiliari",
    description: "Dedicato a chi possiede un asset e desidera digitalizzarlo attraverso il protocollo, sostenendo autonomamente la fee di emissione iniziale per sbloccare i flussi di rendita.",
    benefits: [
      "Rendita passiva periodica garantita dai flussi reali dell'asset",
      "Liquidità e digitalizzazione avanzata della proprietà",
      "Piena trasparenza nella gestione e nella custodia"
    ],
    steps: [
      "Invio della documentazione e perizia indipendente dell'asset",
      "Emissione della licenza d'uso e del token associato",
      "Avvio dei flussi di rendita semestrali"
    ]
  },
  "zero-costi": {
    title: "Proprietario (Protocollo a 0 Costi)",
    subtitle: "Valorizzazione patrimoniale senza costi vivi iniziali",
    description: "Una formula esclusiva pensata per i proprietari che desiderano tokenizzare il proprio bene azzerando interamente l'impatto economico iniziale grazie al supporto del network e dei sostenitori.",
    benefits: [
      "Costo di emissione NFT completamente azzerato (0 costi vivi)",
      "Nessun attrito burocratico o finanziario in fase di partenza",
      "Accesso immediato ai benefici del protocollo"
    ],
    steps: [
      "Candidatura del bene e verifica dei parametri di conformità",
      "Abbinamento con il protocollo di supporto a zero costi",
      "Finalizzazione della tokenizzazione senza esborsi iniziali"
    ]
  },
  informatori: {
    title: "Diventare Informatori",
    subtitle: "Divulgazione consapevole e attivazione del network",
    description: "Gli informatori sono la voce e il primo punto di contatto del nuovo paradigma. Diffondono l'informazione corretta, attivando le prime connessioni all'interno dell'ecosistema.",
    benefits: [
      "Partecipazione attiva e centrale alla crescita della comunità",
      "Riconoscimento del valore divulgativo generato",
      "Accesso privilegiato ai materiali formativi ufficiali"
    ],
    steps: [
      "Studio dei materiali di divulgazione e della filosofia del progetto",
      "Condivisione dell'informazione all'interno della propria rete",
      "Connessione dei nuovi partecipanti agli incontri formativi"
    ]
  },
  formatori: {
    title: "Responsabili di Formatori",
    subtitle: "Coordinamento strategico e sviluppo della rete",
    description: "Un ruolo di leadership e guida per chi coordina gruppi di formatori, gestendo la diffusione strutturata dei percorsi di consapevolezza e autodeterminazione.",
    benefits: [
      "Ruolo di alto coordinamento e guida strategica",
      "Proventi direttamente legati allo sviluppo e alla crescita del team",
      "Impatto profondo sulla qualità della divulgazione"
    ],
    steps: [
      "Completamento del percorso di accademia con i formatori principali",
      "Costruzione e coordinamento del proprio team di divulgazione",
      "Monitoraggio e supporto dei percorsi di crescita della rete"
    ]
  },
  "sostegno-economico": {
    title: "Sostegno Economico",
    subtitle: "Alimentare i flussi reali e le opportunità per tutti",
    description: "Chi sceglie di contribuire economicamente per permettere a nuovi progetti, beni o persone di partire, azzerando le barriere d'accesso e alimentando l'infrastruttura.",
    benefits: [
      "Partecipazione diretta ai rendimenti generati dai progetti sostenuti",
      "Impatto etico immediato sulla collettività e sui nuovi membri",
      "Creazione di valore reale circolare e condiviso"
    ],
    steps: [
      "Analisi delle opportunità di sostegno aperte nell'ecosistema",
      "Scelta del progetto o dell'asset da affiancare",
      "Attivazione del flusso di supporto e monitoraggio dei risultati"
    ]
  },
  capitali: {
    title: "Presentatore di Capitali",
    subtitle: "Connessioni strategiche per la crescita su larga scala",
    description: "Dedicato a chi possiede relazioni con investitori o soggetti dotati di grandi mezzi, collegandoli alle opportunità di sviluppo e tokenizzazione dell'infrastruttura.",
    benefits: [
      "Riconoscimento meritocratico di alto livello per le connessioni attivate",
      "Ruolo chiave nello sviluppo industriale e su larga scala",
      "Accesso a tavoli decisionali e strategici riservati"
    ],
    steps: [
      "Presentazione preliminare del protocollo e dei dossier ufficiali",
      "Incontro di allineamento strategico con i referenti dell'ecosistema",
      "Finalizzazione dell'accordo di inserimento dei capitali"
    ]
  }
};

export default function RoleDetail() {
  const [, params] = useRoute("/ruolo/:id");
  const roleId = params?.id || "base";
  const role = roleData[roleId] || roleData["base"];

  return (
    <div className="min-h-screen relative text-foreground space-y-20 pb-36 overflow-hidden bg-background">
      
      {/* SFONDO LUMINOSO */}
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-luminosity filter brightness-125 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background z-0 pointer-events-none" />

      {/* HEADER E TORNA INDIETRO */}
      <div className="container max-w-4xl mx-auto px-6 pt-24 relative z-10">
        <Link href="/club-deal">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> Torna ai Prospetti e Ruoli
          </Button>
        </Link>

        <div className="rounded-3xl border border-primary/40 bg-card/85 backdrop-blur-xl p-8 md:p-12 shadow-2xl space-y-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Dettaglio Percorso
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-serif-display">{role.title}</h1>
            <p className="text-lg text-primary font-medium">{role.subtitle}</p>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
            {role.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-border/60">
            
            {/* Vantaggi */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-serif-display text-primary">Vantaggi del Ruolo</h3>
              <ul className="space-y-3 text-xs md:text-sm">
                {role.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Passi Operativi */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-serif-display text-primary">Come Iniziare</h3>
              <ul className="space-y-3 text-xs md:text-sm">
                {role.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground">Vuoi candidarti per questo ruolo o avere maggiori informazioni?</span>
            <Link href="/club-deal">
              <Button className="bg-primary text-primary-foreground font-semibold px-8 py-5 rounded-full">
                Prenota un Incontro in Diretta <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
