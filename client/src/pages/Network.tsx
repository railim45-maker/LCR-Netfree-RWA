import { Button } from "@/components/ui/button";
import { setSeo } from "@/lib/brand";
import { Droplets, Home, Leaf, Network as NetworkIcon, Orbit, UsersRound } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

const products = [
  { title: "Acqua", text: "Linea simbolica e operativa dedicata a benessere, consumo consapevole e relazione con il territorio.", icon: Droplets },
  { title: "Integratori", text: "Servizi e prodotti orientati a vitalità, abitudini quotidiane e percorsi di crescita personale.", icon: Leaf },
  { title: "Case", text: "Ambito abitativo e relazionale per immaginare spazi, community e progettualità condivise.", icon: Home },
];

const levels = ["1", "2", "3", "4", "5", "6"];

export default function Network() {
  useEffect(() => {
    setSeo(
      "Network Potenza del 6",
      "Network Potenza del 6 di Railim Nativa Donativa con struttura relazionale, crescita condivisa e prodotti Acqua, Integratori, Case."
    );
  }, []);

  return (
    <main>
      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Network Potenza del 6</p>
            <h1 className="mt-3 font-serif-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Crescita personale, condivisione e servizi in una struttura ordinata</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              La Potenza del 6 rappresenta l'anima relazionale dell'ecosistema: un network pensato per attivare valore umano, prodotti, servizi e percorsi di partecipazione consapevole.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/club-deal#interesse">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">Entra nel network</Button>
              </Link>
              <Link href="/accesso">
                <Button size="lg" variant="outline" className="w-full border-primary/40 bg-white/5 text-white hover:bg-white/10 sm:w-auto">Onboarding</Button>
              </Link>
            </div>
          </div>

          <div className="premium-panel relative min-h-[420px] overflow-hidden rounded-[2rem] p-8">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" />
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30" />
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_60px_rgba(212,175,55,0.35)]">
              <Orbit className="h-10 w-10" />
            </div>
            {levels.map((level, index) => {
              const positions = [
                "left-[48%] top-[7%]",
                "right-[10%] top-[28%]",
                "right-[18%] bottom-[12%]",
                "left-[18%] bottom-[12%]",
                "left-[10%] top-[28%]",
                "left-[48%] bottom-[7%]",
              ];
              return (
                <div key={level} className={`absolute ${positions[index]} flex h-16 w-16 items-center justify-center rounded-full border border-primary/35 bg-black/55 text-lg font-bold text-primary backdrop-blur-xl`}>
                  {level}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 py-16">
        <div className="container grid gap-6 lg:grid-cols-3">
          <article className="premium-panel rounded-3xl p-6 lg:col-span-1">
            <NetworkIcon className="mb-6 h-9 w-9 text-primary" />
            <h2 className="font-serif-display text-3xl font-bold text-white">Concetto</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Ogni relazione è vista come un nodo che può generare apprendimento, dono, utilità e opportunità. La struttura a sei livelli aiuta a leggere il network con ordine e progressione.
            </p>
          </article>
          <article className="premium-panel rounded-3xl p-6 lg:col-span-2">
            <UsersRound className="mb-6 h-9 w-9 text-primary" />
            <h2 className="font-serif-display text-3xl font-bold text-white">Struttura visuale del network</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {levels.map((level) => (
                <div key={level} className="rounded-2xl border border-primary/15 bg-white/[0.035] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Livello</p>
                  <p className="mt-2 text-2xl font-bold text-white">{level}</p>
                  <p className="mt-2 text-sm text-muted-foreground">Connessione, formazione e condivisione.</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Prodotti e servizi</p>
            <h2 className="mt-3 font-serif-display text-3xl font-bold text-white sm:text-4xl">Acqua, Integratori, Case</h2>
            <p className="mt-4 text-muted-foreground">Tre aree iniziali da usare come catalogo evolutivo per future estensioni della Super-App.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="premium-panel rounded-3xl p-6">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <product.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold text-white">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
