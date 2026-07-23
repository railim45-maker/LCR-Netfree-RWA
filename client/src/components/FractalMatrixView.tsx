import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FractalMatrixProps {
  mode?: 'public' | 'dashboard';
  userNetworkData?: { l1: number; l2: number; l3: number; l4: number };
}

export default function FractalMatrixView({ mode = 'public', userNetworkData }: FractalMatrixProps) {
  const [activeFocusLevel, setActiveFocusLevel] = useState(1);
  const [steps, setSteps] = useState({ l1: mode === 'dashboard' && userNetworkData ? userNetworkData.l1 : 0, l2: 0, l3: 0, l4: 0 });

  const chakraColors = ['#E53E3E', '#DD6B20', '#D69E2E', '#38A169', '#3182CE', '#805AD5'];

  const levelsSpec = [
    { level: 1, maxSteps: 1, currentSteps: steps.l1, totalSectors: 6 },
    { level: 2, maxSteps: 6, currentSteps: steps.l2, totalSectors: 36 },
    { level: 3, maxSteps: 6, currentSteps: steps.l3, totalSectors: 216 },
    { level: 4, maxSteps: 6, currentSteps: steps.l4, totalSectors: 1296 }
  ];

  const injectStep = () => {
    setSteps(prev => {
      if (prev.l1 < 1) return { ...prev, l1: prev.l1 + 1 };
      if (prev.l2 < 6) return { ...prev, l2: prev.l2 + 1 };
      if (prev.l3 < 6) return { ...prev, l3: prev.l3 + 1 };
      if (prev.l4 < 6) return { ...prev, l4: prev.l4 + 1 };
      return prev;
    });
  };

  return (
    <Card className="border-border bg-card/40 backdrop-blur-md rounded-3xl p-6 space-y-6 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">
            {mode === 'public' ? 'Modalità Dimostrativa • Esempio Globale' : 'Dashboard Personale • Spillover Attivo'}
          </span>
          <h3 className="text-xl font-bold font-serif-display mt-1">Matrice Frattale a Sotto-Settori</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={injectStep} className="bg-primary text-primary-foreground font-mono text-xs">
            + Simula Spillover Nodo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Monitor Frequenze */}
        <div className="md:col-span-5 space-y-2 font-mono text-xs">
          <div className="p-3 bg-slate-950/60 rounded-xl border border-border/60 flex justify-between items-center">
            <span className="text-slate-300">L1 - Radice (6 Settori)</span>
            <span className="text-primary font-bold">{steps.l1} / 1 passo</span>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-xl border border-border/60 flex justify-between items-center">
            <span className="text-slate-300">L2 - Sacrale (36 Settori)</span>
            <span className="text-primary font-bold">{steps.l2} / 6 passi</span>
          </div>
          <div className="p-3 bg-slate-950/60 rounded-xl border border-border/60 flex justify-between items-center">
            <span className="text-slate-300">L3 - Plesso (216 Settori)</span>
            <span className="text-primary font-bold">{steps.l3} / 6 passi</span>
          </div>
          <p className="text-[11px] text-muted-foreground pt-2">
            * I nodi eccedenti confluiscono automaticamente nei sotto-settori adiacenti tramite algoritmo di spillover geometrico.
          </p>
        </div>

        {/* Visualizzatore Grafico SVG */}
        <div className="md:col-span-7 flex justify-center bg-black/40 rounded-2xl p-4 border border-border/40">
          <svg width="320" height="320" viewBox="0 0 460 460" className="overflow-visible">
            <circle cx="230" cy="230" r="8" fill="#ffffff" filter="drop-shadow(0 0 10px rgba(255,255,255,0.8))" />
            {/* Anelli orbitali */}
            {[155, 185, 215, 240].map((rad, idx) => (
              <circle key={idx} cx="230" cy="230" r={rad} fill="none" stroke="#334155" strokeWidth="0.5" />
            ))}
            {/* Nodi dinamici basati sui passi */}
            {chakraColors.map((color, idx) => {
              const angle = (idx * 2 * Math.PI) / 6;
              const x = 230 + 155 * Math.cos(angle);
              const y = 230 + 155 * Math.sin(angle);
              return (
                <circle key={idx} cx={x} cy={y} r="6" fill={steps.l1 > 0 ? color : '#1e293b'} style={{ filter: steps.l1 > 0 ? `drop-shadow(0 0 6px ${color})` : 'none' }} />
              );
            })}
          </svg>
        </div>
      </div>
    </Card>
  );
}
