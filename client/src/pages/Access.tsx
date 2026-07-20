import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { BRAND_NAME, setSeo } from "@/lib/brand";
import { CheckCircle2, KeyRound, LogOut, ShieldCheck, UserPlus } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type SimulatedSession = {
  name: string;
  email: string;
  role: string;
};

const SESSION_KEY = "railim_simulated_session";

function parseStoredSession(raw: string | null): SimulatedSession | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<SimulatedSession>;
    if (typeof parsed.name === "string" && typeof parsed.email === "string" && typeof parsed.role === "string") {
      return { name: parsed.name, email: parsed.email, role: parsed.role };
    }
  } catch {
    window.localStorage.removeItem(SESSION_KEY);
  }
  return null;
}

export default function Access() {
  const [session, setSession] = useState<SimulatedSession | null>(null);
  const [loginEmail, setLoginEmail] = useState("demo@railim.it");
  const [loginPassword, setLoginPassword] = useState("railim-demo");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerNote, setRegisterNote] = useState("");
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setSeo(
      "Accesso",
      "Area di login e registrazione simulata di Railim Nativa Donativa con onboarding, disclaimer e gestione sessione utente lato interfaccia."
    );
    const storedSession = parseStoredSession(window.localStorage.getItem(SESSION_KEY));
    if (storedSession) {
      setSession(storedSession);
    }
  }, []);

  function saveSession(nextSession: SimulatedSession) {
    setSession(nextSession);
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(nextSession));
  }

  function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveSession({ name: "Investitore Demo", email: loginEmail, role: "Profilo riservato" });
  }

  function onRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accepted) return;
    saveSession({ name: registerName || "Nuovo profilo", email: registerEmail, role: registerNote ? "Onboarding qualificato" : "Onboarding base" });
  }

  function logout() {
    setSession(null);
    window.localStorage.removeItem(SESSION_KEY);
  }

  return (
    <main className="section-pad">
      <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Area Autenticazione</p>
          <h1 className="mt-3 font-serif-display text-4xl font-bold text-white sm:text-5xl">Accesso riservato {BRAND_NAME}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            UI completa per login, registrazione e onboarding. In questa prima versione la sessione è simulata lato interfaccia ed è pronta per essere sostituita da un flusso di identità reale.
          </p>

          <div className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-6">
            <ShieldCheck className="mb-5 h-9 w-9 text-primary" />
            <h2 className="font-serif-display text-2xl font-bold text-white">Disclaimer onboarding</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              L'accesso alle informazioni riservate richiede presa visione dei disclaimer, verifica del profilo e accettazione delle condizioni informative. Nessuna sezione della piattaforma costituisce offerta pubblica o promessa di rendimento.
            </p>
          </div>

          {session ? (
            <div className="mt-6 premium-panel rounded-[2rem] p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-7 w-7 text-primary" />
                <div>
                  <h2 className="font-serif-display text-2xl font-bold text-white">Sessione attiva</h2>
                  <p className="mt-2 text-muted-foreground">Benvenuto, {session.name}. Profilo: {session.role}.</p>
                  <p className="mt-1 text-sm text-primary">{session.email}</p>
                </div>
              </div>
              <Button onClick={logout} variant="outline" className="mt-6 border-primary/40 bg-white/5 text-white hover:bg-white/10">
                <LogOut className="mr-2 h-4 w-4" />
                Esci
              </Button>
            </div>
          ) : null}
        </section>

        <section className="premium-panel rounded-[2rem] p-6 sm:p-8">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-black/30">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Registrazione</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-6">
              <form onSubmit={onLogin} className="space-y-4">
                <div className="flex items-center gap-3">
                  <KeyRound className="h-7 w-7 text-primary" />
                  <div>
                    <h2 className="font-serif-display text-2xl font-bold text-white">Login simulato</h2>
                    <p className="text-sm text-muted-foreground">Usa credenziali demo o inserisci la tua email.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loginEmail">Email</Label>
                  <Input id="loginEmail" type="email" required value={loginEmail} onChange={(event) => setLoginEmail(event.target.value)} className="bg-black/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loginPassword">Password</Label>
                  <Input id="loginPassword" type="password" required value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} className="bg-black/30" />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Accedi</Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="mt-6">
              <form onSubmit={onRegister} className="space-y-4">
                <div className="flex items-center gap-3">
                  <UserPlus className="h-7 w-7 text-primary" />
                  <div>
                    <h2 className="font-serif-display text-2xl font-bold text-white">Registrazione simulata</h2>
                    <p className="text-sm text-muted-foreground">Crea un profilo preliminare e completa l'onboarding informativo.</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="registerName">Nome e cognome</Label>
                    <Input id="registerName" required value={registerName} onChange={(event) => setRegisterName(event.target.value)} className="bg-black/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerEmail">Email</Label>
                    <Input id="registerEmail" type="email" required value={registerEmail} onChange={(event) => setRegisterEmail(event.target.value)} className="bg-black/30" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerNote">Nota onboarding</Label>
                  <Textarea id="registerNote" value={registerNote} onChange={(event) => setRegisterNote(event.target.value)} placeholder="Indica interesse, profilo e obiettivi." className="min-h-28 bg-black/30" />
                </div>
                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-muted-foreground">
                  <input type="checkbox" required checked={accepted} onChange={(event) => setAccepted(event.target.checked)} className="mt-1 h-4 w-4 rounded border-white/20 accent-primary" />
                  <span>Accetto il disclaimer onboarding e comprendo che questa registrazione è una simulazione dimostrativa.</span>
                </label>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Completa registrazione</Button>
              </form>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
}
