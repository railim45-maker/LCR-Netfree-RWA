import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import TokenizzazionePage from "@/pages/TokenizzazionePage";
import NetFreePage from "@/pages/NetFreePage";
import LibertaLegalePage from "@/pages/LibertaLegalePage";
import PergamenaPage from "@/pages/PergamenaPage";
import AdminDashboard from "@/pages/AdminDashboard"; // <-- Il componente Admin completo che hai inserito
import OracoloWidget from "@/components/OracoloWidget";

function Router() {
  return (
    <div className="relative min-h-screen">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tokenizzazione" component={TokenizzazionePage} />
        <Route path="/netfree" component={NetFreePage} />
        <Route path="/liberta-legale" component={LibertaLegalePage} />
        <Route path="/pergamena" component={PergamenaPage} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
      {/* L'Oracolo fluttua permanentemente su ogni pagina */}
      <OracoloWidget />
    </div>
  );
}

export default Router;
