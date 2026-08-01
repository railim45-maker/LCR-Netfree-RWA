import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import TokenizzazionePage from "@/pages/TokenizzazionePage"; // <-- 1. IMPORTA IL FILE
import NetFreePage from "@/pages/nefreedive";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tokenizzazione" component={TokenizzazionePage} /> {/* <-- 2. REGISTRA LA ROTTA */}
      <Route path="/netfree" component={NetFreePage} />
    </Switch>
  );
}
