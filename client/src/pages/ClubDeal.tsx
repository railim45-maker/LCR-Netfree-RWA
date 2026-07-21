import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClubDeal() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Club Deal Privati</h1>
        <p className="text-muted-foreground">
          Gestione delle opportunità di investimento e partecipazione collaborativa basata sull'economia del dono.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Tokenizzazione RWA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Asset reali tokenizzati con rendimenti programmati e sostenibili.
            </p>
            <Button className="w-full">Esplora Opportunità</Button>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Network Sostenibile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Partecipa alla crescita condivisa del network basato sulla potenza del 6.
            </p>
            <Button className="w-full" variant="outline">Visualizza Rete</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
