import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InvestorDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Investitori</h1>
        <p className="text-muted-foreground">
          Monitoraggio delle risorse, rendimenti programmati e tokenizzazione RWA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Valore Totale Asset</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€ 0,00</div>
            <p className="text-xs text-muted-foreground mt-1">Aggiornato in tempo reale</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Rendimento Semestrale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">1,25%</div>
            <p className="text-xs text-muted-foreground mt-1">Parametro standard attivo</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Stato Network</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Attivo</div>
            <p className="text-xs text-muted-foreground mt-1">Economia del Dono</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
