import React from 'react';
import { Route, Switch } from 'wouter'; // o il router che stai usando (es. react-router-dom)
import Home from './pages/Home';
import TokenizzazionePage from './pages/TokenizzazionePage';
import AdminDashboard from './pages/AdminDashboard';
import FloatingOracolo from './pages/FloatingOracolo';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#fcfbf9]">
      {/* ROUTER DELLE PAGINE */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tokenizzazione" component={TokenizzazionePage} />
        <Route path="/admin" component={AdminDashboard} />
        {/* Fallback per pagine non trovate */}
        <Route>
          <div className="p-12 text-center font-serif">Pagina non trovata. Torna alla <a href="/" className="underline text-amber-800">Home</a></div>
        </Route>
      </Switch>

      {/* ORÀCOLO FLUTTUANTE PRESENTE SU TUTTO IL SITO */}
      <FloatingOracolo />
    </div>
  );
}
