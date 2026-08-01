import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import TokenizzazionePage from "@/pages/TokenizzazionePage";
import NetFreePage from "@/pages/NetFreePage";
import LibertaLegalePage from "@/pages/LibertaLegalePage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tokenizzazione" component={TokenizzazionePage} />
      <Route path="/netfree" component={NetFreePage} />
      <Route path="/liberta-legale" component={LibertaLegalePage} />
    </Switch>
  );
}

export default Router;
