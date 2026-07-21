import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import fs from "node:fs";
import path from "node:path";

const ctx = {
  user: null,
  req: {
    protocol: "https",
    headers: {},
  },
  res: {
    clearCookie: () => undefined,
  },
} as unknown as TrpcContext;

describe("platform.overview", () => {
  it("espone i valori vincolanti del progetto pilota e del wallet", async () => {
    const caller = appRouter.createCaller(ctx);

    const overview = await caller.platform.overview();

    expect(overview.name).toBe("Railim Nativa Donativa");
    expect(overview.pilot.title).toBe("Hospitality Veneto");
    expect(overview.pilot.volume).toBe("25-30M€");
    expect(overview.pilot.setupFee).toBe("0,85% (~212.000€)");
    expect(overview.pilot.investorRoi).toBe("23,5%");
    expect(overview.pilot.geography).toBe("Jesolo e Mestre");
    expect(overview.wallet.map((asset) => asset.asset)).toEqual(["EUR", "Blotix", "CMS6"]);
    expect(overview.dashboard.kpis.find((kpi) => kpi.label === "ROI Atteso")?.value).toBe("23,5%");
  });
});

describe("interest.submit", () => {
  it("richiede consenso esplicito prima della raccolta interesse", async () => {
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.interest.submit({
        fullName: "Mario Rossi",
        email: "mario.rossi@example.com",
        phone: "",
        profileType: "investor",
        message: "Sono interessato al Club Deal.",
        source: "test",
        consentAccepted: false,
      })
    ).rejects.toThrow();
  });
});

describe("contenuti pubblici", () => {
  it("non includono il termine non consentito nei file destinati al rendering", () => {
    const forbidden = ["ban", "ca"].join("");
    const root = process.cwd();
    const filesToScan = [
      "client/index.html",
      "client/src/App.tsx",
      "client/src/pages/Home.tsx",
      "client/src/pages/InvestorDashboard.tsx",
      "client/src/pages/ClubDeal.tsx",
      "client/src/pages/Network.tsx",
      "client/src/pages/Access.tsx",
      "client/src/components/InterestForm.tsx",
      "client/src/lib/brand.ts",
      "server/routers.ts",
    ];

    for (const relativeFile of filesToScan) {
      const content = fs.readFileSync(path.join(root, relativeFile), "utf8").toLowerCase();
      expect(content, relativeFile).not.toContain(forbidden);
    }
  });
});
