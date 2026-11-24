const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Huevos</title>
  <meta name="description" content="We are working on getting the first beta version of Huevos out.">
  <style>
    :root {
      color-scheme: light;
      --ink: #2a2118;
      --muted: #6d5c49;
      --paper: #f6efe4;
      --yolk: #e2a23a;
      --shell: #fffaf2;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 2.5rem 1.5rem;
      background:
        radial-gradient(circle at 50% 18%, #fff 0 8rem, transparent 18rem),
        var(--paper);
      color: var(--ink);
      font-family: "Iowan Old Style", Palatino, "Palatino Linotype", Georgia, serif;
    }
    main { width: min(36rem, 100%); }
    .egg {
      width: 4.5rem;
      height: 6rem;
      margin-bottom: 1.75rem;
      border-radius: 50% 50% 48% 52% / 58% 58% 42% 42%;
      background:
        radial-gradient(circle at 35% 30%, #fff 0 0.35rem, transparent 0.7rem),
        linear-gradient(160deg, var(--shell), #f0e0c4 70%);
      box-shadow: inset -0.7rem -0.35rem 0 #e7d3a8, 0 0.8rem 0 var(--yolk);
    }
    h1 {
      margin: 0;
      font-size: clamp(3.5rem, 12vw, 6rem);
      font-weight: 500;
      letter-spacing: -0.04em;
      line-height: 0.9;
    }
    p {
      max-width: 28rem;
      margin: 1.25rem 0 0;
      color: var(--muted);
      font-size: 1.25rem;
      line-height: 1.45;
    }
  </style>
</head>
<body>
  <main>
    <div class="egg" aria-hidden="true"></div>
    <h1>Huevos</h1>
    <p>We are working on getting the first beta version of Huevos out.</p>
  </main>
</body>
</html>
`;

export default {
	fetch(request) {
		const url = new URL(request.url);
		console.log(
			JSON.stringify({
				message: "request",
				method: request.method,
				path: url.pathname,
			}),
		);

		if (request.method !== "GET" && request.method !== "HEAD") {
			return new Response("Method not allowed", {
				status: 405,
				headers: { allow: "GET, HEAD" },
			});
		}

		return new Response(request.method === "HEAD" ? null : page, {
			headers: {
				"content-type": "text/html; charset=utf-8",
				"cache-control": "public, max-age=300",
			},
		});
	},
} satisfies ExportedHandler;
