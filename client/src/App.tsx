import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import TokenizzazionePage from "@/pages/TokenizzazionePage";
import NetFreePage from "@/pages/NetFreePage"; // <-- Assicurati che il nome del file corrispondi esattamente (es. NetFreePage o nefreedive)

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tokenizzazione" component={TokenizzazionePage} />
      <Route path="/netfree" component={NetFreePage} />
    </Switch>
  );
}

export default Router;
