import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">Railim Nativa Donativa</div>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <a href="/investor-dashboard" className="hover:text-primary transition-colors">Dashboard</a>
          <a href="/club-deal" className="hover:text-primary transition-colors">Club Deal</a>
          <a href="/network" className="hover:text-primary transition-colors">Network</a>
        </nav>
      </header>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
