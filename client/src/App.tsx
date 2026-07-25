import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import ClubDeal from "@/pages/ClubDeal";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/club-deal" component={ClubDeal} />
      <Route>
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center space-y-4">
          <h1 className="text-4xl font-bold font-serif-display text-primary">404</h1>
          <p className="text-muted-foreground text-sm">La pagina richiesta non esiste o è stata spostata.</p>
          <a href="/" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            Torna alla Home
          </a>
        </div>
      </Route>
    </Switch>
  );
}
