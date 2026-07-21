import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Network() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Network & Potenza del 6</h1>
        <p className="text-muted-foreground">
          Visualizzazione della struttura collaborativa e dell'economia del dono diffusa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Struttura della Rete</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Modello organizzativo basato su connessioni simmetriche e condivisione delle risorse.
            </p>
            <Button className="w-full">Aggiorna Albero Network</Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Parametri di Dono</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Flussi di valore non estativi orientati allo sviluppo autosufficiente.
            </p>
            <Button className="w-full" variant="outline">Esplora Flussi</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
