import { defineConfig } from "cf/config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };

export default defineConfig({
	accountId: "19314c134e1b290db6d7625443f37983",
	worker: {
		name: "huevos",
		compatibilityDate: "2026-11-23",
		entrypoint,
		domains: ["huevos.cluff.us"],
		workersDev: true,
		observability: {
			enabled: true,
			logs: { enabled: true, headSamplingRate: 1 },
			traces: { enabled: true, headSamplingRate: 1 },
		},
	},
});
