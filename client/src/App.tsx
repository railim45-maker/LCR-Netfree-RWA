import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import TokenizzazionePage from "@/pages/TokenizzazionePage";
import NetFreePage from "@/pages/nefreedive"; // <-- Punta al file esistente nefreedive.tsx

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
