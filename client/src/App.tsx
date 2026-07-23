import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import AcquaPage from "@/pages/netfree/Acqua.tsx";
import TerraPage from "@/pages/netfree/Terra.tsx";
import EnergiaPage from "@/pages/netfree/Energia.tsx";
import FormazionePage from "@/pages/netfree/Formazione.tsx";
import ClubDeal from "@/pages/ClubDeal";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/club-deal" component={ClubDeal} />
      
      {/* Rotte NetFree Dedicate */}
      <Route path="/netfree/Acqua.tsx" component={AcquaPage} />
      <Route path="/netfree/Terra.tsx" component={TerraPage} />
      <Route path="/netfree/Energia.tsx" component={EnergiaPage} />
      <Route path="/netfree/Formazione.tsx" component={FormazionePage} />

      {/* Fallback 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}
