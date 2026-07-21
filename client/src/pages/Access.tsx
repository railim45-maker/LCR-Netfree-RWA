import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Access() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Accesso Riservato</h1>
          <p className="text-sm text-muted-foreground">
            Autenticazione alla Super-App Railim Nativa Donativa
          </p>
        </div>

        <Card className="border-border bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Benvenuto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Accedi per gestire le tue risorse, i Club Deal e il network basato sull'economia del dono.
            </p>
            <Button className="w-full" onClick={() => window.location.href = "/"}>
              Accedi alla Piattaforma
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
