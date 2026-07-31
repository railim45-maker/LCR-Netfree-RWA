export interface NodoUtente {
  id: string;
  livelloRete: number;
  cerchiaAttiva: boolean;
  livelloProfonditaRaggiunto: number;
  depuratoreSbloccato: boolean;
}

/**
 * Valuta se l'utente possiede i requisiti della "sollecitazione inversa" 
 * per accedere al finanziamento del depuratore senza rischi di indebitamento.
 */
export function verificaSbloccoDepuratore(utente: NodoUtente): { autorizzato: boolean; messaggio: string } {
  const SOGLIA_MINIMA_LIVELLO = 3;

  if (!utente.cerchiaAttiva) {
    return {
      autorizzato: false,
      messaggio: "La cerchia di condivisione non è ancora attiva. Completa prima la Fase 3."
    };
  }

  if (utente.livelloProfonditaRaggiunto < SOGLIA_MINIMA_LIVELLO) {
    return {
      autorizzato: false,
      messaggio: `Profondità attuale insufficiente (${utente.livelloProfonditaRaggiunto}°). È richiesto il completamento del Livello ${SOGLIA_MINIMA_LIVELLO} per attivare il domino di copertura provvigionale.`
    };
  }

  return {
    autorizzato: true,
    messaggio: "Struttura verificata. La rete sottostante garantisce la copertura provvigionale. Sblocco autorizzato."
  };
}
