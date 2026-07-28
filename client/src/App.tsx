import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import ClubDeal from "@/pages/ClubDeal";
import RoleDetail from "@/pages/RoleDetail";
import NetFreeDeepDive from "@/pages/NetFreeDeepDive";
import EconomiaDonoPage from "@/pages/EconomiaDonoPage";
import TokenizzazionePage from "@/pages/TokenizzazionePage";
import LibertaLegalePage from "@/pages/LibertaLegalePage";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/club-deal" component={ClubDeal} />
      <Route path="/ruolo/:id" component={RoleDetail} />
      <Route path="/privato/netfree" component={NetFreeDeepDive} />
      <Route path="/privato/economia-dono" component={EconomiaDonoPage} />
      <Route path="/privato/tokenizzazione-rwa" component={TokenizzazionePage} />
      <Route path="/privato/liberta-legale" component={LibertaLegalePage} />
      <Route>
        <div className="min-h-screen bg-[#fcfbf9] text-stone-800 flex flex-col items-center justify-center p-6 text-center space-y-4">
          <h1 className="text-4xl font-bold font-serif text-stone-900">404</h1>
          <p className="text-stone-600 text-sm">La pagina richiesta non esiste o è stata spostata.</p>
          <a href="/" className="px-6 py-3 rounded-full bg-stone-900 text-stone-50 font-semibold text-sm">
            Torna alla Home
          </a>
        </div>
      </Route>
    </Switch>
  );
}
