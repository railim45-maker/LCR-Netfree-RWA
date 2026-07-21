import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-3 text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight">Railim Nativa Donativa</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Super-App dell'Economia del Dono, Club Deal privati, tokenizzazione RWA e Network basato sulla potenza del 6.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Dashboard Investitori</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Monitora asset, rendimenti e flussi di valore in tempo reale.
            </p>
            <Button className="w-full" onClick={() => window.location.href = "/investor-dashboard"}>
              Apri Dashboard
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Club Deal Privati</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Esplora le opportunità di investimento collaborativo e tokenizzazione.
            </p>
            <Button className="w-full" variant="outline" onClick={() => window.location.href = "/club-deal"}>
              Esplora Club Deal
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Network & Potenza del 6</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Gestisci la struttura della rete e l'economia del dono diffusa.
            </p>
            <Button className="w-full" variant="secondary" onClick={() => window.location.href = "/network"}>
              Visualizza Network
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
