import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import TokenizzazionePage from "@/pages/TokenizzazionePage";
import EconomiaDonoPage from "@/pages/EconomiaDonoPage";
import LibertaleLegalePage from "@/pages/LibertaleLegalePage";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tokenizzazione" component={TokenizzazionePage} />
      <Route path="/economia-dono" component={EconomiaDonoPage} />
      <Route path="/liberta-legale" component={LibertaleLegalePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
