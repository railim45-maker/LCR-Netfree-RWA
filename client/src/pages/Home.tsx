import { Button } from "@/components/ui/button";
import { BRAND_NAME, RAILIM_LOGO_URL, setSeo } from "@/lib/brand";
import { ArrowRight, BadgeCheck, Coins, Layers3, Network, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

const steps = [
  {
    icon: Sparkles,
    title: "Manifestazione di interesse",
    text: "Il profilo entra in un percorso riservato, con onboarding informativo e disclaimer prima di ogni approfondimento.",
  },
  {
    icon: Layers3,
    title: "Accesso ai blocchi Railim",
    text: "L'ecosistema presenta LCR Nativa Donativa, Blotix, CMS6, Club Deal e Network Potenza del 6 in moduli distinti.",
  },
  {
    icon: ShieldCheck,
    title: "Valutazione privata",
    text: "Le opportunità vengono presentate con dati chiari, perimetro legale e logiche di private placement non pubblico.",
  },
  {
    icon: Network,
    title: "Crescita condivisa",
    text: "Il valore generato può alimentare servizi, community e percorsi di economia del dono in modo progressivo.",
  },
];

const pillars = [
  ["LCR Nativa Donativa", "Ecosistema fondato su dono, reciprocità, utilità digitale e partecipazione consapevole."],
  ["Blotix", "Protocollo di tokenizzazione orientato alla rappresentazione digitale di utilità e processi."],
  ["CMS6", "Modulo di moneta scritturale predisposto per futuri flussi GSTVB e tracciabilità operativa."],
  ["Club Deal", "Area riservata per private placement e manifestazioni di interesse su progetti selezionati."],
  ["Network Potenza del 6", "Percorso di crescita personale, servizi e condivisione in una struttura relazionale ordinata."],
];

export default function Home() {
  useEffect(() => {
    setSeo(
      "Super-App dell'Economia del Dono",
      "Railim Nativa Donativa combina ecosistema di investimento, economia del dono, tokenizzazione, Club Deal e Network Potenza del 6 in una piattaforma dark premium."
    );
  }, []);

  return (
    <main>
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 opacity-70">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber-700/10 blur-3xl" />
        </div>
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <BadgeCheck className="h-4 w-4" />
              Ecosistema premium mobile-first
            </div>
            <h1 className="font-serif-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Railim <span className="gold-text">Nativa Donativa</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Una Super-App dell'Economia del Dono che integra Club Deal privati, protocolli di tokenizzazione, CMS6 e Network Potenza del 6 in un'esperienza digitale scura, elegante e modulare.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/club-deal#interesse">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  Manifesta interesse <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="w-full border-primary/40 bg-white/5 text-white hover:bg-white/10 sm:w-auto">
                  Vai alla dashboard
                </Button>
              </Link>
            </div>
          </div>

          <div className="premium-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="grid gap-6 sm:grid-cols-[0.85fr_1.15fr] sm:items-center">
              <div className="mx-auto max-w-56 rounded-full bg-white p-4 shadow-[0_0_80px_rgba(212,175,55,0.28)]">
                <img src={RAILIM_LOGO_URL} alt="Logo Railim" className="h-full w-full rounded-full object-cover" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-primary">Pilota attivo</p>
                <h2 className="mt-3 font-serif-display text-3xl font-bold text-white">Hospitality Veneto</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Progetto Top 5 hotel su Jesolo e Mestre con volume 25-30M€, setup fee 0,85% (~212.000€) e ROI investitore 23,5%.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <Metric value="25-30M€" label="Volume" />
                  <Metric value="0,85%" label="Setup" />
                  <Metric value="23,5%" label="ROI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-white/10 bg-black/20" id="come-funziona">
        <div className="container">
          <SectionTitle eyebrow="Come Funziona" title="Un percorso modulare in quattro passaggi" text="La piattaforma è progettata per crescere per blocchi, separando informazione, accesso riservato, strumenti digitali e network relazionale." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="premium-panel rounded-3xl p-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="font-serif-display text-4xl font-bold text-white/10">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="progetto">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionTitle eyebrow="Il Progetto" title="Cinque blocchi per una Super-App del dono" text="Railim Nativa Donativa unisce componenti tecniche, community e logiche di partecipazione privata in una struttura pronta a espandersi." />
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-primary/40 hover:bg-primary/5">
                <Coins className="mb-5 h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="premium-panel overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">CTA riservata</p>
                <h2 className="mt-3 font-serif-display text-3xl font-bold text-white sm:text-4xl">Vuoi entrare nel perimetro informativo Railim?</h2>
                <p className="mt-4 max-w-3xl text-muted-foreground">
                  Compila la manifestazione di interesse per ricevere un contatto preliminare e accedere alle informazioni disponibili sui prossimi blocchi funzionali.
                </p>
              </div>
              <Link href="/club-deal#interesse">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 lg:w-auto">
                  Partecipa al Club Deal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-black/25 p-3">
      <p className="text-lg font-bold text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-serif-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}
