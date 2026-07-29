import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import TokenizzazionePage from "@/pages/TokenizzazionePage";
import EconomiaDonoPage from "@/pages/EconomiaDonoPage";
import ProspettoRiservatoPage from "@/pages/ProspettoRiservatoPage";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tokenizzazione" component={TokenizzazionePage} />
      <Route path="/economia-dono" component={EconomiaDonoPage} />
      <Route path="/prospetto-riservato" component={ProspettoRiservatoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
