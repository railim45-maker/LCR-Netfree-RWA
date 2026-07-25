import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import AcquaPage from "@/pages/Acqua.tsx";
import TerraPage from "@/pages/Terra.tsx";
import EnergiaPage from "@/pages/Energia.tsx";
import FormazionePage from "@/pages/Formazione.tsx";
import ClubDeal from "@/pages/ClubDeal";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/club-deal" component={ClubDeal} />
      
      {/* Rotte NetFree Dedicate */}
      <Route path="/netfree/acqua" component={AcquaPage} />
      <Route path="/netfree/terra" component={TerraPage} />
      <Route path="/netfree/energia" component={EnergiaPage} />
      <Route path="/netfree/formazione" component={FormazionePage} />

      {/* Fallback 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}
