import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import NetFreeDeepDive from "./pages/NetFreeDeepDive";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/netfree" component={NetFreeDeepDive} />
      {/* Fallback di sicurezza direttamente sulla Home */}
      <Route component={Home} />
    </Switch>
  );
}
