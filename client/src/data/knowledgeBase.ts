export interface KnowledgeItem {
  id: string;
  categoria: 'Autodeterminazione' | 'Tokenizzazione RWA' | 'Net-Free' | 'Protocolli';
  titolo: string;
  contenuto: string;
}

export const LCRKnowledgeBase: KnowledgeItem[] = [
  {
    id: 'doc-1',
    categoria: 'Autodeterminazione',
    titolo: 'Manuale di Autodeterminazione e Legge Naturale',
    contenuto: "Il principio cardine dell'autodeterminazione risiede nel riconoscimento dell'essere vivente al di sopra della finzione giuridica commerciale. Si applica attraverso la centratura del tempio biologico, il rifiuto dei contratti vessatori taciti e l'adozione dei protocolli di tutela della sovranità individuale."
  },
  {
    id: 'doc-2',
    categoria: 'Tokenizzazione RWA',
    titolo: 'Struttura Club Deal e Real World Assets',
    contenuto: "La tokenizzazione RWA non è speculazione ma ancoraggio patrimoniale solido. I beni reali (strutture, progetti, beni immobili) vengono frazionati in quote protette tramite Club Deal trasparenti per liberare i nuclei familiari dall'ansia della scarsità."
  },
  {
    id: 'doc-3',
    categoria: 'Net-Free',
    titolo: 'Il Processo e le Cerchie di Cura',
    contenuto: "Il modello Net-Free si sviluppa in 4 tappe: 1) Presidio dello spazio personale e domestico; 2) Attivazione della cerchia ristretta di fiducia; 3) Flusso di abbondanza circolare basato sul dono e sul mutuo soccorso; 4) Fioritura ed estensione organica della rete."
  },
  {
    id: 'doc-4',
    categoria: 'Protocolli',
    titolo: 'Incontri Chiusi e Registrazioni OAM',
    contenuto: "I registri degli incontri coordinano i percorsi di certificazione, le scadenze operative (come le abilitazioni OAM) e la sincronizzazione della community, garantendo trasparenza e supporto costante."
  }
];
