import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { CheckCircle2, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

type ProfileType = "investor" | "partner" | "network" | "general";

export default function InterestForm({ source = "landing" }: { source?: string }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileType, setProfileType] = useState<ProfileType>("investor");
  const [message, setMessage] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const submitLead = trpc.interest.submit.useMutation({
    onSuccess: () => {
      setCompleted(true);
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setConsentAccepted(false);
    },
  });

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitLead.mutate({
      fullName,
      email,
      phone,
      profileType,
      message,
      source,
      consentAccepted,
    });
  }

  return (
    <form onSubmit={onSubmit} className="premium-panel rounded-[2rem] p-6 sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Manifestazione di interesse</p>
        <h2 className="mt-3 font-serif-display text-3xl font-bold text-white">Partecipa al perimetro informativo</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Compila il modulo per essere ricontattato. La richiesta viene salvata e notificata al proprietario del progetto.
        </p>
      </div>

      {completed ? (
        <div className="mb-6 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-100">
          <div className="flex items-center gap-3 font-semibold">
            <CheckCircle2 className="h-5 w-5" />
            Richiesta ricevuta correttamente.
          </div>
          <p className="mt-2 text-emerald-100/80">Il team Railim valuterà il profilo e ricontatterà l'interessato.</p>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nome e cognome</Label>
          <Input id="fullName" required value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="Mario Rossi" className="bg-black/30" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="nome@email.it" className="bg-black/30" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefono</Label>
          <Input id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Facoltativo" className="bg-black/30" />
        </div>
        <div className="space-y-2">
          <Label>Profilo</Label>
          <Select value={profileType} onValueChange={(value) => setProfileType(value as ProfileType)}>
            <SelectTrigger className="bg-black/30">
              <SelectValue placeholder="Seleziona profilo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="investor">Investitore</SelectItem>
              <SelectItem value="partner">Partner operativo</SelectItem>
              <SelectItem value="network">Network Potenza del 6</SelectItem>
              <SelectItem value="general">Interesse generale</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Messaggio</Label>
          <Textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Indica il tuo interesse principale o eventuali domande." className="min-h-28 bg-black/30" />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-muted-foreground">
        <input
          type="checkbox"
          required
          checked={consentAccepted}
          onChange={(event) => setConsentAccepted(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-white/20 accent-primary"
        />
        <span>
          Confermo di voler inviare una manifestazione di interesse e di aver compreso che le informazioni non costituiscono offerta pubblica o raccomandazione personalizzata.
        </span>
      </label>

      {submitLead.error ? <p className="mt-4 text-sm text-red-300">{submitLead.error.message}</p> : null}

      <Button type="submit" disabled={submitLead.isPending} className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
        {submitLead.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        Partecipa
      </Button>
    </form>
  );
}
