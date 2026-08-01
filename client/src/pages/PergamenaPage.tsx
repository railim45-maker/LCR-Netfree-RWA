import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Scroll, CheckCircle2, Feather, ShieldCheck, KeyRound, Copy } from 'lucide-react';
import { Link } from 'wouter';

export default function PergamenaPage() {
  const [step, setStep] = useState<'form' | 'otp' | 'success'>('form');
  const [formData, setFormData] = useState({
    nome: '',
    presidio: '',
    citta: '',
    codiceFiscale: '',
    telefono: '',
  });
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [copied, setCopied] = useState(false);

  // Step 1: Invio dei dati e generazione OTP
  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.codiceFiscale || !formData.telefono) return;

    // Simula invio OTP (es. via SMS o WhatsApp al 3477194486)
    const mockOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(mockOtp);
    alert(`[SIMULAZIONE INVIO OTP]: Il tuo codice di verifica per la firma è: ${mockOtp}`);
    setStep('otp');
  };

  // Step 2: Verifica OTP e firma definitiva della Pergamena
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpInput !== generatedOtp) {
      alert("Codice OTP errato. Riprova.");
      return;
    }

    // Generazione del codice univoco di referral basato su nome e codice fiscale
    const univoco = formData.nome.replace(/\s+/g, '').toUpperCase().slice(0, 4) + '-' + Math.floor(100 + Math.random() * 900);
    setReferralCode(univoco);
    setCurrentDate(new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' }));
    setStep('success');
  };

  const copyReferralLink = () => {
    const link = `https://netfree-lcr.vercel.app/?ref=${referralCode}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-28 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-amber-100/40 via-stone-100/50 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 rounded-3xl sm:rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-serif text-stone-600 hover:text-stone-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Torna alla Mappa Principale
          </Link>
          <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider text-amber-800 font-serif">
            📜 Patto d'Alleanza • Sottoscrizione con OTP
          </span>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-3xl mx-auto px-4 md:px-6 space-y-12 relative z-10">
        
        {/* INTRODUZIONE */}
        <div className="text-center space-y-4 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium font-serif shadow-xs">
            <Scroll className="w-3.5 h-3.5 text-amber-600" /> Il Contratto Vivente e il Codice di Invito
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Pergamena della Cerchia
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light font-serif">
            Inserisci i dati contrattuali del tuo presidio per sottoscrivere il patto. La firma è validata tramite codice OTP per garantire la certezza dell'accordo e sbloccare il tuo link di referral univoco.
          </p>
        </div>

        {/* STEP 1: MODULO DATI */}
        {step === 'form' && (
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-4">
              Dati Contrattuali del Presidio
            </h3>
            
            <form onSubmit={handleRequestOtp} className="space-y-4 font-serif text-xs">
              <div className="space-y-1.5">
                <label className="block font-semibold text-stone-700 uppercase tracking-wider">Nome e Cognome (Individuo Vivente) *</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Es. Dario Colognese"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-amber-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-semibold text-stone-700 uppercase tracking-wider">Nome del Presidio / Nucleo</label>
                  <input
                    type="text"
                    value={formData.presidio}
                    onChange={(e) => setFormData({ ...formData, presidio: e.target.value })}
                    placeholder="Es. Presidio Oltrepò"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block font-semibold text-stone-700 uppercase tracking-wider">Città / Territorio</label>
                  <input
                    type="text"
                    value={formData.citta}
                    onChange={(e) => setFormData({ ...formData, citta: e.target.value })}
                    placeholder="Es. Vigevano (PV)"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-semibold text-stone-700 uppercase tracking-wider">Codice Fiscale *</label>
                  <input
                    type="text"
                    required
                    value={formData.codiceFiscale}
                    onChange={(e) => setFormData({ ...formData, codiceFiscale: e.target.value.toUpperCase() })}
                    placeholder="Per univocità contrattuale"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-amber-600 uppercase"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block font-semibold text-stone-700 uppercase tracking-wider">Telefono / WhatsApp (per OTP) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="Es. 3477194486"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 font-semibold text-xs sm:text-sm transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4 text-amber-400" /> Richiedi Codice OTP e Procedi →
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: INSERIMENTO OTP */}
        {step === 'otp' && (
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-6 text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mx-auto border border-amber-200">
              <KeyRound className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-bold text-stone-900">Verifica di Sicurezza OTP</h3>
              <p className="text-xs text-stone-600 font-serif">
                Abbiamo inviato un codice di conferma al numero <strong>{formData.telefono}</strong>. Inseriscilo qui sotto per sigillare l'accordo.
              </p>
            </div>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                required
                maxLength={4}
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                placeholder="Inserisci codice a 4 cifre"
                className="w-full text-center tracking-[1em] text-lg font-mono font-bold bg-stone-50 border border-stone-300 rounded-2xl py-3 focus:outline-none focus:border-amber-600"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 font-serif font-semibold text-xs transition-all shadow-md cursor-pointer"
              >
                Conferma e Firma la Pergamena ✓
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: PERGAMENA FIRMATA E LINK REFERRAL */}
        {step === 'success' && (
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-[#fffdf9] border-2 border-amber-300 shadow-2xl space-y-8 relative overflow-hidden animate-in fade-in duration-500">
            
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 font-serif text-xs font-bold shadow-sm">
              ✦ LCR
            </div>

            <div className="text-center space-y-2 border-b border-stone-200/60 pb-6">
              <span className="text-xs font-mono uppercase tracking-[3px] text-amber-800 font-semibold">Attestato Ufficiale Verificato con OTP</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Il Patto della Terra e della Cura</h2>
            </div>

            <div className="space-y-6 font-serif text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
              <p>
                Con la presente sottoscrizione validata digitalmente, l'individuo vivente <strong>{formData.nome}</strong> (C.F. <code>{formData.codiceFiscale}</code>), operante tramite il presidio <strong>{formData.presidio || 'Indipendente'}</strong> a {formData.citta || 'Territorio Nazionale'}, si impegna a onorare i principi di sovranità, protezione materiale RWA e economia del dono.
              </p>

              {/* BOX CODICE REFERRAL UNIVOCO */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold">Il tuo Codice Univoco di Invito:</span>
                  <span className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full font-mono font-bold text-xs">{referralCode}</span>
                </div>
                <p className="text-xs text-amber-800">
                  Condividi questo link con la tua cerchia. Le 6 persone invitate che sottoscriveranno la pergamena si collegheranno al tuo presidio:
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={`https://netfree-lcr.vercel.app/?ref=${referralCode}`}
                    className="flex-1 bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs font-mono text-stone-700"
                  />
                  <button
                    onClick={copyReferralLink}
                    className="px-4 py-2 bg-amber-900 text-stone-50 rounded-xl text-xs font-semibold hover:bg-amber-800 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" /> {copiedCopiato => copied ? "Copiato!" : "Copia Link"}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div>
                  <p className="text-stone-500 font-mono uppercase text-[10px]">Firma Certificata OTP</p>
                  <p className="font-bold text-stone-900 font-serif text-sm">{formData.nome}</p>
                </div>
                <div className="text-right">
                  <p className="text-stone-500 font-mono uppercase text-[10px]">Data di Sigillo</p>
                  <p className="font-bold text-stone-900 font-serif text-sm">{currentDate}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs font-serif font-semibold transition-all shadow-md cursor-pointer"
              >
                Stampa / Salva Pergamena 🖨️
              </button>
              <Link
                href="/test-consapevolezza"
                className="px-6 py-2.5 rounded-full bg-amber-400 text-stone-900 hover:bg-amber-300 text-xs font-serif font-semibold transition-all shadow-md"
              >
                Procedi al Test di Consapevolezza →
              </Link>
            </div>

          </div>
        )}

      </main>

    </div>
  );
}
