import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BRAND_NAME, setSeo } from "@/lib/brand";
import { trpc } from "@/lib/trpc";
import { AlertTriangle, ArrowUpRight, Building2, CalendarDays, CircleDollarSign, Landmark, Loader2, PieChart, WalletCards } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

const kpiIcons = [CircleDollarSign, ArrowUpRight, PieChart, CalendarDays];
const hotels = ["Hotel Jesolo Prime", "Mestre Executive Stay", "Laguna Hospitality", "Veneto Urban Suite", "Adriatic Golden Rooms"];

export default function InvestorDashboard() {
  const { data, isLoading, error } = trpc.platform.overview.useQuery();

  useEffect(() => {
    setSeo(
      "Dashboard Investitori",
      "Dashboard investitori Railim Nativa Donativa con KPI, progetto pilota Hospitality Veneto, wallet multi-asset e monitoraggio raccolta."
    );
  }, []);

  if (isLoading) {
    return (
      <main className="section-pad">
        <div className="container">
          <StatusPanel icon={<Loader2 className="h-7 w-7 animate-spin text-primary" />} title="Caricamento dashboard" text="Stiamo recuperando KPI, investimenti e wallet dalla API Railim." />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="section-pad">
        <div className="container">
          <StatusPanel icon={<AlertTriangle className="h-7 w-7 text-red-300" />} title="Dashboard non disponibile" text={error.message} />
        </div>
      </main>
    );
  }

  if (!data?.dashboard?.kpis?.length || !data?.dashboard?.investments?.length || !data?.wallet?.length || !data?.pilot) {
    return (
      <main className="section-pad">
        <div className="container">
          <StatusPanel icon={<AlertTriangle className="h-7 w-7 text-primary" />} title="Nessun dato disponibile" text="La dashboard è pronta, ma non sono ancora presenti dati API sufficienti per visualizzare il portafoglio." />
        </div>
      </main>
    );
  }

  const pilot = data.pilot;
  const wallet = data.wallet;
  const kpis = data.dashboard.kpis;
  const investments = data.dashboard.investments;

  return (
    <main className="section-pad">
      <div className="container">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Dashboard Investitori</p>
            <h1 className="mt-3 font-serif-display text-4xl font-bold text-white sm:text-5xl">Portafoglio {BRAND_NAME}</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Un primo blocco funzionale per visualizzare KPI, investimento simulato, progetto pilota e saldi multi-asset in modo chiaro e responsive.
            </p>
          </div>
          <Link href="/club-deal#interesse">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Richiedi accesso riservato</Button>
          </Link>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicatori principali">
          {kpis.map((kpi, index) => {
            const Icon = kpiIcons[index] ?? CircleDollarSign;
            return (
              <article key={kpi.label} className="premium-panel rounded-3xl p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground">API</span>
                </div>
                <p className="text-sm text-muted-foreground">{kpi.label}</p>
                <p className="mt-2 text-3xl font-bold text-white">{kpi.value}</p>
                <p className="mt-2 text-xs text-primary">{kpi.helper}</p>
              </article>
            );
          })}
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <section className="premium-panel rounded-[2rem] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="font-serif-display text-2xl font-bold text-white">I Miei Investimenti</h2>
                <p className="mt-2 text-sm text-muted-foreground">Vista sintetica dei progetti collegati al profilo investitore.</p>
              </div>
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div className="grid gap-4">
              {investments.map((item) => (
                <article key={item.project} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.project}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.area}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center text-sm">
                      <MiniStat label="Stato" value={item.status} />
                      <MiniStat label="Capitale" value={item.amount} />
                      <MiniStat label="ROI" value={item.roi} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="premium-panel rounded-[2rem] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <WalletCards className="h-7 w-7 text-primary" />
              <div>
                <h2 className="font-serif-display text-2xl font-bold text-white">Wallet Multi-Asset</h2>
                <p className="text-sm text-muted-foreground">Saldi EUR, Blotix e CMS6 forniti dalla API.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {wallet.map((asset) => (
                <div key={asset.asset} className="rounded-3xl border border-primary/15 bg-white/[0.035] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Asset</p>
                      <p className="mt-1 text-xl font-bold text-white">{asset.asset}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{asset.balance}</p>
                      <p className="text-sm text-primary">{asset.trend}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 premium-panel overflow-hidden rounded-[2rem] p-6 sm:p-8" id="hospitality-veneto">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Progetto Pilota</p>
              <h2 className="mt-3 font-serif-display text-3xl font-bold text-white">{pilot.title}</h2>
              <p className="mt-4 text-muted-foreground">
                Comparto Hospitality Veneto con focus su Top 5 hotel tra Jesolo e Mestre. La raccolta è rappresentata con avanzamento dimostrativo e metriche operative.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <MiniStat label="Volume totale" value={pilot.volume} />
                <MiniStat label="Setup fee" value={pilot.setupFee} />
                <MiniStat label="ROI investitore" value={pilot.investorRoi} />
                <MiniStat label="Territorio" value={pilot.geography} />
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Avanzamento raccolta fondi</h3>
                  <p className="text-sm text-muted-foreground">Setup target: 0,85% (~212.000€)</p>
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-sm font-bold text-primary">{pilot.fundingProgress}%</span>
              </div>
              <Progress value={pilot.fundingProgress} className="h-3 bg-white/10" />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {hotels.map((hotel) => (
                  <div key={hotel} className="flex items-center gap-3 rounded-2xl bg-white/[0.035] p-3 text-sm text-white">
                    <Landmark className="h-4 w-4 text-primary" />
                    {hotel}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-primary/15 bg-white/[0.035] p-4">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm font-bold text-white sm:text-base">{value}</p>
    </div>
  );
}

function StatusPanel({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
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
