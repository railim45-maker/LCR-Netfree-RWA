import { useLocation } from "wouter";

export default function NotFound() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Pagina non trovata</h1>
          <p className="text-sm text-muted-foreground">
            La pagina <span className="text-foreground font-mono">{location}</span> non esiste o è stata spostata.
          </p>
        </div>
        <a
          href="/"
          className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Torna alla Home
        </a>
      </div>
    </div>
  );
}
