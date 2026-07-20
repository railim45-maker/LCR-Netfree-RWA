import InterestForm from "@/components/InterestForm";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { setSeo } from "@/lib/brand";
import { trpc } from "@/lib/trpc";
import { AlertTriangle, ArrowRight, FileText, Loader2, LockKeyhole, ShieldCheck, Users } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { Link } from "wouter";

const mechanism = [
  {
    icon: LockKeyhole,
    title: "Perimetro riservato",
    text: "La partecipazione nasce da manifestazioni di interesse e valutazione privata, senza comunicazione generalizzata al pubblico.",
  },
  {
    icon: FileText,
    title: "Informazione strutturata",
    text: "Ogni opportunità viene presentata con schede, metriche operative, disclaimer e documentazione progressiva.",
  },
  {
    icon: Users,
    title: "Club Deal selettivo",
    text: "Il progetto pilota raccoglie interesse da profili coerenti con obiettivi, orizzonte temporale e requisiti informativi.",
  },
];

export default function ClubDeal() {
  const { data, isLoading, error } = trpc.platform.overview.useQuery();

  useEffect(() => {
    setSeo(
      "Club Deal",
      "Sezione Club Deal di Railim Nativa Donativa per private placement, progetto Hospitality Veneto e raccolta interesse via email."
    );
  }, []);

  if (isLoading) {
    return (
      <main className="section-pad">
        <div className="container">
          <StatusPanel icon={<Loader2 className="h-7 w-7 animate-spin text-primary" />} title="Caricamento Club Deal" text="Stiamo recuperando i dati del progetto pilota dalla API Railim." />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="section-pad">
        <div className="container">
          <StatusPanel icon={<AlertTriangle className="h-7 w-7 text-red-300" />} title="Club Deal non disponibile" text={error.message} />
        </div>
      </main>
    );
  }

  if (!data?.pilot) {
    return (
      <main className="section-pad">
        <div className="container">
          <StatusPanel icon={<AlertTriangle className="h-7 w-7 text-primary" />} title="Nessun progetto disponibile" text="La sezione è pronta, ma non sono ancora presenti dati API per il progetto pilota." />
        </div>
      </main>
    );
  }

  const pilot = data.pilot;

  return (
    <main>
      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Club Deal</p>
            <h1 className="mt-3 font-serif-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Private placement con accesso informativo riservato</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              La sezione Club Deal presenta opportunità selezionate, strutturate per manifestazioni di interesse, screening preliminare e documentazione progressiva.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#interesse">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  Partecipa <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/dashboard#hospitality-veneto">
                <Button size="lg" variant="outline" className="w-full border-primary/40 bg-white/5 text-white hover:bg-white/10 sm:w-auto">
                  Vedi dashboard
                </Button>
              </Link>
            </div>
          </div>

          <article className="premium-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-primary">Progetto pilota</p>
                <h2 className="mt-3 font-serif-display text-3xl font-bold text-white">{pilot.title}</h2>
                <p className="mt-3 text-muted-foreground">{pilot.hotelScope} su Jesolo e Mestre con volume {pilot.volume}.</p>
              </div>
              <ShieldCheck className="h-9 w-9 text-primary" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Metric label="Volume raccolta" value="25-30 milioni di euro" />
              <Metric label="Setup fee" value={pilot.setupFee} />
              <Metric label="ROI" value={pilot.investorRoi} />
              <Metric label="Area" value="Jesolo / Mestre" />
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Avanzamento raccolta fondi</span>
                <span className="font-bold text-primary">{pilot.fundingProgress}%</span>
              </div>
              <Progress value={pilot.fundingProgress} className="h-3 bg-white/10" />
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 py-16">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Meccanismo</p>
            <h2 className="mt-3 font-serif-display text-3xl font-bold text-white sm:text-4xl">Come opera il Club Deal</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {mechanism.map((item) => (
              <article key={item.title} className="premium-panel rounded-3xl p-6">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="interesse">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Disclaimer legale obbligatorio</p>
            <h2 className="mt-3 font-serif-display text-3xl font-bold text-white">Informazioni non pubbliche e non vincolanti</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Questa pagina ha finalità esclusivamente informative e di raccolta di manifestazioni di interesse. Non costituisce offerta pubblica, prospetto, raccomandazione personalizzata, consulenza finanziaria o invito generalizzato all'investimento. Ogni eventuale partecipazione richiede verifiche, documentazione dedicata e valutazione privata del profilo.
            </p>
          </div>
          <InterestForm source="club-deal" />
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-primary/15 bg-white/[0.035] p-4">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm font-bold text-white sm:text-base">{value}</p>
    </div>
  );
}

function StatusPanel({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="premium-panel rounded-[2rem] p-8">
      <div className="flex items-start gap-4">
        {icon}
        <div>
          <h1 className="font-serif-display text-3xl font-bold text-white">{title}</h1>
          <p className="mt-3 text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}
