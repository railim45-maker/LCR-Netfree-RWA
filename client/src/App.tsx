import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import NetFreeDeepDive from "./pages/NetFreeDeepDive";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/netfree" component={NetFreeDeepDive} />
      {/* Fallback per rotte non trovate */}
      <Route component={NotFound} />
    </Switch>
  );
}
