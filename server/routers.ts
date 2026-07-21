import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { createInterestLead, listRecentInterestLeads } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

const pilotContractSchema = z.object({
  projectCode: z.string().trim().min(3).max(80).default("hospitality-veneto"),
  participantProfile: z.enum(["investor", "operator", "advisor", "network"]).default("investor"),
});

const cms6ReadinessSchema = z.object({
  flowCode: z.string().trim().min(3).max(80).default("cms6-gstvb-readiness"),
  requestedModule: z.enum(["issuance", "ledger", "settlement", "audit"]).default("ledger"),
});

const leadInputSchema = z.object({
  fullName: z.string().trim().min(2, "Inserisci nome e cognome.").max(160),
  email: z.string().trim().email("Inserisci una email valida.").max(320),
  phone: z.string().trim().max(80).optional().or(z.literal("")),
  profileType: z.enum(["investor", "partner", "network", "general"]).default("general"),
  message: z.string().trim().max(1200).optional().or(z.literal("")),
  source: z.string().trim().max(120).default("landing"),
  consentAccepted: z.boolean().refine((value) => value, "Il consenso è richiesto per inviare la richiesta."),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  platform: router({
    overview: publicProcedure.query(() => ({
      name: "Railim Nativa Donativa",
      tagline: "Super-App dell'Economia del Dono per connettere capitale, utilità digitale e crescita condivisa.",
      dashboard: {
        kpis: [
          { label: "Capitale Investito", value: "€ 48.500", helper: "Simulazione portafoglio" },
          { label: "ROI Atteso", value: "23,5%", helper: "Hospitality Veneto" },
          { label: "Progetti Attivi", value: "1", helper: "Primo blocco funzionale" },
          { label: "Prossimo Dividendo", value: "Q3 2026", helper: "Calendario indicativo" },
        ],
        investments: [
          { project: "Hospitality Veneto", area: "Jesolo / Mestre", status: "In raccolta", amount: "€ 48.500", roi: "23,5%" },
          { project: "Railim Blotix Setup", area: "Infrastruttura", status: "Preview", amount: "€ 0", roi: "Da definire" },
        ],
      },
      pilot: {
        title: "Hospitality Veneto",
        geography: "Jesolo e Mestre",
        volume: "25-30M€",
        setupFee: "0,85% (~212.000€)",
        investorRoi: "23,5%",
        fundingProgress: 68,
        hotelScope: "Top 5 hotel",
      },
      wallet: [
        { asset: "EUR", balance: "48.500,00", trend: "+8,4%" },
        { asset: "Blotix", balance: "12.840", trend: "+14,2%" },
        { asset: "CMS6", balance: "6.120", trend: "+6,0%" },
      ],
      futureIntegrations: [
        { name: "Trisolaris", status: "Predisposizione API", purpose: "Automazione contrattuale tramite smart contract." },
        { name: "GSTVB", status: "Predisposizione API", purpose: "Protocollo futuro per CMS6 e processi di moneta scritturale." },
      ],
    })),
  }),
  interest: router({
    submit: publicProcedure.input(leadInputSchema).mutation(async ({ input }) => {
      const normalized = {
        ...input,
        phone: input.phone || undefined,
        message: input.message || undefined,
      };
      const lead = await createInterestLead(normalized);

      await notifyOwner({
        title: "Nuova manifestazione di interesse Railim",
        content: `Nome: ${input.fullName}\nEmail: ${input.email}\nProfilo: ${input.profileType}\nFonte: ${input.source}\nMessaggio: ${input.message || "Non specificato"}`,
      });

      return {
        success: true,
        leadId: lead.id,
        message: "Richiesta ricevuta. Il team Railim valuterà il profilo e ricontatterà l'interessato.",
      } as const;
    }),
    recent: publicProcedure.query(async () => {
      const rows = await listRecentInterestLeads(10);
      return rows.map((row) => ({
        id: row.id,
        fullName: row.fullName,
        email: row.email,
        profileType: row.profileType,
        source: row.source,
        createdAt: row.createdAt,
      }));
    }),
  }),
  integrations: router({
    readiness: publicProcedure.query(() => ({
      trisolaris: {
        enabled: false,
        stage: "api-contract-ready",
        namespace: "integrations.trisolaris",
        endpoints: ["contract", "eventShape"],
        nextStep: "Collegare i moduli di smart contract quando la specifica tecnica sarà approvata.",
      },
      gstvb: {
        enabled: false,
        stage: "api-contract-ready",
        namespace: "integrations.gstvb",
        endpoints: ["contract", "ledgerShape"],
        nextStep: "Collegare i flussi CMS6 quando il whitepaper operativo sarà validato.",
      },
    })),
    trisolaris: router({
      contract: publicProcedure.input(pilotContractSchema).query(({ input }) => ({
        enabled: false,
        provider: "Trisolaris",
        projectCode: input.projectCode,
        participantProfile: input.participantProfile,
        payloadVersion: "2026-05-draft",
        requiredFields: ["projectCode", "participantProfile", "agreementHash", "executionMilestones"],
        eventShape: {
          agreementHash: "sha256:string",
          executionMilestones: "array<{ code:string; dueAtUtc:number; status:string }>",
          complianceStatus: "draft | pending-review | approved",
        },
      })),
      eventShape: publicProcedure.query(() => ({
        version: "2026-05-draft",
        events: ["agreement.created", "milestone.verified", "distribution.scheduled"],
        transport: "server-to-server webhook placeholder",
      })),
    }),
    gstvb: router({
      contract: publicProcedure.input(cms6ReadinessSchema).query(({ input }) => ({
        enabled: false,
        provider: "GSTVB",
        flowCode: input.flowCode,
        requestedModule: input.requestedModule,
        payloadVersion: "2026-05-draft",
        requiredFields: ["participantId", "cms6Amount", "ledgerReference", "auditTrail"],
        ledgerShape: {
          participantId: "string",
          cms6Amount: "decimal-string",
          ledgerReference: "string",
          auditTrail: "array<{ atUtc:number; action:string; actor:string }>",
        },
      })),
      ledgerShape: publicProcedure.query(() => ({
        version: "2026-05-draft",
        modules: ["issuance", "ledger", "settlement", "audit"],
        transport: "typed tRPC contract placeholder",
      })),
    }),
  }),
});

export type AppRouter = typeof appRouter;
