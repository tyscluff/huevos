import { SELF } from "cloudflare:test";
import { expect, it } from "vite-plus/test";

it("says the first beta is not out yet", async () => {
	const response = await SELF.fetch("https://huevos.cluff.us/");
	expect(response.status).toBe(200);
	expect(response.headers.get("content-type")).toContain("text/html");
	const body = await response.text();
	expect(body).toContain("Huevos");
	expect(body).toContain(
		"We are working on getting the first beta version of Huevos out.",
	);
});
