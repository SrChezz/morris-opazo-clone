// Vercel serverless function — inicio del flujo OAuth de Decap CMS con GitHub.
// Redirige al usuario a GitHub para autorizar. GitHub luego llama a /api/callback.
//
// Requiere variables de entorno en Vercel:
//   OAUTH_GITHUB_CLIENT_ID     — Client ID de una GitHub OAuth App
//   OAUTH_GITHUB_CLIENT_SECRET — Client Secret (usado en /api/callback)
// La OAuth App debe tener Authorization callback URL:
//   https://morris-opazo-clone.vercel.app/api/callback

export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('OAUTH_GITHUB_CLIENT_ID no está configurado en Vercel.');
    return;
  }

  const host = req.headers.host;
  const redirectUri = `https://${host}/api/callback`;

  // scope 'repo' permite a Decap commitear Markdown al repositorio.
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo',
    // state aleatorio para mitigar CSRF (Decap lo valida vía el flujo del popup).
    state: Math.random().toString(36).slice(2),
  });

  res.writeHead(302, {
    Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
  });
  res.end();
}
