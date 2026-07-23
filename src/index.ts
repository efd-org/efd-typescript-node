import http from 'http';

export function getGreeting(): string {
  return "Welcome to EFD TypeScript Node project!";
}

function getPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>EFD Node Welcome</title>
  <style>
    :root { --bg: #0b1f3a; --panel: #ffffff; --accent: #2563eb; --text: #0f172a; --muted: #64748b; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, var(--bg), #12395f); color: var(--text); min-height: 100vh; display: grid; place-items: center; padding: 24px; }
    .card { background: var(--panel); border-radius: 20px; padding: 2.5rem 3rem; box-shadow: 0 20px 50px rgba(0,0,0,0.25); text-align: center; max-width: 560px; width: 100%; }
    .badge { display: inline-block; padding: 0.4rem 0.8rem; border-radius: 999px; background: rgba(37,99,235,0.12); color: var(--accent); font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.8rem; margin-bottom: 1rem; }
    h1 { margin: 0 0 0.75rem; font-size: 2rem; color: var(--accent); }
    p { margin: 0; color: var(--muted); line-height: 1.6; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">EFD • Node</div>
    <h1>${getGreeting()}</h1>
    <p>This polished welcome page is served from the Node project and is ready to be viewed in a browser.</p>
  </div>
</body>
</html>`;
}

if (typeof require !== "undefined" && require.main === module) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(getPage());
  });

  server.listen(8080, () => {
    console.log('Server started at http://localhost:8080/');
  });
}
