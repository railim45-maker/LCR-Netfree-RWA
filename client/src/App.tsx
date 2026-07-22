import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { RAILIM_LOGO_URL } from "@/lib/brand";
import NotFound from "@/pages/NotFound";
import Access from "@/pages/Access";
import ClubDeal from "@/pages/ClubDeal";
import InvestorDashboard from "@/pages/InvestorDashboard";
import Network from "@/pages/Network";
import Home from "@/pages/Home";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/club-deal", label: "Liquidity Provider" },
  { href: "/network", label: "Potenza del 6" },
  { href: "/accesso", label: "Accesso" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={RAILIM_LOGO_URL} alt="Logo Railim" className="h-11 w-11 rounded-full bg-white object-cover p-1 shadow-[0_0_32px_rgba(212,175,55,0.24)]" />
          <div className="leading-tight">
            <p className="font-serif-display text-lg font-bold tracking-wide text-white">Railim</p>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-primary">Nativa Donativa</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                location === item.href ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/accesso">
            <Button variant="outline" className="border-primary/40 bg-white/5 text-white hover:bg-primary hover:text-primary-foreground">
              Entra
            </Button>
          </Link>
          <Link href="/club-deal#interesse">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Manifesta interesse</Button>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 p-3 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Apri menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-background/95 lg:hidden">
          <div className="container grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold ${location === item.href ? "bg-primary text-primary-foreground" : "bg-white/5 text-white"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-10">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div className="flex gap-4">
          <img src={RAILIM_LOGO_URL} alt="Logo Railim" className="h-14 w-14 rounded-full bg-white object-cover p-1" />
          <div>
            <p className="font-serif-display text-xl font-bold text-white">Railim Nativa Donativa</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Ecosistema digitale premium per economia del dono, Club Deal privati, protocolli di tokenizzazione e network orientato alla crescita condivisa.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-primary/20 bg-white/[0.03] p-5 text-sm text-muted-foreground">
          <p className="font-semibold text-white">Nota legale sintetica</p>
          <p className="mt-2 leading-6">
            Le informazioni presenti sono riservate a manifestazioni di interesse e non costituiscono offerta pubblica, raccomandazione personalizzata o invito generalizzato all'investimento.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={InvestorDashboard} />
      <Route path="/club-deal" component={ClubDeal} />
      <Route path="/network" component={Network} />
      <Route path="/accesso" component={Access} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <Router />
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
